import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faHotel, faRightFromBracket, faTableColumns, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const SideBar = () => {
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    return (
      <>
        <div className="sidebar">
          <div className="sidebar-body">
            <div className="sidebar-content main">
              <h3 className="title">Main</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faBox} />
                  <Link to="/" className="title-list-item">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-content list">
              <h3 className="title">User</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <Link className="title-list-item">User</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHotel} />
                  <Link to="/hotels" className="title-list-item">
                    Hotels
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faTableColumns} />
                  <Link to="/rooms" className="title-list-item">
                    Rooms
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faTruck} />
                  <Link to="/transactions" className="title-list-item">
                    Transactions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-content list">
              <h3 className="title">List</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHotel} />
                  <Link to="/new-hotel" className="title-list-item">
                    New Hotel
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faTableColumns} />
                  <Link to="/new-rooms" className="title-list-item">
                    New Room
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-content list">
              <h3 className="title">User</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <Link className="title-list-item">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default SideBar;
