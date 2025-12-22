import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pay from './components/Pay.jsx';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';

function App() {

  return (
    <CssVarsProvider>
      <Box sx={{ flexGrow: 1, p: 2, border: '1px solid black' }}>
        <div className="app-container">
          
          <div className="main-content">
            <Pay />
          </div>
        </div>
      </Box>
    </CssVarsProvider>
  )
}

export default App