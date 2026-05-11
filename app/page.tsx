export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-3xl mx-auto">
        <div className="mb-4 inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff]">
          🚨 Panic Level: CRITICAL — 3 assignments due tomorrow
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Stop Drowning in{" "}
          <span className="text-[#58a6ff]">Deadlines</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl">
          The gamified assignment tracker that calculates your real-time panic level, sends escalating alerts before deadlines hit, and rewards you for actually finishing stuff.
        </p>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Tracking — $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No panic required.</p>

        <div className="mt-16 grid grid-cols-3 gap-8 w-full">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#f85149] mb-1">🔥 94</div>
            <div className="text-sm text-[#8b949e]">Panic Score</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#3fb950] mb-1">+250 XP</div>
            <div className="text-sm text-[#8b949e]">Earned Today</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">7</div>
            <div className="text-sm text-[#8b949e]">Day Streak</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-10">One Plan. No Panic.</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Student Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited assignment tracking",
              "Real-time panic level calculator",
              "Escalating push notifications",
              "XP rewards & achievement badges",
              "Parent dashboard access",
              "Weekly stress report"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What is a panic score?</h3>
            <p className="text-[#8b949e] text-sm">Your panic score is calculated from assignment deadlines, estimated effort, and your current workload. Higher score = more urgent action needed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do the escalating alerts work?</h3>
            <p className="text-[#8b949e] text-sm">Alerts start gentle (7 days out) and get increasingly urgent as deadlines approach — from a nudge to a full-on alarm at 2 hours remaining.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can parents monitor progress?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Parents get a read-only dashboard showing assignments, completion rates, and panic levels — without being able to edit anything.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-[#8b949e] text-sm border-t border-[#30363d]">
        © {new Date().getFullYear()} Deadline Panic Tracker. Built for students who procrastinate.
      </footer>
    </main>
  );
}
