import { CONTACT } from '../data/siteData'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contacts">
          <a href={`tel:${CONTACT.phones[0].replace(/-/g, '')}`} className="topbar__item">
            <PhoneIcon />
            <span>{CONTACT.phones[0]} / {CONTACT.phones[1]}</span>
          </a>
          <span className="topbar__item">
            <LineIcon />
            <span>{CONTACT.line}</span>
          </span>
          <span className="topbar__item">
            <FacebookIcon />
            <span>{CONTACT.facebook}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
    </svg>
  )
}

function LineIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.625.625 0 01-.629-.629V8.108a.63.63 0 01.629-.63c.348 0 .63.285.63.63v4.771zm-2.955 0a.63.63 0 01-.63.629.625.625 0 01-.629-.629V8.108a.63.63 0 01.629-.63c.348 0 .63.285.63.63v4.771zM9.49 8.108a.63.63 0 01.63-.63h.945c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H10.12v4.141a.63.63 0 01-.63.629.625.625 0 01-.629-.629V8.108zM4.635 9.738a.63.63 0 01-.63.629.625.625 0 01-.629-.629V8.108a.63.63 0 01.629-.63h.945c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H4.635v.63zm0 2.52a.63.63 0 01-.63.629.625.625 0 01-.629-.629v-.63h1.259a.63.63 0 01.63.629.625.625 0 01-.629.629H4.635z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}
