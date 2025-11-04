import { Link } from 'react-router'; 

const dummyRecipes = [ 
  { id: '1', title: 'Spaghetti Bolognese', description: 'Classic Italian dish.' },
  { id: '2', title: 'Chicken Curry', description: 'Spicy and flavorful.' },
  { id: '3', title: 'Tuna Salad Sandwich', description: 'Quick and easy lunch.' },
  { id: '4', title: 'Chocolate Cake', description: 'Perfect dessert.' },
];

const RecipeCard = ({ recipe }) => (
    <Link to={`/recipes/${recipe.id}`}className=" py-5 px-2 border rounded-2xl no-underline space-y-4 mt-5 shadow-md bg-white" >
        <h4 className='font-medium'>{recipe.title}</h4>
        <p className='text-base'>{recipe.description}</p>
        <small className='bg-red-200 p-1 rounded'>Click for details</small>
    </Link>
);

const RecipeList = () => {
  return (
    <section className='max-w-6xl mx-auto mt-8'>
      <h2 className='font-bold text-2xl'>All Recipes</h2>
      <div  className='grid grid-cols-3 gap-6'>
        {dummyRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} /> 
        ))}
      </div>
    </section>
  );
};
export default RecipeList;