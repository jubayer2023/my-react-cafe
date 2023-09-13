import profile from '../../assets/profile.png'
const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 p-4 max-w-5xl mx-auto mb-7">
      <h1 className="text-4xl text-black font-bold">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="profile" />
    </header>
  );
};

export default Header;
