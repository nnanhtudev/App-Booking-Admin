import { NavLink } from "react-router-dom"
import './Sidebar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBox, faHotel, faRightFromBracket, faTableColumns, faTruck, faUser } from "@fortawesome/free-solid-svg-icons"
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-body">
          <div className="sidebar-content main">
            <h3 className="title">Main</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faBox} />
                <NavLink className="title-list-item">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <div className="sidebar-content list">
            <h3 className="title">User</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faUser} />
                <NavLink className="title-list-item">User</NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faHotel} />
                <NavLink className="title-list-item">Hotels</NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faTableColumns} />
                <NavLink className="title-list-item">Rooms</NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faTruck} />
                <NavLink className="title-list-item">Transactions</NavLink>
              </li>
            </ul>
          </div>
          <div className="sidebar-content list">
            <h3 className="title">List</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHotel} />
                <NavLink className="title-list-item">New Hotel</NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faTableColumns} />
                <NavLink className="title-list-item">New Room</NavLink>
              </li>
            </ul>
          </div>
          <div className="sidebar-content list">
            <h3 className="title">User</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faRightFromBracket} />
                <NavLink className="title-list-item">Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar