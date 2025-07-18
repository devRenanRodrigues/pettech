import { FaPaw } from 'react-icons/fa';

export function Logo() {
  return (
    <h1 className="text-3xl font-extrabold flex items-center gap-2 select-none">
      <FaPaw size={28} className="neon-pink" />
      <span className="neon-pink">Pet</span>
      <span className="neon-blue">Tech</span>
    </h1>
  );
}
