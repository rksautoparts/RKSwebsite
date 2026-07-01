import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import './Header.css'

const NAV_ITEMS = [
  { label: 'หน้าหลัก', path: '/' },
  { label: 'สินค้า', path: '/products' },
  { label: 'เกี่ยวกับเรา', path: '/about' },
  { label: 'ติดต่อเรา', path: '/contact' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <Logo size={52} />
        </Link>

        <nav className="header__nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__link ${location.pathname === item.path ? 'header__link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="header__cta btn btn-red">
          ขอใบเสนอราคา
        </Link>
      </div>
    </header>
  )
}
