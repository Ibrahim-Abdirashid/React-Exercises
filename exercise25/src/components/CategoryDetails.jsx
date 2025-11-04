import { useParams , Link} from 'react-router';


const allRecipes = [
  { id: '1', title: 'Spaghetti Bolognese', category: 'Dinner' },
  { id: '2', title: 'Chicken Curry', category: 'Dinner' },
  { id: '3', title: 'Pancakes', category: 'Breakfast' }, 
  { id: '4', title: 'Oatmeal Bowl', category: 'Breakfast' }, 
  { id: '5', title: 'Tuna Salad Sandwich', category: 'Lunch' },
  { id: '6', title: 'Chocolate Cake', category: 'Dessert' },
];

const CategoryDetails = () => {
  const { categoryName } = useParams(); 
  
  const filteredRecipes = allRecipes.filter(r => r.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div className='max-w-6xl mx-auto mt-6 bg-amber-50 shadow-md p-2 rounded-2xl'>
      <h1>Recipes in: {categoryName}</h1>
      <p>Halkan waxaa ku jira {filteredRecipes.length} recipe oo ku jira category-ga {categoryName}.</p>
      
      <div style={{ marginTop: '20px' }}>
        {filteredRecipes.length > 0 ? (
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id} style={{ marginBottom: '10px', fontSize: '1.2em' }}>
                        <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#0056b3' }}>
                           {recipe.title}
                        </Link>
                    </li>
                ))}
            </ul>
        ) : (
            <p>Wali wax recipe ah laguma darin category-gaan.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;