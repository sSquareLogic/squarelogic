import FloatingNav from "@/components/FloatingNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <FloatingNav />
      {children}
    </div>
  );
}
