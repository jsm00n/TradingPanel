import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from 'pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
