import './App.css';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/LoginAndRegister/LoginPage';
import { RegisterPage } from './pages/LoginAndRegister/RegisterPage';
import { MainLayout } from './layouts/mainLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PropertyDetailsPage } from './pages/Properties/PropertyDetailsPage';
import { HubLayout } from './layouts/HubLayout';
import { SettingsPage } from './pages/Settings/SettingPage';
import { MyProperties } from './pages/MyProperties/MyProperties';
import { Enquiries } from './pages/Enquiries/Enquiries';
import { AddProperty } from './pages/AddProperty/AddProperty';
import { SavedArticles } from './pages/savedArticles/SavedArticles';
import { Chat } from './pages/Chat/Chat';
import { ProtectedRoute } from './ProtectedRoute';
import { PropertyList } from './pages/Properties/PropertyList';

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
  {
    path: '/properties',
    element: (
      <MainLayout>
        <PropertyList />
      </MainLayout>
    ),
  },
  {
    path: '/properties/:propertyID',
    element: (
      <MainLayout>
        <PropertyDetailsPage />
      </MainLayout>
    ),
  },
  {
    path: '/hub/settings',
    element: (
      <ProtectedRoute>
        <HubLayout>
          <SettingsPage />
        </HubLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/hub/myproperties',
    element: (
      <ProtectedRoute>
        <HubLayout>
          <MyProperties />
        </HubLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/hub/enquiries',
    element: (
      <ProtectedRoute>
        <HubLayout>
          <Enquiries />
        </HubLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/hub/createproperty',
    element: (
      <ProtectedRoute>
        <HubLayout>
          <AddProperty />
        </HubLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/hub/savedarticles',
    element: (
      <ProtectedRoute>
        <HubLayout>
          <SavedArticles />
        </HubLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/hub/chat',
    element: (
      <ProtectedRoute>
        <HubLayout>
          <Chat />
        </HubLayout>
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <main>
        <RouterProvider router={router} />
      </main>
    </Provider>
  );
}

export default App;
