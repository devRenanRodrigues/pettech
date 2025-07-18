import { BsCartPlus } from 'react-icons/bs';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { CartContext } from '../../contexts/CartContext';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div
      className="p-4 pt-24 min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url('https://www.petz.com.br/blog/wp-content/uploads/2015/06/shutterstock_126021596.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-3xl font-extrabold mb-6 neon-title text-center">🐾 Produtos em Destaque 🐾</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="neon-card fade-in flex flex-col justify-between min-h-[360px]">
            <div>
              <img
                src={product.cover}
                alt={product.title}
                className="w-full h-40 object-contain mb-3 rounded"
              />
              <h2 className="text-xl font-bold mb-1">{product.title}</h2>
              {/* descrição removida da home */}
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <p className="text-lg font-bold text-green-400">
                R$ {product.price.toFixed(2)}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => addItemToCart(product)}
                  className="neon-button flex-1 flex items-center justify-center gap-2"
                >
                  <BsCartPlus size={18} />
                  Adicionar
                </button>

                <Link
                  to={`/product/${product.id}`}
                  className="neon-button flex-1 text-center"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
