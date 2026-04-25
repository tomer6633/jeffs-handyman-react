import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TapToCall from '../components/TapToCall'
import { business } from '../data/BusinessData'

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-oswald text-2xl text-brand-primary mb-2">Request Received!</h3>
        <p className="text-gray-600">Jeff will call you back within 24 hours to confirm your appointment.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Your Name</label>
        <input required type="text" placeholder="Jane Smith"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div>
        <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Phone Number</label>
        <input required type="tel" placeholder="(519) 555-0100"
          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div>
        <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Service Needed</label>
        <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent">
          <option value="">Select a service...</option>
          {business.services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Preferred Date</label>
        <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Tell Us About the Job</label>
        <textarea rows={3} placeholder="Describe what needs to be done..."
          value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none" />
      </div>
      <div className="md:col-span-2">
        <button type="submit"
          className="w-full bg-brand-accent hover:bg-yellow-500 text-white font-oswald text-lg tracking-wide py-4 rounded-lg transition-colors duration-200">
          BOOK MY FREE ESTIMATE
        </button>
      </div>
    </form>
  )
}

export default function Home() {
  const s1 = useFadeIn(); const s2 = useFadeIn(); const s3 = useFadeIn()
  const s4 = useFadeIn(); const s5 = useFadeIn()

  return (
    <div className="font-inter bg-white pb-16 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={business.heroImage} alt="Handyman at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto pt-20">
          <p className="font-inter text-brand-accent uppercase tracking-widest text-sm mb-4">London, Ontario's Trusted Handyman</p>
          <h1 className="font-oswald text-4xl md:text-6xl leading-tight mb-6">{business.tagline}</h1>
          <p className="text-lg text-gray-200 mb-8">{business.subtagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.telLink}
              className="bg-brand-accent text-white font-oswald text-lg px-8 py-4 rounded-lg hover:bg-yellow-500 transition">
              📞 Call Jeff Now
            </a>
            <a href="#book"
              className="border-2 border-white text-white font-oswald text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-brand-dark transition">
              Book a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-primary text-white py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[['20+', 'Years Experience'], ['5★', 'Google Rating'], ['London, ON', 'Locally Trusted']].map(([val, label]) => (
            <div key={label}>
              <div className="font-oswald text-3xl md:text-4xl text-brand-accent">{val}</div>
              <div className="text-sm text-gray-300 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-brand-light" id="services">
        <div ref={s1} className="fade-in max-w-6xl mx-auto">
          <h2 className="font-oswald text-4xl text-brand-primary text-center mb-3">What Jeff Can Fix</h2>
          <p className="text-center text-gray-500 mb-12">From small repairs to full renovations — done right the first time.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {business.services.map(service => (
              <Link key={service.id} to={`/service/${service.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden h-48">
                  <img src={service.image} alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-oswald text-xl text-brand-primary mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <span className="inline-block mt-4 text-brand-accent font-medium text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-white">
        <div ref={s2} className="fade-in max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={business.aboutImage} alt="Handyman working" className="rounded-2xl shadow-xl w-full object-cover" />
          </div>
          <div>
            <p className="text-brand-accent font-inter uppercase tracking-widest text-sm mb-3">About Jeff</p>
            <h2 className="font-oswald text-4xl text-brand-primary mb-5">When Others Haven't Measured Up</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              With 20+ years of hands-on experience in London, Jeff built his business on one principle: do it right or don't do it at all. He's the handyman London homeowners call when a previous contractor left them hanging.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Licensed, insured, and trusted across the city — from Hamilton Road to Byron, Masonville to Old South.
            </p>
            <a href={business.telLink}
              className="inline-block bg-brand-primary text-white font-oswald px-6 py-3 rounded-lg hover:bg-brand-dark transition">
              📞 Call for a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-brand-light">
        <div ref={s3} className="fade-in max-w-5xl mx-auto">
          <h2 className="font-oswald text-4xl text-brand-primary text-center mb-12">What London Homeowners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {business.reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow">
                <div className="text-yellow-400 text-xl mb-3">{'★'.repeat(r.rating)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-oswald text-brand-primary">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-20 px-4 bg-white">
        <div ref={s4} className="fade-in max-w-2xl mx-auto">
          <h2 className="font-oswald text-4xl text-brand-primary text-center mb-3">Book a Free Estimate</h2>
          <p className="text-center text-gray-500 mb-10">Tell Jeff what needs doing. He'll call you back within 24 hours.</p>
          <div className="bg-brand-light rounded-2xl p-8 shadow-md">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={s5} className="fade-in bg-brand-dark text-gray-400 py-8 text-center px-4">
        <p className="font-oswald text-white text-xl mb-2">Jeff's Handyman Services</p>
        <p className="text-sm">{business.address} &nbsp;|&nbsp; <a href={business.telLink} className="text-brand-accent hover:underline">{business.phone}</a></p>
        <p className="text-xs mt-4 text-gray-600">© 2026 Jeff's Handyman Services. All rights reserved. London, ON.</p>
      </footer>

      <TapToCall />
    </div>
  )
}
