import './styles.css';
import logo from '../../assets/img/Bank_72.png'

function Sidebar({ sidebarOpen, closeSidebar }) {

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
          <a href="#">Home</a>
        </div>
        <h2>TRADE</h2>
        <div className="sidebar__link">
          <i className="fa-solid fa-right-left"></i>
          <a href="#">Exchange</a>
        </div>
        <div className="sidebar__link">
          <i className="fa-solid fa-arrows-rotate"></i>
          <a href="#">Liquidity</a>
        </div>
        <h2>FARMS</h2>
        <div className="sidebar__link">
          <i className="fa-solid fa-tractor"></i>
          <a href="#">Farm</a>
        </div>
        <h2>STAKE</h2>
        <div className="sidebar__link">
          <i className="fa-solid fa-handshake"></i>
          <a href="#">Pool</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;