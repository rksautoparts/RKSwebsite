import { CONTACT, MAP_LOCATION } from '../data/siteData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <h3 className="footer__title">เกี่ยวกับเรา</h3>
          <ul className="footer__list">
            <li>
              <PhoneIcon />
              <span>{CONTACT.phones[0]} / {CONTACT.phones[1]}</span>
            </li>
            <li>
              <LineIcon />
              <span>Line: {CONTACT.line}</span>
            </li>
            <li>
              <FacebookIcon />
              <span>Facebook: {CONTACT.facebook}</span>
            </li>
            <li>
              <LocationIcon />
              <span>{MAP_LOCATION.address}</span>
            </li>
          </ul>
        </div>

        <div className="footer__right">
          <h3 className="footer__title">ติดตามเรา</h3>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <FacebookIcon />
              <span>{CONTACT.facebook}</span>
            </a>
            <a href="#" className="footer__social-link" aria-label="Line">
              <LineIcon />
              <span>{CONTACT.line}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} RKS Autopart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
    </svg>
  )
}

function LineIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.78 1.5 5.26 3.84 6.84L5 22l4.5-2.25C10.28 19.92 11.12 20 12 20c5.52 0 10-3.82 10-8.5S17.52 2 12 2z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
    </svg>
  )
}
