import React, {Component} from 'react';
import Counter from "./counter/counter"
import './counterList.css'

class CounterList extends Component {
    onReset;

    render() {
        const { onReset, onDelete, onIncrement } = this.props

        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                { this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    />
                )}
            </div>
        );
    }

}

CounterList.propTypes = {};
export default CounterList;