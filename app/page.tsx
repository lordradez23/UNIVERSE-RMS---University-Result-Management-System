import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GraduationCap, ShieldCheck, UserCheck, ArrowRight, Zap, Globe, Lock, BookOpen, Users, Database, Layers, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Premium Navbar */}
      <header className="fixed top-0 z-50 w-full px-6 py-6 transition-all duration-300 md:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between glass rounded-full px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-xl p-2">
              <GraduationCap className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">UNIVERSE RMS</span>
          </div>
          <nav className="hidden gap-10 md:flex">
            <Link href="#features" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Features</Link>
            <Link href="#security" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Security</Link>
            <Link href="#university" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Institutions</Link>
          </nav>
          <div className="flex gap-6">
            <Link href="/login">
              <Button variant="ghost" className="text-neutral-400 hover:text-white">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button size="md">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative flex flex-1 flex-col pt-32 overflow-hidden">
        {/* Animated Texture Backgrounds */}
        <div className="absolute inset-0 z-0 texture-grid" />
        <div className="absolute inset-0 z-0 texture-noise" />

        <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-20 text-center md:py-32">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-gradient text-5xl font-extrabold tracking-tighter sm:text-7xl leading-[1.1] md:leading-[1.1]">
              Management. <br /> Redefined for Excellence.
            </h1>
            <p className="mx-auto max-w-2xl text-base text-neutral-400 md:text-lg font-medium leading-relaxed">
              Experience the pinnacle of university result management. Secure, intuitive, 
              and lightning-fast systems built for the modern academic world.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row pt-4">
              <Link href="/login">
                <Button size="lg" className="h-12 px-10 text-sm shadow-2xl shadow-white/5">
                  Access Portal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="h-12 px-10 text-sm">
                  Institutional Setup
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating UI Elements Preview */}
          <div className="relative mt-24 w-full max-w-5xl px-4 animate-float">
            <div className="glass-card w-full relative overflow-hidden rounded-3xl border border-white/5 bg-black/40">
              {/* Fake UI Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
              <div className="p-8 flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <div className="text-[10px] font-mono tracking-widest text-white/50 uppercase">Live System Feed</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-neutral-800" />
                    <div className="h-2 w-2 rounded-full bg-neutral-800" />
                    <div className="h-2 w-2 rounded-full bg-neutral-800" />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Active Students", value: "8,492", w: "w-[85%]" },
                    { label: "Processed Results", value: "34.2M", w: "w-[60%]" },
                    { label: "System Load", value: "1.2%", w: "w-[12%]" },
                    { label: "Network status", value: "Secure", w: "w-[100%]" }
                  ].map((stat, i) => (
                    <div key={i} className="h-24 glass rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group border border-white/5 bg-white/[0.01]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                      <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">{stat.label}</div>
                      <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                         <div className={`h-full bg-white opacity-90 ${stat.w}`} />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="h-48 glass rounded-2xl p-6 relative overflow-hidden border border-white/5 bg-white/[0.01]">
                  <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-6 border-b border-white/5 pb-3">Recent Transaction Log</div>
                  <div className="space-y-4">
                    {[
                      { id: "0xA92B...4F12", status: "Verified", time: "Just now", opacity: "opacity-100" },
                      { id: "0xC71A...9B34", status: "Processed", time: "2s ago", opacity: "opacity-70" },
                      { id: "0x2F88...E19C", status: "Encrypted", time: "5s ago", opacity: "opacity-40" }
                    ].map((log, i) => (
                      <div key={i} className={`flex justify-between items-center ${log.opacity}`}>
                         <div className="flex gap-4 items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                           <span className="text-sm text-neutral-300 font-mono tracking-tight">{log.id}</span>
                         </div>
                         <div className="flex gap-6 items-center">
                           <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{log.status}</span>
                           <span className="text-[10px] text-neutral-600 font-mono w-16 text-right">{log.time}</span>
                         </div>
                      </div>
                    ))}
                  </div>
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent h-[150%] w-full animate-[float_4s_linear_infinite]" />
                </div>
              </div>
            </div>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent h-full w-full z-20 pointer-events-none" />
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<UserCheck className="h-6 w-6" />}
              title="Identity First"
              description="Granular role-based access control ensuring data reaches only the intended recipients."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Immutable Records"
              description="Advanced cryptographic hashing for all academic records ensuring zero tampering."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6" />}
              title="Global Scale"
              description="Built on distributed edge architecture for instantaneous performance across continents."
            />
          </div>
        </section>

        {/* Tailored Experiences Section */}
        <section id="university" className="mx-auto max-w-7xl px-6 py-24 border-t border-white/5">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Purpose-built for every role.</h2>
            <p className="text-base text-neutral-400 leading-relaxed">
              UNIVERSE RMS is not a one-size-fits-all solution. Our platform adapts its interface dynamically, offering specialized portals designed to maximize efficiency for students, educators, and administrators alike.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="glass-card p-8 rounded-3xl border border-white/10 background-noise">
              <BookOpen className="h-8 w-8 text-white mb-5" />
              <h3 className="text-xl font-bold text-white mb-3">Student Portal</h3>
              <p className="text-sm text-neutral-400">Visualize academic progress with intuitive results tables, grade-aware indicators, and instant access to performance analytics across semesters.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <Users className="h-8 w-8 text-white mb-5" />
              <h3 className="text-xl font-bold text-white mb-3">Lecturer Dashboard</h3>
              <p className="text-sm text-neutral-400">Streamline your workflow with effortless result uploads, bulk processing capabilities, and built-in validation for secure grade entry.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <Database className="h-8 w-8 text-white mb-5" />
              <h3 className="text-xl font-bold text-white mb-3">Admin Panel</h3>
              <p className="text-sm text-neutral-400">Maintain complete system oversight with real-time analytics, user account management, and global record monitoring tools.</p>
            </div>
          </div>
        </section>

        {/* Technical Stack Section */}
        <section id="security" className="relative w-full border-y border-white/5 bg-white/[0.02] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Uncompromising architecture.</h2>
                <p className="text-base text-neutral-400 mb-8 leading-relaxed">
                  Engineered using the absolute latest web technologies. We prioritized zero-latency data transfers, bulletproof authentication lifecycles, and a responsive application skeleton that feels entirely native.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Next.js 15 & App Router</h4>
                      <p className="text-sm text-neutral-400 mt-1">Leveraging React Server Components for unparalleled speed and SEO optimization.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Advanced JWT Lifecycle</h4>
                      <p className="text-sm text-neutral-400 mt-1">Automatic token management with secure foreground interceptors and background logic.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Strict Type Safety</h4>
                      <p className="text-sm text-neutral-400 mt-1">End-to-end TypeScript enforcement ensuring zero runtime data malformations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-3xl border border-white/5 h-[500px] flex flex-col relative overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                
                {/* Simulated Ciphertext Stream */}
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none flex flex-col pt-4">
                   <div className="animate-[float_20s_linear_infinite] whitespace-break-spaces font-mono text-[10px] leading-[2] text-neutral-600 break-all px-8">
                     {'0x8F92A 0x1B4E8 0x93C2A 0x44F01 0x7E2D9 0x55B1F 0x88C4D 0x3A9E2 0x1F2B4 0x7C9D1 0x5E4F8 0x2A1B3 0x9D8C7 0x6E5F4 0x3B2A1 '}
                     {'0x4C8D9 0x1E7F2 0x5A3B4 0x9D6C8 0x2F1E5 0x7B4A3 0x8C9D2 0x3E5F1 0x6A7B8 0x2C4D9 0x1F3E5 0x9A8B7 0x4C5D6 0x3E2F1 0x7B8A9 '}
                     {'0x5D6C7 0x2E3F4 0x8A9B1 0x1C2D3 0x9E8F7 0x4A5B6 0x3D2E1 0x7F8A9 0x6C5D4 0x2B3C4 0x1E5F6 0x8A9B7 0x3C4D5 0x9E8F1 0x2A3B4 '}
                     {'0x8F92A 0x1B4E8 0x93C2A 0x44F01 0x7E2D9 0x55B1F 0x88C4D 0x3A9E2 0x1F2B4 0x7C9D1 0x5E4F8 0x2A1B3 0x9D8C7 0x6E5F4 0x3B2A1 '}
                     {'0x4C8D9 0x1E7F2 0x5A3B4 0x9D6C8 0x2F1E5 0x7B4A3 0x8C9D2 0x3E5F1 0x6A7B8 0x2C4D9 0x1F3E5 0x9A8B7 0x4C5D6 0x3E2F1 0x7B8A9 '}
                     {'0x5D6C7 0x2E3F4 0x8A9B1 0x1C2D3 0x9E8F7 0x4A5B6 0x3D2E1 0x7F8A9 0x6C5D4 0x2B3C4 0x1E5F6 0x8A9B7 0x3C4D5 0x9E8F1 0x2A3B4 '}
                   </div>
                </div>

                <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 mt-4">
                  {/* Animated Rings around Lock */}
                  <div className="relative flex items-center justify-center w-32 h-32 mb-10">
                     <div className="absolute inset-0 border border-white/10 rounded-full border-t-white/60 animate-[spin_4s_linear_infinite]" />
                     <div className="absolute inset-2 border border-white/5 rounded-full border-b-white/40 animate-[spin_3s_linear_infinite_reverse]" />
                     <div className="absolute inset-4 bg-white/5 rounded-full animate-pulse blur-sm" />
                     <Lock className="h-10 w-10 text-white relative z-10" />
                  </div>
                  
                  <div className="text-xl font-bold text-white tracking-widest uppercase mb-3">Encrypted Tunnel</div>
                  <div className="text-xs font-mono text-neutral-400 bg-white/5 px-4 py-1.5 rounded-md border border-white/10 shadow-inner">
                    AES-256-GCM
                  </div>
                  
                  {/* Connection Nodes */}
                  <div className="mt-auto w-full pt-8 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest font-mono text-neutral-500">
                     <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                       Client Node
                     </div>
                     <div className="flex-1 px-6 flex items-center justify-center relative overflow-hidden">
                        <div className="w-full h-px bg-white/10" />
                        <div className="absolute w-full h-px bg-white/50 -translate-x-full animate-[shimmer_2s_infinite]" />
                     </div>
                     <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full border border-white/40" />
                       Core Server
                     </div>
                  </div>
                </div>

                {/* Dark Gradient Overlay to fade out edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-transparent to-transparent pointer-events-none z-20" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000000_100%)] pointer-events-none z-20 opacity-90" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl mb-6">
            Deploy the gold standard in academic management.
          </h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row mt-8">
            <Link href="/register">
              <Button size="lg" className="h-12 px-8 text-sm shadow-2xl shadow-white/10 w-full sm:w-auto">
                Begin Setup Process
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="h-12 px-8 text-sm w-full sm:w-auto hover:bg-white hover:text-black transition-all">
                Access Live Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/5 bg-[#000000] pt-20 pb-10 px-6 md:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 border-b border-white/5 pb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-6 w-6 text-white" />
                <span className="text-2xl font-bold text-white tracking-tighter">UNIVERSE RMS</span>
              </div>
              <p className="text-neutral-400 max-w-sm mb-8 leading-relaxed">
                The gold standard in academic data management. Engineered for zero-latency, cryptographic security, and flawless institutional operations.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-tight">Platform</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><Link href="/login" className="hover:text-white transition-colors">Student Portal</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Educator Dashboard</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Admin Console</Link></li>
                <li><Link href="/register" className="hover:text-white transition-colors">Institutional Setup</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-tight">Resources</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Implementation Guide</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">System Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-tight">Company</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-600">
            <p>© 2024 University Result Management System. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
               <span className="flex items-center gap-2"><Lock className="h-3 w-3" /> AES-256 Encrypted</span>
               <span className="flex items-center gap-2"><ShieldCheck className="h-3 w-3" /> SOC Type II Certified</span>
               <span className="flex items-center gap-2"><Globe className="h-3 w-3" /> Global Edge Network</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-white/[0.07] border border-white/5 transition-all duration-300">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
