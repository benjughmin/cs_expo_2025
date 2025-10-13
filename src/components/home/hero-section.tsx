"use client";

import React from "react";
import Image from "next/image";
import Galaxy from "./ui/Galaxy";



const HeroSection: React.FC = () => {
    return (
        <div style={{ width: "100%", height: "1000px", position: "relative" }}>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, #1e1e2f 0%, #1e1e2f 30%, #480ca8 70%, #af05c5 85%, #ff00dc 100%)",
                    //background: "linear-gradient(180deg, #0f0f0fff 0%, #0f0f0fff 70%, #391d66ff 100%)",
                    //background: "#0f0f0fff 0%",
                    zIndex: 0,
                }}
            />

            <Galaxy
                // preset glowy
                // mouseInteraction={true}
                // mouseRepulsion={true}
                // density={2}
                // glowIntensity={1}
                // saturation={1}
                // hueShift={170}
                // twinkleIntensity={1}
                // rotationSpeed={0.1}
                // repulsionStrength={2}
                // autoCenterRepulsion={0}
                // starSpeed={0.5}
                // animationSpeed={1}

                //preset white
                mouseInteraction={true}
                mouseRepulsion={true}
                density={1.5}
                glowIntensity={0.5}
                saturation={0}
                hueShift={170}
                twinkleIntensity={0.5}
                rotationSpeed={0.1}
                repulsionStrength={1.0}
                autoCenterRepulsion={0}
                starSpeed={0.5}
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
                    width={800}
                    height={800}
                    priority
                />
            </div>

        </div>
    );
};

export default HeroSection;
   