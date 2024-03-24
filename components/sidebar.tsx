"use client";

import { Home, Plus, Settings, Network, Pickaxe, Wallet, LogOut } from "lucide-react";
import {usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const routes = [
       {
        icon: Home,
        href: "/",
        label: "Home",
       },

       {
        icon: Network,
        href: "/networks",
        label: "Networks",

       },

       {
        icon: Plus,
        href: "/network/new",
        label: "Create",
       },

       {
        icon: Pickaxe,
        href: "/mining",
        label: "Mining",

       },

       {
        icon: Wallet,
        href: "/wallet",
        label: "Wallet",

       },

       {
        icon: Settings,
        href: "/settings",
        label: "Setings",
       },

       {
        icon: LogOut,
        href: "/sign-out",
        label: "Log Out",
       },

    ];

    const onNavigate = (url: string) => {
        //can add stuff
        return router.push(url);
    }

    return ( 
        <div className="space-y4 flex flex-col h-full text-primary bg-secondary">
            <div className="space-y-2"></div>
              {routes.map((route) => (
                <div
                    onClick={() => onNavigate(route.href)}
                    key={route.href}
                    className={cn(
                        "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                        pathname === route.href && "bg-primary/10 text-primary"

                    )}
                >
                    <div className="flex flex-col gap-y-2 items-center flex-1">
                        <route.icon className="h-5 w-5" />
                        {route.label}
                    </div>
            </div>

              ))}
        </div>
     );
}