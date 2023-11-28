import AnimationContextProvider from "@/context/AnimationContext";
import FloatingNav from "@/components/FloatingNav";
import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AnimationContextProvider>
        <ScrollProgress>
          <FloatingNav />
          {children}
        </ScrollProgress>
      </AnimationContextProvider>
    </div>
  );
}
