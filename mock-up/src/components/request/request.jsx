import React, {Component} from 'react';


class Request extends Component {
    

    render() {
        const { id, title, patient_name, status } = this.props.request

        return (
            <div>
                <table className="table table-striped">
                    {/*these are created seperately which should not happen*/}
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{patient_name}</td>
                            <td>{status}</td>
                            <td><button className="btn btn-outline-success my-2 my-sm-0" type="submit">See request</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Request.propTypes = {};

export default Request;