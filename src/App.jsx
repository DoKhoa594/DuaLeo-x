import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Thêm các trang khác như /about, /cart ở đây nếu cần */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
