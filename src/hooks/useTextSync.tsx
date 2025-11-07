'use client';
import { createContext, useContext, useState, useEffect } from 'react';

interface TextSyncContextType {
  phase: 'typing' | 'deleting';
  setPhase: (p: 'typing' | 'deleting') => void;
}

const TextSyncContext = createContext<TextSyncContextType | null>(null);

export const TextSyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  // Example: automatically toggle phase every 4 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhase(prev => (prev === 'typing' ? 'deleting' : 'typing'));
    }, phase === 'typing' ? 10000 : 4000);
    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <TextSyncContext.Provider value={{ phase, setPhase }}>
      {children}
    </TextSyncContext.Provider>
  );
};

export function useTextSync() {
  const ctx = useContext(TextSyncContext);
  if (!ctx) throw new Error('useTextSync must be used inside a <TextSyncProvider>');
  return ctx;
}
