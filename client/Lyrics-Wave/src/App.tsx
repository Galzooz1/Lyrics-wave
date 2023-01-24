import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import HomePage from './components/HomePage/homePage';
import { Footer } from "./components/HomePage/footer";
import { Header } from "./components/HomePage/header";

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


