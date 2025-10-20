// src/components/ImageContainer.tsx

type ImageContainerProps = {
    src: string;
    alt: string;
    caption?: string; // Caption is optional
};

export default function ImageContainer({ src, alt, caption }: ImageContainerProps) {
    return (
        <div className="w-full mx-auto shadow-xl overflow-hidden bg-white">
            
            {/*Title Bar Image */}
            <img
                src="/projects/titlebar.png" 
                alt="Container Title Bar"
                className="w-full h-auto"
            />

            {/* The White Background Area */}
            <div className="p-4">
                {/* Sized Placeholder for the Image */}
                <div className="aspect-video w-full  bg-gray-200">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full rounded-md object-cover"
                    />
                </div>

                {/* Optional Caption */}
              {caption && (
                <div className="flex justify-start">
                    <div className="bg-[#FF00DC] text-white font-bold text-sm py-2 px-8 rounded-md inline-flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                    
                        <img 
                            src="/projects/captionstar.svg" 
                            alt="Star Icon"
                            className="w-7 h-7 [filter:drop-shadow(0_0_2px_rgba(255,255,255,0.7))]" 
                        />
                        
                        {/* 2. Text with italic style and glow */}
                        <span className="italic [text-shadow:0_0_4px_white]">
                            {caption.toUpperCase()}
                        </span>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}