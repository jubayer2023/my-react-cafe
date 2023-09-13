import profile from '../../assets/profile.png'
const Header = () => {
  return (
    <header className="flex mx-5 items-center justify-between border-b-2 p-4">
      <h1 className="text-4xl text-black font-bold">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="profile" />
    </header>
  );
};

export default Header;
