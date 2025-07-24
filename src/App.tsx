import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Shield, 
  Rocket, 
  Briefcase, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Globe,
  Menu,
  X,
  Star,
  ArrowRight,
  Play,
  Building,
  DollarSign,
  Target,
  Zap
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationStep, setApplicationStep] = useState(1);

  // Scroll tracking for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'process', 'badges', 'partners', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const partners = [
    { name: 'Google Cloud', logo: '🌐', credits: '$100K' },
    { name: 'Microsoft Azure', logo: '☁️', credits: '$75K' },
    { name: 'AWS', logo: '🚀', credits: '$50K' },
    { name: 'Stripe', logo: '💳', credits: 'Free Processing' },
    { name: 'Polygon', logo: '🔷', credits: 'Blockchain Verification' },
    { name: 'Y Combinator', logo: '🚀', credits: 'Accelerator Access' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'PayFlow Technologies',
      badge: 'Global Impact',
      quote: 'FinStamp certification opened doors to Series A funding within 3 months. The credibility boost was immediate.',
      funding: '$12M Series A',
      image: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      company: 'CryptoLend',
      badge: 'Disruption',
      quote: 'The validation process helped us refine our business model. Now we\'re partnered with 3 major banks.',
      funding: '$5M Seed',
      image: '👨‍💻'
    },
    {
      name: 'Aisha Patel',
      company: 'FinanceAI',
      badge: 'Innovation',
      quote: 'FinStamp gave us the credibility we needed to secure enterprise clients. ROI was 10x the certification cost.',
      funding: '$2M Pre-Seed',
      image: '👩‍🔬'
    }
  ];

  const ApplicationForm = () => {
    const [formData, setFormData] = useState({
      companyName: '',
      founderName: '',
      email: '',
      website: '',
      stage: '',
      funding: '',
      description: '',
      badgeLevel: 'innovation'
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate form submission
      setApplicationStep(4);
      setTimeout(() => {
        setShowApplicationForm(false);
        setApplicationStep(1);
        alert('Application submitted successfully! We\'ll review your submission within 48 hours.');
      }, 2000);
    };

    const nextStep = () => setApplicationStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setApplicationStep(prev => Math.max(prev - 1, 1));

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={() => setShowApplicationForm(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Apply for FinStamp Certification</h2>
            <button
              onClick={() => setShowApplicationForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Step {applicationStep} of 3</span>
              <span className="text-sm text-gray-500">{Math.round((applicationStep / 3) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(applicationStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {applicationStep === 4 ? (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600">We'll review your submission and get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {applicationStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Founder Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.founderName}
                      onChange={(e) => setFormData({...formData, founderName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {applicationStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Stage</label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.stage}
                      onChange={(e) => setFormData({...formData, stage: e.target.value})}
                    >
                      <option value="">Select stage</option>
                      <option value="idea">Idea Stage</option>
                      <option value="mvp">MVP</option>
                      <option value="early-revenue">Early Revenue</option>
                      <option value="growth">Growth Stage</option>
                      <option value="scale">Scale Stage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Funding Raised</label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.funding}
                      onChange={(e) => setFormData({...formData, funding: e.target.value})}
                    >
                      <option value="">Select funding amount</option>
                      <option value="none">No funding yet</option>
                      <option value="under-100k">Under $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="over-5m">Over $5M</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Describe your fintech innovation and what makes it unique..."
                    />
                  </div>
                </div>
              )}

              {applicationStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Certification Level</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'innovation', name: 'Innovation Badge', price: '$2,500', icon: '🥉' },
                      { id: 'disruption', name: 'Disruption Badge', price: '$7,500', icon: '🥈' },
                      { id: 'global-impact', name: 'Global Impact Badge', price: '$15,000', icon: '🥇' }
                    ].map((badge) => (
                      <label key={badge.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="badgeLevel"
                          value={badge.id}
                          checked={formData.badgeLevel === badge.id}
                          onChange={(e) => setFormData({...formData, badgeLevel: e.target.value})}
                          className="mr-3"
                        />
                        <span className="text-2xl mr-3">{badge.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium">{badge.name}</div>
                          <div className="text-sm text-gray-600">{badge.price}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {applicationStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </button>
                )}
                {applicationStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/finstamp-logo.png" 
                alt="FinStamp Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-primary">FinStamp</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'features', label: 'Features' },
                { id: 'process', label: 'Process' },
                { id: 'badges', label: 'Badges' },
                { id: 'partners', label: 'Partners' },
                { id: 'testimonials', label: 'Success Stories' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowApplicationForm(true)}
                className="hidden md:block bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Get Certified
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-2 space-y-1">
                {[
                  { id: 'features', label: 'Features' },
                  { id: 'process', label: 'Process' },
                  { id: 'badges', label: 'Badges' },
                  { id: 'partners', label: 'Partners' },
                  { id: 'testimonials', label: 'Success Stories' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-full font-medium"
                >
                  Get Certified
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  The Global Standard for{' '}
                  <span className="text-primary">Fintech Excellence</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  FinStamp certifies innovative fintech startups worldwide, providing credibility that investors trust and markets recognize.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowApplicationForm(true)}
                  className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Certified</span>
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('testimonials')}
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-2"
                >
                  <Play size={20} />
                  <span>View Success Stories</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Trusted Investors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$2B+</div>
                  <div className="text-sm text-gray-600">Funding Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-gray-600">Certified Startups</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Badge Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: '🥉', title: 'Innovation', color: 'from-amber-400 to-amber-600', delay: 0 },
                  { icon: '🥈', title: 'Disruption', color: 'from-gray-400 to-gray-600', delay: 0.2 },
                  { icon: '🥇', title: 'Global Impact', color: 'from-yellow-400 to-yellow-600', delay: 0.4 }
                ].map((badge, index) => (
                  <motion.div
                    key={badge.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: badge.delay + 0.5 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`bg-gradient-to-r ${badge.color} p-6 rounded-2xl text-white shadow-xl`}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h3 className="text-xl font-bold">{badge.title}</h3>
                    <p className="text-white/80">Certification Level</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why FinStamp Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're transforming how fintech startups gain credibility and access to resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Global Recognition',
                description: 'Trusted by 500+ investors and accelerators worldwide',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Blockchain Verified',
                description: 'Immutable proof of certification on Polygon network',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'Investor Ready',
                description: 'Certified startups receive 3x more investor interest',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: 'Enterprise Support',
                description: '$100K+ in credits from Google, Microsoft, AWS',
                color: 'bg-orange-100 text-orange-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get from idea to investor-ready in record time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Apply',
                description: 'Submit your startup details and documentation through our streamlined application process',
                icon: <Target className="w-8 h-8" />
              },
              {
                step: 2,
                title: 'Validate',
                description: 'Our AI and expert panel review your innovation, business model, and market potential',
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                step: 3,
                title: 'Certify',
                description: 'Receive your digital and physical badge with blockchain verification and investor access',
                icon: <Award className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section id="badges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Levels of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the certification level that matches your startup's maturity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🥉',
                title: 'Innovation Badge',
                price: '$2,500',
                features: [
                  'Proof of concept validated',
                  'Basic business model',
                  'Access to testing sandbox',
                  '$50K in cloud credits',
                  'Mentorship program access'
                ],
                color: 'border-amber-200',
                buttonStyle: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
              },
              {
                icon: '🥈',
                title: 'Disruption Badge',
                price: '$7,500',
                features: [
                  'Market differentiation verified',
                  'Scalability confirmed',
                  'Investor-ready certification',
                  '$100K in partner credits',
                  'VC introduction program'
                ],
                color: 'border-gray-300',
                buttonStyle: 'bg-primary text-white hover:bg-primary/90',
                popular: true
              },
              {
                icon: '🥇',
                title: 'Global Impact Badge',
                price: '$15,000',
                features: [
                  'World-class innovation',
                  'Proven scalability',
                  'Institutional investor approved',
                  '$200K+ in enterprise support',
                  'Board advisor matching'
                ],
                color: 'border-yellow-200',
                buttonStyle: 'bg-primary text-white hover:bg-primary/90'
              }
            ].map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-white border-2 ${badge.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {badge.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{badge.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{badge.title}</h3>
                  <div className="text-3xl font-bold text-primary">{badge.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {badge.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowApplicationForm(true)}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${badge.buttonStyle}`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partners provide exclusive benefits and credits to certified startups
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-primary font-medium">{partner.credits}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how FinStamp certification transformed these startups
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-500 ml-1">{testimonial.badge} Badge</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-primary font-semibold">{testimonial.funding}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Fintech Startup?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join hundreds of certified startups gaining investor trust and enterprise support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowApplicationForm(true)}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Certified Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/finstamp-logo.png" 
                  alt="FinStamp Logo" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold">FinStamp</span>
              </div>
              <p className="text-gray-400">
                The global standard for fintech credibility and innovation validation.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Startups</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Certification Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apply Now</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Investors</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Investor Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deal Flow Access</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Due Diligence Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio Companies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>hello@finstamp.global</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FinStamp Global. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplicationForm && <ApplicationForm />}
      </AnimatePresence>
    </div>
  );
};

export default App;