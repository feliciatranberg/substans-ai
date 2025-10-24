import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
// import Live from "./pages/Live.jsx";
// import Studio from "./pages/Studio.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/live" element={<Live />} />
        <Route path="/studio" element={<Studio />} /> */}
      </Routes>
    </Layout>
  );
}
