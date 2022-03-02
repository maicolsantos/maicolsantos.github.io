import logo  from './assets/images/logo.svg'
import './App.css'

export const App = () => (
  <div className="app">
    <div className="app-logo">
      <img src={logo} className="logo" alt="Maicol logo" />
      <h1 className="title">Maicol Santos</h1>
    </div>
  </div>
)
