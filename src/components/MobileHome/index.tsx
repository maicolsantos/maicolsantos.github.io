import logo from '../../assets/images/logo.svg'
import { Footer } from '../Footer'
import './styles.css'

export const MobileHome = () => (
  <div className="mobile">
    <img src={logo} className="mobile-logo" alt="Maicol logo" />
    <h1 className="mobile-title">Maicol Santos</h1>
    <Footer hiddenTitle />
  </div>
)
