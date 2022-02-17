import { Link } from "react-router-dom";
import './styles.css';
import logo from '../../assets/img/Bank_72.png'

function Sidebar({ sidebarOpen, closeSidebar }) {

  function hideMenu() {
    document.getElementById("link").className ="";
};

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Infinity Bank</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fa fa-home"></i>
          <Link id="link" className="active_menu_link" onClick={hideMenu} to={`/`}>
              Home
          </Link>
        </div>
        <h2>TRADE</h2>
        <div className="sidebar__link">
          <i className="fa-solid fa-right-left"></i>
          <Link onClick={hideMenu} to={`/exchange`}>
              Exchange
          </Link>
        </div>
        <div className="sidebar__link">
          <i className="fa-solid fa-arrows-rotate"></i>
          <Link onClick={hideMenu} to={`/liquidity`}>
              Liquidity
          </Link>
        </div>
        <h2>FARMS</h2>
        <div className="sidebar__link">
          <i className="fa-solid fa-tractor"></i>
          <Link onClick={hideMenu} to={`/farm`}>
              Farm
          </Link>
        </div>
        <h2>STAKE</h2>
        <div className="sidebar__link">
          <i className="fa-solid fa-handshake"></i>
          <Link onClick={hideMenu} to={`/pool`}>
              Pool
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;