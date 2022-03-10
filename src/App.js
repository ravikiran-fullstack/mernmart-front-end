import data from "./data";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to='/'>MERNMART</Link>
        </header>
        <main>
          <Routes>
            <Route
              path='/product/:slug'
              element={<ProductScreen></ProductScreen>}
            ></Route>
            <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
