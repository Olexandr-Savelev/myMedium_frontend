import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-[1_0_auto] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
