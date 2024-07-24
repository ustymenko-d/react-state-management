export const fetchGallery = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
			.then((response) => response.json())
			.then((json) => {
				dispatch({ type: 'FETCH_GALLERY', payload: json });
			});
	};
};
