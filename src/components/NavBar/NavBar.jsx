import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service"
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <header>
      <h1>Inventory Management</h1>
      <nav>
        <div>Welcome {user.name}!</div>
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </header>
  );
}
