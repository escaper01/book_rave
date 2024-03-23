import { LogoutPayloadType } from '../types/AuthTypes';
import { ProfileFormType } from '../types/ProfileType';

// export const BASE_URL = 'http://localhost:8000/api/v1';
// export const BASE_URL = 'http://localhost:8000/api/v1';
export const BASE_URL = 'https://book-rave.onrender.com/api/v1';

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
  'Technical Instructional',
];

export const initial_user_state: ProfileFormType = {
  username: null,
  first_name: null,
  last_name: null,
  city: null,
  avatar: null,
};
