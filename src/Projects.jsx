export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Startup Success Prediction",
      image: "/startup.png", // Ensure this image exists in your public folder
      description: [
        "A **full-stack Django web application** predicting startup success likelihood.",
        "**Objective:** Forecast startup viability using diverse ML models.",
        "**Tech Stack:** **Python, Django, Scikit-learn, HTML, CSS, JavaScript.**",
        "**ML Models:** **Naive Bayes, XGBoost, AdaBoost, Random Forest.**",
        "**Key Features:** **Dataset upload, model performance visualization, real-time prediction dashboard.**",
        "**Accuracy (XGBoost):** **79.5%**"
      ],
      link: "https://github.com/chanduaguru/startup-success-prediction.git" // Replace with actual link
    },
    {
      id: 2,
      title: "Employee Salary Prediction",
      image: "/salary.png", // Ensure this image exists in your public folder
      description: [
        "A **data science project** focused on predicting employee income levels.",
        "**Methodology:** **Regression-based analysis** using demographic and professional features.",
        "**Dataset:** Utilized the well-known **Adult dataset**.",
        "**Tech Stack:** **Python, Pandas, Scikit-learn, Matplotlib.**",
        "**Outcome:** Provided **data-driven insights** into key factors influencing salary progression."
      ],
      link: "https://github.com/chanduaguru/Employee_Salary_Prediction.git" // Replace with actual link
    },
    {
      id: 3,
      title: "Court-Data Fetcher & Mini-Dashboard",
      image: "/court.png", // Ensure this image exists in your public folder
      description: [
        "An **internship project** automating court case data collection and visualization.",
        "**Automation:** Collects legal data efficiently via **APIs**.",
        "**Visualization:** Presents key metrics in a **clean, intuitive dashboard**.",
        "**Tech Stack:** **Python, Flask, Requests, Chart.js.**",
        "**Goal:** Enhance public access and understanding of legal performance metrics."
      ],
      link: "https://github.com/chanduaguru/Court-Data-Fetcher.git" // Replace with actual link
    },
    // Add more projects here following the same structure
  ];

  return (
    <section 
      id="projects" 
      style={{
        backgroundImage: `url('/projects.avif')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
      className="py-28 px-8 md:px-20 text-center relative" 
    >
      <h2 className="text-4xl font-bold mb-16 text-black text-shadow-md">My Projects</h2> 

      <div className="max-w-6xl mx-auto space-y-24"> 
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            // Ensures both image and description take roughly equal space
            className={`flex flex-col md:flex-row items-stretch gap-12 ${ // Changed items-center to items-stretch for equal height
              index % 2 === 1 ? 'md:flex-row-reverse' : '' 
            }`}
          >
            {/* Project Image - Now responsive within its md:w-1/2 container */}
            <div className="md:w-1/2 flex justify-center relative z-10"> 
              <img 
                src={project.image} 
                alt={project.title} 
                // Increased height and ensured it fills its width, object-cover maintains aspect ratio
                className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-blue
                -200"
              />
            </div>

            {/* Project Description - Now with a creamy background and updated font */}
            <div 
              className="md:w-1/2 text-left bg-opacity-90 p-8 rounded-lg shadow-xl relative z-10 
                          flex flex-col justify-between font-serif text-gray-800"
              style={{ backgroundColor: '#F3F4F6' }} // Explicit light gray hex code (Tailwind's gray-100)
            > 
              <div> 
                {/* Wrapper for title and description to push button to bottom */}
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{project.title}</h3>
                <div className="space-y-2 mb-6 text-lg leading-relaxed"> {/* Increased font size slightly for readability */}
                  {project.description.map((point, pointIndex) => (
                    <p key={pointIndex} dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block self-start bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition duration-300 mt-4"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}