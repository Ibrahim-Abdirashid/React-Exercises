import { useParams } from 'react-router';

// Xogta tijaabada ah oo faahfaahsan (Waa inaad u wareejisaa file kale hadhow)
const allRecipes = [
  { id: '1', title: 'Spaghetti Bolognese', description: 'Classic Italian dish with meat sauce.', details: 'Requires ground beef, tomatoes, and herbs. Cook for 1 hour.', category: 'Dinner' },
  { id: '2', title: 'Chicken Curry', description: 'Spicy and flavorful Indian dish.', details: 'Needs chicken breast, coconut milk, and curry powder. Serve with rice.', category: 'Dinner' },
  { id: '3', title: 'Tuna Salad Sandwich', description: 'Quick and easy lunch.', details: 'Mix canned tuna with mayo and celery. Spread on toasted bread.', category: 'Lunch' },
  { id: '4', title: 'Chocolate Cake', description: 'Perfect dessert.', details: 'Bake for 30 minutes. Frost with chocolate ganache.', category: 'Dessert' },
];

const RecipeDetails = () => {
  const { recipeId } = useParams(); 
  
  const recipe = allRecipes.find(r => r.id === recipeId);

  if (!recipe) {
    return <h2>Recipe-gaan Lama Helin (ID: {recipeId})</h2>;
  }

  return (
    <div className='max-w-6xl mx-auto mt-10 flex flex-col gap-3 bg-amber-50 shadow-md p-3 rounded'>
      <h1 className='font-black'>{recipe.title}</h1>
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Category:</strong> {recipe.category}</p>
      <hr />
      <h3>Preparation Details:</h3>
      <p>{recipe.details}</p>
    </div>
  );
};

export default RecipeDetails;