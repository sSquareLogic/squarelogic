import AnimationContextProvider from "@/context/AnimationContext";
import FloatingNav from "@/components/nav/FloatingNav";
import Footer from "@/components/footer/Footer";
import MouseFollower from "@/components/animated/MouseFollower";
import ScrollProgress from "@/components/animated/ScrollProgress";
import SmoothScroll from "@/components/animated/SmoothScroll";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SmoothScroll>
        <AnimationContextProvider>
          <ScrollProgress>
            <MouseFollower />
            <FloatingNav />
            {children}
            <Footer />
          </ScrollProgress>
        </AnimationContextProvider>
      </SmoothScroll>
    </div>
  );
}
