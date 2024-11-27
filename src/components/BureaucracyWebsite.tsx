import React, { useState, useEffect } from 'react';
import { MessageCircle, BarChart2, Stamp, FileText, ArrowRight } from 'lucide-react';
import bannerImage from '../assets/Banner.jpg';
import logoImage from '../assets/LOGO.jpg';
import manLookingImage from '../assets/MAN looking.jpg';
import muskTweetImage from '../assets/Musk tweet.jpg';

const BureaucracyWebsite: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [rotationAngle, setRotationAngle] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            setRotationAngle(window.scrollY * 0.1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#1a1f2c]">
            {/* Red Tape Background */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden"
                style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
            >
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[200%] h-3 bg-red-800/20 -left-1/2"
                        style={{
                            top: `${i * 15}%`,
                            transform: `rotate(${i % 2 ? 5 : -5}deg)`,
                        }}
                    />
                ))}
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#1a1f2c]/90 backdrop-blur border-b border-red-900/30">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <img
                            src={logoImage}
                            alt="Bureau Seal"
                            className="h-14 w-14 animate-spin-slow"
                            style={{ animationDuration: '10s' }}
                        />
                        <span className="text-2xl font-bold text-red-600">$BRCRC</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="https://t.me/Bureaucracy_BRCRC" className="text-red-600 hover:text-red-500 transition-all hover:scale-110">
                            <MessageCircle className="h-6 w-6" />
                        </a>
                        <a href="https://x.com/STOPBRCRC" className="text-red-600 hover:text-red-500 transition-all hover:scale-110">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a href="https://dexscreener.com/solana/dpbyne6qddo1ijr97tv3zah8say211t3nrw3sy762t9g" className="text-red-600 hover:text-red-500 transition-all hover:scale-110">
                            <BarChart2 className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Banner Section */}
                <div className="max-w-5xl mx-auto rounded-lg overflow-hidden mb-12">
                    <div className="relative">
                        <img
                            src={bannerImage}
                            alt="Bureaucratic Office"
                            className="w-full h-[300px] object-cover object-center rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2c] to-transparent" />
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Left Column - Bureaucrat & Stamp */}
                    <div className="bg-[#232936] rounded-lg p-8 border border-red-900/30 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                            <img
                                src={manLookingImage}
                                alt="Bureaucrat"
                                className="w-32 h-32 rounded-full border-4 border-red-900 shadow-lg shadow-red-900/30"
                            />
                            <Stamp
                                className="h-20 w-20 text-red-600 animate-bounce"
                                style={{ transform: `rotate(${rotationAngle}deg)` }}
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-red-500 mb-4">UNSTOPPABLE BUREAUCRACY</h2>
                        <p className="text-xl text-gray-300 mb-6">
                            The meme that's already stamped and filed as UNSTOPPABLE
                        </p>
                        <div className="flex gap-4 mb-6">
                            <a
                                href="https://www.dextools.io/app/en/solana/pair-explorer/DPbyNE6qDdo1iJr97Tv3ZAh8sAy211t3NRW3SY762t9g"
                                className="flex-1 bg-red-900/20 hover:bg-red-900/30 text-red-500 py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <span>Buy on DEXTools</span>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-[#1a1f2c] p-4 rounded-lg text-center">
                                <p className="text-red-500 font-bold">Tax</p>
                                <p className="text-2xl text-white">0%</p>
                            </div>
                            <div className="bg-[#1a1f2c] p-4 rounded-lg text-center">
                                <p className="text-red-500 font-bold">Team</p>
                                <p className="text-2xl text-white">Based</p>
                            </div>
                            <div className="bg-[#1a1f2c] p-4 rounded-lg text-center">
                                <p className="text-red-500 font-bold">Liquidity</p>
                                <p className="text-2xl text-white">Burned</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Elon's Battle */}
                    <div className="bg-[#232936] rounded-lg p-8 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-red-500 mb-6">THE PENULTIMATE BOSS BATTLE</h2>
                        <img
                            src={muskTweetImage}
                            alt="Elon Tweet"
                            className="w-full rounded-lg mb-6 shadow-lg"
                        />
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300 italic border-l-4 border-red-900 pl-4">
                                "Elon claims to be a THREAT TO BUREAUCRACY—but can he really stop it? Let the showdown begin..."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contract Section */}
                <div className="max-w-3xl mx-auto mt-12 bg-[#232936] rounded-lg p-6 border border-red-900/30">
                    <div className="flex items-center gap-4 mb-4">
                        <FileText className="h-6 w-6 text-red-600" />
                        <h3 className="text-xl font-bold text-red-500">Form CA-1337: Contract Address</h3>
                    </div>
                    <code className="block bg-[#1a1f2c] p-4 rounded-lg text-sm break-all text-gray-300 font-mono">
                        AiZRN7k9n1ursX2rJKuaNX9J2Q4Eq5vtDBmonNsZpump
                    </code>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 py-4 border-t border-red-900/30">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm text-gray-400">
                        <span className="inline-block animate-spin-slow">📋</span>
                        {" "}All necessary forms have been filed and approved. Memecoins are highly volatile and speculative investments.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default BureaucracyWebsite;