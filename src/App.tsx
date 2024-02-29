import './App.css';
// import { MainNavbar } from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
// import MainNavbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Properties from './pages/Properties/Properties';
// import { AddProperty } from './pages/AddProperty/AddProperty';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // {
  //   path: '/properties',
  //   element: <Properties />,
  // },
  // {
  //   path: '/addProperty',
  //   element: <AddProperty />,
  // },
]);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
