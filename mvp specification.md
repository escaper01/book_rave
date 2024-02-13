Architecture
APIs and Methods
Data Model

## User: /api/user
``` javascript
POST /api/user/register

// Request:
{
	email,"my-email@email.com",
    username,"new_user",
	password: "password"
}
// Response: 201
{
	success:true
}
```


``` javascript
POST /api/user/login

// Request:
{
	username,"new_user",
	Password: "password"
}
// Response: 200
{
	jwtToken:’eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c’
}
```
``` javascript
POST /api/user/confirm-email

// Request:
{
	email,"email@gmail.com",
	verification-code: "562398"
}
// Response:
// 200
{
	email:email@gmail.com
}
```

``` javascript
POST /api/user/send-reset-password

// Request:
{
	email,"email@gmail.com",
}
// Response:
200
{
	email:email@gmail.com
}
```

``` javascript

POST /api/user/reset-password
// Request:
{
	email,"email@gmail.com",
	verification-code: "562398"
}
// Response:
200
{
	email:email@gmail.com
}
```



``` javascript

Book: /api/book

POST /api/book/add-book
Headers: Authorization: Bearer <JWTTOKEN>
// Request:
{
	title,"new_user",
	author: "password",
    genre: "fiction",
    publication_data: "1998",
    description: "some description here lalalalal",
    cover_img_url: "hhtp://imgure.com/cover_book.png",
    created_at: "2024-02-01T12:22:00",
    added_by: "escaper01",
}
// Response:
// 201
{
	success:true
}
```

``` javascript


POST /api/book/edit-book
Headers: Authorization: Bearer <JWTTOKEN>
// Request:
{
	title,"new_user_edit",
	author: "password_edit",
    genre: "fiction_edit",
    publication_data: "1998_edit",
    description: "some description here lalalalal_edit",
    cover_img_url: "hhtp://imgure.com/cover_book.png_edit",
    created_at: "2024-02-01T12:22:00_edit",
    added_by: "escaper01_edit",
}
// Response:
200
{
	success:true
}
```

``` javascript

POST /api/book/delete-book
Headers: Authorization: Bearer <JWTTOKEN>
// Request:
{
	book_id:203
}
// Response:
200
{
	success:true
}
```

``` javascript

GET /api/book/all-books
// Response:
200
{
	book01:
    {
        title,"new_user",
        author: "password",
        genre: "fiction",
        publication_data: "1998",
        description: "some description here lalalalal",
        cover_img_url: "hhtp://imgure.com/cover_book.png",
        created_at: "2024-02-01T12:22:00",
        added_by: "escaper01",
    },
    book02:
    {
        title,"new_user",
        author: "password",
        genre: "fiction",
        publication_data: "1998",
        description: "some description here lalalalal",
        cover_img_url: "hhtp://imgure.com/cover_book.png",
        created_at: "2024-02-01T12:22:00",
        added_by: "escaper01",
    }...
}
```

``` javascript

GET /api/book/book/:book_id
{
    title,"new_user",
    author: "author",
    genre: "fiction",
    publication_data: "1998",
    description: "some description here lalalalal",
    cover_img_url: "hhtp://imgure.com/cover_book.png",
    created_at: "2024-02-01T12:22:00",
    added_by: "escaper01",
   
}
```

## Review: /api/review

``` javascript
POST /api/review/add-review
Headers: Authorization: Bearer <JWTTOKEN>
Request:
{
	title,"new_reviw title",
	book: "book's name",
    img: "hhtp://imgure.com/cover_book.png",
    rating: 4.4,
    description: "some description here lalalalal",
    created_at: "2024-02-01T12:22:00",
    added_by: "escaper01",
}
// Response:
201
{
	success:true
}
```

``` javascript
POST /api/review/edit-review
Headers: Authorization: Bearer <JWTTOKEN>
// Request:
{
	title,"new_reviw title",
	book: "book's name",
    img: "hhtp://imgure.com/cover_book.png",
    rating: 4.4,
    description: "some description here lalalalal",
    created_at: "2024-02-01T12:22:00",
}
// Response:
// 200
{
	success:true
}
```

``` javascript
POST /api/review/delete-review
Headers: Authorization: Bearer <JWTTOKEN>
// Request:
{
	review_id:203
}
// Response:
200
{
	success:true
}
```

``` javascript
GET /api/review/all-reviews
// Response:
// 200
{
	review01:
    {
        title,"new_reviw title",
        book: "book's name",
        img: "hhtp://imgure.com/cover_book.png",
        rating: 4.4,
        created_at: "2024-02-01T12:22:00",
        added_by: "escaper01",
    },
    review02:
    {
        title,"new_reviw title",
        book: "book's name",
        img: "hhtp://imgure.com/cover_book.png",
        rating: 4.4,
        created_at: "2024-02-01T12:22:00",
        added_by: "escaper01",
    }...
}
```

``` javascript
GET /api/review/book/:book_id
Response:
200
{
	title,"new_reviw title",
	book: "book's name",
    img: "hhtp://imgure.com/cover_book.png",
    rating: 4.4,
    description: "some description here lalalalal",
    created_at: "2024-02-01T12:22:00",
   
}
```

## Comment: /api/comment

```javascript
POST /api/review/book/:book_id/up-vote
// reqquest:
{
    uuid: "1b6e9119-68e7-4f4e-8c38-f7527af6a771"
}


```

Interaction: /api/up-vote
/api/down-vote
Favorite: /api/favorite


Motivation
Mockups

