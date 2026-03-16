import { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ďakujeme za vašu správu! Ozveme sa vám čo najskôr.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass = "w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300";
  const labelClass = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <section id="kontakt" ref={sectionRef} className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Kontaktujte nás
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Máte otázky ohľadom našich produktov alebo chcete zadať väčšiu objednávku? Neváhajte nás kontaktovať.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Napíšte nám</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>Meno a priezvisko</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Ján Novák"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>E-mailová adresa</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jan.novak@email.sk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="subject" className={labelClass}>Predmet</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Otázka ohľadom objednávky"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Správa</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Vaša správa..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Odoslať správu
              </button>
            </form>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 space-y-8">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kontaktné informácie</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">📧</span>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">E-mail</p>
                    <a href="mailto:info@domacemarmelady.sk" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">
                      info@domacemarmelady.sk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">📞</span>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Telefón</p>
                    <a href="tel:+421905123456" className="text-gray-100 hover:text-white transition-colors duration-300 font-medium">
                      +421 905 123 456
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">📍</span>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Adresa</p>
                    <p className="text-gray-100 font-medium">Hlavná 15<br />902 01 Pezinok<br />Slovensko</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">🕐</span>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Otváracie hodiny</p>
                    <p className="text-gray-100 font-medium">Pondelok – Piatok: 9:00 – 17:00</p>
                    <p className="text-gray-100 font-medium">Sobota: 9:00 – 12:00</p>
                    <p className="text-gray-400 text-sm">Nedeľa: zatvorené</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-2">💌 Prihlásenie na odber noviniek</h4>
              <p className="text-gray-400 text-sm mb-4">Dostávajte ako prví informácie o nových produktoch a špeciálnych ponukách.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="váš@email.sk"
                  className="flex-1 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  aria-label="E-mail pre odber noviniek"
                />
                <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Prihlásiť
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
