const Video = ({ source }: any) => {
	const link = `https://drive.google.com/file/d/1Xx5JZH_AMpHpgL9RDF7XwUB6aC_X9hGZ/preview`;
	return (
		<div>
			<iframe
				width={640}
				height={480}
				title="video-player"
				src={source}
				allow="autoplay"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default Video;
