import { Navbar } from "@/components/navbar";
import { Open_Sans } from "next/font/google";
const open = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Publiclayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${open.className} container mx-auto w-11/12 xl:w-full max-w-6xl`}>
      <header className="py-10 text-center">
        <Navbar />
      </header>
      {children}
    </main>
  );
}
