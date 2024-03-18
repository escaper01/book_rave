import { LogoutPayloadType } from '../types/AuthTypes';
import { ProfileFormType } from '../types/ProfileType';

export const listOfImgUrl = [
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-a41c9b2fdf2126dca76d0207b9b0b404.webp?ts=1707476060',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1698210220',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/winner%27s-brain-design-template-daa2e8b2e0506863fadc3ce494b4fc60.webp?ts=1698251277',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/buy-a-book-day-poster-design-template-12c02c717da500ebabc95e29644442de.jpg?ts=1694075466',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/meditation-book-cover-2021-template-design-e4248be41eb1d8b4654258659c7e405f.webp?ts=1698340741',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-tamplate-design-template-f2cd9d446fff4b77500b95d8344b1a0c.jpg?ts=1676262361',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kindle-book-cover-art-design-template-71ebe3e49c44c364e7a1afe41d8b1f34.webp?ts=1698538419',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.webp?ts=1698303950',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fantasy-book-cover-beach-design-template-fdc676bb91d0962cf17821e5c0a96316.webp?ts=1698541657',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-proposal-book-cover-a4-design-template-8ecd48cac3dd4ef35b9c112972459948.jpg?ts=1684590759',
];

export const BASE_URL = 'http://localhost:8000/api/v1';

export const MAX_FILE_SIZE = 500000;
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const MOVIES_CATEGORIES = [
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
  'Technical/Instructional',
];

export const initial_user_state: ProfileFormType = {
  username: null,
  first_name: null,
  last_name: null,
  city: null,
  avatar: null,
};
