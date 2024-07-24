import PropTypes from 'prop-types';

export const Gallery = ({ gallery }) => {
	return (
		<div>
			{gallery.length > 0 &&
				gallery.map((image) => {
					return (
						<div key={image.id}>
							<p>{image.title}</p>
						</div>
					);
				})}
		</div>
	);
};

Gallery.propTypes = {
	gallery: PropTypes.array,
};
