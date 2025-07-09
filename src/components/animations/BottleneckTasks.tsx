export default function BottleneckTasks() {
  return (
    <div
      className="relative rounded-xl border-t border-l border-white/10 p-6 w-full max-w-md shadow-inner overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, var(--bg-light), var(--background)), linear-gradient(to right, var(--bg-light), var(--background))`,
        backgroundBlendMode: 'overlay',
        WebkitMaskImage:
          'linear-gradient(to bottom, white 60%, transparent), linear-gradient(to right, white 80%, transparent)',
        maskImage:
          'linear-gradient(to bottom, white 60%, transparent), linear-gradient(to right, white 80%, transparent)',
        WebkitMaskComposite: 'destination-in',
        maskComposite: 'intersect',
      }}
    >


      {/* Top-left gray glow */}
      <div className="absolute top-[-40px] left-[-40px] w-36 h-36 bg-white/10 blur-2xl rounded-full pointer-events-none" />

      <span className="text-foreground text-xl mb-4 block">Internal Task Overview</span>

      <div className="flex flex-col gap-3 text-sm text-white/80">
        <div className="flex items-center gap-8">
          <span className="text-white flex flex-row gap-2 items-center">
            <img src="/icons/package.svg" alt="package" className="w-4 h-4" /> Inventory Sync
          </span>
          <CheckIcon />
        </div>

        <div className="flex items-center gap-9">
          <span className="text-white flex flex-row gap-2 items-center">
            <img src="/icons/invoice.svg" alt="invoice" className="w-4 h-4" /> Invoice Parser
          </span>
          <WarningIcon />
        </div>

        <div className="flex items-center gap-6">
          <span className="text-white flex flex-row gap-2 items-center">
            <img src="/icons/lead.svg" alt="lead" className="w-4 h-4" /> Lead Attribution
          </span>
          <WarningIcon />
        </div>

        <div className="flex items-center gap-[46.5px]">
          <span className="text-white flex flex-row gap-2 items-center">
            <img src="/icons/email.svg" alt="email" className="w-4 h-4" />Email Triage
          </span>
          <CheckIcon />
        </div>
      </div>
    </div>
  );
}

// ✅ Green Check Icon
function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
    </svg>
  );
}

// ❌ Red Warning Icon
function WarningIcon() {
  return (
    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
    </svg>
  );
}
