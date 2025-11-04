import CategoryCard from "./CategoryCard";

const dummyCategories = [
  { id: 1, name: 'Breakfast', image: '🥞' },
  { id: 2, name: 'Lunch', image: '🥗' },
  { id: 3, name: 'Dinner', image: '🍝' },
  { id: 4, name: 'Dessert', image: '🍰' },
];

const Categories = () => {
  return (
    <section className="mt-10 max-w-6xl mx-auto ">
      <h2 className="font-bold text-2xl mb-8">Recipe Categories</h2>
      <div className='grid grid-cols-4 gap-6'>
        {dummyCategories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
export default Categories;
