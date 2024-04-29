import {useEffect, useState} from 'react';
import {fetchData} from '../lib/fetchData.js';

const useMedia = () => {
    const [mediaArray, setMediaArray] = useState([]);
    const {getUserById} = useUser();

    const getMedia = async ()  => {
      const mediaResult = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
      );

      const mediaWithUser = await Promise.all(
          mediaResult.map(async (mediaItem) => {
            const userResult = await getUserById(mediaItem.user_id);
            return {...mediaItem, username: userResult.username};
          }));

      setMediaArray(mediaWithUser);
  };

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};


const useUser = () => {
  const getUserById = async (id) => {
    const userResult = await fetchData(import.meta.env.VITE_AUTH_API + '/users/' + id,
        );
    return userResult;
  };

  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const tokenResult = await fetchData(import.meta.env.VITE_AUTH_API + '/users/token', options);
    return tokenResult;
  };

    const register = async (inputs)=> {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      };
      return await fetchData(import.meta.env.VITE_AUTH_API + '/users', options);
    };
  return {getUserById, getUserByToken, register};
};


const useAuthentication = () => {
  const login = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(import.meta.env.VITE_AUTH_API + '/auth/login', options);
    return loginResult;
  };
  return {login};
};

const useLike = () => {
  const postLike = async (media_id, token) => {
    const likeObject = {
      media_id: media_id,
    };

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(likeObject),
    };

    return await fetchData(
        import.meta.env.VITE_MEDIA_API + '/likes',
        fetchOptions,
    );
  };

  const deleteLike = async (media_id, token) => {
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    return await fetchData(
        import.meta.env.VITE_MEDIA_API + '/likes/' + media_id,
        options,
    );
  };

  const getLikeCountByMediaId = async (media_id) => {
    const likeResult = await fetchData(import.meta.env.VITE_MEDIA_API + '/likes/count/' + media_id);
    return likeResult;
  };

  const getUserLike = async (media_id, token) => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return fetchData(import.meta.env.VITE_MEDIA_API + '/likes/bymedia/user/' + media_id, options);
  };

  return {postLike, deleteLike, getLikeCountByMediaId, getUserLike}
 };

export {useMedia, useUser, useAuthentication, useLike};
