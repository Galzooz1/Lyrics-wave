import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import HomePage from './components/HomePage/homePage';
import { Footer } from './components/HomePage/Footer';
import { Header } from "./components/HomePage/Header";

function App() {

  return (
    <>
      <Header />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


