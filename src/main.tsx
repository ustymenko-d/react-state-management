import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import AppContextProvider from './store/AppContextProvider'
import Home from './pages/Home/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppContextProvider>
			<Home />
		</AppContextProvider>
	</StrictMode>
)
