import HeaderAbsolute from "./_components/HeaderAbsolute";
import Footer from "./_components/Footer";
import ScrollWatcher from "./_components/ScrollWatcher";

import "../sass/main.scss";
import Header from "./_components/Header";

export const metadata = {
  title: "La Belle Table",
  description: "Generated by create next app",
};

const navLinks = [
  { id: 1, name: "Accueil", path: "/" },
  { id: 2, name: "En savoir plus", path: "/about" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollWatcher />
        {/* <HeaderAbsolute navLinks={navLinks} /> */}
        {/* <Header navLinks={navLinks} /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
