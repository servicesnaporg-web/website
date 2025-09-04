import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import RegisterInterestForm from "@/components/RegisterInterestForm";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: 'var(--warm-beige)'}}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-50" style={{borderColor: 'var(--border-color)'}}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* ServiceSnap Logo */}
            <Logo />
            <div className="font-bold text-xl" style={{color: 'var(--primary)'}}>ServiceSnap</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="transition-colors font-medium hover:opacity-80" style={{color: 'var(--soft-brown)'}}>About</a>
            <a href="#features" className="transition-colors font-medium hover:opacity-80" style={{color: 'var(--soft-brown)'}}>Services</a>
            <a href="#register" className="text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium" style={{backgroundColor: 'var(--primary)'}}>Join Now</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" style={{color: 'var(--primary)'}}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: 'var(--cream)', color: 'var(--primary)'}}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: 'var(--primary)'}}></span>
              Connecting local service providers
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" style={{color: 'var(--primary)'}}>
              Discover Local Services,
              <span className="block" style={{color: 'var(--accent)'}}>at your convenience</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--soft-brown)'}}>
              Connect with trusted local vendors in your community. From home services to professional expertise, 
              <span className="font-semibold" style={{color: 'var(--primary)'}}>find what you need right in your neighborhood.</span>
            </p>
            
            {/* Service Icons */}
            <div className="flex justify-center gap-8 mb-12 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{backgroundColor: 'var(--cream)', border: '2px solid var(--border-color)'}}>
                  <span className="text-2xl">🏠</span>
                </div>
                <span className="text-sm font-medium" style={{color: 'var(--soft-brown)'}}>Home Services</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{backgroundColor: 'var(--cream)', border: '2px solid var(--border-color)'}}>
                  <span className="text-2xl">📸</span>
                </div>
                <span className="text-sm font-medium" style={{color: 'var(--soft-brown)'}}>Photography</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{backgroundColor: 'var(--cream)', border: '2px solid var(--border-color)'}}>
                  <span className="text-2xl">🔧</span>
                </div>
                <span className="text-sm font-medium" style={{color: 'var(--soft-brown)'}}>Repairs</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{backgroundColor: 'var(--cream)', border: '2px solid var(--border-color)'}}>
                  <span className="text-2xl">✨</span>
                </div>
                <span className="text-sm font-medium" style={{color: 'var(--soft-brown)'}}>Cleaning</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#register" className="group text-white px-10 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2" style={{backgroundColor: 'var(--primary)'}}>
                <span>Find Services</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#newsletter" className="border-2 px-10 py-4 rounded-2xl font-semibold hover:opacity-80 transition-all duration-300 flex items-center gap-2" style={{borderColor: 'var(--primary)', color: 'var(--primary)'}}>
                <span>📧</span>
                <span>Stay Updated</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--primary)'}}>About ServiceSnap</h2>
            <p className="text-lg leading-relaxed mb-8" style={{color: 'var(--soft-brown)'}}>
              ServiceSnap is your trusted platform for discovering and connecting with local service providers. 
              We believe in the power of community and the value of supporting local businesses. Our mission is to 
              make it easier than ever to find reliable, skilled professionals right in your neighborhood.
            </p>
            <p className="text-lg leading-relaxed" style={{color: 'var(--soft-brown)'}}>
              Whether you need home repairs, professional photography, cleaning services, or any other local expertise, 
              ServiceSnap connects you with verified providers who understand your community's unique needs.
            </p>
          </div>
        </section>

        {/* Service Categories Section */}
        <section id="features" className="py-16" style={{backgroundColor: 'var(--cream)'}}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--primary)'}}>Service Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--primary)'}}>Photography</h3>
                <p style={{color: 'var(--soft-brown)'}}>Event, portrait, and commercial photography services</p>
              </div>
              <div className="p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--primary)'}}>Repairs & Maintenance</h3>
                <p style={{color: 'var(--soft-brown)'}}>Quick fixes and ongoing maintenance solutions</p>
              </div>
              <div className="p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--primary)'}}>Cleaning Services</h3>
                <p style={{color: 'var(--soft-brown)'}}>Residential and commercial cleaning solutions</p>
              </div>
              <div className="p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--primary)'}}>Creative Services</h3>
                <p style={{color: 'var(--soft-brown)'}}>Design, art, and creative professional services</p>
              </div>
              <div className="p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                <div className="text-4xl mb-4">🐾</div>
                <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--primary)'}}>Pet Care</h3>
                <p style={{color: 'var(--soft-brown)'}}>Pet sitting, dog walking, and pet care services</p>
              </div>
              <div className="p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                <div className="text-4xl mb-4">➕</div>
                <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--primary)'}}>More</h3>
                <p style={{color: 'var(--soft-brown)'}}>Explore additional services and categories</p>
              </div>
            </div>
          </div>
        </section>


        {/* Mobile App Features Section */}
        <section className="container mx-auto px-6 py-20" style={{backgroundColor: 'var(--card-bg)'}}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-center mb-4" style={{color: 'var(--primary)'}}>ServiceSnap Mobile App</h2>
              <p className="text-xl text-center mb-12" style={{color: '#4a5568'}}>Experience seamless service booking on the go</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* App Screenshot 1 */}
              <div className="text-center">
                <div className="rounded-3xl p-8 mb-6 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                  <img 
                    src="/app-screenshot-1.png" 
                    alt="ServiceSnap App - Browse Services" 
                    className="w-full max-w-xs mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--primary)'}}>Browse Services</h3>
                <p style={{color: '#4a5568'}}>Discover local service providers with detailed profiles and ratings</p>
              </div>
              
              {/* App Screenshot 2 */}
              <div className="text-center">
                <div className="rounded-3xl p-8 mb-6 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                  <img 
                    src="/app-screenshot-2.png" 
                    alt="ServiceSnap App - Book Services" 
                    className="w-full max-w-xs mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--primary)'}}>Easy Booking</h3>
                <p style={{color: '#4a5568'}}>Schedule appointments and manage bookings with just a few taps</p>
              </div>
              
              {/* App Screenshot 3 */}
              <div className="text-center">
                <div className="rounded-3xl p-8 mb-6 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
                  <img 
                    src="/app-screenshot-3.png" 
                    alt="ServiceSnap App - Track Progress" 
                    className="w-full max-w-xs mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--primary)'}}>Authentic Reviews</h3>
                <p style={{color: '#4a5568'}}>Read genuine reviews from verified customers to make informed decisions</p>
              </div>
            </div>
            
            {/* App Store Buttons */}
            <div className="text-center">
              <p className="text-lg mb-6" style={{color: '#4a5568'}}>Download ServiceSnap today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                
                <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-16">Why Choose ServiceSnap?</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border border-green-100 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">For Customers</h3>
                </div>
                <ul className="space-y-4 text-green-700">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Verified Local Vendors</div>
                      <div className="text-sm">Find trusted professionals with authentic reviews and ratings</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Compare & Book</div>
                      <div className="text-sm">Compare services, prices, and availability with confidence</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Support Local</div>
                      <div className="text-sm">Strengthen your community and local economy</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border border-green-100 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">For Providers</h3>
                </div>
                <ul className="space-y-4 text-green-700">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Showcase Services</div>
                      <div className="text-sm">Display your expertise to local customers effectively</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Qualified Leads</div>
                      <div className="text-sm">Connect with customers actively seeking your services</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Build Trust</div>
                      <div className="text-sm">Grow your reputation through reviews and ratings</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--primary)'}}>Stay Connected</h2>
            <p className="mb-8" style={{color: 'var(--soft-brown)'}}>Get notified when we launch in your community. Join our growing network of local vendors and customers.</p>
            <NewsletterForm />
          </div>
        </section>

        {/* Register Interest Section */}
        <section id="register" className="container mx-auto px-6 py-16 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--primary)'}}>Join Our Community</h2>
            <p className="mb-8" style={{color: 'var(--soft-brown)'}}>Ready to connect with local service providers or offer your services? Register your interest and be among the first to join ServiceSnap.</p>
            <RegisterInterestForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="ServiceSnap Logo" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="font-bold text-lg">ServiceSnap</span>
            </div>
            <p className="text-green-200">© {new Date().getFullYear()} ServiceSnap. Connecting communities, at your convenience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
