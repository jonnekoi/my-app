import {Link} from 'react-router-dom';

export const Profile = () => {
  return <div>
    <h2 className='text-2xl font-bold'>Tämä on minun profiilisivu</h2>
    <p>
      <Link to='/'>Takaisin etuvisulle</Link>
    </p>
  </div>
}


