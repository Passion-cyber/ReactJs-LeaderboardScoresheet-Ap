import Cards from "./Cards";
import Geniescoreboard from "./Geniescoreboard";
import MVP from "./MVP";
import NavBar from "./Navbar/NavBar";

const Header = () => {
  return (
    <div>
      <NavBar/>
      <div className="designs"></div>
      <div className="header-wrapper">
      <h2 className="famous">
        Genies Lea<span>der-board/ Sc</span>ore-Sheet
      </h2>
      </div>
      <h2 className="hero-text">our MVP</h2>
      <MVP />
      
      <h2 className="hero-text">our outstanding interns</h2>
      <Cards />

      <div className="section-famous">
        <h2 className="famous"> Intern<span>'s Hall O</span>f Fame
        </h2>
      </div>
      <Geniescoreboard />
    </div>
  );
};

export default Header;
