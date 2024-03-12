import "react-toastify/dist/ReactToastify.css";

import AnimationContextProvider from "@/context/AnimationContext";
import FloatingNav from "@/components/nav/FloatingNav";
import Footer from "@/components/footer/Footer";
import MouseFollower from "@/components/animated/MouseFollower";
import ScrollProgress from "@/components/animated/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import { ToastContainer } from "react-toastify";
import colors from "@/settings/colors";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SmoothScroll>
        <ToastContainer toastStyle={{ background: colors.LIGHTBLACK, color: colors.WHITE }} theme="dark" />
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
