import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flight Ticket Booking: Cheap Flights & Air Tickets | Skyscanner",
  description: "Compare cheap flight booking from all major airlines and online travel agents, and find the cheapest air tickets to your favourite destinations.",
  keywords: "cheap flights, flight booking, air tickets, travel, airlines, skyscanner",
  openGraph: {
    title: "Flight Ticket Booking: Cheap Flights & Air Tickets | Skyscanner",
    description: "Compare cheap flight booking from all major airlines and online travel agents, and find the cheapest air tickets to your favourite destinations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
