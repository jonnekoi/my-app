import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

const App = () => {
  return (
      <Router basename={import.meta.env.BASE_URL}>
        <>
          <h1>My App</h1>
          <Home />
        </>
      </Router>
  );
};

export default App;
