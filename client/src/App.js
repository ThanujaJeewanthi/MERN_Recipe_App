import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";  // Named export
import {Auth} from "./pages/auth";              // Default export
import {CreateRecipe} from "./pages/create-recipe";  
import {Home} from "./pages/home";  
import {SavedRecipes} from "./pages/saved-recipes";  



function App() {
  return (
    <div className="App">
       <h1>Hello, React!</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;