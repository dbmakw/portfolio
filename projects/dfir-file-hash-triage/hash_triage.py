#!/usr/bin/env python3
"""DFIR-oriented file hashing and local IOC matching utility."""

from __future__ import annotations

import argparse
import csv
import hashlib
from pathlib import Path


CHUNK_SIZE = 1024 * 1024


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        while chunk := handle.read(CHUNK_SIZE):
            digest.update(chunk)
    return digest.hexdigest()


def load_iocs(path: Path | None) -> set[str]:
    if path is None:
        return set()

    values = set()
    with path.open("r", encoding="utf-8", errors="ignore") as handle:
        for line in handle:
            value = line.strip().lower()
            if len(value) == 64 and all(ch in "0123456789abcdef" for ch in value):
                values.add(value)
    return values


def main() -> int:
    parser = argparse.ArgumentParser(description="Hash evidence files and match local SHA-256 IOCs.")
    parser.add_argument("evidence_dir", type=Path)
    parser.add_argument("--ioc", type=Path)
    parser.add_argument("--output", type=Path, default=Path("triage.csv"))
    args = parser.parse_args()

    if not args.evidence_dir.is_dir():
        parser.error(f"Evidence directory not found: {args.evidence_dir}")

    iocs = load_iocs(args.ioc)
    rows = []

    for path in sorted(p for p in args.evidence_dir.rglob("*") if p.is_file()):
        try:
            digest = sha256_file(path)
            matched = digest in iocs
            rows.append({
                "path": str(path),
                "size_bytes": path.stat().st_size,
                "sha256": digest,
                "ioc_match": matched,
            })
        except OSError as exc:
            rows.append({
                "path": str(path),
                "size_bytes": "",
                "sha256": "",
                "ioc_match": f"ERROR: {exc}",
            })

    with args.output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["path", "size_bytes", "sha256", "ioc_match"],
        )
        writer.writeheader()
        writer.writerows(rows)

    matches = sum(row["ioc_match"] is True for row in rows)
    print(f"Files processed: {len(rows)}")
    print(f"IOC matches:    {matches}")
    print(f"CSV report:     {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
