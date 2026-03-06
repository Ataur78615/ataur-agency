import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Systems - Scalable Platforms & RBAC Security | Ataur Agency",
  description: "Building powerful enterprise-grade systems, multi-tenant SaaS platforms, and secure business management tools tailored for modern business needs.",
};

export default function EnterpriseSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
