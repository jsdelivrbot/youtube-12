import React, { Component } from 'react';				// Here path is not necessary as it's already namespaced. We can only one react.
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';		// Here path is necessary cause we could have 10 files named search_bar.js
import VideoList from './components/video_list';		// No need to include the extension so long as it is a .js file
import VideoDetail from './components/video_detail';
import VideoListItem from './components/video_list_item';

const API_KEY = 'AIzaSyDgHUdrYu4C1j8Br4Tw3DhaslN_ralAMq8';


// Create a new component. This component should produce some HTML

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
			// this.setState({ videos: videos });
		});
	}

	render() {
		return  (
			<div>
				<SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList 
					onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
					videos= {this.state.videos} />	
			</div>										// videos is the property name defined here on the JSX tag.
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)


ReactDOM.render(<App />, document.querySelector('.container'));			// Remember, we were required to pass the INSTANCE of App to RenderDOM
																		// App is class. <App /> is the instance.
																		// Hence, <App /> is passed. App is rendered to the Container class in HTML.