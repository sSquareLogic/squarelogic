import AnimationContextProvider from "@/context/AnimationContext";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AnimationContextProvider>
        <ScrollProgress>
          <MouseFollower />
          <FloatingNav />
          {children}
          <Footer />
        </ScrollProgress>
      </AnimationContextProvider>
    </div>
  );
}
