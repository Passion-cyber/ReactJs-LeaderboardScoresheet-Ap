import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <header className="main-header">
        <div className="logo">
          <a href="https://www.genesystechhub.com/learnable">
            <img
              src={`https://res.cloudinary.com/dysznjd1z/image/upload/v1693946807/Leaderboard/snap-shot_hfh8mr.png`}
              className="image-logo"
              alt="learnable-logo"
            />
          </a>
        </div>
        <div className="navigation">
          <button className="navigation-button">Everything is learnable</button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
