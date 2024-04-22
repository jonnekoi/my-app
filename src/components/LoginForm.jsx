import useForm from '../hooks/formHooks.js';
import {useAuthentication} from '../hooks/ApiHooks.js';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const {login} = useAuthentication();
  const initValues = {
    username:'',
    password: '',
  };

  const doLogin = async () => {
    console.log('do login 1',inputs);
    try {
      const userData = await login(inputs);
      console.log('DO login', userData);
      localStorage.setItem('token', userData.token);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }



  const {handleSubmit, handleInputChange, inputs} = useForm(
      doLogin,
      initValues,
  );

  console.log(inputs);

  return (
      <>
        <h1 className='text-2xl' >Login</h1>
        <form className='p-5' onSubmit={handleSubmit}>
          <div>
            <label className='text-white' htmlFor="loginuser">Username</label>
            <input
                name="username"
                type="text"
                id="loginuser"
                onChange={handleInputChange}
                autoComplete="username"
            />
          </div>
          <div>
            <label className='text-white' htmlFor="loginpassword">Password</label>
            <input
                name="password"
                type="password"
                id="loginpassword"
                onChange={handleInputChange}
                autoComplete="current-password"
            />
          </div>
          <button className='border rounded mr-5 text-white p-3' type="submit">Login</button>
        </form>
      </>
  );
};

export default LoginForm;
