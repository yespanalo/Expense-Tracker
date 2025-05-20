
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login-signup-pages/login-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
