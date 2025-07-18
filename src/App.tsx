import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { ProductDetail } from './pages/ProductDetail';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';  // Importa aqui

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />

      <WhatsAppButton phoneNumber="5591984091201" message="Olá! Gostaria de mais informações." />
    </>
  );
}
