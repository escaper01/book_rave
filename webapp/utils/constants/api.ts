import axios, { AxiosResponse } from 'axios';
import {
  RegistrationSchemaType,
  LoginSchemaType,
  LogoutPayloadType,
} from '../types/AuthTypes';
import Cookies from 'js-cookie';
import { ReviewSchemaType } from '../types/ReviewTypes';
import { ProfileSchemaType } from '../types/ProfileType';
import { CommentFormType } from '../types/CommentType';

export const getData = async (url: string) => {
  return await axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response, 'get data');
      throw err.response;
    });
};

export const getDataAuth = async (url: string) => {
  return await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    })
    .then((res: AxiosResponse) => {
      return { ...res.data, status: res.status };
    })
    .catch((err) => {
      console.log(err.response, 'get auth data');
      throw err.response;
    });
};

export const postData = async (
  url: string,
  {
    arg,
  }: {
    arg: RegistrationSchemaType | LoginSchemaType | LogoutPayloadType;
  }
) => {
  return await axios
    .post(url, arg, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res: AxiosResponse) => {
      return { ...res.data, status: res.status };
    })
    .catch((err) => {
      console.log(err, 'errrrrrrrrr post data');
      throw err.response.data;
    });
};

export const postDataAuth = async (
  url: string,
  {
    arg,
  }: {
    arg?: RegistrationSchemaType | LoginSchemaType | CommentFormType | {};
  }
) => {
  return await axios
    .post(url, arg, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    })
    .then((res: AxiosResponse) => {
      return { ...res.data, status: res.status };
    })
    .catch((err) => {
      console.log(err, 'err post auth data');
      throw err.response.data;
    });
};

export const patchFormAuth = async (
  url: string,
  {
    arg,
  }: {
    arg: ReviewSchemaType | ProfileSchemaType;
  }
) => {
  return await axios
    .patch(url, arg, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    })
    .then((res: AxiosResponse) => {
      return { ...res.data, status: res.status };
    })
    .catch((err) => {
      console.log(err, 'errrrrrrrrr post form');
      throw err.response.data;
    });
};
