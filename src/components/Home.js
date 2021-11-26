import { Link } from "react-router-dom"
import { isAuthorized, Authorize } from "../utils/authorization";

export default function Home() {

  return (
    <div>
      <h1>
        Welcome to the homepage!
      </h1>
      {isAuthorized() ? (<>
        <h1>You have successfully authed in your account!</h1>
        <h1>You can now enter your pages</h1>
      </>
      ) :
        (<>
          <h1>You are not authed!</h1>
          <h1>Please login in to the system</h1>
          <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
        </>)}
    </div>

  )
}