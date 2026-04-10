"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
    LayoutDashboard, 
    Users, 
    CreditCard, 
    MessageSquare, 
    LogOut, 
    Search, 
    TrendingUp, 
    Calendar,
    ArrowUpRight,
    Loader2,
    ShieldCheck,
    CheckCircle2,
    Clock,
    User,
    Mail,
    Phone,
    Copy,
    ExternalLink,
    Menu,
    X,
    FileText,
    SearchCheck,
    Globe,
    MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [contacts, setContacts] = useState<any[]>([]);
    const [payments, setPayments] = useState<any[]>([]);
    const [agreements, setAgreements] = useState<any[]>([]);
    const [audits, setAudits] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const auth = localStorage.getItem("admin_auth");
        if (!auth) {
            router.push("/admin/login");
            return;
        }

        const fetchData = async () => {
            try {
                const [contactsRes, paymentsRes, agreementsRes, auditsRes] = await Promise.all([
                    fetch("/api/admin/contacts", {
                        headers: { "x-admin-auth": auth }
                    }),
                    fetch("/api/admin/payments", {
                        headers: { "x-admin-auth": auth }
                    }),
                    fetch("/api/admin/agreements", {
                        headers: { "x-admin-auth": auth }
                    }),
                    fetch("/api/admin/audits", {
                        headers: { "x-admin-auth": auth }
                    })
                ]);

                if (contactsRes.status === 401 || paymentsRes.status === 401 || agreementsRes.status === 401 || auditsRes.status === 401) {
                    localStorage.removeItem("admin_auth");
                    router.push("/admin/login");
                    return;
                }

                const contactsData = await contactsRes.json();
                const paymentsData = await paymentsRes.json();
                const agreementsData = await agreementsRes.json();
                const auditsData = await auditsRes.json();
                setContacts(contactsData);
                setPayments(paymentsData);
                setAgreements(agreementsData);
                setAudits(auditsData);
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("admin_auth");
        router.push("/admin/login");
    };

    const handleApprove = async (paymentId: string) => {
        const auth = localStorage.getItem("admin_auth");
        if (!confirm("Are you sure you want to approve this payment?")) return;

        try {
            const res = await fetch("/api/admin/payments/approve", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "x-admin-auth": auth || ""
                },
                body: JSON.stringify({ paymentId })
            });

            if (res.ok) {
                // Refresh data
                const paymentsRes = await fetch("/api/admin/payments", {
                    headers: { "x-admin-auth": auth || "" }
                });
                const paymentsData = await paymentsRes.json();
                setPayments(paymentsData);
                alert("Payment approved successfully!");
            } else {
                alert("Failed to approve payment.");
            }
        } catch (error) {
            console.error("Error approving payment", error);
            alert("Connection error.");
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-bold animate-pulse uppercase tracking-widest text-sm">Loading Dashboard...</p>
            </div>
        );
    }

    const approvedRevenue = payments
        .filter(p => p.status === "approved" || p.status === "paid" || p.status === "success")
        .reduce((acc, p) => acc + Number(p.amount || 0), 0);

    const pendingAmount = payments
        .filter(p => p.status === "manual_pending" || p.status === "pending")
        .reduce((acc, p) => acc + Number(p.amount || 0), 0);

    const filteredPayments = payments.filter(p => 
        p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.serviceType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.utrNumber?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredContacts = contacts.filter(c => 
        c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const filteredAgreements = agreements.filter(a => 
        a.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.digitalSignature?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredAudits = audits.filter(a => 
        a.websiteName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.whatsappNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.websiteUrl?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row">
            {/* Mobile Header */}
            <header className="lg:hidden bg-white border-b border-gray-100 p-4 sticky top-0 z-30 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-black text-gray-900 tracking-tight">ATAUR ADMIN</span>
                </div>
                <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </header>

            {/* Sidebar Drawer for Mobile */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.aside 
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 p-6 flex flex-col lg:hidden"
                        >
                            <div className="flex items-center justify-between mb-10 px-2">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-100">
                                        <ShieldCheck className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-xl font-black text-gray-900 tracking-tight">ATAUR ADMIN</span>
                                </div>
                                <button 
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            <nav className="flex-1 space-y-2">
                                <button 
                                    onClick={() => { setActiveTab("overview"); setIsSidebarOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "overview" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <LayoutDashboard className="w-5 h-5" />
                                    Overview
                                </button>
                                <button 
                                    onClick={() => { setActiveTab("payments"); setIsSidebarOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "payments" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <CreditCard className="w-5 h-5" />
                                    Payments
                                    <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] ${activeTab === "payments" ? 'bg-white/20' : 'bg-gray-100'}`}>
                                        {payments.length}
                                    </span>
                                </button>
                                <button 
                                    onClick={() => { setActiveTab("contacts"); setIsSidebarOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "contacts" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Enquiries
                                    <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] ${activeTab === "contacts" ? 'bg-white/20' : 'bg-gray-100'}`}>
                                        {contacts.length}
                                    </span>
                                </button>
                                <button 
                                    onClick={() => { setActiveTab("agreements"); setIsSidebarOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "agreements" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <FileText className="w-5 h-5" />
                                    Agreements
                                    <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] ${activeTab === "agreements" ? 'bg-white/20' : 'bg-gray-100'}`}>
                                        {agreements.length}
                                    </span>
                                </button>
                                <button 
                                    onClick={() => { setActiveTab("audits"); setIsSidebarOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "audits" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <SearchCheck className="w-5 h-5" />
                                    Audit Inquiries
                                    <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] ${activeTab === "audits" ? 'bg-white/20' : 'bg-gray-100'}`}>
                                        {audits.length}
                                    </span>
                                </button>
                            </nav>

                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <button 
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm"
                                >
                                    <LogOut className="w-5 h-5" />
                                    Log Out
                                </button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-72 bg-white border-r border-gray-100 p-6 flex-col sticky top-0 h-screen z-20">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-100">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-black text-gray-900 tracking-tight">ATAUR ADMIN</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <button 
                        onClick={() => setActiveTab("overview")}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "overview" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Overview
                    </button>
                    <button 
                        onClick={() => setActiveTab("payments")}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "payments" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <CreditCard className="w-5 h-5" />
                        Payments
                        <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] ${activeTab === "payments" ? 'bg-white/20' : 'bg-gray-100'}`}>
                            {payments.length}
                        </span>
                    </button>
                    <button 
                        onClick={() => setActiveTab("contacts")}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "contacts" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <MessageSquare className="w-5 h-5" />
                        Enquiries
                        <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] ${activeTab === "contacts" ? 'bg-white/20' : 'bg-gray-100'}`}>
                            {contacts.length}
                        </span>
                    </button>
                    <button 
                        onClick={() => setActiveTab("agreements")}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "agreements" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <FileText className="w-5 h-5" />
                        Agreements
                        <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] ${activeTab === "agreements" ? 'bg-white/20' : 'bg-gray-100'}`}>
                            {agreements.length}
                        </span>
                    </button>
                    <button 
                        onClick={() => setActiveTab("audits")}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${activeTab === "audits" ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <SearchCheck className="w-5 h-5" />
                        Audit Inquiries
                        <span className={`ml-auto px-2 py-0.5 rounded-lg text-[10px] ${activeTab === "audits" ? 'bg-white/20' : 'bg-gray-100'}`}>
                            {audits.length}
                        </span>
                    </button>
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-100">
                    <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm"
                    >
                        <LogOut className="w-5 h-5" />
                        Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 lg:p-10 overflow-y-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 capitalize">
                            {activeTab} <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Panel</span>
                        </h1>
                        <p className="text-gray-500 mt-2 font-medium flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
                        <input 
                            type="text"
                            placeholder="Search everything..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-80 pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-[1.5rem] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-sm"
                        />
                    </div>
                </div>

                {/* Search Result Overlay */}
                <AnimatePresence>
                    {(() => {
                        const matchedPayment = payments.find(p => 
                            (p.utrNumber && p.utrNumber.trim() === searchQuery.trim() && searchQuery.length > 5) || 
                            (p.paymentId && p.paymentId.trim() === searchQuery.trim() && searchQuery.length > 5)
                        );

                        const matchedAgreement = agreements.find(a => 
                            searchQuery.length > 3 && (
                                a.name?.toLowerCase() === searchQuery.toLowerCase().trim() ||
                                a.company?.toLowerCase() === searchQuery.toLowerCase().trim() ||
                                a.email?.toLowerCase() === searchQuery.toLowerCase().trim() ||
                                a.digitalSignature?.toLowerCase() === searchQuery.toLowerCase().trim()
                            )
                        );

                        if (matchedPayment) {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                                    onClick={() => setSearchQuery("")}
                                >
                                    <div 
                                        className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden relative mx-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-10"></div>
                                        <div className="p-6 sm:p-8 pt-10 sm:pt-10 relative">
                                            <button onClick={() => setSearchQuery("")} className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"><X className="w-4 h-4 text-gray-500" /></button>
                                            <div className="flex flex-col items-center text-center mb-8">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-4 shadow-inner"><User className="w-8 h-8 sm:w-10 sm:h-10" /></div>
                                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 px-4">{matchedPayment.name}</h2>
                                                <p className="text-blue-600 font-bold text-[10px] sm:text-sm tracking-widest uppercase mt-1">{matchedPayment.status}</p>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100"><p className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Service</p><p className="text-xs sm:text-sm font-bold text-gray-900 truncate">{matchedPayment.serviceType}</p></div>
                                                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100"><p className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Amount</p><p className="text-base sm:text-lg font-black text-blue-600">₹{matchedPayment.amount}</p></div>
                                                </div>
                                                <div className="bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-100 space-y-3">
                                                    <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-gray-400 shrink-0" /><p className="text-xs sm:text-sm font-medium text-gray-700 truncate">{matchedPayment.email}</p></div>
                                                    <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-gray-400 shrink-0" /><p className="text-xs sm:text-sm font-medium text-gray-700 truncate">{matchedPayment.whatsappNumber || matchedPayment.phone}</p></div>
                                                </div>
                                            </div>
                                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                                <button onClick={() => setSearchQuery("")} className="w-full sm:flex-1 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold text-sm hover:bg-gray-200 transition-all active:scale-95">Close View</button>
                                                {!(matchedPayment.status === "approved" || matchedPayment.status === "paid" || matchedPayment.status === "success") && (
                                                    <button onClick={() => { handleApprove(matchedPayment.paymentId); setSearchQuery(""); }} className="w-full sm:flex-[1.5] py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 shadow-xl shadow-blue-600/10 transition-all flex items-center justify-center gap-2 active:scale-95"><CheckCircle2 className="w-4 h-4" />Approve Now</button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        }

                        if (matchedAgreement) {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                                    onClick={() => setSearchQuery("")}
                                >
                                    <div 
                                        className="bg-white w-full max-w-lg rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden relative mx-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-br from-red-600 to-rose-700 opacity-10"></div>
                                        <div className="p-5 sm:p-8 pt-8 sm:pt-10 relative">
                                            <button onClick={() => setSearchQuery("")} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"><X className="w-4 h-4 text-gray-500" /></button>
                                            <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                                                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-red-100 rounded-2xl sm:rounded-3xl flex items-center justify-center text-red-600 mb-3 sm:mb-4 shadow-inner"><ShieldCheck className="w-7 h-7 sm:w-10 sm:h-10" /></div>
                                                <h2 className="text-lg sm:text-2xl font-black text-gray-900 px-2 sm:px-4">{matchedAgreement.name}</h2>
                                                <p className="text-red-500 font-bold text-[9px] sm:text-xs tracking-widest uppercase mt-1">Authorized Agreement</p>
                                            </div>
                                            <div className="space-y-3 sm:space-y-4">
                                                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100"><p className="text-[8px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Company</p><p className="text-[11px] sm:text-sm font-bold text-gray-900 truncate">{matchedAgreement.company}</p></div>
                                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100"><p className="text-[8px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Service</p><p className="text-[11px] sm:text-sm font-bold text-gray-900 truncate">{matchedAgreement.service}</p></div>
                                                </div>
                                                <div className="bg-gray-50 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 space-y-2 sm:space-y-3">
                                                    <div className="flex items-center gap-2 sm:gap-3"><Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" /><p className="text-[11px] sm:text-sm font-medium text-gray-700 truncate">{matchedAgreement.email}</p></div>
                                                    <div className="flex items-center gap-2 sm:gap-3">
                                                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
                                                        <a href={matchedAgreement.websiteUrl} target="_blank" className="text-[11px] sm:text-sm font-bold text-blue-600 truncate hover:underline">{matchedAgreement.websiteUrl}</a>
                                                    </div>
                                                </div>
                                                <div className="bg-red-50/50 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-red-100/50 text-center">
                                                    <p className="text-[9px] sm:text-[10px] font-black text-red-400 uppercase tracking-widest mb-1 sm:mb-2">Digital Signature</p>
                                                    <p className="text-lg sm:text-2xl font-serif italic font-black text-gray-900 tracking-tighter decoration-red-200 underline underline-offset-4">{matchedAgreement.digitalSignature}</p>
                                                </div>
                                            </div>
                                            <div className="mt-6 sm:mt-8">
                                                <button onClick={() => setSearchQuery("")} className="w-full py-3.5 sm:py-4 bg-gray-900 text-white rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm hover:bg-black transition-all active:scale-95 shadow-xl">Close Agreement Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        }
                        return null;
                    })()}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                        <motion.div 
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-8"
                        >
                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
                                            <ArrowUpRight className="w-3 h-3" /> Approved
                                        </span>
                                    </div>
                                    <h3 className="text-gray-500 font-bold text-[10px] sm:text-sm uppercase tracking-wider">Total Revenue</h3>
                                    <p className="text-xl sm:text-3xl font-black text-gray-900 mt-1">₹{approvedRevenue.toLocaleString()}</p>
                                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Pending</span>
                                        <span className="text-xs sm:text-sm font-black text-amber-600 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            ₹{pendingAmount.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-purple-50 p-3 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                            <CreditCard className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-black text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">Live</span>
                                    </div>
                                    <h3 className="text-gray-500 font-bold text-[10px] sm:text-sm uppercase tracking-wider">Payments</h3>
                                    <p className="text-xl sm:text-3xl font-black text-gray-900 mt-1">{payments.length}</p>
                                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Last 30 Days</span>
                                        <span className="text-xs font-bold text-purple-600">+12.5%</span>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all group sm:col-span-2 lg:col-span-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-amber-50 p-3 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">New</span>
                                    </div>
                                    <h3 className="text-gray-500 font-bold text-[10px] sm:text-sm uppercase tracking-wider">Leads</h3>
                                    <p className="text-xl sm:text-3xl font-black text-gray-900 mt-1">{contacts.length}</p>
                                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Conversion</span>
                                        <span className="text-xs font-bold text-amber-600">8.2%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2">
                                            Recent Payments
                                        </h3>
                                        <button onClick={() => setActiveTab("payments")} className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline px-3 py-1 bg-blue-50 rounded-lg">View All</button>
                                    </div>
                                    <div className="space-y-3">
                                        {payments.slice(0, 5).map((payment, idx) => (
                                            <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-2xl transition-all group border border-transparent hover:border-gray-100">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-base sm:text-lg shrink-0">
                                                    {payment.name?.charAt(0)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">{payment.name}</p>
                                                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium truncate">{payment.serviceType}</p>
                                                </div>
                                                <div className="text-right shrink-0">
                                                    <p className="text-xs sm:text-sm font-black text-blue-600">₹{payment.amount}</p>
                                                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium">{new Date(payment.createdAt).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg sm:text-xl font-black text-gray-900">
                                            Latest Enquiries
                                        </h3>
                                        <button onClick={() => setActiveTab("contacts")} className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline px-3 py-1 bg-blue-50 rounded-lg">View All</button>
                                    </div>
                                    <div className="space-y-3">
                                        {contacts.slice(0, 5).map((contact, idx) => (
                                            <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-blue-50/50 rounded-2xl transition-all border-l-4 border-transparent hover:border-blue-500 bg-gray-50/30">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">{contact.name}</p>
                                                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium truncate italic opacity-70">"{contact.message?.substring(0, 40)}..."</p>
                                                </div>
                                                <div className="text-right shrink-0">
                                                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium">{new Date(contact.createdAt).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "payments" && (
                        <motion.div 
                            key="payments"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm">
                                <div className="hidden sm:block overflow-x-auto custom-scrollbar">
                                    <table className="w-full text-left border-collapse min-w-[700px]">
                                        <thead>
                                            <tr className="bg-gray-50/50">
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Client Info</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Service & Amount</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">UTR & ID</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Status</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {filteredPayments.map((p, idx) => (
                                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                                                    <td className="px-6 py-5">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                                                {p.name?.charAt(0)}
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-black text-gray-900 truncate">{p.name}</p>
                                                                <p className="text-[11px] text-gray-500 font-medium truncate">{p.email}</p>
                                                                <p className="text-[10px] text-gray-400 font-mono mt-0.5">{p.whatsappNumber || p.phone}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <p className="text-sm font-bold text-gray-900">{p.serviceType}</p>
                                                        <p className="text-sm font-black text-blue-600 mt-0.5">₹{p.amount}</p>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-[11px] font-bold text-gray-700">UTR: {p.utrNumber || p.paymentId}</span>
                                                            <button onClick={() => copyToClipboard(p.utrNumber || p.paymentId)} className="opacity-0 lg:group-hover:opacity-100 transition-opacity p-1.5 bg-gray-50 hover:bg-white rounded-lg border border-gray-100">
                                                                <Copy className="w-3 h-3 text-gray-400" />
                                                            </button>
                                                        </div>
                                                        <p className="text-[9px] text-gray-400 font-mono bg-gray-50 px-2 py-0.5 rounded-full inline-block border border-gray-100">{p.paymentId}</p>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        {p.status === "approved" || p.status === "paid" || p.status === "success" ? (
                                                            <span className="px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-100 flex items-center gap-1.5 w-max">
                                                                <CheckCircle2 className="w-3 h-3" /> APPROVED
                                                            </span>
                                                        ) : (
                                                            <div className="flex items-center gap-2">
                                                                <span className="px-3 py-1.5 bg-amber-50 text-amber-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-amber-100 flex items-center gap-1.5 w-max">
                                                                    <Clock className="w-3 h-3" /> PENDING
                                                                </span>
                                                                <button 
                                                                    onClick={() => handleApprove(p.paymentId)}
                                                                    className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-blue-600/10 group/btn active:scale-95"
                                                                    title="Approve Payment"
                                                                >
                                                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-5 text-[11px] text-gray-500 font-medium">
                                                        {new Date(p.createdAt).toLocaleDateString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Cards for Payments */}
                                <div className="sm:hidden grid grid-cols-1 divide-y divide-gray-100">
                                    {filteredPayments.map((p, idx) => (
                                        <div key={idx} className="p-5 flex flex-col gap-4 bg-white active:bg-blue-50/30 transition-colors">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">{p.name?.charAt(0)}</div>
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-black text-gray-900 truncate">{p.name}</p>
                                                        <p className="text-[10px] text-gray-500 font-medium truncate">{p.email}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right shrink-0">
                                                    <p className="text-xs font-black text-blue-600">₹{p.amount}</p>
                                                    <p className="text-[9px] text-gray-400 font-medium">{new Date(p.createdAt).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-lg text-[10px] font-bold border border-gray-100">{p.serviceType}</span>
                                                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-mono border border-blue-100">UTR: {p.utrNumber || 'N/A'}</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-1">
                                                {p.status === "approved" || p.status === "paid" || p.status === "success" ? (
                                                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-100">APPROVED</span>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-amber-100">PENDING</span>
                                                        <button onClick={() => handleApprove(p.paymentId)} className="p-2 bg-blue-600 text-white rounded-lg active:scale-95 transition-all"><CheckCircle2 className="w-3.5 h-3.5" /></button>
                                                    </div>
                                                )}
                                                <p className="text-[9px] text-gray-300 font-mono tracking-tighter">ID: {p.paymentId}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "contacts" && (
                        <motion.div 
                            key="contacts"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10"
                        >
                            {filteredContacts.map((c, idx) => (
                                <div key={idx} className="bg-white p-6 sm:p-7 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all flex flex-col items-start gap-4">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                                            <User className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <span className="text-[9px] sm:text-[10px] font-black text-gray-400 bg-gray-50 px-3 py-1 rounded-full uppercase tracking-widest border border-gray-100">
                                            {new Date(c.createdAt).toDateString()}
                                        </span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-sm sm:text-lg font-black text-gray-900 mb-1 truncate">{c.name}</h3>
                                        <p className="text-[11px] sm:text-sm font-bold text-gray-500 flex items-center gap-2 mb-3 sm:mb-4 truncate opacity-80">
                                            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 shrink-0" />
                                            {c.email}
                                        </p>
                                        <div className="bg-gray-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100">
                                            <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed font-semibold italic">"{c.message}"</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto w-full pt-4 flex gap-2">
                                        <a href={`mailto:${c.email}`} className="flex-1 py-3.5 bg-gray-900 text-white rounded-xl text-[10px] sm:text-xs font-black flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-gray-900/10">
                                            Reply Now
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === "agreements" && (
                        <motion.div 
                            key="agreements"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm">
                                <div className="hidden sm:block overflow-x-auto custom-scrollbar">
                                    <table className="w-full text-left border-collapse min-w-[900px]">
                                        <thead>
                                            <tr className="bg-gray-50/50">
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Client & Company</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Website URL</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Service</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Digital Signature</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {filteredAgreements.map((a, idx) => (
                                                <tr key={idx} className="hover:bg-red-50/30 transition-colors group">
                                                    <td className="px-6 py-5">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold text-sm shrink-0">
                                                                {a.name?.charAt(0)}
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-black text-gray-900 truncate">{a.name}</p>
                                                                <p className="text-[11px] text-gray-500 font-medium truncate">{a.email}</p>
                                                                <p className="text-[10px] text-red-600 font-black mt-0.5 uppercase tracking-tighter">{a.company}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <a href={a.websiteUrl} target="_blank" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-2">
                                                            {a.websiteUrl}
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <span className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-zinc-200">
                                                            {a.service}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <p className="text-sm font-serif italic font-bold text-gray-900 border-b border-gray-200 pb-1">{a.digitalSignature}</p>
                                                    </td>
                                                    <td className="px-6 py-5 text-[11px] text-gray-500 font-medium">
                                                        {new Date(a.createdAt).toLocaleDateString()}
                                                    </td>
                                                </tr>
                                            ))}
                                            {agreements.length === 0 && (
                                                <tr>
                                                    <td colSpan={5} className="px-6 py-20 text-center">
                                                        <FileText className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No agreements found</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Cards for Agreements */}
                                <div className="sm:hidden grid grid-cols-1 divide-y divide-gray-100">
                                    {filteredAgreements.map((a, idx) => (
                                        <div key={idx} className="p-5 flex flex-col gap-4 bg-white active:bg-red-50/30 transition-colors">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold text-sm shrink-0">{a.name?.charAt(0)}</div>
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-black text-gray-900 truncate">{a.name}</p>
                                                        <p className="text-[10px] text-red-600 font-black uppercase tracking-tighter">{a.company}</p>
                                                    </div>
                                                </div>
                                                <p className="text-[9px] text-gray-400 font-medium shrink-0">{new Date(a.createdAt).toLocaleDateString()}</p>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <p className="text-[10px] text-gray-500 font-medium truncate">{a.email}</p>
                                                <a href={a.websiteUrl} target="_blank" className="text-[10px] font-bold text-blue-600 flex items-center gap-1.5 hover:underline truncate">
                                                    <ExternalLink className="w-3 h-3" /> {a.websiteUrl}
                                                </a>
                                            </div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-zinc-200">{a.service}</span>
                                                <p className="text-sm font-serif italic font-bold text-gray-900 decoration-red-200 underline underline-offset-4">{a.digitalSignature}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {agreements.length === 0 && (
                                        <div className="py-20 text-center">
                                            <FileText className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No agreements found</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "audits" && (
                        <motion.div 
                            key="audits"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
                                <div className="hidden md:block overflow-x-auto custom-scrollbar">
                                    <table className="w-full text-left border-collapse min-w-[900px]">
                                        <thead>
                                            <tr className="bg-gray-50/50">
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Website Info</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Category & Plan</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Contact</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Payment Status</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Website URL</th>
                                                <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {filteredAudits.map((a, idx) => (
                                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                                                    <td className="px-6 py-5">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">
                                                                <Globe size={18} />
                                                            </div>
                                                            <p className="text-sm font-black text-gray-900 truncate">{a.websiteName}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5 truncate">
                                                        <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-100 italic block w-max mb-1">
                                                            {a.category}
                                                        </span>
                                                        <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                                                            {a.plan} (₹{a.amount})
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center gap-2">
                                                                <Mail size={12} className="text-gray-400" />
                                                                <p className="text-xs font-medium text-gray-600 truncate">{a.email}</p>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <MessageCircle size={14} className="text-[#25D366]" />
                                                                <p className="text-sm font-bold text-gray-700">{a.whatsappNumber}</p>
                                                                <button onClick={() => copyToClipboard(a.whatsappNumber)} className="opacity-0 group-hover:opacity-100 p-1.5 bg-gray-50 rounded-lg hover:bg-white border border-gray-100 transition-opacity">
                                                                    <Copy size={12} className="text-gray-400" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <div className="flex flex-col gap-1.5">
                                                            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border flex items-center gap-1.5 w-max ${
                                                                a.paymentStatus === 'paid' 
                                                                ? 'bg-green-50 text-green-600 border-green-100' 
                                                                : 'bg-amber-50 text-amber-600 border-amber-100'
                                                            }`}>
                                                                {a.paymentStatus === 'paid' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                                                {a.paymentStatus === 'paid' ? 'CONFIRMED' : (a.paymentStatus?.toUpperCase() || 'PENDING')}
                                                            </span>
                                                            {a.paymentId && (
                                                                <div className="flex items-center gap-1.5 mt-1 group/pid">
                                                                    <p className="text-[9px] text-gray-400 font-mono bg-gray-50 px-2 py-0.5 rounded border border-gray-100 truncate max-w-[140px]" title={a.paymentId}>
                                                                        {a.paymentId}
                                                                    </p>
                                                                    <button onClick={() => copyToClipboard(a.paymentId)} className="opacity-0 group-hover/pid:opacity-100 p-1 bg-white rounded border border-gray-100 hover:shadow-sm transition-opacity">
                                                                       <Copy size={8} className="text-gray-400" />
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <a href={a.websiteUrl} target="_blank" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-2 truncate max-w-[200px]">
                                                            {a.websiteUrl}
                                                            <ExternalLink size={14} />
                                                        </a>
                                                    </td>
                                                    <td className="px-6 py-5 text-[11px] text-gray-500 font-medium">
                                                        {new Date(a.createdAt).toLocaleDateString()}
                                                    </td>
                                                </tr>
                                            ))}
                                            {audits.length === 0 && (
                                                <tr>
                                                    <td colSpan={5} className="px-6 py-20 text-center">
                                                        <SearchCheck className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No audit inquiries yet</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Audit Cards */}
                                <div className="md:hidden divide-y divide-gray-100">
                                    {filteredAudits.map((a, idx) => (
                                        <div key={idx} className="p-5 flex flex-col gap-4 bg-white active:bg-blue-50/50 transition-colors">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0"><Globe size={18} /></div>
                                                    <p className="text-sm font-black text-gray-900 truncate">{a.websiteName}</p>
                                                </div>
                                                <p className="text-[9px] text-gray-400 font-medium shrink-0">{new Date(a.createdAt).toLocaleDateString()}</p>
                                            </div>
                                            <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                                                <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest italic">{a.category}</p>
                                            </div>
                                            <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                 <div className="flex items-center gap-2">
                                                     <Mail size={12} className="text-gray-400" />
                                                     <p className="text-xs font-medium text-gray-600 truncate">{a.email}</p>
                                                 </div>
                                                 <div className="flex items-center gap-2">
                                                     <MessageCircle size={14} className="text-[#25D366]" />
                                                     <p className="text-xs font-bold text-gray-700">{a.whatsappNumber}</p>
                                                 </div>
                                                 <a href={a.websiteUrl} target="_blank" className="text-xs font-bold text-blue-600 truncate flex items-center gap-1">
                                                     {a.websiteUrl} <ExternalLink size={12} />
                                                 </a>
                                            </div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                                                    a.paymentStatus === 'paid' 
                                                    ? 'bg-green-50 text-green-600 border-green-100' 
                                                    : 'bg-amber-50 text-amber-600 border-amber-100'
                                                }`}>
                                                    {a.paymentStatus === 'paid' ? 'CONFIRMED' : (a.paymentStatus?.toUpperCase() || 'PENDING')}
                                                </span>
                                                {a.paymentId && (
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-[9px] text-gray-300 font-mono">ID: {a.paymentId}</p>
                                                        <button onClick={() => copyToClipboard(a.paymentId)} className="p-1 bg-gray-50 rounded border border-gray-100">
                                                            <Copy size={8} className="text-gray-400" />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {audits.length === 0 && (
                                        <div className="py-20 text-center">
                                            <SearchCheck className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No audit inquiries yet</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
