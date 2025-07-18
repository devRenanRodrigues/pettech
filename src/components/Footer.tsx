import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 neon-bg py-6 mt-0 border-t border-neon-blue">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white gap-4">
        
        <h2 className="text-2xl font-extrabold neon-title">PetTech</h2>



        <div className="flex gap-6 text-2xl">
          <a href="https://www.linkedin.com/in/renan-rodrigues-387043277/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-green-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/devRenanRodrigues" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-green-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://wa.me/5591984091201" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-green-400 transition-colors">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-4 select-none">
        © 2025 PetTech. Desenvolvido por Renan Rodrigues - Todos os direitos reservados.
      </p>
    </footer>
  );
}
