import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <style>{`
        @keyframes pulse-light {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.05); 
            opacity: 1;
          }
        }

        .pulse-light {
          animation: pulse-light 2.5s infinite; 
        }
      `}</style>
      
      <nav className="max-w-3xl mx-auto flex justify-center items-center py-2 px-4 space-x-12">
        
        <Link 
          to="/" 
          // Changed text color to dark black
          className="text-3xl font-bold text-black pulse-light"
        >
          Home
        </Link>
        
        <Link 
          to="/about" 
          // Changed text color to dark black
          className="text-3xl font-bold text-black pulse-light" 
          style={{ animationDelay: '0.5s' }}
        >
          About
        </Link>
        
        <Link 
          to="/projects" 
          // Changed text color to dark black
          className="text-3xl font-bold text-black pulse-light" 
          style={{ animationDelay: '1s' }}
        >
          Projects
        </Link>

      </nav>
    </header>
  );
}