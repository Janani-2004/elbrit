export default function Features() {
    const features = [
      { icon: '/icons/feature1.png', title: 'Clinically Studied', description: 'Verified by experts.' },
      { icon: '/icons/feature2.png', title: 'Vegetarian Friendly', description: 'Safe for vegetarians.' },
      { icon: '/icons/feature3.png', title: 'Made in India', description: 'Locally manufactured.' },
    ];
  
    return (
      <section id="features" className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  