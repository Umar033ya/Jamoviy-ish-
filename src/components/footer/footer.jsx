import "./footer.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import left22 from "../../assets/images/group.png";

function Footer() {
  return (
    <div className="body">
      <footer>
        <div className="left"><img src={left22} alt="" /></div>
        <div className="centre">
          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} color="#ff4500" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={32} color="#ff4500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={32} color="#ff4500" />
            </a>
          </div>
        </div>
        <div className="right">
          <p>Copywright 2020 Bella Onojie.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
