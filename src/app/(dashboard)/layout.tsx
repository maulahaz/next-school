import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT SIDEBAR */}
            <div className="w-[14%] md-w-[8%] lg-w-[16%] xl-w-[14%]">
                <Link href="/" className="flex items-center gap-2 justify-center lg:justify-start p-4">
                    <Image src="/logo.png" alt="Logo" width={32} height={32} />
                    <span className="hidden lg:block">School</span>
                </Link>
                <Menu />
            </div>
            {/* RIGHT SIDEBAR */}
            <div className="w-[86%] md-w-[92%] lg-w-[74%] xl-w-[86%] bg-[#f5f5f5] overflow-scroll">
                <Navbar />
                {children}</div>


        </div>
    );
}
