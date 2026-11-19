import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function ReadingColumn({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[785px] px-5 py-12 sm:px-7 sm:py-16">{children}</div>;
}
