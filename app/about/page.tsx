import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa'; // Importing Facebook icon

export default function AboutPage() {
  return (
    <main className="min-h-screen p-10 bg-gradient-to-br from-[#1a1a2e] to-[#2d0b00] text-white">
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center relative">
        
        {/* Top-right Icons */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-400 hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Maimuna-Chowdhury" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-gray-500">
            <FaGithub />
          </a>
          <a href="mailto:maimunachowdhury258@gmail.com" className="text-3xl text-red-500 hover:text-red-600">
            <FaEnvelope />
          </a>

          {/* Facebook Icon */}
          <a href="https://web.facebook.com/tanzum.disha.7/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-700">
            <FaFacebook />
          </a>
        </div>

        {/* Left Side: Description */}
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-300 mb-4">
            I am a graduating student in Computer Science and Engineering from Khulna University of Engineering and Technology (KUET). 
            My passion lies in coding, software development, and designing. I love tackling challenges and building solutions through programming.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            When I’m not coding, I enjoy spending my leisure time reading, traveling, and painting. These activities help me recharge and fuel my creativity.
          </p>

          {/* Future Goals */}
          <h2 className="text-2xl font-semibold mb-4">Future Goals</h2>
          <p className="text-lg text-gray-300 mb-4">
            In the future, I aim to build my career in web development. I am particularly excited about exploring full-stack development, building dynamic web applications, and enhancing user experiences. I plan to deepen my expertise in technologies like React, Next.js, and Node.js. I'm also eager to contribute to open-source projects, collaborate with other developers, and stay updated with the latest trends in web technologies.
          </p>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="flex justify-center">
          <img
            src="/disha.jpg"  // Replace with your actual photo
            alt="Maimuna Chowdhury"
            className="rounded-full w-64 h-64 object-cover border-4 border-white"
          />
        </div>
      </section>
    </main>
  );
}
