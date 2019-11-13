import React, {Component} from 'react';
import Request from '../request/request'
import './requestList.css'

class RequestList extends Component {
    requests;



    render() {
        return (
            <div className="col-auto">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th onClick={this.props.onSort} className="tableHeader">ID</th>
                            <th className="tableHeader">Title</th>
                            <th className="tableHeader">Patient Name</th>
                            <th className="tableHeader">Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Here need to be list items*/}
                        { this.props.requests.map(request =>
                            <Request
                                key={request.id}
                                request={request}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

RequestList.propTypes = {};
export default RequestList;