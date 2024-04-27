import './App.css';
import Home from './views/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Profile} from './views/Profile.jsx';
import Upload from './views/upload.jsx';
import Layout from './views/layout.jsx';
import Single from './views/single.jsx';
import Login from './views/Login.jsx';
import { UserProvider } from './contexts/UserContext.jsx';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
      <Router basename={import.meta.env.BASE_URL}>
        <UserProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={
              <ProtectedRoute>
              <Profile/>
              </ProtectedRoute>
            }/>
            <Route path='/upload' element={<Upload/>}/>
            <Route path='/media/:id' element={<Single/>}/>
            <Route path='/login' element={<Login/>}/>
          </Route>
        </Routes>
        </UserProvider>
      </Router>
  );
};
export default App;
