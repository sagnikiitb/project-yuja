"use client";

import { Menu, Waypoints } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"
import { MobileSidebar } from "@/components/mobile-sidebar";
import { JoinQRForm } from "./join-qr";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});
 
export default font;

export const Navbar  = () => {
    return ( 
        <div className="fixed w-full z-50 flex justify-between h-16  items-center py-2 px-4 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <MobileSidebar />
                <Link href="/">
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary",
                         font.className
                    )} >
                        yuja
                    </h1>
                </Link>
            </div>
            <div className="flex items-center justify-center  gap-x-3">
                <Button size="sm">
                <JoinQRForm className= "justify-center" s/>

                </Button>
                <Button size="sm">
                   Connect
                   <Waypoints className="h-4 w-4 fill-white text-black ml-2" />

                </Button>
                <ModeToggle />
                <UserButton />

            </div>

        </div>
     );
};
 