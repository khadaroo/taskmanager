import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BackButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group text-muted-foreground hover:text-foreground -mt-2 flex items-center gap-2 text-sm transition-colors"
    >
      <ArrowLeft size={20} />
      {children}
    </Link>
  );
}
