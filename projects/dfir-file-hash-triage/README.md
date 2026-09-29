# DFIR File Hash Triage

A defensive digital-forensics utility that calculates SHA-256 hashes for files and compares them with analyst-provided IOC values.

## Features
- Recursively hashes files in a selected evidence directory.
- Records path, size, and SHA-256.
- Matches hashes against a local IOC text file.
- Writes results to CSV for case documentation.

## Usage
```bash
python3 hash_triage.py ./evidence --ioc known_hashes.txt --output triage.csv
```

IOC file format: one SHA-256 value per line.

## Security note
Use copies of evidence whenever possible and preserve original evidence integrity.
