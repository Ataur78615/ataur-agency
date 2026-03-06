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
    ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [contacts, setContacts] = useState<any[]>([]);
    const [payments, setPayments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    useEffect(() => {
        const auth = localStorage.getItem("admin_auth");
        if (!auth) {
            router.push("/admin/login");
            return;
        }

        const fetchData = async () => {
            try {
                const [contactsRes, paymentsRes] = await Promise.all([
                    fetch("/api/admin/contacts", {
                        headers: { "x-admin-auth": auth }
                    }),
                    fetch("/api/admin/payments", {
                        headers: { "x-admin-auth": auth }
                    })
                ]);

                if (contactsRes.status === 401 || paymentsRes.status === 401) {
                    localStorage.removeItem("admin_auth");
                    router.push("/admin/login");
                    return;
                }

                const contactsData = await contactsRes.json();
                const paymentsData = await paymentsRes.json();
                setContacts(contactsData);
                setPayments(paymentsData);
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

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full lg:w-72 bg-white border-r border-gray-100 p-6 flex flex-col z-20">
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
                            (p.utrNumber && p.utrNumber.trim() === searchQuery.trim()) || 
                            (p.paymentId && p.paymentId.trim() === searchQuery.trim())
                        );

                        if (matchedPayment && searchQuery.length > 5) {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                                    onClick={() => setSearchQuery("")}
                                >
                                    <div 
                                        className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden relative"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Decorative Background */}
                                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-10"></div>
                                        
                                        <div className="p-8 pt-10 relative">
                                            <button 
                                                onClick={() => setSearchQuery("")}
                                                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                                            >
                                                <LogOut className="w-4 h-4 text-gray-500 rotate-180" />
                                            </button>

                                            <div className="flex flex-col items-center text-center mb-8">
                                                <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-4 shadow-inner">
                                                    <User className="w-10 h-10" />
                                                </div>
                                                <h2 className="text-2xl font-black text-gray-900">{matchedPayment.name}</h2>
                                                <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">{matchedPayment.status}</p>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Service</p>
                                                        <p className="text-sm font-bold text-gray-900">{matchedPayment.serviceType}</p>
                                                    </div>
                                                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Amount</p>
                                                        <p className="text-lg font-black text-blue-600">₹{matchedPayment.amount}</p>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <Mail className="w-4 h-4 text-gray-400" />
                                                        <p className="text-sm font-medium text-gray-700">{matchedPayment.email}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <Phone className="w-4 h-4 text-gray-400" />
                                                        <p className="text-sm font-medium text-gray-700">{matchedPayment.whatsappNumber || matchedPayment.phone}</p>
                                                    </div>
                                                </div>

                                                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Transaction Details</p>
                                                        <span className="text-[10px] font-medium text-gray-400">{new Date(matchedPayment.createdAt).toLocaleString()}</span>
                                                    </div>
                                                        <div className="space-y-2">
                                                        <div className="flex justify-between items-center bg-white p-2 px-3 rounded-lg border border-blue-50">
                                                            <span className="text-xs font-bold text-gray-500">UTR</span>
                                                            <span className="text-xs font-black text-gray-900">{matchedPayment.utrNumber || matchedPayment.paymentId}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center bg-white p-2 px-3 rounded-lg border border-blue-50">
                                                            <span className="text-xs font-bold text-gray-500">PAY ID</span>
                                                            <span className="text-xs font-mono text-gray-400">{matchedPayment.paymentId}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex gap-3">
                                                <button 
                                                    onClick={() => setSearchQuery("")}
                                                    className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold text-sm hover:bg-gray-200 transition-all"
                                                >
                                                    Close View
                                                </button>
                                                {matchedPayment.status !== "approved" && (
                                                    <button 
                                                        onClick={() => {
                                                            handleApprove(matchedPayment.paymentId);
                                                            setSearchQuery("");
                                                        }}
                                                        className="flex-[1.5] py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all flex items-center justify-center gap-2"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        Approve Now
                                                    </button>
                                                )}
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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
                                            <ArrowUpRight className="w-3 h-3" /> Approved
                                        </span>
                                    </div>
                                    <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider">Total Revenue</h3>
                                    <p className="text-3xl font-black text-gray-900 mt-1">₹{approvedRevenue.toLocaleString()}</p>
                                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pending Amount</span>
                                        <span className="text-sm font-black text-amber-600 flex items-center gap-1">
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
                                    </div>
                                    <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider">Payments</h3>
                                    <p className="text-3xl font-black text-gray-900 mt-1">{payments.length}</p>
                                </div>

                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-amber-50 p-3 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider">Contact Leads</h3>
                                    <p className="text-3xl font-black text-gray-900 mt-1">{contacts.length}</p>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center justify-between">
                                        Recent Payments
                                        <button onClick={() => setActiveTab("payments")} className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">View All</button>
                                    </h3>
                                    <div className="space-y-4">
                                        {payments.slice(0, 5).map((payment, idx) => (
                                            <div key={idx} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-all group">
                                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg">
                                                    {payment.name?.charAt(0)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-bold text-gray-900 truncate">{payment.name}</p>
                                                    <p className="text-xs text-gray-500 font-medium truncate">{payment.serviceType}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-black text-blue-600">₹{payment.amount}</p>
                                                    <p className="text-[10px] text-gray-400 font-medium">{new Date(payment.createdAt).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center justify-between">
                                        Latest Enquiries
                                        <button onClick={() => setActiveTab("contacts")} className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">View All</button>
                                    </h3>
                                    <div className="space-y-4">
                                        {contacts.slice(0, 5).map((contact, idx) => (
                                            <div key={idx} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-all border-l-4 border-transparent hover:border-blue-500">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-bold text-gray-900 truncate">{contact.name}</p>
                                                    <p className="text-xs text-gray-500 font-medium truncate italic">"{contact.message?.substring(0, 40)}..."</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] text-gray-400 font-medium">{new Date(contact.createdAt).toLocaleDateString()}</p>
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
                            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-50/50">
                                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Client Info</th>
                                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Service & Amount</th>
                                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">UTR & ID</th>
                                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Status</th>
                                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {filteredPayments.map((p, idx) => (
                                                <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                                                    <td className="px-6 py-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                                                                {p.name?.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-black text-gray-900">{p.name}</p>
                                                                <p className="text-xs text-gray-500 font-medium">{p.email}</p>
                                                                <p className="text-xs text-gray-400 font-mono mt-0.5">{p.whatsappNumber || p.phone}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-6">
                                                        <p className="text-sm font-bold text-gray-900">{p.serviceType}</p>
                                                        <p className="text-base font-black text-blue-600 mt-0.5">₹{p.amount}</p>
                                                    </td>
                                                    <td className="px-6 py-6">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-xs font-bold text-gray-700">UTR: {p.utrNumber || p.paymentId}</span>
                                                            <button onClick={() => copyToClipboard(p.utrNumber || p.paymentId)} className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white rounded-lg">
                                                                <Copy className="w-3 h-3 text-gray-400" />
                                                            </button>
                                                        </div>
                                                        <p className="text-[10px] text-gray-400 font-mono bg-gray-50 px-2 py-0.5 rounded-full inline-block">{p.paymentId}</p>
                                                    </td>
                                                    <td className="px-6 py-6">
                                                        {p.status === "approved" ? (
                                                            <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100 flex items-center gap-1.5 w-max">
                                                                <CheckCircle2 className="w-3 h-3" /> APPROVED
                                                            </span>
                                                        ) : (
                                                            <div className="flex items-center gap-2">
                                                                <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-100 flex items-center gap-1.5 w-max">
                                                                    <Clock className="w-3 h-3" /> PENDING
                                                                </span>
                                                                <button 
                                                                    onClick={() => handleApprove(p.paymentId)}
                                                                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-green-600 transition-all shadow-lg shadow-blue-100 group/btn"
                                                                    title="Approve Payment"
                                                                >
                                                                    <CheckCircle2 className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-6 text-sm text-gray-500 font-medium">
                                                        {new Date(p.createdAt).toLocaleDateString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredContacts.map((c, idx) => (
                                <div key={idx} className="bg-white p-7 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all flex flex-col items-start gap-4">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                                            {new Date(c.createdAt).toDateString()}
                                        </span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-black text-gray-900 mb-1">{c.name}</h3>
                                        <p className="text-sm font-bold text-gray-500 flex items-center gap-2 mb-4">
                                            <Mail className="w-3.5 h-3.5 text-blue-500" />
                                            {c.email}
                                        </p>
                                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                            <p className="text-sm text-gray-600 leading-relaxed font-semibold">"{c.message}"</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto w-full pt-4 flex gap-2">
                                        <a href={`mailto:${c.email}`} className="flex-1 py-3 bg-gray-900 text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 hover:bg-blue-600 transition-all">
                                            Reply
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
