import { React} from 'react';
import '../css/style.css'
import '../assets/Images/logo_white.svg'
import "../assets/Images/logo_white.png"


export default function Page() {
return (
  <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tea Client</title>
  <link rel="shortcut icon" type="x-icon" href="" />
  <link rel="stylesheet" href="../css/style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <section className="header">
    <nav>
      <div className="left_nav">
        <a href="/">
          <img id="logo" src="../assets/Images/logo_white.svg" />
        </a>
        <a href="/" id="title">
          Tea Client
        </a>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="download">DOWNLOAD</a>
          </li>
          <li>
            <a href="https://store.teaclient.net">STORE</a>
          </li>
          <li>
            <a href="">SOCIALS ▾</a>
            <ul className="dropdown">
              <li>
                <a href="https://twitter.com/TeaClientMine">Twitter</a>
              </li>
              <li>
                <a href="https://www.twitch.tv/teaclientminecraft">Twitch</a>
              </li>
              <li>
                <a href="https://discord.gg/teaclient">Discord</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@teaclientmc">YouTube</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://docs.teaclient.net">DOCUMENTS</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
  <footer>
    <div className="footer-content">
      <h3>Tea Client</h3>
    </div>
    <div className="footerNav">
      <a href="/">Home</a>
      <a href="/about_us.html">About Us</a>
      <a href="">Contact Us</a>
      <a href="">Terms of Service</a>
      <a href="">Privacy Policy</a>
    </div>
    <div className="footer-bottom">
      <p>Copyright © 2023 TeaClient</p>
      <p id="affiliation">Not affiliated with Mojang Studios</p>
      <div style={{ clear: "both" }} />
    </div>
  </footer>
</>
  );
}

