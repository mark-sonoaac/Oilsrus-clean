export default function Footer(){
  return (
    <footer className="mt-12 bg-gray-900 text-gray-300">
      <div className="border-t border-gray-700" />

      {/* Contact strip */}
      <div className="container px-4 py-4 border-b border-gray-800 text-sm text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Phone</div>
            <div className="font-medium text-gray-200">(973) 373-9000</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Email</div>
            <div className="font-medium text-gray-200">info@oilrus.example</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Address</div>
            <div className="font-medium text-gray-200">1123 Clinton Avenue, Irvington, NJ 07111</div>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-2 md:grid-cols-5 gap-6 text-sm px-4 py-8">
        <div>
          <h5 className="font-semibold mb-3 text-white">Products</h5>
          <ul className="space-y-1 text-gray-300">
            <li className="font-medium text-gray-200">Oils</li>
            <li><a href="#" className="hover:underline">Fragrance Oils</a></li>
            <li><a href="#" className="hover:underline">Base Oils & Carriers</a></li>
            <li className="font-medium text-gray-200 mt-2">Electronics</li>
            <li><a href="#" className="hover:underline">Phones</a></li>
            <li><a href="#" className="hover:underline">Gaming Devices</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3 text-white">Services</h5>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:underline">Custom Oil Blending</a></li>
            <li><a href="#" className="hover:underline">Formulation Consulting</a></li>
            <li><a href="#" className="hover:underline">Phone Repair & Diagnostics</a></li>
            <li><a href="#" className="hover:underline">Warranty & Support</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3 text-white">Resources</h5>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:underline">Blog & Tutorials</a></li>
            <li><a href="#" className="hover:underline">Product Guides</a></li>
            <li><a href="#" className="hover:underline">Safety Data Sheets (SDS)</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3 text-white">Careers</h5>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:underline">Open Positions</a></li>
            <li><a href="#" className="hover:underline">Benefits & Culture</a></li>
            <li><a href="#" className="hover:underline">Internships</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3 text-white">About</h5>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Contact & Locations</a></li>
            <li><a href="#" className="hover:underline">Sustainability</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700" />
      <div className="container text-center text-sm text-gray-500 py-4">© {new Date().getFullYear()} Oil R Us. All rights reserved.</div>
    </footer>
  )
}
