import React, { useState } from "react";
import { FiDownload, FiSearch, FiLayers } from "react-icons/fi";
import socialPostImg from "./assets/Glass water Boy.png";
import socialPostFile from "./assets/Glass water Boy.ai";
import PeopleImg from "./assets/Boy_Drinking_Water_2.png";
import PeopleFile from "./assets/Boy_Drinking_Water.ai";
import bannerImg from "./assets/Banner.png";
import { FiZoomIn } from "react-icons/fi";

const vectors = [
  {
    id: 1,
    title: "Social Media Post Healthcare Tips",
    category: "Social Media",
    img: socialPostImg,
    file: socialPostFile,
  },

  {
    id: 1,
    title: "Boy Drinking Water Illustration",
    category: "People",
    img: PeopleImg,
    file: PeopleFile,
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [preview, setPreview] = useState(null);
  const [downloadCount, setDownloadCount] = useState(50);
  const [isZoomed, setIsZoomed] = useState(false);

  const categories = ["All", "Social Media", "People"];

  const filteredVectors = vectors.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-neutral-950 text-white">
      {/* Sidebar */}
      <aside className="w-20 sm:w-64 bg-neutral-950 border-r border-neutral-800 flex flex-col p-6">
        <h1 className="hidden sm:block text-3xl font-bold text-green-600 mb-12 tracking-tight">
          Chiccu.in
        </h1>
        <nav className="flex flex-col gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-base transition-all ${
                selectedCategory === cat
                  ? "bg-green-600 text-white"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}
            >
              <FiLayers />
              <span className="hidden sm:block">{cat}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto hidden sm:block text-neutral-500 text-sm pt-10">
          © 2025 Chiccu.in
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Hero Banner */}
        <div className="relative w-full h-[50vh] sm:h-[40vh] overflow-hidden">
          <img
            src={bannerImg}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-4">
              FREE CUSTOMIZABLE VECTOR DESIGN TO SUIT YOUR NEEDS
            </h1>
            <p className="text-lg sm:text-xl text-white-400 font-medium">
              30+ users downloaded
            </p>
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-neutral-950" />
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mt-10 mb-12 px-6">
          <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <FiSearch className="absolute left-5 top-6 text-neutral-500 text-xl" />
            <input
              type="text"
              placeholder="Search vector designs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-5 pl-14 pr-6 text-lg rounded-full bg-neutral-800 text-white placeholder-neutral-400
                focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-black
                transition-all duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
        </div>

        {/* Vector Grid */}
        <h2 className="text-2xl font-semibold mb-6 px-6">
          {selectedCategory === "All" ? "All Vectors" : selectedCategory}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 pb-12">
          {filteredVectors.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer bg-neutral-900 hover:bg-neutral-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all group relative"
              onClick={() => setPreview(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg mb-3 w-full h-50 object-cover"
              />
              <h3 className="font-semibold text-base text-white truncate">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500">{item.category}</p>
              <a
                href={item.file}
                download
                onClick={(e) => {
                  e.stopPropagation();
                  setDownloadCount((prev) => prev + 1); // increment count
                }}
                className="absolute bottom-4 right-4 bg-green-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <FiDownload />
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Preview Modal */}
      {preview && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-neutral-900 rounded-xl p-6 max-w-md w-full text-center shadow-xl">
            <div className="relative mb-4">
              <a href={preview.img} target="_blank" rel="noopener noreferrer">
                <img
                  src={preview.img}
                  alt={preview.title}
                  className="rounded-lg w-full h-64 object-cover cursor-pointer hover:opacity-90 transition"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white p-2 rounded-full">
                  <FiZoomIn className="text-lg" />
                </div>
              </a>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              {preview.title}
            </h2>
            <p className="text-base text-neutral-500 mb-4">
              {preview.category}
            </p>

            {/* Description Section */}
            <div className="text-left text-sm text-neutral-400 mb-6 space-y-2">
              <p>
                <span className="text-white font-medium">File Included:</span>{" "}
                Ai, PNG
              </p>
              <p>
                <span className="text-white font-medium">Compatible With:</span>{" "}
                Adobe Illustrator
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setDownloadCount((prev) => prev + 1);
                  const link = document.createElement("a");
                  link.href = preview.file;
                  link.download = "";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-500 transition"
              >
                <FiDownload /> Download
              </button>
              <button
                onClick={() => setPreview(null)}
                className="px-6 py-3 bg-neutral-700 text-white rounded-full hover:bg-neutral-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
