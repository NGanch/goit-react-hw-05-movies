import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { Header, HeaderList, Link } from '../Layout/Layout.styled';
export const Layout = () => {
  return (
    <Header>
      <HeaderList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </HeaderList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Header>
  );
};
