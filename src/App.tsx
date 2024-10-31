import React, { useState } from 'react';
import { 
  Gamepad2, 
  Settings2, 
  Globe2, 
  DollarSign, 
  ChevronRight,
  Languages,
  BarChart3,
} from 'lucide-react';

function App() {
  const [showDemo, setShowDemo] = useState(false);

  const handleDemoClick = () => {
    setShowDemo(!showDemo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Gamepad2 size={64} className="text-indigo-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Launch Your Game Aggregator Empire
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build your own gaming platform to rival industry giants like SlotGrator, Salsa, and BetConstruct
            </p>
            <a 
              href="https://wa.me/5511994468065"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl inline-block"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Solution?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe2 className="text-indigo-400" size={32} />,
              title: "35,000+ Games Library",
              description: "Access an extensive collection of officially licensed games from top providers worldwide"
            },
            {
              icon: <Languages className="text-indigo-400" size={32} />,
              title: "Multi-Language Support",
              description: "Control panel with full translation capabilities to serve global markets"
            },
            {
              icon: <Settings2 className="text-indigo-400" size={32} />,
              title: "Fully Customizable",
              description: "Tailor every aspect of your platform to match your brand and market needs"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Investment Opportunity</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <DollarSign className="text-indigo-400 mt-1" />
                    <div>
                      <p className="font-semibold">Starting Investment</p>
                      <p className="text-gray-400">5,500 USDT with flexible upgrade options</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BarChart3 className="text-indigo-400 mt-1" />
                    <div>
                      <p className="font-semibold">Monthly Potential Returns</p>
                      <p className="text-gray-400">10,000 - 15,000 USDT (market dependent)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">What's Included:</h3>
                {[
                  "Complete installation script with technical support",
                  "Comprehensive user manual and documentation",
                  "Advanced admin control panel",
                  "Security features and regular updates"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ChevronRight className="text-indigo-400" size={20} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Gaming Empire?</h2>
          <p className="text-gray-400 mb-8">
            Join the ranks of successful gaming aggregators and start building your future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511994468065"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all inline-block"
            >
              Contact Us Now
            </a>
            <button 
              onClick={handleDemoClick}
              className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full relative">
            <button 
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Demo Access</h3>
            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="font-semibold">Demo URL:</p>
                <p className="text-indigo-400">https://demo.gameaggregator.com</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="font-semibold">Login:</p>
                <p className="text-indigo-400">demo@example.com</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="font-semibold">Password:</p>
                <p className="text-indigo-400">demo123</p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Note: Demo access is for evaluation purposes only. Some features may be limited.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;