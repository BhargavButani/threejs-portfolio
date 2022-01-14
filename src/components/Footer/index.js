import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Bhargav Butani.`}
    </span>
    <Link secondary className="footer__link" href="https://hamishw.com/" target="_blank">
      Inspired by Hamish Williams.
    </Link>
  </footer>
);

export default Footer;
