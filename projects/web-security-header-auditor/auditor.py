#!/usr/bin/env python3
"""Authorized web security-header auditor."""

from __future__ import annotations

import sys
from urllib.parse import urlparse

import requests

HEADERS = {
    "Content-Security-Policy": "Mitigates script/content injection risk",
    "Strict-Transport-Security": "Enforces HTTPS in supporting clients",
    "X-Content-Type-Options": "Reduces MIME-sniffing risk",
    "Referrer-Policy": "Controls referrer information leakage",
    "Permissions-Policy": "Restricts selected browser capabilities",
    "X-Frame-Options": "Helps reduce clickjacking risk",
}


def validate_url(value: str) -> str:
    parsed = urlparse(value)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise ValueError("Provide a full http:// or https:// URL.")
    return value


def audit(url: str) -> int:
    headers = {
        "User-Agent": "Web-Security-Header-Auditor/1.0",
    }

    try:
        response = requests.get(url, headers=headers, timeout=10, allow_redirects=True)
    except requests.RequestException as exc:
        print(f"[!] Request failed: {exc}")
        return 1

    print(f"URL:          {response.url}")
    print(f"Status:       {response.status_code}")
    print(f"Server:       {response.headers.get('Server', 'Not disclosed')}")
    print(f"Content-Type: {response.headers.get('Content-Type', 'Not disclosed')}")
    print()

    missing = []
    for header, purpose in HEADERS.items():
        value = response.headers.get(header)
        if value:
            print(f"[+] {header}: {value}")
            print(f"    {purpose}")
        else:
            print(f"[-] {header}: MISSING")
            missing.append(header)

    print()
    print(f"Summary: {len(HEADERS) - len(missing)}/{len(HEADERS)} headers detected.")
    return 0


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python3 auditor.py https://example.com")
        return 2

    try:
        url = validate_url(sys.argv[1])
    except ValueError as exc:
        print(f"[!] {exc}")
        return 2

    return audit(url)


if __name__ == "__main__":
    raise SystemExit(main())
