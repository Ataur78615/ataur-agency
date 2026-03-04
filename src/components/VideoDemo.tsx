"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Professional Dummy Data with Real-looking Thumbnails and Videos
const videos = [
  {
    id: 1,
    title: "Ataur Agency Portfolio",
    category: "UGC",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/31CFWRuVPtU",
  },
  {
    id: 2,
    title: "UGC Product Ad Demo",
    category: "CGI Ads",
    thumbnail: "https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/vbEuX7blryU",
  },
  {
    id: 3,
    title: "AI & Tech Showcase",
    category: "UGC",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/8KVPB7DNIg0",
  },
  {
    id: 4,
    title: "Business Automation Demo",
    category: "CGI Ads",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/hlG6zjCIGu0",
  },
];

interface Video {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

export default function VideoDemo() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of my best work in User Generated Content and High-End CGI Advertising.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              layoutId={`video-${video.id}`}
              onClick={() => setSelectedVideo(video)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200"
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/90 group-hover:scale-110 transition-all duration-300 border border-white/50">
                    <svg className="w-6 h-6 text-white group-hover:text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-full ${video.category === 'UGC' ? 'bg-purple-600' : 'bg-indigo-600'}`}>
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">Click to watch demo</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal (Popup) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video area
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* Youtube Iframe */}
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}