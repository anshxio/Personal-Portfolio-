
function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-display text-2xl font-extrabold tracking-tight transition-colors duration-300 hover:text-neon-rose"
        >
          ANSH<span className="text-cerulean">.DEV</span>
          <span className="text-neon-rose">_</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12 font-mono text-xs tracking-widest text-gray-300">

          <a
            href="#about"
          className="text-base text-gray-300 transition-colors duration-300 hover:text-neon-rose"
          >
            ABOUT
          </a>

          <a
            href="#work"
            className="text-base text-gray-300 transition-colors duration-300 hover:text-neon-rose"
          >
            WORK
          </a>

          <a
            href="#insights"
            className="text-base text-gray-300 transition-colors duration-300 hover:text-neon-rose"
          >
            INSIGHTS
          </a>

        </div>

        {/* Gradient Border Contact Button */}
        <a
          href="#contact"
          className="group rounded-full p-[1px] bg-gradient-to-r from-cerulean to-neon-rose transition-all duration-300 hover:shadow-[0_0_18px_rgba(0,123,167,0.35)]"
        >
          <span className="block rounded-full bg-[#0A0A0A] px-7 py-3 font-mono text-xs font-semibold tracking-wider text-white transition-colors duration-300 group-hover:bg-[#15101A]">
            LET'S TALK ↗
          </span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
