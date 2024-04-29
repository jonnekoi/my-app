import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useLike} from '../hooks/ApiHooks.js';

const Likes = ({id}) => {

  const [likeCount, setLikeCount] = useState(0);

  const [userLike, setUserLike] = useState(null);

  const {getLikeCountByMediaId, getUserLike, postLike, deleteLike} = useLike();

  const fetchLikeCount = async () => {
    try {
      const countResponse = await getLikeCountByMediaId(id);
      setLikeCount(countResponse.count);
    } catch (e) {
      //console.error(e.message);
    }
  };

  const fetchUserLike = async () => {
    try {
      const token = localStorage.getItem('token');
      const userLikeResponse = await getUserLike(id, token);
      setUserLike(userLikeResponse);
    } catch (e) {
      //console.error(e.message);
      setUserLike(null);
    }
  };

  useEffect(() => {
    fetchLikeCount();
    fetchUserLike();
  }, []);

  const handleLike = async () => {
    const token = localStorage.getItem('token');
    try {
      if (userLike) {
        await deleteLike(userLike.like_id, token);
      } else {
        const likeResponse = await postLike(id, token);
        console.log(likeResponse);
      }
    } catch (e) {
      console.error(e.message);
    } finally {
      fetchLikeCount();
      fetchUserLike();
    }
  };

  return (
      <div className='flex justify-around m-auto items-center'>
        <p>{likeCount}</p>
        <button className='m-3 mt-3 mb-3 p-3 rounded-lg bg-stone-500 text-stone-100' onClick={handleLike}>{userLike ? 'Dislike' : 'Like'}</button>
      </div>
      );
};

Likes.prototype = {
  id: PropTypes.number.isRequired,
};

export default Likes;
