import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { Nav } from './components/Nav.jsx'
import { Project } from './components/Project.jsx';

export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Project />} path='/project/:index' />
      </Routes>
    </>
  );
};