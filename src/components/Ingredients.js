export default function Ingredients() {
    const ingredients = [
      { title: 'Vitamin C', description: 'Boosts immunity.', icon: '/icons/vitamin-c.png' },
      { title: 'Vitamin B3', description: 'Improves energy.', icon: '/icons/vitamin-b3.png' },
      { title: 'Magnesium', description: 'Strengthens bones.', icon: '/icons/magnesium.png' },
    ];
  
    return (
      <section id="ingredients" className="ingredients">
        <h2>Better Ingredients</h2>
        <div className="ingredient-grid">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-card">
              <img src={ingredient.icon} alt={ingredient.title} />
              <h3>{ingredient.title}</h3>
              <p>{ingredient.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  