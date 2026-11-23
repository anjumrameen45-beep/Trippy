import "./RegistrationStyles.css";
 
function Registration(){
    return(
<div className="registration-page">

      <div className="registration-container">

        <div className="registration-header">
          <h1>Create Account</h1>
          <p>Sign up to get started!</p>
        </div>

        <form className="registration-form">

          <div className="registration-input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="registration-input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="registration-input-group">
            <label>Username</label>
            <input type="text" placeholder="Choose a username" />
          </div>

          <div className="registration-input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <button className="registration-button" type="submit">
            Sign Up
          </button>

        </form>

        <div className="registration-home">
          <a href="/">Back to Home</a>
        </div>

        <div className="registration-footer">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>

      </div>

    </div>
    )
};
export default Registration;