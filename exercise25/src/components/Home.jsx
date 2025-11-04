import { NavLink } from "react-router"




function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10 gap-8">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold">Welcome To Recipe Book</h1>
          <p className="text-xl font-medium text-gray-700">Discover delicious recipes from around the world.</p>
        </div>
      <div className="flex gap-6">
        <NavLink to="/recipes" className="flex flex-col items-center gap-5 bg-red-800 text-white p-3 rounded">
          <h1 className="text-xl font-bold">Browse Recipes</h1>
          <p className="text-base font-medium">Explore our collection of delicious recipes</p>
        </NavLink>
        <NavLink to="/categories" className="flex flex-col items-center gap-5 bg-red-800 text-white p-3 rounded">
          <h1 className="text-xl font-bold"> Recipe Categories</h1>
          <p className="text-base font-medium">Explore our collection of delicious recipes</p>
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home