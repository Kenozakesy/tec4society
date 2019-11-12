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

                        {/*<button className="btn btn-outline-secondary btn-sm m-2">Home</button>|*/}
                        {/*<button className="btn btn-outline-secondary btn-sm m-2">Users</button>|*/}
                        {/*<button className="btn btn-outline-secondary btn-sm m-2">Something</button>*/}
                    </a>
                </nav>
            </div>
        );
    }
}

NavBar.propTypes = {};
export default NavBar;