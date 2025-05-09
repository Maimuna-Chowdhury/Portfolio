import { FaLaptopCode, FaDatabase, FaTools, FaFolder } from 'react-icons/fa'; // Importing icons

export default function SkillsPage() {
  return (
    <main className="min-h-screen p-10 bg-gradient-to-br from-[#1a1a2e] to-[#2d0b00] text-white">
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Technical Competencies</h1>
        <p className="text-gray-300 text-lg">
          These are technical skills that I’ve acquired so far in my student life.
          
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Languages Section */}
          <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              <FaLaptopCode className="inline mr-2 text-2xl" /> Languages
            </h2>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Dart</li>
            </ul>
          </div>

          {/* Database/API & Frameworks/Tools Section */}
          <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              <FaDatabase className="inline mr-2 text-2xl" /> Database/API
            </h2>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              <li>MySQL</li>
              <li>Firebase</li>
              <li>OpenGl</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              <FaTools className="inline mr-2 text-2xl" /> Frameworks/Tools
            </h2>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              <li>Next.js</li>
              <li>Git</li>
              <li>Flutter</li>
              <li>Laravel</li>
            </ul>
          </div>

          {/* Interests Section */}
          <div className="bg-[#2f1b3a] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              <FaFolder className="inline mr-2 text-2xl" /> Interests
            </h2>
            <ul className="text-sm text-gray-300 list-disc list-inside">
              <li>Software Engineering</li>
              <li>Software Development</li>
              <li>UI Development</li>
              <li>Deep Learning</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
