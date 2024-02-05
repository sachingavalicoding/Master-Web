import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, Footer } from "./components"
import { Home } from "./pages"
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App