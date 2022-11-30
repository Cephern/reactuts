const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <span>Max</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
