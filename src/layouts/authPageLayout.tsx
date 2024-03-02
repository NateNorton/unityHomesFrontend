export const AuthPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-antiqueWhiteComp">
      <div className="w-1/2 flex justify-center items-center">{children}</div>

      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: 'url("/../src/assets/loginImage.jpg")' }}
      ></div>
    </div>
  );
};
