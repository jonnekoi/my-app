import LoginForm from '../components/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm.jsx';
import {useState} from 'react';


const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const toggle = () => {
    setToggleForm(!toggleForm);
  }
  return (
      <>
        {toggleForm ? <LoginForm/> : <RegisterForm/>}
        <button text={toggleForm ? 'not registered yet?' : 'Go to login'} className='border rounded mr-5 text-white p-3'
                onClick={toggle}></button>
      </>
  );
};

export default Login;
