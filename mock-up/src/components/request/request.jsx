import React, {Component} from 'react';


class Request extends Component {




    render() {
        const { id, title, patient_name, status } = this.props.request

        return (
            <div>
                <ul className="list-group list-group-horizontal navbar-nav">
                    <li className="list-group-item">
                        <p>Id: {id}</p>
                    </li>
                    <li className="list-group-item">
                        <p>Title: {title}</p>
                    </li>
                    <li className="list-group-item">
                        <p>Name: {patient_name}</p>
                    </li>
                    <li className="list-group-item">
                        <p>Status: {status}</p>
                    </li>
                    <li className="list-group-item">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">See request</button>
                    </li>
                </ul>
            </div>
        );
    }
}

Request.propTypes = {};

export default Request;