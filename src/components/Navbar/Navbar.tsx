import { useNavigate } from 'react-router-dom';
import { Button } from '../inputs/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { logoutUser } from '../../redux/features/auth/authSlice';

const navigation = [
  { name: 'Home', href: '/', showLoggedOut: true },
  { name: 'Search', href: '#', showLoggedOut: true },
  { name: 'Settings', href: '/hub/settings', showLoggedOut: false },
  { name: 'My Properties', href: '/hub/myproperties', showLoggedOut: false },
  { name: 'Enquiries', href: '/hub/enquiries', showLoggedOut: false },
  { name: 'Add Property', href: '/hub/createproperty', showLoggedOut: false },
  { name: 'Saved Articles', href: '/hub/savedarticles', showLoggedOut: false },
  { name: 'Chat', href: '/hub/chat', showLoggedOut: false },
];

export const MainNavbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.userToken !== null);

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="inset-x-0 top-0 z-50 bg-lightest sticky">
      <div className="flex items-center justify-between p-6 lg:pd-8 max-h-20">
        {/* logo container */}
        <a href="/" className="hover:cursor-pointer">
          <h2 className="text-teracottaDark active:text-teracottaComp font-bold text-xl lg:text-3xl">Unity</h2>
        </a>

        {/* link container */}
        <div className="flex space-x-2 lg:space-x-6">
          {navigation.map(
            (item, index) =>
              // show all buttons if logged in, if not logged in show only the buttons with showLoggedOut: true
              (isLoggedIn || item.showLoggedOut) && (
                <Button key={index} version="text" isPrimary={true} onClick={() => handleNavigation(item.href)}>
                  {item.name}
                </Button>
              ),
          )}
        </div>

        {/* login / logout container */}
        <div>
          {isLoggedIn ? (
            <Button version="text" isPrimary={true} onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <a href="/login" className="font-bold text-teracottaDark hover:text-teracottaComp">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};
