import { Link } from 'react-router';


const CategoryCard = ({ category }) => {
  return (
    // Link-ga wuxuu u dirayaa /categories/MagacaCategory-ga
    <Link 
      to={`/categories/${category.name}`} 
      className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-300 rounded-md shadow-md transition-transform transform hover:scale-105"
    >
      <div className='font-medium text-5xl mb-4'>{category.image}</div>
      <h4 className='text-blue-500'>{category.name}</h4>
    </Link>
  );
};

export default CategoryCard;