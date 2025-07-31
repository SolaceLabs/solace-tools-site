import React from 'react';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  
  return (
    <footer style={{ borderTop: "5px solid #00c895", background: "linear-gradient(0deg,#37404a,#252b32)"}} className="site-footer text-white relative">
  <div className="absolute right-4 top-4">
    <a href="#top" className="text-white hover:text-gray-300">
      <span className="sr-only">Back to top</span>
      <i className="fa fa-arrow-up"></i>
    </a>
  </div>

  <div className="footer-background"></div>

  <div className="footer-top py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Column 1: Products */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Products</h3>
        <ul className="space-y-2">
          <li>
            <a href="https://solace.com/products/event-broker/software/" target="_blank" rel="noopener noreferrer" className="hover:underline">Event Broker: Software</a>
          </li>
          <li>
            <a href="https://solace.com/products/event-broker/appliance/" target="_blank" rel="noopener noreferrer" className="hover:underline">Event Broker: Appliance</a>
          </li>
          <li>
            <a href="https://solace.com/products/event-broker/cloud/" target="_blank" rel="noopener noreferrer" className="hover:underline">Event Broker: Cloud</a>
          </li>
        </ul>
      </div>

      {/* Column 2: Company */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="https://solace.com/careers/" target="_blank" rel="noopener noreferrer" className="hover:underline">Careers</a></li>
          <li><a href="https://solace.com/company/team/" target="_blank" rel="noopener noreferrer" className="hover:underline">Leadership</a></li>
          <li><a href="https://solace.com/company/customers/" target="_blank" rel="noopener noreferrer" className="hover:underline">Customers</a></li>
          <li><a href="https://solace.com/company/partners/" target="_blank" rel="noopener noreferrer" className="hover:underline">Partners</a></li>
          <li><a href="https://solace.com/events/" target="_blank" rel="noopener noreferrer" className="hover:underline">Events</a></li>
          <li><a href="https://solace.com/legal/" target="_blank" rel="noopener noreferrer" className="hover:underline">Legal</a></li>
        </ul>
      </div>

      {/* Column 3: Developers */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Developers</h3>
        <ul className="space-y-2">
          <li><a href="https://docs.solace.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Docs</a></li>
          <li><a href="https://solace.com/blog/category/developers/" target="_blank" rel="noopener noreferrer" className="hover:underline">Blog</a></li>
          <li><a href="https://solace.community" target="_blank" rel="noopener noreferrer" className="hover:underline">Community</a></li>
          <li><a href="https://solace.com/support/" target="_blank" rel="noopener noreferrer" className="hover:underline">Support</a></li>
          <li><a href="https://solace.com/contact/" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact</a></li>
          <li><a href="https://console.solace.cloud/login" target="_blank" rel="noopener noreferrer" className="hover:underline">Log In</a></li>
        </ul>
      </div>

      {/* Column 4: Logo + Social */}
      <div className="space-y-6">
        <div className="footer-logo">
          <a href="https://solace.com" target="_blank" rel="noopener noreferrer">
            <img src="/solace-logo-white.svg" alt="Solace Logo" className="w-48" />
          </a>
        </div>
        <div className="social-media flex space-x-4">
          <a href="https://github.com/solacedev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-solace-classic-green">
            <i className="fab fa-github" aria-hidden="true"></i><span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/company/solacedotcom/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-solace-classic-green">
            <i className="fab fa-linkedin" aria-hidden="true"></i><span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://twitter.com/solacedotcom" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-solace-classic-green">
            <i className="fab fa-twitter-square" aria-hidden="true"></i><span className="sr-only">Twitter</span>
          </a>
          <a href="https://www.youtube.com/SolaceSystems" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-solace-classic-green">
            <i className="fab fa-youtube-square" aria-hidden="true"></i><span className="sr-only">Youtube</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="footer-bottom border-t border-gray-700 py-6 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <p className="text-sm">&copy; 2025 Solace</p>
      <ul className="flex space-x-4 mt-4 md:mt-0">
        <li>
          <a href="https://solace.com/legal/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Legal</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  );
};
