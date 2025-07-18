
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = '' }: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center animate-pulse transition-colors duration-300 z-50"
      aria-label="Contato via WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.854 11.854 0 0012 0C5.373 0 0 5.373 0 12a11.937 11.937 0 001.84 6.17L0 24l5.91-1.91A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.56 16.7c-2.61 0-5.1-1.37-6.46-3.53l-.46-.7 2.44-2.34.26.17a4.405 4.405 0 005.04-5.04l-.17-.26 2.34-2.44.7.46a6.648 6.648 0 01-3.65 11.74z"/>
      </svg>
    </a>
  );
}
