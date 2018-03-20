import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {							// When we use a functional component, this props object will arrive as an argument
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key = {video.etag} video = {video} />
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;