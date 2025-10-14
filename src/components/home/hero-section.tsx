"use client";

import React from "react";
import Image from "next/image";
import Galaxy from "@/components/global/Galaxy";



const HeroSection: React.FC = () => {
    return (
        <div style={{ width: "100%", height: "700px", position: "relative" }}>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    //background: "linear-gradient(180deg, #0f0f0fff 0%, #0f0f0fff 70%, #391d66ff 100%)",
                    //background: "#0f0f0fff 0%",
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                }}
            >
                <Image
                    src="/logo/expo_logo.png"
                    alt="Logo"
                    width={836}
                    height={505}
                    priority
                />
                <div className="text-center -mt-18">
                    <h1
                        className="font-dreamer text-4xl sm:text-6xl md:text-8xl font-bold text-white"
                        style={{
                            WebkitTextStroke: "0.1px #FF00DC",
                            textShadow: "0 4px 76.3px #FF00DC, 0 0 40px #FF00DC"
                        } as React.CSSProperties}
                    >
                        Digital Reverie
                    </h1>

                    <p className="font-dreamer mt-4 text-lg sm:text-xl md:text-4xl text-white border-2 border-white border-shadow rounded-full px-6 py-2 inline-block"
                    style={{
                            WebkitTextStroke: "0.3px #FF00DC",
                            textShadow: "0 4px 76.3px #FF00DC, 0 0 40px #FF00DC",
                            boxShadow: "0 0 20px #FF00DC, 0 0 40px #FF00DC"
                        } as React.CSSProperties}>
                            rewired recharged released
                    </p>
                </div>

            </div>

        </div>
    );
};

export default HeroSection;
