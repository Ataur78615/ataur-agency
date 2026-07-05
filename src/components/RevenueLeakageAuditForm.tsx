"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Globe, 
  Layout, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ExternalLink,
  Zap,
  ShoppingBag,
  PenTool,
  Building2,
  Cpu,
  GraduationCap,
  Calendar,
  Newspaper,
  Users,
  Briefcase,
  Wallet,
  Stethoscope,
  UtensilsCrossed,
  Mail,
  ShieldCheck,
  Rocket,
  TrendingUp,
  CreditCard
} from "lucide-react";

const categories = [
  { id: 1, name: "Static Website", desc: "Simple pages (HTML, CSS), No backend", icon: <Globe className="w-5 h-5" /> },
  { id: 2, name: "Portfolio Website", desc: "Personal branding, Projects showcase", icon: <Layout className="w-5 h-5" /> },
  { id: 3, name: "E-commerce Website", desc: "Product listing, Cart, Payment", icon: <ShoppingBag className="w-5 h-5" /> },
  { id: 4, name: "Blog Website", desc: "Articles, Comments, Categories", icon: <PenTool className="w-5 h-5" /> },
  { id: 5, name: "Business / Corporate", desc: "Company services, Lead generation", icon: <Building2 className="w-5 h-5" /> },
  { id: 6, name: "Web Application (SaaS)", desc: "Login, Dashboard, Real-time features", icon: <Cpu className="w-5 h-5" /> },
  { id: 7, name: "Learning / LMS Platform", desc: "Courses, Video lessons, Tracking", icon: <GraduationCap className="w-5 h-5" /> },
  { id: 8, name: "Booking System", desc: "Hotel, Doctor, Travel booking", icon: <Calendar className="w-5 h-5" /> },
  { id: 9, name: "News / Magazine", desc: "Multiple categories, High traffic", icon: <Newspaper className="w-5 h-5" /> },
  { id: 10, name: "Social Media Platform", desc: "User profiles, Posts, Chat system", icon: <Users className="w-5 h-5" /> },
  { id: 11, name: "Job Portal Website", desc: "Job listing, Resume upload", icon: <Briefcase className="w-5 h-5" /> },
  { id: 12, name: "Finance / Banking App", desc: "Transactions, Dashboard analytics", icon: <Wallet className="w-5 h-5" /> },
  { id: 13, name: "AI-Based Web App", desc: "Chatbots, AI tools, Automation", icon: <Zap className="w-5 h-5" /> },
  { id: 14, name: "Healthcare Website", desc: "Appointments, Patient records", icon: <Stethoscope className="w-5 h-5" /> },
  { id: 15, name: "Restaurant / Hotel", desc: "Menu display, Booking, Ordering", icon: <UtensilsCrossed className="w-5 h-5" /> },
];

const plans = [
  { 
    id: "basic", 
    name: "Basic: Quick Scan", 
    price: 199, 
    desc: "Rapid performance & SEO check.", 
    icon: <Zap className="w-6 h-6" />,
    color: "blue"
  },
  { 
    id: "standard", 
    name: "Standard: Growth Blueprint", 
    price: 999, 
    desc: "Deep search audit & conversion check.", 
    icon: <TrendingUp className="w-6 h-6" />,
    color: "purple",
    recommended: true
  },
  { 
    id: "premium", 
    name: "Premium: Ultimate Digital Diagnostic", 
    price: 2999, 
    desc: "Complete tech, UX & security analysis.", 
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "indigo",
    recommended: true
  }
];

