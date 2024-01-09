import './App.css';
import Home from './pages/Home/Home';
import MainNavbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Properties from './pages/Properties/Properties';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/properties',
    element: <Properties />,
  },
]);

function App() {
  return (
    <>
      <nav>
        <MainNavbar />
      </nav>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
