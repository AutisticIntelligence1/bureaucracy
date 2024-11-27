import React, { useState, useEffect } from 'react';
import { MessageCircle, Stamp, FileText, Clock, FileCheck, Coffee, Mailbox, PenTool, Copy, AlertTriangle, ClipboardCopy } from 'lucide-react';
import bannerImage from '../assets/Banner.jpg';
import logoImage from '../assets/LOGO.jpg';
import manLookingImage from '../assets/MAN looking.jpg';
import muskTweetImage from '../assets/Musk tweet.jpg';
import dextoolsIcon from '../assets/Dextools.png';
import dexscreenerIcon from '../assets/dexscreenerlogo1.png';

// Background Pattern Component
const PaperPattern = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-5">
        <defs>
            <pattern id="paperPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect x="10" y="5" width="80" height="90" fill="none" stroke="currentColor" strokeWidth="1"/>
                <line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="20" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="20" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="70" cy="80" r="10" stroke="currentColor" fill="none" strokeWidth="0.5"/>
                <rect x="20" y="75" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M15,5 Q10,5 10,10 L10,30 Q10,35 15,35" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paperPattern)"/>
    </svg>
);

const BureaucracyWebsite: React.FC = () => {
    const [waitTime, setWaitTime] = useState<string>('404 business days');
    const [formNumber] = useState(() => Math.floor(Math.random() * 90000) + 10000);
    const [copySuccess, setCopySuccess] = useState(false);

    const contractAddress = 'AiZRN7k9n1ursX2rJKuaNX9J2Q4Eq5vtDBmonNsZpump';

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(contractAddress);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const bureaucraticStatuses = [
        {
            icon: <FileText className="text-red-600 h-5 w-5" />,
            text: "Form pending approval from departments A through Z"
        },
        {
            icon: <PenTool className="text-red-600 h-5 w-5" />,
            text: "Waiting for signature from retired employee"
        },
        {
            icon: <Copy className="text-red-600 h-5 w-5" />,
            text: "Please resubmit in triplicate"
        },
        {
            icon: <Mailbox className="text-red-600 h-5 w-5" />,
            text: "Lost in interdepartmental mail"
        },
        {
            icon: <Coffee className="text-red-600 h-5 w-5" />,
            text: "Coffee stained - requires reprocessing"
        },
        {
            icon: <AlertTriangle className="text-red-600 h-5 w-5" />,
            text: "Form 27B/6 missing proper coversheets"
        },
        {
            icon: <Clock className="text-red-600 h-5 w-5" />,
            text: "Lunch break - return in 5 business years"
        }
    ];

    // Random wait time generator
    const generateWaitTime = () => {
        const units = ['centuries', 'millennia', 'eons', 'business days', 'years'];
        const numbers = ['∞', '42', '404', '1984', '9000'];
        const unit = units[Math.floor(Math.random() * units.length)];
        const number = numbers[Math.floor(Math.random() * numbers.length)];
        setWaitTime(`${number} ${unit}`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            generateWaitTime();
        }, 10000); // Changed to 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#1a1f2c] text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: `url(${PaperPattern})` }} />
            </div>

            {/* Red Tape Overlay */}
            <div className="absolute inset-0">
                <div className="h-4 bg-red-600/20 transform -rotate-45 translate-y-[90vh]" />
                <div className="h-4 bg-red-600/20 transform rotate-45 translate-y-[110vh]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#1a1f2c]/90 backdrop-blur border-b border-red-900/30">
                <div className="border-b border-red-900/30 py-2 sm:py-3">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                            {/* Logo and Form Section */}
                            <div className="flex items-center gap-4 w-full sm:w-[200px]">
                                <img src={logoImage} alt="Bureau Seal" className="h-8 w-8 sm:h-10 sm:w-10" />
                                <div className="flex flex-col">
                                    <span className="text-lg sm:text-xl font-bold text-red-600">$BRCRC</span>
                                    <span className="text-xs text-gray-400">Form #{formNumber}</span>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 sm:gap-6 justify-center w-full sm:w-[300px]">
                                <a href="https://t.me/Bureaucracy_BRCRC"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-1.5 sm:p-2 hover:bg-[#2a3142] rounded-lg transition-all duration-300">
                                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                                </a>
                                <a href="https://x.com/STOPBRCRC"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-1.5 sm:p-2 hover:bg-[#2a3142] rounded-lg transition-all duration-300">
                                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>
                                <a href="https://www.dextools.io/app/en/solana/pair-explorer/DPbyNE6qDdo1iJr97Tv3ZAh8sAy211t3NRW3SY762t9g"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-1.5 sm:p-2 hover:bg-[#2a3142] rounded-lg transition-all duration-300">
                                    <img src={dextoolsIcon} alt="Dextools" className="h-8 w-28 sm:h-10 sm:w-32 object-contain" />
                                </a>
                                <a href="https://dexscreener.com/solana/dpbyne6qddo1ijr97tv3zah8say211t3nrw3sy762t9g"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-1.5 sm:p-2 hover:bg-[#2a3142] rounded-lg transition-all duration-300">
                                    <img src={dexscreenerIcon} alt="Dexscreener" className="h-8 w-28 sm:h-10 sm:w-32 object-contain" />
                                </a>
                            </div>

                            {/* Wait Time Display */}
                            <div className="text-center sm:text-right group cursor-pointer w-full sm:w-[200px]" onClick={generateWaitTime}>
                                <div className="text-xs sm:text-sm text-gray-400">Current Wait Time:</div>
                                <div className="text-lg sm:text-xl text-red-600 font-mono group-hover:scale-105 transition-transform">
                                    {waitTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contract Address Bar */}
                <div className="py-2 px-4">
                    <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                        <span className="text-gray-400">Contract:</span>
                        <code className="bg-[#232936] px-3 py-1 rounded font-mono text-red-600">{contractAddress}</code>
                        <button 
                            onClick={copyToClipboard}
                            className="p-1.5 hover:bg-[#2a3142] rounded-lg transition-all duration-300 text-red-600"
                            title="Copy contract address"
                        >
                            <ClipboardCopy className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        {copySuccess && (
                            <span className="text-green-500 text-sm">Copied!</span>
                        )}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative">
                <img
                    src={bannerImage}
                    alt="Bureaucracy Banner"
                    className="w-full h-[200px] sm:h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1f2c]" />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 mt-32 relative z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Bureaucrat Section */}
                    <div className="bg-[#232936] rounded-lg p-8 border border-red-900/30">
                        <div className="flex justify-between items-start mb-6">
                            <img
                                src={manLookingImage}
                                alt="Bureaucrat"
                                className="w-40 h-40 rounded-full border-4 border-red-900"
                            />
                            <div className="bg-red-900/20 p-4 rounded-lg">
                                <Stamp className="h-16 w-16 text-red-600" />
                                <div className="text-center text-red-500 mt-2">PENDING </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-[#1a1f2c] p-4 rounded-lg">
                                <div className="text-red-500 font-bold mb-2">Current Status:</div>
                                {bureaucraticStatuses.map((status, index) => (
                                    <div key={index} className="flex items-center text-gray-400 mb-2">
                                        <span className="mr-2">{status.icon}</span>
                                        {status.text}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-[#1a1f2c] p-4 rounded-lg text-center">
                                    <p className="text-red-500 font-bold">Tax</p>
                                    <p className="text-2xl text-white">0%</p>
                                    <p className="text-xs text-gray-500">Form B-420 ✓</p>
                                </div>
                                <div className="bg-[#1a1f2c] p-4 rounded-lg text-center">
                                    <p className="text-red-500 font-bold">Team</p>
                                    <p className="text-2xl text-white">Based</p>
                                    <p className="text-xs text-gray-500">Form D-69 ✓</p>
                                </div>
                                <div className="bg-[#1a1f2c] p-4 rounded-lg text-center">
                                    <p className="text-red-500 font-bold">Liquidity</p>
                                    <p className="text-2xl text-white">Burned</p>
                                    <p className="text-xs text-gray-500">Form F-1337 ✓</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Elon's Battle Section */}
                    <div className="bg-[#232936] rounded-lg p-8 border border-red-900/30">
                        <div className="bg-[#1a1f2c] p-3 rounded-lg mb-6 text-sm text-gray-400">
                            Notice: This section requires Form E-LON for viewing
                        </div>

                        <h2 className="text-2xl font-bold text-red-500 mb-6">THE FINAL BOSS BATTLE</h2>
                        <img
                            src={muskTweetImage}
                            alt="Elon Tweet"
                            className="w-full rounded-lg mb-6"
                        />
                        <div className="bg-[#1a1f2c] p-4 rounded-lg">
                            <p className="text-lg text-gray-300 italic">
                                "Even Elon can't beat the ultimate bureaucratic final boss..."
                            </p>
                            <div className="mt-4 text-sm text-gray-500">
                                Memo: Please submit Form M-EME to understand this joke
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Description */}
                <div className="max-w-6xl mx-auto mt-12 px-4">
                    {/* Main Declaration */}
                    <div className="relative bg-[#232936] rounded-2xl p-8 border-2 border-red-900/30 overflow-hidden">
                        {/* Watermark */}
                        <div className="absolute -right-20 -top-20 opacity-5">
                            <Stamp className="h-80 w-80 text-red-600 rotate-12" />
                        </div>

                        {/* Top Secret Stamp */}
                        <div className="absolute top-4 right-4 transform rotate-12">
                            <div className="bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-sm">
                                TOP SECRET
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <div className="inline-block bg-red-900/20 rounded-full p-4 mb-6">
                                    <FileText className="h-10 w-10 text-red-600" />
                                </div>
                                <div className="space-y-2 mb-6">
                                    <div className="text-gray-400 text-sm">INTERDEPARTMENTAL MEMO</div>
                                    <h2 className="text-4xl font-bold text-red-500">FORM B-1984</h2>
                                    <div className="text-gray-400 text-sm">CLASSIFICATION: EXTREMELY REDUNDANT</div>
                                </div>

                                {/* Red Tape Line */}
                                <div className="flex items-center justify-center gap-2 mb-8">
                                    <div className="h-px bg-red-900/30 w-20"></div>
                                    <Stamp className="h-4 w-4 text-red-600" />
                                    <div className="h-px bg-red-900/30 w-20"></div>
                                </div>

                                {/* Main Text */}
                                <div className="relative">
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-900/30"></div>
                                    <p className="text-gray-300 text-xl leading-relaxed mb-8 font-serif">
                                        BUREAUCRACY is a satirical, community-driven meme token poking fun at the ultimate battle against bureaucracy.
                                    </p>
                                </div>

                                {/* Stamp Container */}
                                <div className="relative inline-block">
                                    <p className="text-gray-400 italic text-lg mb-6">
                                        $BRCRC is the meme that is unstoppable, because it's already stamped and filed as UNSTOPPABLE.
                                    </p>
                                    {/* Red Stamp Effect */}
                                    <div className="absolute -right-16 -bottom-8 transform rotate-12">
                                        <div className="border-4 border-red-600/40 rounded-lg p-2">
                                            <div className="text-red-600/40 text-xs font-bold">APPROVED</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Card 1 */}
                                <div className="group bg-[#1a1f2c] p-6 rounded-xl border border-red-900/20 hover:bg-[#1e2330] transition-all duration-300">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="relative">
                                            <Stamp className="h-12 w-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                                            <div className="absolute -right-2 -top-2">
                                                <div className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
                                            </div>
                                        </div>
                                        <h3 className="text-red-500 font-bold text-lg">OFFICIALLY APPROVED</h3>
                                        <p className="text-gray-400 text-sm">By 27 different departments, none of which actually exist</p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="group bg-[#1a1f2c] p-6 rounded-xl border border-red-900/20 hover:bg-[#1e2330] transition-all duration-300">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <FileCheck className="h-12 w-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                                        <h3 className="text-red-500 font-bold text-lg">PROPERLY FILED</h3>
                                        <p className="text-gray-400 text-sm">Lost somewhere between Floor 7½ and the Twilight Zone</p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="group bg-[#1a1f2c] p-6 rounded-xl border border-red-900/20 hover:bg-[#1e2330] transition-all duration-300">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="relative">
                                            <Clock className="h-12 w-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                                            <div className="absolute -right-1 -top-1 text-xs text-red-600">∞</div>
                                        </div>
                                        <h3 className="text-red-500 font-bold text-lg">ETERNALLY PENDING</h3>
                                        <p className="text-gray-400 text-sm">Please take ticket number ∞ and wait for your turn</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Note */}
                            <div className="mt-12 text-center">
                                <div className="inline-block bg-[#1a1f2c] rounded-lg p-4 border border-red-900/20">
                                    <p className="text-gray-400 text-sm italic">
                                        Note: This form will self-destruct in ∞ business days
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-16 py-4 border-t border-red-900/30">
                    <div className="container mx-auto px-4">
                        <p className="text-center text-sm text-gray-400">
                            This disclaimer requires 15 different forms and a time machine to understand.
                            <br />
                            Please check back during the next millennium.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BureaucracyWebsite;