import { Link } from "react-router-dom";
import classes from "./styles.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <h3>Mizuka Blog</h3>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li>Write Blog</li>
        </Link>
      </ul>
    </div>
  );
}
