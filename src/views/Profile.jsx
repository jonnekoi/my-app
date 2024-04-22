import {Link} from 'react-router-dom';
import {useUser} from '../hooks/ApiHooks.js';
import {useEffect, useState} from 'react';

export const Profile = () => {
  const [user, setUser] = useState({});
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      try{
        const token = localStorage.getItem('token');
        const userData = await getUserByToken(token);
        setUser(userData.user);
        console.log(user);
      } catch(error){
        console.log(error);
      }
    };
    getUser();
  }, []);

  return <div>
    <h2 className="text-2xl font-bold mb-10">Tämä on minun profiilisivu</h2>
    <p>
      <Link className="border rounded text-white p-5 m-10" to="/">Takaisin etuvisulle</Link>
    </p>
    <div className='p-10'>
      <>
      {user && (
        <p className='text-white'>Käyttäjätunnus: {user.username}</p>
      )}
      </>
    </div>
  </div>;
};


