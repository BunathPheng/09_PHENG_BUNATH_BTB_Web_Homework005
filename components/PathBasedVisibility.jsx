'use client';
import { usePathname } from 'next/navigation';

export default function PathBasedVisibility() {
  const pathname = usePathname();
  return (
    <style jsx global>{`
      .hide-on-home {
        display: ${pathname === '/' ? 'none' : 'block'};
      }
    `}</style>
  );
}