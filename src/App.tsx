import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from 'pages'
import { ThemeProvider } from 'components/theme-provider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
