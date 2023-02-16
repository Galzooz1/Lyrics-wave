import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import HomePage from "./components/HomePage/homePage";
import Footer from "./components/Layout/footer";
import Header from "./components/Layout/header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
