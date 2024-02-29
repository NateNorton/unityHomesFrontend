const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Properties', href: '#' },
  { name: 'Search', href: '#' },
];

export const MainNavbar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 bg-mutedSage">
      <div className="flex items-center justify-between p-6 lg:pd-8 max-h-20">
        {/* logo container */}
        <div>
          <h2 className="text-teracottaDark font-bold text-xl lg:text-3xl">Unity</h2>
        </div>

        {/* link container */}
        <div className="flex space-x-2 lg:space-x-6">
          {navigation.map((item, index) => (
            <p key={index} className="font-bold text-darkest">
              {item.name}
            </p>
          ))}
        </div>

        {/* login container */}
        <div>
          <p className="font-bold text-teracottaDark">Login</p>
        </div>
      </div>
    </nav>
  );
};
