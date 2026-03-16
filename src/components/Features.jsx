import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '🌿',
    title: '100% prírodné',
    description: 'Používame iba čerstvé ovocie z lokálnych sadov a záhrad. Žiadne umelé farbivá, konzervačné látky ani priemyselné cukry. Len čistá príroda vo vašom pohári.',
  },
  {
    icon: '📖',
    title: 'Tradičné recepty',
    description: 'Naše recepty sú odovzdávané z generácie na generáciu. Každá marmeláda je pripravená podľa overených postupov, ktoré zaručujú jedinečnú chuť a vôňu.',
  },
  {
    icon: '🫙',
    title: 'Ručná výroba',
    description: 'Každé zaváraniny sú ručne plnené a etikétované s láskou. Malé výrobné dávky zabezpečujú najvyššiu kvalitu a čerstvosť každého produktu.',
  },
];

const products = [
  {
    name: 'Jahodová marmeláda',
    description: 'Klasická jahodová marmeláda z čerstvých jahôd zo záhrady. Sladká, voňavá a plná vitamínov.',
    price: '3,90 €',
    image: 'https://loremflickr.com/800/600/strawberry,jam,jar?random=2',
    badge: 'Bestseller',
  },
  {
    name: 'Broskyňový džem',
    description: 'Jemný džem z zrelých broskýň s prirodzenou arómou. Ideálny na toasty alebo ako plnka do koláčov.',
    price: '4,20 €',
    image: 'https://loremflickr.com/800/600/peach,jam,homemade?random=3',
    badge: 'Nové',
  },
  {
    name: 'Šípkový lekvár',
    description: 'Tradičný šípkový lekvár bohatý na vitamín C. Výborný pre posilnenie imunity v zimných mesiacoch.',
    price: '4,50 €',
    image: 'https://loremflickr.com/800/600/rosehip,jam,preserve?random=4',
    badge: 'Sezónne',
  },
  {
    name: 'Slivková marmeláda',
    description: 'Hustá slivková marmeláda s jemnou chuťou škorice. Tradičná receptúra z čias našich starých mám.',
    price: '3,80 €',
    image: 'https://loremflickr.com/800/600/plum,jam,preserve?random=5',
    badge: null,
  },
  {
    name: 'Malinový džem',
    description: 'Intenzívne voňavý malinový džem s kúskami ovocia. Vyrobený z čerstvo nazbieraných malín.',
    price: '5,00 €',
    image: 'https://loremflickr.com/800/600/raspberry,jam,fruit?random=6',
    badge: 'Obľúbený',
  },
  {
    name: 'Čučoriedková marmeláda',
    description: 'Tmavá, voňavá čučoriedková marmeláda plná antioxidantov. Zbieraná ručne v horách Slovenska.',
    price: '5,50 €',
    image: 'https://loremflickr.com/800/600/blueberry,jam,preserve?random=7',
    badge: 'Premium',
  },
];

export default function Features() {
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

  return (
    <>
      {/* Features Section */}
      <section id="o-nas" ref={sectionRef} className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              Prečo si vybrať práve nás?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Naše marmelády a džemy vznikajú s láskou k prírode a tradíciám. Každý pohár nesie v sebe kúsok domácej pohody.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/80 hover:border-gray-600/50 hover:shadow-lg hover:scale-[1.02] group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produkty" className="py-16 lg:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
            <span className="inline-block bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Naše produkty
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              Čerstvé marmelády a džemy
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Vyberajte z bohatého sortimentu domácich marmelád a džemov, pripravených z čerstvého ovocia a prírodných surovín.
            </p>
          </div>

          {/* Special offer banner */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1">Špeciálna ponuka</p>
              <h3 className="text-white text-xl font-bold">Balíček 3+1 zadarmo na všetky džemy!</h3>
              <p className="text-blue-100 text-sm mt-1">Platí do konca mesiaca. Nepremeškajte túto príležitosť.</p>
            </div>
            <a
              href="#kontakt"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
            >
              Využiť ponuku
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:shadow-lg hover:scale-[1.02] hover:border-gray-600/50 group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                    <button
                      className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                      aria-label={`Pridať ${product.name} do košíka`}
                    >
                      Pridať do košíka
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
