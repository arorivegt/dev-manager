import react from 'react';
import {Link} from 'react-router-dom';
import { render } from "react-dom";
import App from '../App';
import '../css/commonCSS.css';



function Navigation() {

  const valideSignOff = () => {
    localStorage.setItem('tokenSession', '');
    render(<App />, document.getElementById("root"));
  }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark background-color-tigo">
        <a className="navbar-brand" href="/">NeManager</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" 
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Main">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Altas">Altas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Admin">Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href ="/" onClick={valideSignOff}>Sign Off</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;