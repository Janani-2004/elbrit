import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
          <Link href="#hero">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#ingredients">Ingredients</Link>
          <Link href="#news">News</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
