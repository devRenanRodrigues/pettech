import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { FaPaw } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';

export function Header() {
  const { totalItems } = useContext(CartContext);

  return (
    <header className="fixed top-0 left-0 w-full z-50 neon-bg px-6 py-4 flex justify-between items-center">
      <Link to="/" aria-label="Home">
        <h1 className="text-3xl font-extrabold flex items-center gap-2 select-none">
          <FaPaw size={28} className="text-[#FF6EC7]" />
          <span className="text-white">Pet</span>
          <span className="animate-logo-flash">Tech</span>
        </h1>
      </Link>

      <Link
        to="/cart"
        className="relative neon-green hover:neon-pink transition duration-300"
        aria-label="Carrinho"
      >
        <BsCart3 size={30} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#FF6EC7] text-black text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold neon-shadow pulse-neon">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
}
