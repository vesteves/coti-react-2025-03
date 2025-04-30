import { Quicksand } from "next/font/google";
import { Header } from "@/components/Header"
import Footer from "@/components/Footer";

const quicksandSans = Quicksand({
  variable: "--font-quicksand-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pandi",
  description: "Página da Pandi criada na Coti Informática",
};

export default function GuestLayout({ children }) {
  return (
    <div className={`${quicksandSans.className}`}>
      <Header />
        <div className="px-10">{children}</div>
      <Footer />
    </div>
  );
}