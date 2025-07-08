export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src="/banner.png"
          alt="Dyan Banner"
          className="mx-auto mb-10 rounded-md shadow-xl"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build REST APIs Visually. <br />
          Deploy in Rust.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Dyan is a self-hosted platform to build, test, and export blazing-fast
          APIs from your database using visual tools and JavaScript/Python
          logic.
        </p>

        <a
          href="https://github.com/dyan-dev/dyan"
          className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
          target="_blank"
        >
          🌟 View on GitHub
        </a>
      </div>
      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dyan — Built with ❤️ by open-source
        contributors
      </footer>
    </main>
  );
}
