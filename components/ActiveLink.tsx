// components/ActiveLink.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function ActiveLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        className,
        isActive && 'text-emerald-300'
      )}
    >
      {children}
    </Link>
  );
}
