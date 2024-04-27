import useForm from '../hooks/formHooks.js';
import {useNavigate} from 'react-router-dom';
import {useUserContext} from '../hooks/contextHooks.js';

const LoginForm = () => {
  const navigate = useNavigate();

  const { handleLogin } = useUserContext();

  const doLogin = async () => {
    try {
      handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };



  const {handleSubmit, handleInputChange, inputs} = useForm(
      doLogin,
  );

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
