import { ThemeProvider } from 'styled-components'
import {JokeGenerator} from '../components/JokeGenerator'
import { defaultTheme } from '../themes/defaultTheme'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <JokeGenerator/>
    </ThemeProvider>
    
  )
}

export default App
