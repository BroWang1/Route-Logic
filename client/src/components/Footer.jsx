export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Our Research */}
        <div>
          <h4 className="text-gray-400 font-medium mt-6 mb-3">Latest Advancements</h4>
          <ul className="space-y-2">
            <li>Model 1</li>
            <li>Research Overview</li>
            <li>News</li>
            <li>Stories</li>
          </ul>
          <h4 className="text-gray-400 font-medium mt-6 mb-3">Terms & Policies</h4>
          <ul className="space-y-2">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Security</li>
            <li>Other Policies</li>
          </ul>
        </div>

        {/* Model */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">Route Logic</h4>
          <ul className="space-y-2">
            <li>Explore Route Logic</li>
            <li>Teams</li>
            <li>Enterprise</li>
            <li>Education</li>
            <li>Pricing</li>
            <li>Download</li>
          </ul>
          <h4 className="text-gray-400 font-medium mt-6 mb-3">Model</h4>
          <ul className="space-y-2">
            <li>Route Logic Overview</li>
            <li>Features</li>
            <li>Pricing</li>
            <li className="text-blue-400">Help Center ↗</li>
            <li className="text-blue-400">Sora Login ↗</li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">For Business</h4>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Brand</li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        <p>&copy; 2025 Route Logic. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
