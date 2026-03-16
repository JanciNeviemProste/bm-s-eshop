import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

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
    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="domov" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 opacity-90" />
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://loremflickr.com/1200/800/jam,marmalade,homemade?random=1"
          alt="Domáce marmelády a džemy v pohároch"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
          <span className="inline-block bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🫙 Ručná výroba z prírodných surovín
          </span>
        </div>
        <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-serif">
          Domáce marmelády
          <br />
          <span className="text-blue-400">a džemy s láskou</span>
        </h1>
        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Pripravujeme marmelády a džemy z čerstvého ovocia, bez umelých prísad. Každé zaváraniny sú výsledkom starostlivej práce a tradičných receptúr.
        </p>
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produkty"
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Pozrieť produkty
          </a>
          <a
            href="#o-nas"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gray-800/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            O nás
          </a>
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-sm text-gray-400 mt-1">druhov produktov</div>
          </div>
          <div className="text-center border-x border-gray-800">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-gray-400 mt-1">prírodné suroviny</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400 mt-1">spokojných zákazníkov</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
