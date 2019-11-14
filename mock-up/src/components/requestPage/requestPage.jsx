import React, {Component} from 'react';
import RequestList from '../requestList/requestList'

class RequestPage extends Component {

    state = {
        sort: {
            sortId: false,
            sortTitle: false,
            sortPatientName: false,
            sortStatus: false
        },
        requestList: [
            { id: 8090, title: 'test', patient_name: 'Henk', status: 'Pending'},
            { id: 3401, title: 'wheelchair request', patient_name: 'Harry', status: 'Approved'},
            { id: 6703, title: 'index', patient_name: 'Harry', status: 'Pending'},
            { id: 8001, title: 'another test', patient_name: 'Annemoon', status: 'Approved'},
            { id: 5093, title: 'burger force', patient_name: 'Harry', status: 'Pending'},
            { id: 7345, title: 'urgent', patient_name: 'Boris', status: 'Pending'},
            { id: 7375, title: 'diagrams', patient_name: 'Lily', status: 'Disapproved'},
            { id: 8202, title: '404 - page not found', patient_name: 'Harry', status: 'Pending'},
        ],
    }


    handleSortID = () => {
        const requests = [...this.state.requestList];
        let { sort } = {...this.state};
        if(sort.sortId) {
            requests.sort(function(a, b){return a.id - b.id});
            sort.sortId = false;
        } else {
            requests.sort(function(a, b){return b.id - a.id});
            sort.sortId= true;
        }
        this.setState({requestList : requests, sort: sort})
    }

    handleSortTitle = () => {
        const requests = [...this.state.requestList];
        let { sort } = {...this.state};
        if(sort.sortTitle) {
            requests.sort(function(a, b){if(a.title > b.title) return 1; if(a.title < b.title) return -1; else return 0;});
            sort.sortTitle = false;
        } else {
            requests.sort(function(a, b){if(a.title > b.title) return -1; if(a.title < b.title) return 1; else return 0;});
            sort.sortTitle= true;
        }
        this.setState({requestList : requests, sort: sort})
    }

    handleSortPatientName = () => {
        const requests = [...this.state.requestList];
        let { sort } = {...this.state};
        if(sort.sortId) {
            requests.sort(function(a, b){return a.id - b.id});
            sort.sortId = false;
        } else {
            requests.sort(function(a, b){return b.id - a.id});
            sort.sortId= true;
        }
        this.setState({requestList : requests, sort: sort})
    }

    render() {
        return (
            <div className="container">
                <h1 className="m-3">RequestPage</h1>
                <RequestList
                    requests={this.state.requestList}
                    onSortId={this.handleSortID} //waarop gesorteterd welke kant
                    onSortTitle={this.handleSortTitle}
                />
            </div>
        )
    }
}

RequestPage.propTypes = {};
export default RequestPage;