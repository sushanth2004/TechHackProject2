import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="content">
        <h1 className="heading">Welcome to Project farmer!</h1>
        <p>
          Welcome to our thriving farmers' community! Connect with fellow
          farmers, ask questions, and find solutions to your agricultural
          queries. Share pictures of your crops, and let us help you identify
          and combat diseases. Stay updated with the latest news on technology
          and innovative agricultural practices. Join us in cultivating
          knowledge and fostering a vibrant farming community!
        </p>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/register"}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
