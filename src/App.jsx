import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </main>

      <ToastContainer />
    </div>
  )
}

export default App;