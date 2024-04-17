import {useState} from 'react';
import {Link} from 'react-router-dom';

const Upload = () => {

  const [file, setFile] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tiedostoa yritetään lähettää');
    console.log('event', event);
  };

  return <>
    <form onSubmit={handleSubmit}>
      <input type="file" name="tiedosto"
             onChange={(event) => setFile(event.target.value)}/>
      <label htmlFor="name">Name</label>
      <input className="text-black" type="text" id="name" name="name"
             onChange={(event) =>
                 setName(event.target.value)
             }/>
      <button className="
      m-3 mt-0
      mb-0 p-3
      rounded-lg bg-stone-500
      text-stone-100" type="submit">Submit</button>
    </form>
    <p className="mt-12">
      <Link className='border rounded text-white p-5' to="/">Takaisin etusivulle</Link>
    </p>
  </>;
};

export default Upload;
