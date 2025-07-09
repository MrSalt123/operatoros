'use client'

// Array of company logos. I've added two new placeholders.
// The `invert` property will be used to add the invert class conditionally.
const companies = [
  { name: 'Nextdoor Roofer', logo: '/logos/roofer.svg', invert: true },
  { name: 'Yvyra', logo: '/logos/yvyra.svg', invert: true },
  { name: 'Mister Sparky', logo: '/logos/mistersparky.svg', invert: false },
  { name: 'Cluely', logo: '/logos/cluely.avif', invert: true },
  { name: 'Advertize', logo: '/logos/advertize.avif', invert: false },
  { name: 'Adam Clack', logo: '/logos/adamclack.svg', invert: true },
  { name: 'Founder Institute', logo: '/logos/founder-institute.png', invert: true },
  { name: 'Views', logo: '/logos/views.svg', invert: true },
];

export default function LogoTicker() {
  // We need to duplicate the logos to create a seamless loop
  const extendedLogos = [...companies, ...companies];
  const animationDuration = 40; // Duration in seconds for one full scroll

  return (
    <div className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center flex flex-col mb-16 gap-2">
          <h4 className="text-foreground">
            Augmenting the world's most ambitious teams.
          </h4>
          <h4 className="text-muted">
            From agile startups to global enterprises.
          </h4>
        </div>
        <div className="logo-ticker-wrapper">
          <div className="logo-ticker-track">
            {extendedLogos.map((company, index) => (
              <div key={index} className="logo-item">
                <img
                  src={company.logo}
                  alt={`Logo for ${company.name}`}
                  // Conditionally apply the invert class
                  className={`max-h-12 w-auto object-contain grayscale ${company.invert ? 'invert' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-ticker-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          /* Add a fade effect on the edges */
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }

        .logo-ticker-track {
          display: flex;
          width: calc(200px * ${companies.length * 2}); /* Width of all logos combined */
          animation: scroll ${animationDuration}s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * ${companies.length})); /* Scroll by the width of the original set of logos */
          }
        }

        .logo-item {
          width: 200px; /* Fixed width for each logo container */
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2rem;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        
        .logo-item:hover {
            opacity: 1;
        }
      `}</style>
    </div>
  );
}
