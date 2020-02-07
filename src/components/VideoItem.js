import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
	render() {
		const { item, onVideoSelect } = this.props;
		return (
			<div className="video-item item" onClick={() => onVideoSelect(item)}>
				<img className="ui image" alt={item.snippet.title} src={item.snippet.thumbnails.medium.url} />
				<div className="content">
					<div className="header">{item.snippet.title}</div>
				</div>
			</div>
		);
	}
}

export default VideoItem;
