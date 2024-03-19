import { MainNavbar } from '../components/Navbar/Navbar';

export const HubLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isSelected = (path: string): boolean => {
    return window.location.pathname === path;
  };

  console.log(window.location.pathname);
  return (
    <div className="flex flex-col h-screen w-screen">
      <MainNavbar />
      <div className="bg-sageLight flex h-full m-6 rounded-lg">
        {/* container for buttons at the side */}
        <div className="flex flex-col justify-between bg-sageComp rounded-tl-lg rounded-bl-lg">
          <div
            className={`w-full h-full border border-sageDark p-10 rounded-tl-lg ${isSelected('/hub/settings') ? 'bg-teracottaComp text-darkest font-bold' : ''} items-center justify-center flex`}
          >
            <a href="/hub/settings">My Settings</a>
          </div>
          <div
            className={`w-full h-full border border-sageDark p-10 ${isSelected('/hub/myproperties') ? 'bg-teracottaComp text-darkest font-bold' : ''} items-center justify-center flex`}
          >
            <a href="/hub/myproperties">Saved Properties</a>
          </div>
          <div
            className={`w-full h-full border border-sageDark p-10 ${isSelected('/hub/enquiries') ? 'bg-teracottaComp text-darkest font-bold' : ''} items-center justify-center flex`}
          >
            <a href="/hub/enquiries">Enquiries</a>
          </div>
          <div
            className={`w-full h-full border border-sageDark p-10 ${isSelected('/hub/createproperty') ? 'bg-teracottaComp text-darkest font-bold' : ''} items-center justify-center flex`}
          >
            <a href="/hub/createproperty">Create Property</a>
          </div>
          <div
            className={`w-full h-full border border-sageDark p-10 ${isSelected('/hub/savedarticles') ? 'bg-teracottaComp text-darkest font-bold' : ''} items-center justify-center flex`}
          >
            <a href="/hub/savedarticles">Saved Articles</a>
          </div>
          <div
            className={`w-full h-full border border-sageDark p-10 ${isSelected('/hub/chat') ? 'bg-teracottaComp text-darkest font-bold' : ''} items-center justify-center flex rounded-bl-lg`}
          >
            <a href="/hub/chat">My Chats</a>
          </div>
        </div>
        {/* container for main content */}
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
};
