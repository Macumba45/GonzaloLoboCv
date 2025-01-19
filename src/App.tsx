import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Reset } from 'styled-reset'
import Router from './router'

function App() {
    return (
        <StyledThemeProvider theme={theme}>
            <Reset />
            <Router />
        </StyledThemeProvider>
    )
}

export default App