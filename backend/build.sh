#!/usr/bin/env bash
# Exit on error
set -o errexit

# Modify this line as needed for your package manager (pip, poetry, etc.)
pip install -r requirements.txt

# Convert static asset files
python3 manage.py collectstatic --no-input

echo "heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"

# Apply any outstanding database migrations
python3 manage.py makemigrations
python3 manage.py migrate comment favorite vote user book review


python3 -m gunicorn backend.wsgi:application