#!/usr/bin/env python3
"""Defensive SSH authentication-log anomaly detector."""

from __future__ import annotations

import argparse
import re
from collections import Counter
from pathlib import Path

FAILED_RE = re.compile(
    r"Failed password .*? from (?P<ip>\d{1,3}(?:\.\d{1,3}){3}) port \d+"
)


def parse_failed_logins(path: Path) -> Counter[str]:
    counts: Counter[str] = Counter()

    with path.open("r", encoding="utf-8", errors="replace") as handle:
        for line in handle:
            match = FAILED_RE.search(line)
            if match:
                counts[match.group("ip")] += 1

    return counts


def main() -> int:
    parser = argparse.ArgumentParser(description="Detect repeated failed SSH logins.")
    parser.add_argument("logfile", type=Path)
    parser.add_argument("--threshold", type=int, default=5)
    args = parser.parse_args()

    if args.threshold < 1:
        parser.error("--threshold must be >= 1")
    if not args.logfile.is_file():
        parser.error(f"Log file not found: {args.logfile}")

    counts = parse_failed_logins(args.logfile)

    if not counts:
        print("No matching failed SSH login events found.")
        return 0

    print("Source IP".ljust(18) + "Failed Attempts")
    print("-" * 35)
    for ip, count in counts.most_common():
        marker = "  <-- REVIEW" if count >= args.threshold else ""
        print(f"{ip.ljust(18)}{str(count).ljust(16)}{marker}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
