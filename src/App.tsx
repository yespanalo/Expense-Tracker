
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login-signup-pages/login-page';
import { HomePage } from './pages/hom-page';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  )

}

export default App
