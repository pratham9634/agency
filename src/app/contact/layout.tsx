import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with .Agency. to discuss your project, get a quote, or learn more about our digital marketing and web development services.",
  keywords: ["Contact .Agency.", "Hire Marketing Agency", "Get a Quote", "Web Design Consultation", "Marketing Services Contact"],
  openGraph: {
    title: "Contact Us | .Agency.",
    description: "Get in touch with .Agency. to discuss your project, get a quote, or learn more about our digital marketing and web development services.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
