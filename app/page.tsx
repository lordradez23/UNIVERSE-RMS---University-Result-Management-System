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
          <div className="animate-fade-in space-y-8">
            <h1 className="text-gradient text-6xl font-extrabold tracking-tighter sm:text-8xl leading-[1.1] md:leading-[1.1]">
              Management. <br /> Redefined for Excellence.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400 md:text-xl font-medium leading-relaxed">
              Experience the pinnacle of university result management. Secure, intuitive, 
              and lightning-fast systems built for the modern academic world.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row pt-4">
              <Link href="/login">
                <Button size="lg" className="h-16 px-12 text-lg shadow-2xl shadow-white/5">
                  Access Portal <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="h-16 px-12 text-lg">
                  Institutional Setup
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating UI Elements Preview */}
          <div className="relative mt-24 w-full max-w-5xl px-4 animate-float">
            <div className="glass-card h-[400px] w-full relative overflow-hidden rounded-3xl border border-white/5">
              {/* Fake UI Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
              <div className="p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="h-4 w-32 glass rounded-full" />
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-neutral-700" />
                    <div className="h-2 w-2 rounded-full bg-neutral-700" />
                    <div className="h-2 w-2 rounded-full bg-neutral-700" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-24 glass rounded-2xl animate-pulse" />
                  ))}
                </div>
                <div className="h-32 glass rounded-2xl animate-pulse" />
              </div>
            </div>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent h-full w-full z-10" />
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
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 border-t border-white/5">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">Purpose-built for every role.</h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              UNIVERSE RMS is not a one-size-fits-all solution. Our platform adapts its interface dynamically, offering specialized portals designed to maximize efficiency for students, educators, and administrators alike.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="glass-card p-10 rounded-3xl border border-white/10 background-noise">
              <BookOpen className="h-10 w-10 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Student Portal</h3>
              <p className="text-neutral-400">Visualize academic progress with intuitive results tables, grade-aware indicators, and instant access to performance analytics across semesters.</p>
            </div>
            <div className="glass-card p-10 rounded-3xl border border-white/10">
              <Users className="h-10 w-10 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Lecturer Dashboard</h3>
              <p className="text-neutral-400">Streamline your workflow with effortless result uploads, bulk processing capabilities, and built-in validation for secure grade entry.</p>
            </div>
            <div className="glass-card p-10 rounded-3xl border border-white/10">
              <Database className="h-10 w-10 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Admin Panel</h3>
              <p className="text-neutral-400">Maintain complete system oversight with real-time analytics, user account management, and global record monitoring tools.</p>
            </div>
          </div>
        </section>

        {/* Technical Stack Section */}
        <section className="relative w-full border-y border-white/5 bg-white/[0.02] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">Uncompromising architecture.</h2>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  Engineered using the absolute latest web technologies. We prioritized zero-latency data transfers, bulletproof authentication lifecycles, and a responsive application skeleton that feels entirely native.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Next.js 15 & App Router</h4>
                      <p className="text-sm text-neutral-400 mt-1">Leveraging React Server Components for unparalleled speed and SEO optimization.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Advanced JWT Lifecycle</h4>
                      <p className="text-sm text-neutral-400 mt-1">Automatic token management with secure foreground interceptors and background logic.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Strict Type Safety</h4>
                      <p className="text-sm text-neutral-400 mt-1">End-to-end TypeScript enforcement ensuring zero runtime data malformations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-3xl p-8 border border-white/5 h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative z-10 text-center space-y-4">
                  <Lock className="h-16 w-16 text-white mx-auto animate-pulse" />
                  <div className="text-xl font-bold text-white tracking-widest uppercase">Encrypted</div>
                  <div className="text-sm font-mono text-neutral-500">AES-256-GCM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-4xl px-6 py-32 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl mb-8">
            Deploy the gold standard in academic management.
          </h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row mt-10">
            <Link href="/register">
              <Button size="lg" className="h-14 px-10 text-base shadow-2xl shadow-white/10 w-full sm:w-auto">
                Begin Setup Process
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="h-14 px-10 text-base w-full sm:w-auto hover:bg-white hover:text-black transition-all">
                Access Live Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/5 py-12 px-6 text-center md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-white" />
            <span className="font-bold text-white tracking-tighter">UNIVERSE RMS</span>
          </div>
          <div className="text-sm text-neutral-500">
            © 2024 University Result Management System. The Gold Standard for Institutions.
          </div>
          <div className="flex gap-6">
            <Lock className="h-4 w-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" />
            <Globe className="h-4 w-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-card group hover:bg-white/[0.07] transition-all">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-neutral-400 line-height-relaxed text-sm">{description}</p>
    </div>
  );
}
