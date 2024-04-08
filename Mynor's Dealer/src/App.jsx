import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, } from "./Pages/index";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
