import React, {Component} from 'react';
import './counter.css'

class Counter extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <span className="badge badge-warning m-2 warningButtonText">{this.formatCount()}</span>
                <button className="btn btn-primary btn-sm incrementButtonText">Increment</button>
            </div>
        );
    }

    //Methods
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "Primary"
        return classes;
    }
}

Counter.propTypes = {};
export default Counter;

