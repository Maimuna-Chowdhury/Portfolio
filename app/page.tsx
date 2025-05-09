export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#2d0b00] text-white">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-10">
        {/* Left Side: Introduction + Stats Cards */}
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            I’m Maimuna Chowdhury, a Computer Science Student
          </h1>
          

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Stats Card 1 */}
            <div className="bg-[#2f1b3a] p-8 rounded-xl shadow-lg text-center">
              <h2 className="text-4xl font-bold text-blue-400">4 years</h2>
              <p className="text-lg mt-4">Computer Science</p>
            </div>

            {/* Stats Card 2 */}
            <div className="bg-[#2f1b3a] p-8 rounded-xl shadow-lg text-center">
              <h2 className="text-4xl font-bold text-blue-400">10+</h2>
              <p className="text-lg mt-4">Projects Completed</p>
            </div>

            {/* Stats Card 3 */}
            <div className="bg-[#2f1b3a] p-8 rounded-xl shadow-lg text-center">
              <h2 className="text-4xl font-bold text-blue-400">4+</h2>
              <p className="text-lg mt-4">Programming Languages</p>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Picture (Square Image) */}
        <div className="flex justify-center items-center">
          <img
            src="/disha1.jpg" // Replace with your actual photo path
            alt="Maimuna Chowdhury"
            className="w-96 h-96 object-cover border-4 border-white"
          />
        </div>
      </section>
    </main>
  );
}
