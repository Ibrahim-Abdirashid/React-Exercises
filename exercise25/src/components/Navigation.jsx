import { NavLink } from "react-router"




const Navigation = () => {
  return (
    <nav className="flex justify-around items-center shadow-md h-15">
      <h1 className="font-bold text-2xl text-pink-800">Recipe Book</h1>
      <ul className="flex gap-5 ">
        <NavLink to="/" className="text-base font-medium">Home</NavLink>
        <NavLink to="/recipes" className="text-base font-medium" >Recipes</NavLink>
        <NavLink to="/categories" className="text-base font-medium">Categories</NavLink>
      </ul>
    </nav>
  )
}

export default Navigation