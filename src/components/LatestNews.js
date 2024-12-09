export default function LatestNews() {
    const news = [
      { title: 'Benefits of Turmeric', date: '21 Mar 2023', image: '/news1.png' },
      { title: 'Probiotics in Daily Diet', date: '22 Mar 2023', image: '/news2.png' },
    ];
  
    return (
      <section id="news" className="latest-news">
        <h2>Latest News</h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <div key={index} className="news-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  