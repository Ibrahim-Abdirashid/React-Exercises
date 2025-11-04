import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout'
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import Categories from './components/Categories';
import RecipeDetails from './components/RecipeDetails'; 
import CategoryDetails from './components/CategoryDetails'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} /> 
          <Route path="recipes" element={<RecipeList />} /> 
          <Route path="recipes/:recipeId" element={<RecipeDetails />} /> 
          
          <Route path="categories" element={<Categories />} /> 
          <Route path="categories/:categoryName" element={<CategoryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;