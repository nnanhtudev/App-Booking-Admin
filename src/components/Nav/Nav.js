import { useContext } from "react";
import "./Nav.scss";
import { UserContext } from "../../context/UserContext";
const Nav = () => {
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    return (
      <>
        <div className="sidebar-header">
          <h1>Admin page</h1>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Nav;
