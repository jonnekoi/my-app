import {Link} from 'react-router-dom';

export const Profile = () => {
  return <div>
    <h2 className='text-2xl font-bold mb-10'>Tämä on minun profiilisivu</h2>
    <p>
      <Link className='border rounded text-white p-5' to='/'>Takaisin etuvisulle</Link>
    </p>
  </div>
}


