import React, {Component} from 'react';
import './App.css';
import NavBar from '../navbar/navbar'
import CounterList from "../counterList/counterList";

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0},
    ],
    sum: 0
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
    this.handleSum(counters)
  };
  handleDelete = (counterId) => { //this does not work yet
    const counters = this.state.counters.filter(c => c.id !== counterId);

    this.setState({ counters: counters});
    this.handleSum(counters);
  };
  handleAdd = () => { //this does not work yet
    const counters = [...this.state.counters];
    const length = counters.length;
    const idNumber = Math.max.apply(Math, this.state.counters.map(function(o) { return o.id; })) + 1
    counters[length] = { id: idNumber, value: 0};
    this.setState({ counters: counters});
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++;

    this.setState({counters: counters})
    this.handleSum(counters)
  };
  handleSum = (counters) => {
    let sum = 0;
    counters.forEach(c => {
      sum += c.value;
      }
    )
    this.setState({sum: sum})
  }

  render() {
    return (
        <React.Fragment>
          <NavBar totalCounters={this.state.sum}></NavBar>
          <main className="container">
            <CounterList
                counters={this.state.counters}
                onReset={this.handleReset}
                onAdd={this.handleAdd}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
            />
          </main>
        </React.Fragment>
    );
  }
}

App.propTypes = {};
export default App;
