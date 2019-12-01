import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
}

// Sends the state to a component as props.
const mapStateToProps = state => {
	return {
        // Now props.items === is the same as state.items
        items: state.items
	};
};

// Sends dispatches to props.
const mapDispatchToProps = dispatch => {
	return {
        // Now props.increaseCount = () => dispatch({ type: 'INCREASE_COUNT' })
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};


// Using the connect function, from 'react-redux', connects mapStateToProps & mapDispatchToProps to the App component. App component can then use props.items and props.increaseCount as functions.
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
