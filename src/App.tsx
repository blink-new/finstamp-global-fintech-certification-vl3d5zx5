import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Shield, 
  Rocket, 
  Briefcase, 
  Trophy,
  Lock,
  Users,
  CheckCircle,
  Menu,
  X,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleCertificationClick = () => {
    alert('Thank you for your interest! This would open the application process in a real implementation.')
  }

  return (
    <div className="min-h-screen bg-fintech-light">
      {/* Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrollY > 100 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-fintech-accent rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-fintech-primary">
                FinStamp
              </span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {['Features', 'Process', 'Badges', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-fintech-dark hover:text-fintech-primary font-medium transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleCertificationClick}
                className="hidden md:inline-flex bg-fintech-primary hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Get Certified
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <ul className="space-y-4">
                {['Features', 'Process', 'Badges', 'Partners', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left text-fintech-dark hover:text-fintech-primary font-medium py-2"
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <Button 
                    onClick={handleCertificationClick}
                    className="w-full bg-fintech-primary hover:bg-blue-700 text-white"
                  >
                    Get Certified
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-fintech-dark leading-tight mb-6">
                The Global Standard for{' '}
                <span className="text-fintech-primary">Fintech Excellence</span>
              </h1>
              <p className="text-xl text-fintech-gray mb-8 leading-relaxed">
                FinStamp certifies innovative fintech startups worldwide, providing credibility 
                that investors trust and markets recognize.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  onClick={handleCertificationClick}
                  className="bg-fintech-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Get Certified
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleCertificationClick}
                  className="border-fintech-primary text-fintech-primary hover:bg-fintech-primary hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200"
                >
                  View Certified Startups
                </Button>
              </div>
            </motion.div>

            {/* Badge Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-6 justify-center"
            >
              {[
                { icon: '🥉', title: 'Innovation', color: 'border-bronze', level: 'bronze' },
                { icon: '🥈', title: 'Disruption', color: 'border-silver', level: 'silver' },
                { icon: '🥇', title: 'Global Impact', color: 'border-gold', level: 'gold' }
              ].map((badge, index) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`bg-white rounded-2xl p-6 shadow-xl border-t-4 ${badge.color} text-center w-48 mx-auto hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <h3 className="text-xl font-bold text-fintech-dark">{badge.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-fintech-dark mb-6">
              Why FinStamp Matters
            </h2>
            <p className="text-xl text-fintech-gray max-w-3xl mx-auto">
              We're transforming how fintech startups gain credibility and access to resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Global Recognition',
                description: 'Trusted by 500+ investors and accelerators worldwide',
                color: 'text-fintech-primary'
              },
              {
                icon: Shield,
                title: 'Blockchain Verified',
                description: 'Immutable proof of certification on Polygon network',
                color: 'text-fintech-secondary'
              },
              {
                icon: Rocket,
                title: 'Investor Ready',
                description: 'Certified startups receive 3x more investor interest',
                color: 'text-fintech-accent'
              },
              {
                icon: Briefcase,
                title: 'Enterprise Support',
                description: '$100K+ in credits from Google, Microsoft, AWS',
                color: 'text-fintech-primary'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-fintech-light rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-6`} />
                <h3 className="text-xl font-bold text-fintech-dark mb-4">{feature.title}</h3>
                <p className="text-fintech-gray leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-fintech-dark mb-6">
              Simple 3-Step Certification
            </h2>
            <p className="text-xl text-fintech-gray max-w-3xl mx-auto">
              Get from idea to investor-ready in record time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your startup details and documentation'
              },
              {
                step: '2',
                title: 'Validate',
                description: 'Our AI and expert panel review your innovation'
              },
              {
                step: '3',
                title: 'Certify',
                description: 'Receive your digital and physical badge'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-fintech-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold text-fintech-dark mb-4">{process.title}</h3>
                <p className="text-fintech-gray leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section id="badges" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-fintech-dark mb-6">
              Three Levels of Excellence
            </h2>
            <p className="text-xl text-fintech-gray max-w-3xl mx-auto">
              Choose the certification level that matches your startup's maturity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🥉',
                title: 'Innovation Badge',
                price: 'Starting at $2,500',
                features: [
                  'Proof of concept validated',
                  'Basic business model',
                  'Access to testing sandbox',
                  '$50K in cloud credits',
                  'Mentorship program access'
                ],
                borderColor: 'border-bronze',
                buttonVariant: 'outline' as const
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
                borderColor: 'border-silver',
                buttonVariant: 'default' as const,
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
                borderColor: 'border-gold',
                buttonVariant: 'default' as const
              }
            ].map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-2xl p-8 shadow-xl border-t-4 ${badge.borderColor} hover:shadow-2xl transition-all duration-300`}
              >
                {badge.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-fintech-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{badge.icon}</div>
                  <h3 className="text-2xl font-bold text-fintech-dark mb-2">{badge.title}</h3>
                  <p className="text-2xl font-bold text-fintech-primary">{badge.price}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {badge.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-fintech-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-fintech-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleCertificationClick}
                  variant={badge.buttonVariant}
                  className={`w-full py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
                    badge.buttonVariant === 'outline'
                      ? 'border-fintech-primary text-fintech-primary hover:bg-fintech-primary hover:text-white'
                      : 'bg-fintech-primary hover:bg-blue-700 text-white hover:scale-105'
                  }`}
                >
                  {badge.buttonVariant === 'outline' ? 'Get Started' : 'Get Certified'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fintech-primary to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Fintech Startup?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join hundreds of certified startups gaining investor trust and enterprise support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCertificationClick}
                className="bg-white text-fintech-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105"
              >
                Get Certified Today
              </Button>
              <Button
                onClick={handleCertificationClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-fintech-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-fintech-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-fintech-accent rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">FinStamp</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The global standard for fintech credibility and innovation validation.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fintech-primary transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* For Startups */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                For Startups
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-fintech-accent"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  'Certification Process',
                  'Pricing',
                  'Success Stories',
                  'Resources',
                  'Apply Now'
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Investors */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                For Investors
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-fintech-accent"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  'Investor Portal',
                  'Deal Flow Access',
                  'Due Diligence Reports',
                  'Portfolio Companies',
                  'Partner Program'
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Contact Us
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-fintech-accent"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-fintech-accent" />
                  <span className="text-gray-300">hello@finstamp.global</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-fintech-accent" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-fintech-accent" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 FinStamp Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App