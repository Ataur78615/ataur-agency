import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MD Ataur Ansari</h3>
            <p className="text-gray-400">
              UGC Creator • CGI Ads Specialist • MERN & Next.js Developer
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: ataurwithbca86@gmail.com</li>
              <li className="text-gray-400">Phone: +91 7250570798</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@Ataurtechbca" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
                YouTube
              </a>
              <a href="https://www.facebook.com/profile.php?id=100075557272259" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Facebook
              </a>
              <a href="https://www.instagram.com/ataurway/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
                Instagram
              </a>
              <a href="https://github.com/Ataur78615" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                GitHub
              </a>
              <a href="https://vercel.com/md-ataur-ansaris-projects" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                Vercel
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 MD Ataur Ansari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
