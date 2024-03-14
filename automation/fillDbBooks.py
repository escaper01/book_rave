import json
import requests
from io import BytesIO
import uuid

"""
before runnning this script you need to put this setting:
CORS_ALLOW_ALL_ORIGINS = True

and comment this block

# CORS_ALLOWED_ORIGINS = [
#     'http://127.0.0.1:3000',
#     'http://localhost:3000',
# ]

"""


def add_book(payload,category, token):
	url = "http://localhost:8000/api/v1/book/add-book/"

	list_of_authors = payload['author']

	payload['author'] = ','.join(list_of_authors)
	payload['category'] = category

	cover_url = payload["cover"]
	img_res = requests.get(cover_url)
	cover_image = BytesIO(img_res.content)
	img_filename = str(uuid.uuid4())+".png"

	files=[('cover', (img_filename, cover_image, 'image/png'))]

	headers = {
	'Authorization': 'Bearer '+token
	}


	response = requests.post(url, headers=headers, data=payload, files=files)



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
       'Technical/Instructional']


with open("books.json", "r") as json_file:
	json_data = json.load(json_file)
	for category in LIST_OF_CATEGORIES:
		bundle_of_Books = json_data.get(category)
		bundle_len = len(bundle_of_Books)
		for i, book in enumerate(bundle_of_Books):
			print(i,' ____ ', bundle_len)
			try:
				add_book(payload=book,category=category, token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNTEwMDUyLCJpYXQiOjE3MTA0NTAxMTIsImp0aSI6IjJlNjA1ZTMzNWQzMjQyMDM5NGNlYjkzZTRjNmY3MzRkIiwidXNlcl9pZCI6Mn0.u-MfwgC7irrqIfvqk9cYn2JeXKKf90KDJEBg922U15E")
			except Exception as e:
				print(e, " went wrong")