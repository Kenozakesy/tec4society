import React, {Component} from 'react';
import './navBar.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        {/*Actual navigation*/}
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Logout</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Profile</a>
                            </li>
                        </ul>

                        {/*SearchBar*/}
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                   aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

NavBar.propTypes = {};
export default NavBar;