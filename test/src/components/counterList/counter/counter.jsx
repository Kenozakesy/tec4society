import React, {Component} from 'react';
import './counter.css'

class Counter extends Component {

    // Prop methods
    onDelete;
    onIncrement;

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    //Methods
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
    getBadgeClasses() {
        let classes = "warningButtonText badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary"
        return classes;
    };
    // runs when the page is updates
    componentDidUpdate(prevProps, prevState, snapshot) {

    };

    //HTML
    render() {
        return (
            <div className="flex-column align">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm m-2" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }

}

Counter.propTypes = {};
export default Counter;

