import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to={"/emoji"}>
        <button className="links">Ir a Emojis</button>
      </Link>
      <Link to={"/gif-generator"}>
        <button className="links">Ir a Gif Generator</button>
      </Link>
      <Link to={"/paint"}>
        <button className="links">Ir a Paint</button>
      </Link>
    </>
  );
};

export default Nav;
