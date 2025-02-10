export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Our Research */}
        <div>
          <h4 className="text-gray-400 font-semibold">Our Research</h4>
          <ul className="mt-2 space-y-2">
            <li>Research Index</li>
            <li>Research Overview</li>
            <li>Research Residency</li>
          </ul>
          <h4 className="text-gray-400 font-semibold mt-4">Latest Advancements</h4>
          <ul className="mt-2 space-y-2">
            <li>OpenAI o1</li>
            <li>OpenAI o1-mini</li>
            <li>GPT-4o</li>
            <li>GPT-4o mini</li>
            <li>Sora</li>
          </ul>
        </div>

        {/* ChatGPT & Sora */}
        <div>
          <h4 className="text-gray-400 font-semibold">ChatGPT</h4>
          <ul className="mt-2 space-y-2">
            <li>Explore ChatGPT</li>
            <li>Teams</li>
            <li>Enterprise</li>
            <li>Education</li>
            <li>Pricing</li>
            <li>Download</li>
          </ul>
          <h4 className="text-gray-400 font-semibold mt-4">Sora</h4>
          <ul className="mt-2 space-y-2">
            <li>Sora Overview</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Help Center ↗</li>
            <li>Sora Login ↗</li>
          </ul>
        </div>

        {/* Business & Company */}
        <div>
          <h4 className="text-gray-400 font-semibold">For Business</h4>
          <ul className="mt-2 space-y-2">
            <li>Overview</li>
          </ul>
          <h4 className="text-gray-400 font-semibold mt-4">Company</h4>
          <ul className="mt-2 space-y-2">
            <li>About Us</li>
            <li>Our Charter</li>
            <li>Careers</li>
            <li>Brand</li>
          </ul>
        </div>

        {/* More & Terms */}
        <div>
          <h4 className="text-gray-400 font-semibold">More</h4>
          <ul className="mt-2 space-y-2">
            <li>News</li>
            <li>Stories</li>
          </ul>
          <h4 className="text-gray-400 font-semibold mt-4">Terms & Policies</h4>
          <ul className="mt-2 space-y-2">
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
