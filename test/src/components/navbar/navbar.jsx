import React, {Component} from 'react';

class NavBar extends Component {
    totalCounters;

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">
                        NavBar{" "}
                        <span className="badge badge-pill badge-secondary">
                            {this.props.totalCounters}
                        </span>
                    </a>
                </nav>
            </div>
        );
    }
}

NavBar.propTypes = {};
export default NavBar;