import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook,FaDownload  } from 'react-icons/fa'; // Importing Facebook icon
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#2d0b00] text-white">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-8">
        
        {/* Left Side: Introduction + Stats */}
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
  Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
    Maimuna Chowdhury 👋
  </span>
</h1>

          <p className="text-lg text-gray-300">
  I am a final-year Computer Science and Engineering student, soon to graduate.
          </p>
<a
  href="/resumeMaimuna.pdf"
  download
  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 max-w-max"
>
  <FaDownload className="mr-2" />
  Download CV
</a>


          {/* Social Icons (relocated below paragraph with spacing) */}
<div className="flex space-x-4 mt-6 mb-6">
  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-400 hover:text-blue-500">
    <FaLinkedin />
  </a>
  <a href="https://github.com/Maimuna-Chowdhury" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-gray-500">
    <FaGithub />
  </a>
  <a href="mailto:maimunachowdhury258@gmail.com" className="text-3xl text-red-500 hover:text-red-600">
    <FaEnvelope />
  </a>
  <a href="https://www.facebook.com/dishamaimuna" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-700">
    <FaFacebook />
  </a>
</div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 gap-7">
            {/* Academic Experience */}
            <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg text-center w-full col-span-2">
              <h2 className="text-3xl font-semibold text-blue-400">About Me</h2>
              <p className="text-md mt-2 text-gray-200">I am a student from Khulna University of Engineering & Technology (KUET). I am passionate and energized in initiating my career as an academic lecturer because I want to teach and I want to research. My professional focuses are in prospected fields of technology, thus, I aim my studies and research towards Machine Learning, Deep Learning, Artificial Intelligence, and Image Processing. It is my goal to conduct influential research that expands the horizons of academic scholarship and advances the development of intelligent systems. Being a researcher would allow me to make a difference and motivate coming generations while breaking barriers in AI.</p>
            </div>

            
          </div>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="flex justify-center items-center">
          <img
            src="/disha.jpg" // Update path if needed
            alt="Maimuna Chowdhury"
            className="w-80 h-80 object-cover rounded-xl border-4 border-white shadow-md"
          />
        </div>
      </section>
    </main>
  );
}
