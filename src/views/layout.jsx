import {Link, Outlet} from 'react-router-dom';

const Layout = () => (
    <div>
      <header>
        <nav className="flex items-center">
          <Link className='border rounded mr-5' to="/">Etusivu</Link>
          <Link className='border rounded mr-5' to="/profile">Profiili</Link>
          <Link className='border rounded mr-5' to="/upload">Upload ↗</Link>
          <Link className='border rounded mr-5' to="/login">Login</Link>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer className='m-12'>
        © 2024
      </footer>
    </div>
)

export default Layout;
