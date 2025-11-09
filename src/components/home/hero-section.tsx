"use client";

import React from "react";
import Image from "next/image";
import Galaxy from "@/components/global/Galaxy";



const HeroSection: React.FC = () => {
    return (
        <div className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] relative flex items-center justify-center py-20 sm:py-24 md:py-28">
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
                <div className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[518px] mb-6 sm:mb-8 md:mb-10">
                    <Image
                        src="/logo/expo_logo.png"
                        alt="Logo"
                        width={518}
                        height={374}
                        priority
                        className="w-full h-auto"
                    />
                </div>
                <div className="text-center -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
                    <h1
                        className="font-dreamer text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6"
                        style={{
                            WebkitTextStroke: "1px #FF00DC",
                            textShadow: "0 4px 76.3px #FF00DC, 0 0 40px #FF00DC"
                        } as React.CSSProperties}
                    >
                        Digital Reverie
                    </h1>

                    <p className="font-dreamer text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white border-2 border-white rounded-full px-4 sm:px-6 md:px-8 py-1 sm:py-2 inline-block"
                    style={{
                            WebkitTextStroke: "0.3px #FF00DC",
                            textShadow: "0 4px 76.3px #FF00DC, 0 0 40px #FF00DC",
                            boxShadow: "0 0 10px #FF00DC, 0 0 20px #FF00DC"
                        } as React.CSSProperties}>
                            rewired * recharged * released
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
