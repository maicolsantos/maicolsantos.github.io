import logo from '../../assets/images/logo.svg'
import './styles.css'

export const Loading = () => (
  <div className="loading">
    <div className="loading-logo">
      <img src={logo} className="logo" alt="Maicol logo" />
      <h1 className="title">Maicol Santos</h1>
    </div>
  </div>
)
