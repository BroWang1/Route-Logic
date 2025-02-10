export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Our Research */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">Our Research</h4>
          <ul className="space-y-2">
            <li>Research Index</li>
            <li>Research Overview</li>
            <li>Research Residency</li>
          </ul>
          <h4 className="text-gray-400 font-medium mt-6 mb-3">Latest Advancements</h4>
          <ul className="space-y-2">
            <li>OpenAI o1</li>
            <li>OpenAI o1-mini</li>
            <li>GPT-4o</li>
            <li>GPT-4o mini</li>
            <li>Sora</li>
          </ul>
        </div>

        {/* ChatGPT & Sora */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">ChatGPT</h4>
          <ul className="space-y-2">
            <li>Explore ChatGPT</li>
            <li>Teams</li>
            <li>Enterprise</li>
            <li>Education</li>
            <li>Pricing</li>
            <li>Download</li>
          </ul>
          <h4 className="text-gray-400 font-medium mt-6 mb-3">Sora</h4>
          <ul className="space-y-2">
            <li>Sora Overview</li>
            <li>Features</li>
            <li>Pricing</li>
            <li className="text-blue-400">Help Center ↗</li>
            <li className="text-blue-400">Sora Login ↗</li>
          </ul>
        </div>

        {/* Business & Company */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">For Business</h4>
          <ul className="space-y-2">
            <li>Overview</li>
          </ul>
          <h4 className="text-gray-400 font-medium mt-6 mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our Charter</li>
            <li>Careers</li>
            <li>Brand</li>
          </ul>
        </div>

        {/* More & Terms */}
        <div>
          <h4 className="text-gray-400 font-medium mb-3">More</h4>
          <ul className="space-y-2">
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
      </div>
    </footer>
  );
}
