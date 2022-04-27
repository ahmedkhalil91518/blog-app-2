import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import SignupLogin from "./components/SignupLogin/SignupLogin";
import Home from "./components/Home/Home";
import Post from "./components/Post/Post";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/signup-login" element={<SignupLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
