"use client";

import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
  href: string;
};

export const LinkButton = ({ children, href }: LinkButtonProps) => {
  return <Link href={href}>{children}</Link>;
};
