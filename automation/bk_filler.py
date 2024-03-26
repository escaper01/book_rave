import json
import requests
from io import BytesIO
import uuid
import environ
import os
from pathlib import Path


"""
before runnning this script you need to put this setting:
CORS_ALLOW_ALL_ORIGINS = True

and comment this block

# CORS_ALLOWED_ORIGINS = [
#     'http://127.0.0.1:3000',
#     'http://localhost:3000',
# ]

"""

env = environ.Env()
environ.Env.read_env()

BASE_DIR = Path(__file__).resolve().parent.parent / "backend"

environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

PRODUCTION = True if env('PRODUCTION') == 'true' else False

print(PRODUCTION)

def add_book(payload, category, token):
    
    local_url = "http://localhost:8000/api/v1/book/add-book"
    hosted_url = "https://book-rave.onrender.com/api/v1/book/add-book"


    url = hosted_url if PRODUCTION else local_url
    

    list_of_authors = payload['author']

    payload['author'] = ','.join(list_of_authors)
    payload['category'] = category

    cover_url = payload["cover"]
    img_res = requests.get(cover_url)
    cover_image = BytesIO(img_res.content)
    img_filename = str(uuid.uuid4()) + ".png"

    files = [('cover', (img_filename, cover_image, 'image/png'))]

    headers = {
        'Authorization': 'Bearer ' + token
    }

    response = requests.post(url, headers=headers, data=payload, files=files)
    return response


LIST_OF_CATEGORIES = [
    'Mystery',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Self-help',
    'Biography',
    'Horror',
    'Thriller',
    'Tragedy',
    'Political',
    'Experimental Literature',
    'Technical Instructional', ]

with open("books.json", "r") as json_file:
    json_data = json.load(json_file)
    for category in LIST_OF_CATEGORIES:
        bundle_of_Books = json_data.get(category)
        bundle_len = len(bundle_of_Books)
        for i, book in enumerate(bundle_of_Books):
            if i == 10:
                break
            try:
                response = add_book(payload=book, category=category, token=env('JWT_TOKEN'))
                print(i, ' / ', bundle_len, response)
            except Exception as e:
                print(e, " went wrong")
