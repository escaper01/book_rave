
![web app demo](./demo.gif)

## Introduction

Welcome to BookRave! This project aims to allows readers to build a community interactively. For more details, visit our deployed site [here](https://book-rave.vercel.app/), check out the final project blog article [here](link), or connect with the author(s) on LinkedIn|Twitter: [escaper](https://twitter.com/escaper007), [Younes Bousfiha](https://www.linkedin.com/in/younes-bousfiha-9838361a6/).

## Installation

To install Project Name, follow these steps:

1. clone the repo
```bash
git clone https://github.com/escaper01/book_rave.git
cd book_rave
```
2. setup .env
```bash
cd backend
touch .env
# you'll have to generate your own virtual env
SECRET_KEY=
PRODUCTION=[true|false]
ALLOWED_HOSTS=localhost,127.0.0.1
DEBUG=[true|false]
DB_PORT=5432
DB_URL=postgres://[DB_USER]:[DB_PASSWORD]@[DB_HOST].[DB_HOST]/[DB_NAME] #if DEBUG is false you don't have to setup DB_URL
#if [PRODUCTION] is false you don't have to setup S3 bucket settings
BUCKET_NAME=
BUCKET_URL=
BUCKET_REGION=
LINODE_BUCKET_ACCESS_KEY=
LINODE_BUCKET_SECRET_KEY=
JWT_TOKEN= #create a user so and get its jwtToken so that u can use automation scripts to add mock books and reviews

```
3. setup the backend
```bash
cd backend
pip install requirements.txt
python manage.py makemigrations
python manage.py migrate
```

3. setup frontend
```bash
mv webapp
npm install
npm run dev
```
4. Open localhost:3000

## Usage

Once installed, you can use BookRave by following the same steps outlined in the Installation section.

## Contributing

We welcome contributions from the community! If you'd like to contribute to Project Name, please follow these guidelines:

1. Fork the repository on GitHub.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and ensure they are properly tested.
5. Commit your changes with descriptive commit messages.
6. Push your changes to your forked repository.
7. Submit a pull request to the main repository's `master` branch, explaining the changes you've made.

## Licensing

This project is licensed under the MIT License.
