import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import RegisterInterestForm from "@/components/RegisterInterestForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Block - Replace with your logo */}
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🌿</span>
            </div>
            <div className="font-bold text-xl text-green-800">ServiceSnap</div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-green-700 hover:text-green-600 transition-colors">About</a>
            <a href="#features" className="text-green-700 hover:text-green-600 transition-colors">Services</a>
            <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium">Join Now</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-16 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent mb-6">
              Discover Local Services, Naturally
            </h1>
            <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
              Connect with  local vendors in your community. From home services to professional expertise, find what you need right in your neighborhood.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#register" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
                Find Services
              </a>
              <a href="#newsletter" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
                Stay Updated
              </a>
            </div>
          </div>
        </section>

        {/* About Section - Editable Text Block */}
        <section id="about" className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">About ServiceSnap</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <p className="text-lg text-green-700 leading-relaxed">
                {/* Edit this text block as you wish */}
                ServiceSnap connects you with the local vendors/Service providors in your community. 
                 we bring together skilled professionals/freelancers
                and customers who need their services. From personal photographers to house cleaners, discover trusted local talent right in your neighborhood.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Why Choose ServiceSnap?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-semibold text-green-800 mb-4">For Customers</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Find verified local vendors with authentic reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Compare services and book with confidence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Support your local community and economy</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-semibold text-green-800 mb-4">For Vendors</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Showcase your services to local customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Grow your business with qualified leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Build trust through reviews and ratings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Stay Connected</h2>
            <p className="text-green-700 mb-8">Get notified when we launch in your community. Join our growing network of local vendors and customers.</p>
            <NewsletterForm />
          </div>
        </section>

        {/* Register Interest Section */}
        <section id="register" className="container mx-auto px-6 py-16 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Join Our Community</h2>
            <p className="text-green-700 mb-8">Be among the first to experience local services, naturally. Whether you&apos;re a customer or vendor, we&apos;d love to hear from you.</p>
            <RegisterInterestForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌿</span>
              </div>
              <span className="font-bold text-lg">ServiceSnap</span>
            </div>
            <p className="text-green-200">© {new Date().getFullYear()} ServiceSnap. Connecting communities, naturally.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
