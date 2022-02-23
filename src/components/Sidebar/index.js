import { Link } from "react-router-dom";
import './styles.css';
import logo from '../../assets/img/Bank_72.png'

function Sidebar({ sidebarOpen, closeSidebar }) {

  function hideMenu() {
    document.getElementById("link").className = "";
  };

  function hideTrade() {
    document.getElementById("trade").classList.toggle('show');
    document.getElementById("fa-trade-img").classList.toggle('rotate');
  };
  function hideFarm() {
    document.getElementById("farm").classList.toggle('show');
    document.getElementById("fa-farm-img").classList.toggle('rotate');
  };
  function hideStake() {
    document.getElementById("stake").classList.toggle('show');
    document.getElementById("fa-stake-img").classList.toggle('rotate');
  };

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
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

        <a href="#" className="trade-btn" onClick={hideTrade}><h2>TRADE</h2>
          <span id="fa-trade-img" className="fas fa-caret-down first"></span>
        </a>

        <div id="trade" className="trade__show show">
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
        </div>

        <a href="#" className="farm-btn" onClick={hideFarm}><h2>FARMS</h2>
          <span id="fa-farm-img" className="fas fa-caret-down first"></span>
        </a>

        <div id="farm" className="farm__show show">
          <div className="sidebar__link">
            <i className="fa-solid fa-tractor"></i>
            <Link onClick={hideMenu} to={`/farm`}>
              Farm
            </Link>
          </div>
        </div>

        <a href="#" className="stake-btn" onClick={hideStake}><h2>STAKE</h2>
          <span id="fa-stake-img" className="fas fa-caret-down first"></span>
        </a>

        <div id="stake" className="stake__show show">
          <div className="sidebar__link">
            <i className="fa-solid fa-handshake"></i>
            <Link onClick={hideMenu} to={`/pool`}>
              Pool
            </Link>
          </div>
        </div>
      </div>

      <div className="sidebar__footer">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div>
      </div>

    </div>
  );
};

export default Sidebar;