import './App.css';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/LoginAndRegister/LoginPage';
import { RegisterPage } from './pages/LoginAndRegister/RegisterPage';
import { MainLayout } from './layouts/mainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/login',
    element: (
      <MainLayout>
        <LoginPage />,
      </MainLayout>
    ),
  },
  {
    path: '/register',
    element: (
      <MainLayout>
        <RegisterPage />
      </MainLayout>
    ),
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
