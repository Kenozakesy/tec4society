import React, {Component} from 'react';


class Request extends Component {

    getStatusClassName = () => {
        const { status } = this.props.request
        let classes = "font-weight-bold align-middle ";
        classes += status === "Approved" ? "text-success" : "";
        classes += status === "Disapproved" ? "text-danger" : "";
        //classes += status === "Approved" ? "text-success" : "text-danger";
        return classes;
    }

    render() {
        const { id, title, patient_name, status } = this.props.request
        return (
            <React.Fragment>
                <tr>
                    <td className="align-middle">{id}</td>
                    <td className="align-middle">{title}</td>
                    <td className="align-middle">{patient_name}</td>
                    <td className={this.getStatusClassName()}>{status}</td>
                    <td className="align-middle"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">See request</button></td>
                </tr>
            </React.Fragment>
        );
    }
}

Request.propTypes = {};

export default Request;