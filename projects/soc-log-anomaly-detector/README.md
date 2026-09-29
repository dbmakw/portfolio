# SOC Log Anomaly Detector

A small defensive SOC tool that analyzes Linux authentication logs and identifies repeated failed-login activity.

## Features
- Parses sshd-style authentication log lines.
- Counts failed logins by source IP.
- Flags sources above a configurable threshold.
- Produces a simple analyst-friendly summary.

## Usage
```bash
python3 detector.py /var/log/auth.log --threshold 5
```

For a lab file:
```bash
python3 detector.py sample_auth.log --threshold 3
```

## Security note
This project is for defensive monitoring and incident-response practice.
