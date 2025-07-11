export default function LeadGenerationResult() {
    return (
      <div
        className="relative rounded-xl border-t border-l border-white/10 p-6 w-full max-w-md shadow-inner overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--bg-light), var(--background)), linear-gradient(to right, var(--bg-light), var(--background))`,
          backgroundBlendMode: 'overlay',
          WebkitMaskImage:
            'linear-gradient(to bottom, white 60%, transparent), linear-gradient(to right, white 70%, transparent)',
          maskImage:
            'linear-gradient(to bottom, white 60%, transparent), linear-gradient(to right, white 70%, transparent)',
          WebkitMaskComposite: 'destination-in',
          maskComposite: 'intersect',
        }}
      >
        {/* Top-left white glow */}
        <div className="absolute top-[-40px] left-[-40px] w-36 h-36 bg-white/10 blur-2xl rounded-full pointer-events-none" />
  
        {/* Input bar */}
        <div className="bg-bg-light border border-white/10 px-4 py-2 rounded-md mb-4 text-white text-sm w-full">
          “Give me 100 leads”
        </div>
  
        <div className="flex flex-col gap-3 text-sm text-white/80">
          {[
            { name: "John Carter", email: "john@company.com" },
            { name: "Sara Lee", email: "sara@startup.io" },
            { name: "Mike Banner", email: "mike.banner@biztech.co" },
            { name: "Emily Zhang", email: "emily.z@solutions.ai" },
            { name: "Carlos Rivera", email: "carlos@scaleup.app" },
          ].map((lead, i) => (
            <div key={i} className="flex justify-between items-center bg-bg-light px-3 py-2 rounded-md text-white/90">
              <span>{lead.name}</span>
              <span className="text-white/60 text-xs">{lead.email}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  