export function SiteFooter() {
  return (
    <footer id="footer" className="site-footer">
      <div className="site-footer__top">
        <div className="footer-brand">
          <h3>Volya Routes</h3>
          <p>About</p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/bris_blurrybubbles/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/brianna-white-4926103b1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="/">GitHub</a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Contact</h4>
            <p>Email us</p>
            <p>Phone</p>
            <p>Office</p>
          </div>

          <div>
            <h4>Policies</h4>
            <p>Booking</p>
            <p>Refunds</p>
            <p>Travel policy</p>
          </div>

          <div>
            <h4>Help</h4>
            <p>Support</p>
            <p>FAQ</p>
            <p>Guides</p>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="footer-bottom-links">
          <a href="/">Terms</a>
          <a href="/">Privacy Policy</a>
          <span>© 2026 Volya Routes</span>
        </div>
      </div>
    </footer>
  )
}