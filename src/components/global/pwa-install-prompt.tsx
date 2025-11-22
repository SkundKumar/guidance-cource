'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  useEffect(() => {
    if (showPrompt) {
      gsap.fromTo('.pwa-prompt', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' });
    }
  }, [showPrompt]);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    gsap.to('.pwa-prompt', {
      x: '100%',
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => setShowPrompt(false),
    });
  };

  if (!showPrompt) return null;

  return (
    <div className="pwa-prompt fixed top-24 right-4 z-50">
      <div className="relative bg-black/80 backdrop-blur-sm border border-neutral-800 rounded-lg p-4 shadow-lg overflow-hidden">
        <Meteors number={20} />
        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <Button
              onClick={handleInstall}
              className="bg-white text-black hover:bg-neutral-200 transition-colors"
            >
              Install CPL 2.0
            </Button>
            <button onClick={handleDismiss} className="text-neutral-400 hover:text-white">
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 