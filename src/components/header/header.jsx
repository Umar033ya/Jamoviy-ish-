import "./header.css";
import left22 from "../../assets/images/group.png";

function Header() {
  return (
    <div className="body">
      <header>
        <div className="left">
          <img src={left22} alt="" />
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">Product</a>
              <a href="#">Faq</a>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
