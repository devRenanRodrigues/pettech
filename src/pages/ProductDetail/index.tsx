import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../../services/api';
import type { ProductProps } from '../Home';
import { CartContext } from '../../contexts/CartContext';

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen bg-black text-white flex items-center justify-center">
        <p>Carregando produto...</p>
      </div>
    );
  }

  return (
    <div className="pt-24 p-6 min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto neon-card p-6 rounded shadow-lg">
        <img
          src={product.cover}
          alt={product.title}
          className="w-full h-64 object-contain rounded mb-6"
        />
        <h1 className="text-3xl font-extrabold mb-4 neon-title">{product.title}</h1>
        <p className="text-gray-300 mb-6">{product.description}</p>
        <p className="text-2xl font-bold text-green-400 mb-6">
          R$ {product.price.toFixed(2)}
        </p>

        <button
          onClick={() => addItemToCart(product)}
          className="neon-button px-6 py-2 mb-4 rounded w-full"
        >
          Adicionar ao Carrinho
        </button>

        <Link
          to="/"
          className="neon-button inline-block text-center px-6 py-2 rounded w-full"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
