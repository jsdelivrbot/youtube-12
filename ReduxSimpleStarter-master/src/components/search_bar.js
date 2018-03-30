import React, { Component } from 'react';		// We do this cause the JSX transpiles into HTML and React.createElement is used. This { Component } is from React library hence React.Component is replaced with Component
												// It literally means import react and pull off the property called component as a variable called component
class SearchBar extends Component {			// Define a new class SearchBar & give it access to all of the functionality that React.Component class has
	constructor(props) {
		super(props);

		this.state = { term: '' };		// This is the only time you should manually change state. When you render the component, use this.setState ALWAYS.
	}

	render() {								// Every class based React component that we create, should have a render method. It should return some JSX. Else it'll cause an error.
		return (
			<div className="search-bar">							
				<input
					value = { this.state.myText }
					onChange = { (event) => this.onInputChange(event.target.value)} />
			</div>							// Above event could be written without () too as it's a single argument.
		);									// Whenever we write JSX with JS variables, we wrap it with curly braces.
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;	// Making sure that we export only the searchbar component whenthis file is imported anywhere in our project.


