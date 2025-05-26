import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './pages/Home/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}>
				<Home />
			</PersistGate>
		</Provider>
	</StrictMode>
)
