import { Link } from 'react-router-dom';

export default function Home() { 
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-20"
      style={{
        backgroundImage: `url('/wallpaperimage.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-20 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
        
        {/* Left image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/profileimage.png" 
            alt="Aguru"
            // Changed border color to dark black
            className="w-64 h-64 object-cover rounded-full border-4 border-black shadow-lg"
          />
        </div>

        {/* Right text */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Changed text color to dark black */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            I’m <span className="text-black">Chandu</span>,  Software Engineer
          </h1>
          {/* Changed paragraph text color to a darker gray for better contrast */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            Driven to build efficient, well-tested software while continuously learning and implementing best 
            practices for high-quality solutions.
          </p>
          <Link
            to="/contact"
            // Changed button background color to dark black
            className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}