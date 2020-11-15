import { FcLike } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
      <a href="https://github.com/MatheusAFPimentel/Front-elenc.o">
        <FaGithub />
      </a>
    </div>
    <div className="footer-copyright">
      Desenvolvido com <FcLike /> pelo grupo Sandy e os Juniors.
    </div>
  </div>
);

export default Footer;
