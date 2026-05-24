import { useState, useRef } from "react";
import {
  Image as ImageIcon,
  Video,
  Trophy,
  Users,
  Star,
  PlayCircle,
  X,
} from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const videoRefs = useRef([]);

  /* ----------------------------- PHOTOS ----------------------------- */

  const photos = [
    {
      image: "/assets/1.jpeg",
      title: "Tagant Workshop",
      category: "Photos",
    },

    {
      image: "/assets/2.jpeg",
      title: "Cultural Event",
      category: "Activities",
    },

    {
      image: "/assets/3.jpeg",
      title: "Group Picture",
      category: "Awards",
    },

    {
      image: "/assets/4.jpeg",
      title: "Teacher Excellence Award 2026",
      category: "Workshops",
    },

    {
      image: "/assets/5.jpeg",
      title: "Best Teacher Award 2025",
      category: "Photos",
    },

    {
      image: "/assets/6.jpeg",
      title: "Students Reviews",
      category: "Activities",
    },

    {
      image: "/assets/7.jpeg",
      title: "Students Reviews",
      category: "Photos",
    },

    {
      image: "/assets/8.jpeg",
      title: "Students Reviews",
      category: "Workshops",
    },

    {
      image: "/assets/9.jpeg",
      title: "Students Reviews",
      category: "Activities",
    },

    {
      image: "/assets/10.jpeg",
      title: "Gifts",
      category: "Awards",
    },

    {
      image: "/assets/11.jpeg",
      title: "Students Reviews",
      category: "Photos",
    },

    {
      image: "/assets/12.jpeg",
      title: "Students Reviews",
      category: "Activities",
    },
    {
      image: "/assets/13.jpeg",
      title: "First International Conference, Bharia University, Islamabad",
      category: "Awards",
    },
    {
      image: "/assets/14.jpeg",
      title: "Educational Growth",
      category: "Workshops",
    },
    {
      image: "/assets/15.jpeg",
      title: "Awards",
      category: "Awards",
    },
    {
      image: "/assets/16.jpeg",
      title: "2nd International Conference at Ripha University Lahore",
      category: "Photos",
    },
    {
      image: "/assets/17.jpeg",
      title: "Educational Growth",
      category: "Awards",
    },
    {
      image: "/assets/18.jpeg",
      title: "Students Love",
      category: "Photos",
    },
  ];

  /* ----------------------------- VIDEOS ----------------------------- */

  const videos = [
    {
      title: "Punjab Cultural Event",
      duration: "00:32 mins",
      src: "/assets/video1.mp4",
    },

    {
      title: "Teacher's Day",
      duration: "00:11 mins",
      src: "/assets/video2.mp4",
    },

    {
      title: "Teacher's Day",
      duration: "00:33 mins",
      src: "/assets/video3.mp4",
    },
    {
      title: "First International Conference at Bharia University Islamabad",
      duration: "00:33 mins",
      src: "/assets/prize1.mp4",
    },
    {
      title: "Teacher's prize distribution at Kips Islamabad",
      duration: "00:33 mins",
      src: "/assets/prize2.mp4",
    },
  ];

  /* ----------------------------- FILTER ----------------------------- */

  const filteredPhotos =
    activeFilter === "All"
      ? photos
      : photos.filter((item) => item.category === activeFilter);

  const filters = [
    "All",
    "Photos",
    "Activities",
    "Workshops",
    "Awards",
    "Videos",
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen bg-[#f5f2eb] px-3 md:px-6 lg:px-10 py-10 overflow-hidden relative"
    >
      {/* ---------------- FULLSCREEN IMAGE VIEWER ---------------- */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-999999 bg-black/95 flex items-center justify-center p-4"
          onDoubleClick={() => setSelectedImage(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 bg-white text-black rounded-full p-2 shadow-xl"
          >
            <X size={22} />
          </button>

          {/* FULLSCREEN IMAGE */}
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* MAIN CONTAINER */}
        <div className="relative bg-[#faf8f4] border border-[#e8e2d8] rounded-[22px] shadow-[0_10px_35px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* BLUR */}
          <div className="absolute -top-17.5 -right-17.5 w-45 h-45 bg-[#dce7d7] rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10 px-5 md:px-7 py-7 md:py-9">
            {/* HEADER */}
            <div className="mb-7">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-[#eef3ea] text-[#5b7b61] px-4 py-2 rounded-full text-xs font-medium shadow-sm mb-4">
                <ImageIcon size={15} />
                Gallery
              </div>

              {/* HEADING */}
              <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[#1f2937] mb-4">
                Moments That
                <span className="block text-[#5f7f65] mt-1">
                  Inspire Learning
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-[#5f646d] text-sm md:text-base leading-relaxed max-w-2xl">
                A collection of classroom memories, educational activities,
                workshops, achievements, and inspiring learning experiences.
              </p>
            </div>

            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap gap-2 mb-8">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-[#5f7f65] text-white shadow-sm"
                      : "bg-white border border-[#e5e0d6] text-[#374151] hover:border-[#5f7f65] hover:text-[#5f7f65]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* VIDEO SECTION */}
            {(activeFilter === "All" || activeFilter === "Videos") && (
              <div className="mb-10">
                {/* SECTION HEADER */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef3ea] flex items-center justify-center text-[#5f7f65]">
                    <Video size={20} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#1f2937]">
                      Video Gallery
                    </h2>

                    <p className="text-xs text-[#6b7280]">
                      Teaching sessions & classroom activities
                    </p>
                  </div>
                </div>

                {/* VIDEOS GRID */}
                <div className="grid lg:grid-cols-2 gap-5">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-[20px] overflow-hidden border border-[#ece7dd] shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      {/* VIDEO */}
                      <div className="relative">
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="w-full h-55 md:h-70 object-contain bg-black"
                          controls
                          playsInline
                          preload="metadata"
                          onPlay={() => {
                            videoRefs.current.forEach((video, i) => {
                              if (i !== index && video) {
                                video.pause();
                              }
                            });
                          }}
                        >
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        {/* VIDEO LABEL */}
                        <div className="absolute top-3 left-3 bg-[#5f7f65] text-white text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1">
                          <PlayCircle size={12} />
                          Video
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base md:text-lg font-semibold text-[#1f2937]">
                            {video.title}
                          </h3>

                          <span className="text-xs text-[#6b7280]">
                            {video.duration}
                          </span>
                        </div>

                        <p className="text-sm text-[#6b7280] leading-relaxed">
                          Educational and interactive learning experiences
                          designed to inspire creativity and engagement.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PHOTO SECTION */}
            {activeFilter !== "Videos" && (
              <div>
                {/* SECTION HEADER */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef3ea] flex items-center justify-center text-[#5f7f65]">
                    <ImageIcon size={20} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#1f2937]">
                      Photo Gallery
                    </h2>

                    <p className="text-xs text-[#6b7280]">
                      Educational moments & achievements
                    </p>
                  </div>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPhotos.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-[20px] overflow-hidden border border-[#ece7dd] shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      {/* IMAGE */}
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          onDoubleClick={() => setSelectedImage(item.image)}
                          className="w-full h-47.5 object-cover cursor-pointer group-hover:scale-105 transition-all duration-500"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-[#5f7f65] text-[11px] font-medium mb-2">
                          {index % 3 === 0 && <Users size={13} />}
                          {index % 3 === 1 && <Star size={13} />}
                          {index % 3 === 2 && <Trophy size={13} />}

                          {item.category}
                        </div>

                        <h3 className="text-base font-semibold text-[#1f2937] mb-2">
                          {item.title}
                        </h3>

                        <p className="text-xs md:text-sm text-[#6b7280] leading-relaxed">
                          Inspiring educational moments and classroom
                          experiences.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* QUOTE SECTION */}
            <div className="mt-10 bg-linear-to-r from-[#5f7f65] to-[#6f8f75] rounded-[22px] p-6 md:p-7 text-center shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-25 h-25 bg-white/10 rounded-full blur-2xl"></div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                “Every classroom moment creates inspiration.”
              </h3>

              <p className="text-white/80 text-sm max-w-2xl mx-auto">
                Education is about creativity, confidence, growth, and lifelong
                learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
