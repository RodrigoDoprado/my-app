
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componete/footer';
import NavBar from './componete/navBar';
import About from './pages/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import DashboardIndex from './pages/dashboard';
import Cadastrar from './pages/dashboard/cadastrar';
import Perfil from './pages/dashboard/perfil';
import Filmes from './pages/filmes';
import Home from './pages/home';
import Series from './pages/series';
import View from './pages/view';

function App() {

  return (
    <div className="App">
      <NavBar />
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          {/* rota public */}
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/produto/:id" element={<View />} />
          {/* rotas private */}
          <Route path="/dashboard" element={<DashboardIndex />} />
          <Route path="/dashboard/produto" element={<Cadastrar />} />
          <Route path="/dashboard/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
      <Footer />
    </div>
  )
}

export default App
