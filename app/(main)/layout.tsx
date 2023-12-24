import AnimationContextProvider from "@/context/AnimationContext";
import FloatingNav from "@/components/nav/FloatingNav";
import Footer from "@/components/footer/Footer";
import MouseFollower from "@/components/animated/MouseFollower";
import ScrollProgress from "@/components/animated/ScrollProgress";

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
