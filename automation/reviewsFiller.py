import requests
import random
import json
import requests
from io import BytesIO
import uuid

POST_IMAGES = [
    "https://ichef.bbci.co.uk/images/ic/1024xn/p07b4k75.jpg.webp",
    "https://teleread.files.wordpress.com/2021/02/pexels-photo-1181672.jpeg",
    "https://media.istockphoto.com/id/1220820931/photo/hands-clasped-in-prayer-over-a-holy-bible-wooden-table-background.jpg",
    "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qhMrAo0SnTfwOsVE1KTPYA.jpeg",
    "https://image.cnbcfm.com/api/v1/image/104180485-GettyImages-457207765.jpg",
    "https://media.istockphoto.com/id/1147132084/photo/family-before-going-to-bed-mother-reads-to-her-child-son-book-near-a-lamp-in-the-evening.jpg?s=2048x2048&w=is&k=20&c=8XRCcI0ogVlQnho231F2HX2k9PgzMfCCJrdpEllUqA0=",
    "https://media.istockphoto.com/id/1182032294/photo/handsome-smiling-man-reading-a-book-while-sitting-on-the-sofa.jpg",
    "https://media.istockphoto.com/id/508586144/photo/reading-book.jpg",
]


def add_review(payload, book_id, token):
    url = f"http://localhost:8000/api/v1/review/add_review/{book_id}"
    # url = f"https://book-rave.onrender.com/api/v1/review/add_review/{book_id}"

    payload["rating"] = random.randint(1, 5)
    rand_index = random.randint(0, len(POST_IMAGES) - 1)
    img_res = requests.get(POST_IMAGES[rand_index])
    cover_image = BytesIO(img_res.content)
    img_filename = str(uuid.uuid4()) + ".png"

    files = [('media', (img_filename, cover_image, 'image/png'))]

    headers = {
        'Authorization': 'Bearer ' + token
    }
    response = requests.post(url, headers=headers, data=payload, files=files)
    return response


# Open the JSON file
with open('reviews.json', 'r') as file:
    data = json.load(file)

# Iterate over each dictionary in the list
for i, review in enumerate(data):
    response = add_review(payload=review, book_id=random.randint(1, 92),
                          token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNDMxOTkyLCJpYXQiOjE3MTEzNzIwNTIsImp0aSI6ImQzZmI3MzQyNzM4YzQ2YWI5NDQ4ZjhhMTg1ZDZkN2U0IiwidXNlcl9pZCI6MX0.Mja09tv2BEfB8Y1X4o_EpiI66G-eBOi-NOQBsUwi7_k")
    print(i, " / ", len(data), "  ", response)
