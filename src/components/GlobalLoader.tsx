'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalLoader() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false); // ✅ fix hydration mismatch
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true); // run only on client
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // ✅ Trigger loader when navigating
    setIsLoading(true);

    // ✅ Wait until all images are loaded
    const handlePageLoad = () => {
      setTimeout(() => setIsLoading(false), 500); // small fade-out delay
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, [pathname, isMounted]);

  // 🧩 Avoid hydration mismatch: don't render dynamic content until mounted
  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
        >
          {/* 🔄 Spinner */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'easeInOut',
            }}
            className="w-12 h-12 rounded-full border-4 border-white border-t-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
