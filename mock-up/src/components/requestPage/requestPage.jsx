import React, {Component} from 'react';
import RequestList from '../requestList/requestList'

class RequestPage extends Component {

    state = {
        requestList: [
            { id: 8090, title: 'test', patient_name: 'Henk', status: 'pending'},
            { id: 3401, title: 'wheelchair request', patient_name: 'Harry', status: 'Approved'},
            { id: 6703, title: 'index', patient_name: 'Harry', status: 'pending'},
            { id: 8001, title: 'another test', patient_name: 'Annemoon', status: 'Approved'},
            { id: 5093, title: 'burger force', patient_name: 'Harry', status: 'pending'},
            { id: 7345, title: 'urgent', patient_name: 'Boris', status: 'pending'},
            { id: 7375, title: 'diagrams', patient_name: 'Lily', status: 'Disapproved'},
            { id: 8202, title: '404 - page not found', patient_name: 'Harry', status: 'pending'},
        ],
    }

    render() {
        return (
            <div className="container">
                <h1>RequestPage</h1>
                <RequestList
                    requests={this.state.requestList}
                />
            </div>
        )
    }
}

RequestPage.propTypes = {};
export default RequestPage;