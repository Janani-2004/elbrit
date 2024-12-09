import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Essential Vitamins</h1>
        <p>Your one-stop shop for online medical supplies.</p>
        <button>See More</button>
      </div>
      <Image src="/product-image.png" alt="Product" width={400} height={400} />
    </section>
  );
}
