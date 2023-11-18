import AnimationContextProvider from "@/context/AnimationContext";
import FloatingNav from "@/components/FloatingNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AnimationContextProvider>
        <FloatingNav />
        {children}
      </AnimationContextProvider>
    </div>
  );
}
