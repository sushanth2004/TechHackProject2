const Login = () => {
  return (
    <div className="Login">
      <form action="/login" method="post">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="number"
            name="phone"
            placeholder="Mobile Number"
            minlength="10"
            maxlength="10"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="submit_button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
