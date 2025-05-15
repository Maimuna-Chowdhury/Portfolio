export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-10 bg-gradient-to-br from-[#1a1a2e] to-[#2d0b00] text-white">
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">My Projects</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Portfolio Website */}
          <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
            <p className="text-sm text-gray-300 mb-4">
              This portfolio website built using **Next.js** and **Tailwind CSS** showcases my projects and skills.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-200"
            >
              View Project
            </a>
          </div>
          {/* AI */}
          <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">Card Matching Game</h2>
            <p className="text-sm text-gray-300 mb-4">
              A three level game between a player and an AI agent built using **Python** and **AI algorithms**.
            </p>
            <a
              href="https://github.com/Maimuna-Chowdhury/CardMatchingGame"
              className="text-blue-400 hover:text-blue-500 transition duration-200"
            >
              View Project
            </a>
          </div>
 {/* Image*/}
            <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">Hand Gesture Recognition</h2>
            <p className="text-sm text-gray-300 mb-4">
              A gesture recognition system built using **Binary masking**,**contour detection**, **finger matching**, and other image processing techniques
               for recognizing a digit from hand image.
            </p>
            <a
              href="https://github.com/Maimuna-Chowdhury/Image_Project_Digit_Recognition_from_Hand"
              className="text-blue-400 hover:text-blue-500 transition duration-200"
            >
              View Project
            </a>
          </div>
            {/* graphics */}
          <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">3D Airport Terminal</h2>
            <p className="text-sm text-gray-300 mb-4">
              A graphics project built using **OpenGL** and **C++** with Interactive camera controls for navigation.
            </p>
            <a
              href="https://github.com/Maimuna-Chowdhury/Graphics_Project_Airport_Simulation"
              className="text-blue-400 hover:text-blue-500 transition duration-200"
            >
              View Project
            </a>
          </div>
          {/* Cross-platform App */}
          <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">AgriPro App</h2>
            <p className="text-sm text-gray-300 mb-4">
              A cross-platform application built using **Flutter** and **Firebase** for connecting agriculture investors and farmers.
            </p>
            <a
              href="https://github.com/Maimuna-Chowdhury/Flutter-Investment-App"
              className="text-blue-400 hover:text-blue-500 transition duration-200"
            >
              View Project
            </a>
          </div>

          {/* android */}
          <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">CityGuide App</h2>
            <p className="text-sm text-gray-300 mb-4">
              An android app built using **Java** and **Firebase** to provide real-time information on Hotels, Restaurants, Hospitals, Institutions.
            </p>
            <a
              href="https://github.com/Maimuna-Chowdhury/Android_Project_CityGuide_App"
              className="text-blue-400 hover:text-blue-500 transition duration-200"
            >
              View Project
            </a>
          </div>
          
        
           

          
        </div>
      </section>
    </main>
  );
}
