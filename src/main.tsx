import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import Home from './pages/Home/Home'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}>
				<Home />
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
