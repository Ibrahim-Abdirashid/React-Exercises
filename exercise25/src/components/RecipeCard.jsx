

import RecipeCard from './components/RecipeCard'; 

const dummyRecipes = [ 
  { id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian dish.' },
  { id: 2, title: 'Chicken Curry', description: 'Spicy and flavorful.' },
  { id: 3, title: 'Tuna Salad Sandwich', description: 'Quick and easy lunch.' },
  { id: 4, title: 'Chocolate Cake', description: 'Perfect dessert.' },
];

const RecipeList = () => {
    return(

        <div>
            <h1>All Recipes</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    dummyRecipes.map(recipe=>(
                        <RecipeCard key={recipe.id}  recipe ={recipe}/>
                    ))
                }
            </div>
        </div>
    )
}

export default RecipeList