import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';
import {
	increment,
	decrement,
	add,
	subtract
} from '../../store/actions/counterAction';

class Counter extends Component {
	state = {
		counter: 0
	};

	counterChangedHandler = (action, value) => {
		switch (action) {
			case 'inc':
				this.setState(prevState => {
					return { counter: prevState.counter + 1 };
				});
				break;
			case 'dec':
				this.setState(prevState => {
					return { counter: prevState.counter - 1 };
				});
				break;
			case 'add':
				this.setState(prevState => {
					return { counter: prevState.counter + value };
				});
				break;
			case 'sub':
				this.setState(prevState => {
					return { counter: prevState.counter - value };
				});
				break;
		}
	};

	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label='Increment' clicked={this.props.increment} />
				<CounterControl label='Decrement' clicked={this.props.decrement} />
				<CounterControl label='Add 10' clicked={() => this.props.add(10)} />
				<CounterControl
					label='Subtract 15'
					clicked={() => this.props.subtract(15)}
				/>
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>
					Store Result
				</button>
				<ul>
					{this.props.storedResults.map(strResult => (
						<li
							key={strResult.id}
							onClick={() => this.props.onDeleteResult(strResult.id)}
						>
							{strResult.value}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		onAddCounter: () => dispatch(actionCreators.add(10)),
		onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
		onStoreResult: result => dispatch(actionCreators.storeResult(result)),
		onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
	};
};

export default connect(
	mapStateToProps,
	//mapDispatchToProps
	{ increment, decrement, add, subtract }
)(Counter);

//connect is function which returns higher order component
