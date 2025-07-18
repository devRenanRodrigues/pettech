import { useContext, useEffect } from 'react'; // adicione o useEffect aqui
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { FaTrash, FaPlus, FaMinus, FaEye } from 'react-icons/fa';

export function Cart() {
  const {
    cart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  useEffect(() => {
    console.log('Carrinho atualizado:', cart);
  }, [cart]);

  return (
    <div className="pt-24 px-6 text-white min-h-screen bg-black">
      <h1 className="text-3xl font-bold mb-6 neon-title">🛒 Carrinho de Compras</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Seu carrinho está vazio.</p>
          <Link
            to="/"
            className="neon-back-button inline-block"
          >
            Voltar para a Home
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border p-4 rounded shadow neon-card"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-sm font-bold text-green-400">
                    R$ {item.price.toFixed(2)}
                  </p>
                  <p className="text-sm">Quantidade: {item.quantity}</p>
                  <p className="text-sm font-bold">
                    Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <Link
                    to={`/product/${item.id}`}
                    className="text-blue-400 text-sm hover:underline mt-1 inline-flex items-center gap-1"
                  >
                    <FaEye size={14} />
                    Ver detalhes
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                >
                  <FaMinus />
                </button>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="text-xl font-bold mb-2">Total: R$ {totalPrice.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
            >
              Limpar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
