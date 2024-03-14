import requests
import json

API_KEY = ""

maxResults = 40

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


for CATEGORY in LIST_OF_CATEGORIES:
	url = f"https://www.googleapis.com/books/v1/volumes?q={CATEGORY}&key={API_KEY}&maxResults={maxResults}&orderBy=relevance&projection=full"
	response = requests.request("GET", url)
	dict_res = response.json()
	data_books = {CATEGORY:[]}

	for elem in dict_res.get('items'):
		try:
			tmp_title = elem['volumeInfo'].get('title')
			tmp_author = elem['volumeInfo'].get('authors')
			tmp_publication_date = elem['volumeInfo'].get('publishedDate')
			tmp_description = elem['volumeInfo'].get('description')
			tmp_cover = elem['volumeInfo']['imageLinks']['thumbnail']
			new_title = tmp_title.replace('"', "'")
			new_description = tmp_description.replace('"', "'")

			current_book = {
				"name": new_title,
				"author": tmp_author,
				"publication_date": tmp_publication_date,
				"description": new_description ,
				"cover": tmp_cover,
			}
			print(CATEGORY)
			data_books[CATEGORY].append(current_book)
		except:
			print('skipped')

	pretyfiedFormat = json.dumps(data_books, indent=4)
	with open("books.json", "a") as json_file:
		json.dump(pretyfiedFormat, json_file)