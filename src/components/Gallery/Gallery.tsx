import { useSelector } from 'react-redux'
import { RootState } from '../../redux/types'

export const Gallery = () => {
	const gallery = useSelector((state: RootState) => state.gallery.gallery)

	return (
		<div>
			{gallery.length > 0 &&
				gallery.map((image) => {
					return (
						<div key={image.id}>
							<p>{image.title}</p>
						</div>
					)
				})}
		</div>
	)
}
