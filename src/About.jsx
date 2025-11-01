export default function About() {
  return (
    <section
      id="about"
      // Added wallpaper style to the section
      style={{
        backgroundImage: `url('/about.avif')`, // <-- CHANGE THIS to your image if different
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      // Removed bg-[#141414] as wallpaper will cover it, text-white needs to be re-evaluated for contrast
      className="text-black px-6 md:px-20 py-24 min-h-screen flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Added an overlay div to ensure text readability on top of the wallpaper */}
      <div className="absolute inset-0 bg-white opacity-75"></div> 
      
      <div className="relative z-10 md:w-1/2"> {/* Added relative z-10 to bring content forward */}
        {/* Changed text color to black for better contrast with the potentially lighter wallpaper */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">About Me</h2> 
        {/* Changed paragraph text color to a darker gray for better contrast */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Hi, I’m Aguru Chandu — an AI Engineer and Web Developer crafting smart, scalable, and beautifully simple digital experiences. I love transforming data and ideas into meaningful products that make technology feel effortless.
        </p>
      </div>

      <div className="relative z-10 md:w-1/2"> {/* Added relative z-10 */}
        {/* Changed list item text color to a darker gray for better contrast */}
        <ul className="space-y-3 text-gray-700 text-sm md:text-base"> 
          <li>• 1+ years in ML, NLP, and recommender systems</li>
          <li>• Strong focus on ATS-optimized resume design</li>
          <li>• Passionate about Ghibli-style visuals & creative tech</li>
          <li>• Currently building a mobile-friendly story game</li>
        </ul>
      </div>
    </section>
  );
}