import { useState } from "react";
import { useNavigate } from "react-router";
import { Authorize } from "../utils/authorization";

export default function Login({ onAuthorize }) {

  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    

    const user = event.target.user.value;
    const password = event.target.password.value;

    const isAuthorized = Authorize(user, password);

    onAuthorize(isAuthorized);
    if (isAuthorized) {
      setIsError(false);
      navigate('/home');
    } else {
      setIsError(true);
    }

    return isAuthorized;
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={onSubmit} style={{ width: "30vw", itemAlign: "center" }}>
        <div className="form-group">
          <label htmlFor="user">User</label>
          <input type="text" className="form-control" id="user" />
          <small className="form-text text-muted">The correct username is: Kamran</small>
        </div>
        <div className="form-group">
          <label htmlFor="passsword">Password</label>
          <input type="password" className="form-control" id="password" />
          <small className="form-text text-muted">The correct password is: 123</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        {isError && <div className="alert alert-danger" style={{marginTop: 30}} role="alert">Username or password is not correct</div>}
      </form>
    </div>

  )
}