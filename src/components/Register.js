const Register = () => {
  return (
    <div>
      <form action="/register" method="POST">
        <h2>Register</h2>
        <div className="input-group">
          <input type="text" name="fullname" placeholder="Full Name" required />
        </div>
        <div className="input-group">
          <input
            type="number"
            name="age"
            placeholder="Age"
            minlength="1"
            maxlength="3"
            required
          />
        </div>
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
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div class="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1"
            required
          />
        </div>
        <div className="input-group">
          <input type="text" name="address2" placeholder="Address Line 2" />
        </div>
        <div className="input-group">
          <input type="text" name="city" placeholder="Village/City" required />
        </div>
        <div className="input-group">
          <input type="number" name="pincode" placeholder="Pincode" required />
        </div>
        <div className="input-group">
          <input type="text" name="state" placeholder="State" required />
        </div>

        <div className="cbox">
          <p>Gender: </p>
          <label>
            <input type="checkbox" class="radio" name="gender" />
            Male
          </label>
          <label>
            <input type="checkbox" class="radio" name="gender" />
            Female
          </label>
          <label>
            <input type="checkbox" class="radio" name="gender" />
            Others
          </label>
        </div>

        <div className="submit_button">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
