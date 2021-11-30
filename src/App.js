import Home from "./Pages/Home/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProjectDelails from "./Pages/ProjectDetails/ProjectDelails";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/project/:projectId' element={<ProjectDelails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
