import './styles.css';

function Navbar({ sidebarOpen, openSidebar }) {

    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="navbar__right">
            <button>Connect to wallet</button>
            </div>
        </nav>
    );
};

export default Navbar;

