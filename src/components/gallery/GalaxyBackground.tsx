import Galaxy from "@/components/global/Galaxy";

export function GalaxyBackground() {
  return (
    <div className="fixed w-full h-full">
      <Galaxy
        transparent={false}
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
      />
    </div>
  );
}
