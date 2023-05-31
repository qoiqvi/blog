import { render } from 'react-dom'
import App from './App/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'App/provider/ThemeProvider'
import './shared/config/i18next'
render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
