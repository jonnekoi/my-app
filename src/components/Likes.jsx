import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useLike} from '../hooks/ApiHooks.js';
import {
  Heart,
  HeartDislike,
  HeartDislikeOutline,
  HeartOutline,
} from 'react-ionicons';

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
      <div className='flex justify-around m-auto items-center p-2'>
        <p>{likeCount}</p>
        { userLike ?
        <HeartDislikeOutline color={'#ffffff'} beat onClick={handleLike}></HeartDislikeOutline>
            :
        <HeartOutline color={'#ffffff'} beat onClick={handleLike}></HeartOutline>
        }
      </div>
      );
};

Likes.prototype = {
  id: PropTypes.number.isRequired,
};

export default Likes;
