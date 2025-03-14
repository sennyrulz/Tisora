import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/userSlice";

function User() {
  const user = useSelector((state) => state.user.user); // Read user state
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User Profile</h2>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button
          onClick={() =>
            dispatch(login({ name: "John Doe", email: "john@example.com" }))
          }
        >
          Login
        </button>
      )}
    </div>
  );
}

export default User;
