import useForm from '../hooks/formHooks.js';
import {useUser} from '../hooks/ApiHooks.js';

const RegisterFrom = () => {
  const {register} = useUser();
  const initValues = {
    username:'',
    password: '',
  };

  const doRegister = async () => {
    console.log('do login 1',inputs);
    try {
      const userData = await register(inputs);
      console.log('do register', userData);
    } catch (error) {
      alert(error.message);
    }
  }

  const {handleSubmit, handleInputChange, inputs} = useForm(
      doRegister,
      initValues,
  );

  return (
      <>
        <h1 className='text-2xl' >Register</h1>
        <form className='p-5' onSubmit={handleSubmit}>
          <div>
            <label className='text-white'
                   htmlFor="registeruser">Username</label>
            <input
                name="username"
                type="text"
                id="registeruser"
                onChange={handleInputChange}
            />
          </div>
          <div>
            <label className='text-white'
                   htmlFor="registeremail">Email</label>
            <input
                name="email"
                type="email"
                id="registeremail"
                onChange={handleInputChange}
            />
          </div>
          <div>
            <label className='text-white'
                   htmlFor="registerpassword">Password</label>
            <input
                name="password"
                type="password"
                id="registerpassword"
                onChange={handleInputChange}
            />
          </div>
          <button className='border rounded mr-5 text-white p-3'
                  type="submit">Register</button>
        </form>
      </>
  );
};

export default RegisterFrom;
