# Web Security Header Auditor

A lightweight Python utility for checking common HTTP security headers on web applications.

## Features
- Sends a single HTTP GET request to a user-supplied URL.
- Reports security headers such as CSP, HSTS, X-Content-Type-Options, and Referrer-Policy.
- Highlights missing headers and prints the detected configuration.
- Designed for authorized security assessments and local lab environments.

## Usage
```bash
python3 auditor.py https://example.com
```

## Requirements
```bash
pip install -r requirements.txt
```

## Security note
Use only against systems you own or are explicitly authorized to assess.