export default function RevenueLeakageAuditForm() {
  const [formData, setFormData] = useState({
    websiteName: "",
    category: "",
    email: "",
    whatsappNumber: "",
    websiteUrl: "",
    plan: "",
    amount: 0
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.plan) {
      alert("Please select an Audit Plan to continue.");
      return;
    }

    setLoading(true);

    try {
      // 1. Load Razorpay Script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert("Razorpay SDK failed to load. Are you online?");
        setLoading(false);
        return;
      }

      // 2. Create Order on Server
      const orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: formData.amount,
          receipt: `audit_${Date.now()}`
        }),
      });

      const orderData = await orderRes.json();
      if (!orderData.id) {
        alert("Server error. Please try again.");
        setLoading(false);
        return;
      }

      // 3. Open Razorpay Modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: "INR",
        name: "Ataur Agency",
        description: `Revenue Leakage Audit - ${formData.plan}`,
        image: "https://www.mynexttrip.in/assets/logo.png", // Or agency logo
        order_id: orderData.id,
        handler: async function (response: any) {
          // 4. Verify Payment on Success
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userData: {
                name: formData.websiteName,
                email: formData.email,
                phone: formData.whatsappNumber
              },
              packageName: `Audit: ${formData.plan}`,
              amount: formData.amount
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyRes.ok) {
            // 5. Save Audit Inquiry
            await fetch("/api/audit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...formData,
                paymentStatus: "paid",
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id
              }),
            });
            
            setWhatsappUrl(verifyData.whatsappUrl);
            setSubmitted(true);
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: formData.websiteName,
          email: formData.email,
          contact: formData.whatsappNumber,
        },
        theme: {
          color: "#2563eb",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong with the payment process.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-12 bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl border border-green-100 dark:border-green-900 text-center"
      >
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 italic">Audit Secured!</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 font-medium">
          Your Revenue Leakage Audit is now in queue. Our experts will begin analysis immediately.
        </p>
        
        <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[2rem] border border-blue-100 dark:border-blue-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center justify-center gap-2">
             <MessageCircle className="text-blue-600" /> Send Details on WhatsApp
          </h3>
          <a 
            href={whatsappUrl || "#"} 
            target="_blank" 
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white py-5 px-10 rounded-2xl font-black text-xl transition-all shadow-xl shadow-green-500/20 active:scale-95"
          >
            <Image src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DS_Wsc1d9DX.png" alt="WhatsApp Chat Icon for Ataur Agency Audit" width={32} height={32} className="invert" />
            Click to Confirm on WhatsApp
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block underline underline-offset-4"
          >
            Professional Analysis
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black dark:text-white mb-6 tracking-tight italic"
          >
            Revenue Leakage Audit
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-400 text-xl font-medium max-w-2xl mx-auto"
          >
            Identify exactly where you're losing customers and unlock hidden profit margins with our expert audit.
          </motion.p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handlePayment}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-white/5 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Website Name */}
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Website Name</label>
              <div className="relative group">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  required
                  type="text"
                  placeholder="e.g., My Awesome Business"
                  value={formData.websiteName}
                  onChange={(e) => setFormData({...formData, websiteName: e.target.value})}
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="space-y-3 relative">
              <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Category</label>
              <button 
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-gray-900 dark:text-white text-left"
              >
                <span className="truncate">{formData.category || "Select Project Category"}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-[105%] left-0 w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-2xl z-50 max-h-[400px] overflow-y-auto custom-scrollbar"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setFormData({...formData, category: cat.name});
                          setShowDropdown(false);
                        }}
                        className="w-full flex items-start gap-4 px-6 py-4 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-left border-b border-gray-50 dark:border-gray-700/50 last:border-0 transition-colors"
                      >
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400 shrink-0 capitalize items-center">
                          {cat.icon}
                        </div>
                        <div>
                          <p className="font-black text-gray-900 dark:text-white text-sm">{cat.id}. {cat.name}</p>
                          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium"> {cat.desc}</p>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Email Address */}
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  required
                  type="email"
                  placeholder="e.g., hello@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* WhatsApp Number */}
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">WhatsApp Number</label>
              <div className="relative group">
                <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#25D366] transition-colors" />
                <input 
                  required
                  type="tel"
                  placeholder="e.g., +91 7250570798"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all font-bold text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Website URL */}
          <div className="space-y-3">
            <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Website URL</label>
            <div className="relative group">
              <ExternalLink className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
              <input 
                 required
                type="url"
                placeholder="https://yourwebsite.com"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                className="w-full pl-12 pr-6 py-4 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Plan Selection */}
          <div className="space-y-4 pt-4">
            <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
              <Rocket size={16} /> Choose Your Audit Plan
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setFormData({...formData, plan: plan.name, amount: plan.price})}
                  className={`relative p-6 rounded-[2rem] border-2 text-left transition-all ${
                    formData.plan === plan.name 
                    ? "border-blue-500 bg-blue-500/5 ring-4 ring-blue-500/10" 
                    : "border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-indigo-400 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      Recommended
                    </span>
                  )}
                  <div className={`mb-4 w-12 h-12 rounded-2xl flex items-center justify-center ${
                     formData.plan === plan.name ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-white/5 text-gray-400"
                  }`}>
                    {plan.icon}
                  </div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-1">{plan.name}</h4>
                  <p className="text-xs text-gray-500 mb-4 h-8">{plan.desc}</p>
                  <p className="text-2xl font-black text-gray-900 dark:text-white">₹{plan.price}</p>
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl font-black text-xl shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? (
              <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <CreditCard className="w-6 h-6" /> Proceed to Secure Payment
              </>
            )}
          </button>

          <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-500 mb-6 italic">Support & Consultation</h3>
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '917250570798'}?text=Hi,%20I%20have%20a%20query%20regarding%20Revenue%20Leakage%20Audit.`} 
              target="_blank" 
              className="group flex items-center gap-4 bg-[#25D366]/10 hover:bg-[#25D366] p-4 pr-8 rounded-[1.5rem] transition-all border border-[#25D366]/20"
            >
              <div className="bg-[#25D366] p-3 rounded-xl shadow-lg ring-4 ring-green-100/50">
                <Image src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DS_Wsc1d9DX.png" alt="WhatsApp Support Icon for Ataur Agency Audit" width={24} height={24} className="invert" />
              </div>
              <span className="font-black text-[#25D366] group-hover:text-white transition-colors">Chat With Admin</span>
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
