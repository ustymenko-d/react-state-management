import PropTypes from 'prop-types';

export const InfoBlock = ({ count, isDarkTheme }) => {
	return (
		<div>
			<h2>Count: {count}</h2>
			<h2>Current theme: {isDarkTheme ? 'dark' : 'light'}</h2>
		</div>
	);
};

InfoBlock.propTypes = {
	count: PropTypes.number,
	isDarkTheme: PropTypes.bool,
};
