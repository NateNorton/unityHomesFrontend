import './App.css';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/LoginAndRegister/LoginPage';
import { RegisterPage } from './pages/LoginAndRegister/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
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
