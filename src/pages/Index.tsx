import Icon from '@/components/ui/icon';

const DISCORD_URL = "https://discord.gg/4s6422bp";
const HERO_BG = "https://cdn.poehali.dev/projects/8620edbf-773b-414c-a78b-f7fbaab7544a/files/b9477f4b-0c61-4c64-a258-46e690d7ad8e.jpg";
const SOLDIERS_IMG = "https://cdn.poehali.dev/projects/8620edbf-773b-414c-a78b-f7fbaab7544a/files/1710038e-32a5-43bb-aa6a-601a36cecc89.jpg";

const features = [
  {
    icon: "Sword",
    title: "СССР vs Германия",
    desc: "Два противоборствующих фронта с уникальным оружием, техникой и тактиками эпохи 1941–1945 гг.",
  },
  {
    icon: "Map",
    title: "Исторические карты",
    desc: "Сражения в Сталинграде, под Курском, на Украине — воссозданные с документальной точностью.",
  },
  {
    icon: "Users",
    title: "Живое сообщество",
    desc: "Опытные командиры и новобранцы. Дружная атмосфера, командная игра, военный реализм.",
  },
  {
    icon: "Shield",
    title: "Честная игра",
    desc: "Строгие правила, активная администрация. Нулевая терпимость к читерству и токсичности.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D0A07] text-[#C8B98A] scroll-smooth">

      {/* ── НАВИГАЦИЯ ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: 'linear-gradient(to bottom, rgba(13,10,7,0.95), transparent)' }}>
        <div className="flex items-center gap-3">
          <span className="text-[#C0392B] text-2xl animate-flicker">★</span>
          <span className="font-display text-lg tracking-[0.2em] text-[#C8B98A] uppercase">
            World War 2
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="font-display text-xs tracking-widest uppercase text-[#8B7D5A] hover:text-[#C8B98A] transition-colors">Главная</a>
          <a href="#about" className="font-display text-xs tracking-widest uppercase text-[#8B7D5A] hover:text-[#C8B98A] transition-colors">О сервере</a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
            className="font-display text-xs tracking-widest uppercase px-5 py-2 bg-[#5865F2] text-white hover:bg-[#4752C4] transition-colors">
            Discord
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden scratches">
        {/* Фон */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="WW2 Eastern Front"
            className="w-full h-full object-cover object-center animate-fade-in"
            style={{ filter: 'sepia(60%) brightness(0.35) contrast(1.2)' }}
          />
        </div>

        {/* Виньетка */}
        <div className="absolute inset-0 vignette" />

        {/* Горизонтальные царапины */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 3px, rgba(200,185,138,0.015) 3px, rgba(200,185,138,0.015) 4px)'
        }} />

        {/* Красная полоса сверху */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#8B1A1A]" />

        {/* Контент */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

          {/* Надпись над заголовком */}
          <p className="animate-fade-in-up delay-200 font-mono-custom text-xs tracking-[0.4em] uppercase text-[#8B7D5A] mb-6">
            Garry's Mod · WW2 Role Play · 1941–1945
          </p>

          {/* Главный заголовок */}
          <h1 className="animate-fade-in-up delay-400 font-display font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', letterSpacing: '0.05em' }}>
            <span className="block text-[#C8B98A]">WORLD</span>
            <span className="block text-[#C0392B] animate-flicker" style={{ textShadow: '0 0 40px rgba(192,57,43,0.5)' }}>WAR 2</span>
          </h1>

          {/* Разделитель */}
          <div className="animate-fade-in-up delay-600 divider-star text-[#C9A227] text-xl mb-6">★</div>

          {/* Подзаголовок */}
          <p className="animate-fade-in-up delay-600 font-display text-[#8B7D5A] tracking-widest uppercase text-sm md:text-base mb-10">
            СССР&nbsp;&nbsp;·&nbsp;&nbsp;против&nbsp;&nbsp;·&nbsp;&nbsp;Германии
          </p>

          {/* Кнопки */}
          <div className="animate-fade-in-up delay-800 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#5865F2] text-white font-display tracking-widest uppercase text-sm hover:bg-[#4752C4] transition-all duration-300 animate-pulse-red"
              style={{ boxShadow: '0 0 30px rgba(88,101,242,0.3)' }}
            >
              <Icon name="MessageCircle" size={18} />
              Вступить в Discord
            </a>
            <a
              href="#about"
              className="flex items-center gap-3 px-8 py-4 border border-[#C8B98A]/30 text-[#C8B98A] font-display tracking-widest uppercase text-sm hover:border-[#C8B98A]/70 hover:bg-[#C8B98A]/5 transition-all duration-300"
            >
              <Icon name="ChevronDown" size={18} />
              О сервере
            </a>
          </div>

          {/* Онлайн-индикатор */}
          <div className="animate-fade-in-up delay-1000 flex items-center justify-center gap-2 mt-10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono-custom text-xs text-[#8B7D5A] tracking-widest">СЕРВЕР ОНЛАЙН</span>
          </div>
        </div>

        {/* Нижний градиент */}
        <div className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, #0D0A07, transparent)' }} />
      </section>

      {/* ── О СЕРВЕРЕ ── */}
      <section id="about" className="relative py-24 md:py-36 px-6">

        {/* Фоновое украшение */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8B98A]/20 to-transparent" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[20rem] font-display font-bold text-[#C8B98A]/[0.02] leading-none select-none">
            1941
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* Заголовок секции */}
          <div className="text-center mb-20">
            <p className="font-mono-custom text-xs tracking-[0.4em] uppercase text-[#8B7D5A] mb-4">
              — Досье —
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[#C8B98A] tracking-wider uppercase mb-6">
              О сервере
            </h2>
            <div className="divider-star text-[#8B1A1A] text-lg max-w-xs mx-auto">✦</div>
          </div>

          {/* Основной блок */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

            {/* Фото */}
            <div className="relative">
              <div className="absolute -inset-3 border border-[#C8B98A]/10" />
              <div className="absolute -inset-1 border border-[#C8B98A]/20" />
              <img
                src={SOLDIERS_IMG}
                alt="Советские солдаты"
                className="w-full h-80 md:h-96 object-cover"
                style={{ filter: 'sepia(70%) brightness(0.5) contrast(1.3)' }}
              />
              {/* Уголки */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#C9A227]/60" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#C9A227]/60" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#C9A227]/60" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#C9A227]/60" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-mono-custom text-xs text-[#8B7D5A] tracking-widest">РП-сервер · Garry's Mod</p>
              </div>
            </div>

            {/* Текст */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-[#C8B98A] tracking-wider uppercase mb-6">
                Война, которая изменила мир
              </h3>
              <div className="space-y-4 text-[#8B7D5A] leading-relaxed">
                <p>
                  Добро пожаловать на сервер <span className="text-[#C8B98A]">«Восточный Фронт»</span> — 
                  ролевой проект в Garry's Mod, воссоздающий кровопролитные сражения 
                  Второй Мировой войны на Восточном фронте.
                </p>
                <p>
                  Выберите сторону: встаньте под знамёна <span className="text-[#C0392B] font-semibold">Советского Союза</span> и 
                  защищайте Родину, или примкните к силам <span className="text-[#888] font-semibold">Вермахта</span> в борьбе за 
                  стратегические рубежи.
                </p>
                <p>
                  Исторические карты, аутентичное оружие, тактическое командование — 
                  каждый бой ощущается как страница из учебника истории.
                </p>
              </div>

              {/* Статы */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { num: '2', label: 'Фракции' },
                  { num: '24/7', label: 'Онлайн' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center border border-[#C8B98A]/15 py-4 px-2"
                    style={{ background: 'rgba(200,185,138,0.03)' }}>
                    <div className="font-display text-2xl font-bold text-[#C0392B] mb-1">{stat.num}</div>
                    <div className="font-mono-custom text-xs text-[#8B7D5A] tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Фичи */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C8B98A]/10">
            {features.map((f, i) => (
              <div key={i} className="p-8 group hover:bg-[#C8B98A]/5 transition-colors duration-300"
                style={{ background: 'rgba(13,10,7,0.8)' }}>
                <div className="text-[#8B1A1A] mb-4 group-hover:text-[#C0392B] transition-colors">
                  <Icon name={f.icon} fallback="Shield" size={28} />
                </div>
                <h4 className="font-display text-base tracking-wider uppercase text-[#C8B98A] mb-3">{f.title}</h4>
                <p className="text-[#8B7D5A] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПРИЗЫВ ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#8B1A1A]/8" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(139,26,26,0.03) 20px, rgba(139,26,26,0.03) 21px)'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B1A1A]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B1A1A]/60 to-transparent" />

        <div className="relative max-w-3xl mx-auto text-center px-6">
          <span className="text-[#C0392B] text-4xl animate-flicker">★</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#C8B98A] tracking-wider uppercase mt-4 mb-4">
            Вступай в ряды
          </h2>
          <p className="text-[#8B7D5A] mb-10 leading-relaxed">
            Присоединяйся к нашему Discord-серверу, выбирай фракцию и вступай в бой.
            <br />История ждёт своих героев.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#5865F2] text-white font-display tracking-[0.2em] uppercase text-sm hover:bg-[#4752C4] transition-all duration-300"
            style={{ boxShadow: '0 0 40px rgba(88,101,242,0.25)' }}
          >
            <Icon name="MessageCircle" size={20} />
            Открыть Discord
          </a>
        </div>
      </section>

      {/* ── ФУТЕР ── */}
      <footer className="border-t border-[#C8B98A]/10 py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-[#C0392B]">★</span>
          <span className="font-display text-sm tracking-[0.2em] uppercase text-[#8B7D5A]">Восточный Фронт</span>
          <span className="text-[#C0392B]">★</span>
        </div>
        <p className="font-mono-custom text-xs text-[#8B7D5A]/50 tracking-widest">
          GARRY'S MOD · WW2 SERVER · 1941–1945
        </p>
      </footer>
    </div>
  );
}