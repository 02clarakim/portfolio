'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';

const NavLink = forwardRef(({ 
  href, 
  className = '', 
  activeClassName = '', 
  pendingClassName = '', 
  children,
  ...props 
}, ref) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  const combinedClassName = [
    className,
    isActive && activeClassName,
  ].filter(Boolean).join(' ');

  return (
    <Link
      ref={ref}
      href={href}
      className={combinedClassName}
      {...props}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

export { NavLink };