
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componete/footer';
import NavBar from './componete/navBar';
import About from './pages/about';
import Filmes from './pages/filmes';
import Home from './pages/home';
import Series from './pages/series';
import View from './pages/view';
import { useState, useEffect } from 'react';
import Page404 from './pages/404';
import { Api } from './service';

function App() {
  const [page, listPage] = useState(Boolean);
  useEffect(() => {
    Api.get("/")
      .then(() => { listPage(true) })
      .catch(() => { listPage(false); })

  }, []);

  return (
    <>
      {page === true ? <>
        <div className="App">
          <NavBar />
          {/* <AuthProvider> */}
          <BrowserRouter>
            <Routes>
              {/* rota public */}
              <Route path="*" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/filmes" element={<Filmes />} />
              <Route path="/series" element={<Series />} />
              <Route path="/produto" element={<View />} />

            </Routes>
          </BrowserRouter>
          {/* </AuthProvider> */}
          <Footer />
        </div>
      </>
        : <Page404 />}
    </>
  )
}

export default App
