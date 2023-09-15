import { Outlet, NavLink } from 'react-router-dom';
// import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
    return (
      <div className='container'>
        <section className='header'>
          <p className='logo'>React Films</p>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </nav>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
  };