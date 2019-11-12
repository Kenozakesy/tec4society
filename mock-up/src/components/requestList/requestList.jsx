import React, {Component} from 'react';
import Request from '../request/request'

class RequestList extends Component {
    requests;

    render() {
        return (
            <div>
                { this.props.requests.map(request =>
                    <Request
                        key={request.id}
                        request={request}
                    />
                )}
            </div>
        );
    }
}

RequestList.propTypes = {};
export default RequestList;