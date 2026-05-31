import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { 
  ArrowRight, 
  MapPin, 
  TrendingUp, 
  Cpu, 
  Zap, 
  CheckCircle, 
  Globe, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";

// Static data mapping for supported cities
const cityDataMap: Record<string, {
  name: string;
  state: string;
  intro: string;
  challenges: string;
  stats: string;
  localKeywords: string[];
}> = {
  patna: {
    name: "Patna",
    state: "Bihar",
    intro: "Empowering businesses in Kankarbagh, Boring Road, Bailey Road, and across Patna to dominate local search results and scale operations with modern tech.",
    challenges: "Patna's local market is digitizing rapidly. Traditional marketing is no longer sufficient to stand out. Businesses in Bihar require high-performance web systems and localized SEO strategies to capture ready-to-buy local customers before competitors do.",
    stats: "320% Average Increase in Local Leads",
    localKeywords: ["digital marketing agency patna", "digital marketing company in patna", "website agency near me"]
  },
  ranchi: {
    name: "Ranchi",
    state: "Jharkhand",
    intro: "Fueling Jharkhand's industrial, retail, and real estate growth with enterprise-grade web development and high-ROI digital marketing.",
    challenges: "Ranchi's diverse economy demands customized growth frameworks. From retail storefronts to large industrial B2B players, ranking organically on Google Maps and search results requires robust technical SEO combined with conversion-focused web architecture.",
    stats: "4.8x Higher ROI on Ad Campaigns",
    localKeywords: ["ranchi digital marketing agency", "digital marketing agency in india", "website agency near me"]
  },
  siwan: {
    name: "Siwan",
    state: "Bihar",
    intro: "Helping local clinics, retail, schools, and emerging brands in Siwan leverage world-class digital strategies for massive local growth.",
    challenges: "With increasing mobile penetration, local search is the primary way consumers in Siwan find services. We bridge the technology gap by bringing premium custom web development and localized SEO models directly to your brand.",
    stats: "150% Growth in Direct Google Maps Calls",
    localKeywords: ["digital marketing agency in siwan", "digital marketing company in patna", "website agency near me"]
  },
  delhi: {
    name: "Delhi",
    state: "NCR",
    intro: "Helping Delhi-NCR startups and corporations scale through elite performance marketing and premium full-stack web platforms.",
    challenges: "In India's capital region, digital competition is fierce. To capture real traffic and convert prospects, brands need more than standard SEO — they need lightning-fast Next.js apps, customized enterprise systems, and hyper-targeted advertising.",
    stats: "10M+ Organic Search Impressions Generated",
    localKeywords: ["digital marketing agency delhi", "digital marketing agency near me", "website agency in usa"]
  },
  mumbai: {
    name: "Mumbai",
    state: "Maharashtra",
    intro: "Delivering high-end brand positioning and next-generation tech architectures for Mumbai's fast-paced corporate market.",
    challenges: "Mumbai's audiences demand premium brand experiences and flawless execution. Our customized website design and performance advertising strategies ensure your business ranks #1 and converts visitors on contact.",
    stats: "100/100 Perfect Page Speed Score",
    localKeywords: ["digital marketing agency in mumbai", "digital marketing agency in india", "website agency near me"]
  },
  bangalore: {
    name: "Bangalore",
    state: "Karnataka",
    intro: "Building high-performance Next.js applications and custom AI automation models for Bangalore's top tech startups and brands.",
    challenges: "In India's Silicon Valley, technological superiority is mandatory. We build scalable SaaS platforms, deploy custom n8n lead-nurturing workflows, and manage high-ROI performance advertising campaigns tailored to tech-centric markets.",
    stats: "70% Reduction in Operations Cost via AI",
    localKeywords: ["digital marketing agency in bangalore", "digital marketing agency near me", "website agency near me"]
  }
};

// Generates static parameters for Next.js build-time prerendering
export function generateStaticParams() {
  return Object.keys(cityDataMap).map((city) => ({
    city: city,
  }));
}

interface PageProps {
  params: Promise<{ city: string }>;
}

// Generate metadata dynamically for optimal SEO crawlers indexing
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const data = cityDataMap[city.toLowerCase()];
  
  if (!data) {
    return {
      title: "City Page | Ataur Agency",
    };
  }

  return {
    title: `Best Digital Marketing Company in ${data.name} | Top Website Agency`,
    description: `Ataur Agency is the top digital marketing agency in ${data.name}. We offer expert local SEO, PPC ads, and custom website design in ${data.name}, ${data.state} to help your business rank #1.`,
    keywords: [
      `top digital marketing agency in ${data.name}`,
      `best digital marketing company in ${data.name}`,
      `website agency in ${data.name}`,
      `SEO company in ${data.name}`,
      ...data.localKeywords
    ],
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const data = cityDataMap[city.toLowerCase()];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-gray-900 dark:text-white selection:bg-blue-500/30 selection:text-white relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Grid & Tech Glow Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-100 dark:opacity-30" />
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-950/10 blur-[120px] opacity-70" />
        <div className="absolute top-[40%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-500/5 dark:bg-purple-950/10 blur-[130px] opacity-70" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <MapPin size={14} className="text-blue-500 animate-pulse" />
                <span>Local Targeting: {data.name}, {data.state}</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
                Top Digital Marketing Agency in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-400">{data.name}</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-bold mb-8 leading-relaxed">
                Best Digital Marketing Company in {data.name} for High-Conversion Web Design, Local SEO, and Paid Lead Generation Campaigns.
              </h2>
              
              <p className="text-base text-gray-650 dark:text-gray-400 font-medium leading-relaxed max-w-3xl mb-8">
                {data.intro} {data.challenges} We customize our tech stack and marketing structures to ensure your brand dominates searches and attracts customers locally and globally.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-650 text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(79,70,229,0.25)] transition-all">
                  Claim Free Local SEO Audit <ArrowRight size={16} />
                </Link>
                <Link href="/#services" className="flex items-center justify-center gap-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                  Our Global Services
                </Link>
              </div>
            </div>

            {/* Right Local Trust Card */}
            <div className="w-full lg:w-[420px] shrink-0">
              <div className="glass-card p-8 border border-black/10 dark:border-white/10 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-blue-500">Local Authority Metrics</h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono uppercase">Verified Local Impact</span>
                    <h4 className="text-2xl font-black text-gray-900 dark:text-white mt-1">{data.stats}</h4>
                  </div>

                  <div className="border-t border-black/5 dark:border-white/5 pt-4">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono uppercase">Core Optimization Speed</span>
                    <h4 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">100/100 Mobile Vitals</h4>
                  </div>

                  <div className="border-t border-black/5 dark:border-white/5 pt-4">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono uppercase">Local Compliance</span>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-700 dark:text-gray-300 font-bold">
                      <ShieldCheck className="text-emerald-500" size={16} />
                      Google Business Profile Optimized
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Local Services Features */}
        <section className="py-20 bg-black/5 dark:bg-black/40 border-y border-black/5 dark:border-white/5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Tailored Services for Your Business in {data.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-450 max-w-2xl mx-auto">
                Discover how we integrate elite copywriting, data analysis, and advanced search algorithms to fuel your regional business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="glass-card p-8 border border-black/5 dark:border-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Local SEO & Map Pack Ranking</h3>
                <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed font-medium">
                  Dominate searches for <span className="italic">"digital marketing agency near me"</span> or <span className="italic">"website agency near me"</span> in {data.name}. We optimize your Google Maps presence to ensure local customers see your business first.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass-card p-8 border border-black/5 dark:border-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Next.js Custom Website Design</h3>
                <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed font-medium">
                  We build high-performance React/Next.js sites that load in milliseconds. Perfect for schools, hospitals, agencies, and e-commerce companies looking to convert {data.name} traffic instantly.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass-card p-8 border border-black/5 dark:border-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-500">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Performance Ads & Lead Generation</h3>
                <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed font-medium">
                  Scale your company using targeted lead pipelines on Facebook, Instagram, and Google Ads. Get direct inquiries, calls, and sales with a conversion strategy tailored for {data.name}.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* E-E-A-T Framework Local Integration */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-transparent border border-black/5 dark:border-white/5 p-8 md:p-16 rounded-[2.5rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <span className="text-blue-500 text-xs font-black uppercase tracking-widest mb-2 block">Our Search Methodology</span>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">Built on Google's Quality Guidelines (E-E-A-T)</h2>
                <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed font-medium mb-6">
                  We strictly follow modern Google search standards to deliver rankings that last. Unlike agencies that use spam tactics, our copywriters and developers focus on user-intent, secure coding, and genuine value creation.
                </p>
                <div className="space-y-4 font-bold text-sm text-gray-800 dark:text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-500 shrink-0" size={18} />
                    <span><b>Experience:</b> Proven campaigns targeting local markets in {data.name}.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-500 shrink-0" size={18} />
                    <span><b>Expertise:</b> Certified full-stack engineers and SEO copywriting veterans.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-500 shrink-0" size={18} />
                    <span><b>Authoritativeness:</b> Recognized search presence across India.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-500 shrink-0" size={18} />
                    <span><b>Trustworthiness:</b> Fully transparent workflows and secure cloud configurations.</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Local FAQ Section */}
              <div className="glass-card p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 space-y-6">
                <h3 className="text-xl font-bold mb-4 border-b border-black/5 dark:border-white/5 pb-2 text-gray-900 dark:text-white">Local FAQ</h3>
                
                <div>
                  <h4 className="font-black text-sm text-gray-800 dark:text-gray-250 mb-1">
                    Why choose Ataur Agency as my digital marketing agency in {data.name}?
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    We combine elite-level tech development (Next.js, React) with high-ROI local marketing. Instead of using template solutions, we build personalized growth systems optimized specifically for local search signals.
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-sm text-gray-800 dark:text-gray-250 mb-1">
                    How does local SEO help my {data.name}-based brand?
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    It targets search queries like "digital marketing company in {data.name}" and positions your business at the top of Google Search and Google Maps, capturing leads when they are actively looking to purchase.
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-sm text-gray-800 dark:text-gray-250 mb-1">
                    What is the average timeline for ranking on page #1?
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    For highly targeted local search terms, our optimized architecture allows businesses to see positive movement and map visibility within 30 to 90 days.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>

    </div>
  );
}
