import React, { useRef } from "react"; // Added React and useRef
import { cn } from "@/lib/utils";
import { CalendarIcon, FileTextIcon, BellIcon, Share2Icon, icons } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { AnimatedList } from "@/components/ui/animated-list";

const files = [
  {
    name: "bitcoin.pdf",
    icon: "fa-bars",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    icon: "fa-bars",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    icon: "fa-bars",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    icon: "fa-bars",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    icon: "fa-bars",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

export function BentoGridSection() {
    // 1. Define Refs for AnimatedBeam
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null); // The Bolt
    const googleRef = useRef<HTMLDivElement>(null);
    const slackRef = useRef<HTMLDivElement>(null);
    const whatsappRef = useRef<HTMLDivElement>(null);
    const discordRef = useRef<HTMLDivElement>(null);

    const [notifications, setNotifications] = React.useState([
        { id: 1, title: "Payment Received", desc: "Successfully received $450.00", icon: "fa-circle-check", color: "emerald", time: "2m ago" },
        { id: 2, title: "Security Alert", desc: "New login from Karachi, PK", icon: "fa-triangle-exclamation", color: "amber", time: "15m ago" },
        { id: 3, title: "New Subscriber", desc: "Gemini AI followed you", icon: "fa-user-plus", color: "blue", time: "1h ago" },
    ]);

    // This effect makes it continuous
    React.useEffect(() => {

        const interval = setInterval(() => {

            setNotifications((prev) => {
                const lastItem = prev[0];
                const newItem = { ...lastItem, id: Math.random() }; 
                return [...prev.slice(1), newItem];
            });

        }, 2000);
        return () => clearInterval(interval);

    }, []);

    const features = [

        {

            Icon: FileTextIcon,
            name: "Save your files",
            description: "We automatically save your files as you type.",
            href: "#",
            cta: "Learn more",
            className: "p-2 col-span-3 lg:col-span-1",
            background: (
                <Marquee
                pauseOnHover
                className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] [--duration:30s]"
                >
                    {files.map((f, idx) => (
                        <figure
                        key={idx}
                        className={cn(
                            // Sizing and Layout
                            "relative w-44 cursor-pointer overflow-hidden rounded-2xl border p-4 mx-2",
                            // Light Mode: Soft border and very subtle white-glass effect
                            "border-gray-200 bg-white/40 backdrop-blur-[2px] shadow-sm",
                            // Dark Mode: Deep zinc colors with glass effect
                            "dark:border-zinc-800 dark:bg-zinc-950/40 dark:backdrop-blur-md",
                            // Hover Animation: Lift effect and glow
                            "transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50",
                            "transform-gpu"
                        )}
                        >
                            <div className="flex flex-row items-center gap-3">
                                
                                {/* Font Awesome Icon with Gradient Background */}
                                <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                                    <i className={cn("fa-solid", f.icon, "text-blue-600 dark:text-blue-400 text-sm")} aria-hidden="true"></i>
                                </div>
                                <figcaption className="text-sm font-semibold tracking-tight dark:text-white">
                                    {f.name}
                                </figcaption>

                            </div>
                            
                            <blockquote className="mt-3 text-[11px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                                {f.body}
                            </blockquote>
                            
                            {/* Subtle "Active" Indicator */}
                            <div className="mt-3 flex items-center gap-1.5">
                                <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Synced</span>
                            </div>

                        </figure>
                    ))}
                </Marquee>
            ),

        },

        {
            Icon: BellIcon,
            name: "Notifications",
            description: "Get notified when something happens.",
            href: "#",
            cta: "Learn more",
            className: "p-2 col-span-3 lg:col-span-2",
            background: (
                <AnimatedList className="absolute top-4 right-2 h-[300px] w-full scale-90 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-[0.95]">

                    {notifications.map((item) => (

                        <div key={item.id} 
                            className="mx-auto mb-3 w-full max-w-[450px] rounded-2xl border border-black/[0.05] bg-white/60 p-4 shadow-sm backdrop-blur-md dark:border-white/[0.1] dark:bg-zinc-900/60 transition-all hover:bg-white/80 dark:hover:bg-zinc-800/80">
                            
                            <div className="flex items-center gap-4">
                                <div className={cn(
                                    "flex size-10 items-center justify-center rounded-xl",
                                    item.color === "emerald" ? "bg-emerald-500/20 text-emerald-600" : 
                                    item.color === "amber" ? "bg-amber-500/20 text-amber-600" : "bg-blue-500/20 text-blue-600"
                                )}>
                                    <i className={cn("fa-solid", item.icon, "text-lg")}></i>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold tracking-tight">{item.title}</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-tighter">{item.time}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>

                        </div>

                    ))}

                </AnimatedList>
            ),
        },

        {
            Icon: Share2Icon,
            name: "Integrations",
            description: "Supports 100+ integrations and counting.",
            href: "#",
            cta: "Learn more",
            className: "p-2 col-span-3 lg:col-span-2",
            background: (
                <div ref={containerRef}
                    className="absolute inset-0 flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
                    
                    <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10 px-10 py-10">

                        {/* Left Side: Input Apps */}
                        <div className="flex flex-col justify-center gap-4">

                            <div ref={googleRef} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-xl dark:bg-zinc-900 dark:border-zinc-800">
                                <i className="fa-brands fa-google text-blue-500 text-xl"></i>
                            </div>
                            <div ref={slackRef} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-xl dark:bg-zinc-900 dark:border-zinc-800">
                                <i className="fa-brands fa-slack text-purple-500 text-xl"></i>
                            </div>

                        </div>

                        {/* Center: Your Core App */}
                        <div className="flex flex-col justify-center">

                            <div ref={centerRef} className="z-20 flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-500/20 bg-white shadow-2xl dark:bg-zinc-950 dark:border-blue-500/40">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white">
                                <i className="fa-solid fa-bolt text-2xl animate-pulse"></i>
                                </div>
                            </div>

                        </div>

                        {/* Right Side: Output Apps */}
                        <div className="flex flex-col justify-center gap-4">

                            <div ref={whatsappRef} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-xl dark:bg-zinc-900 dark:border-zinc-800">
                                <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
                            </div>
                            <div ref={discordRef} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-xl dark:bg-zinc-900 dark:border-zinc-800">
                                <i className="fa-brands fa-discord text-indigo-500 text-xl"></i>
                            </div>

                        </div>

                    </div>

                    {/* Beam to Google (Top Left) */}
                    <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={googleRef} duration={4} curvature={-50} reverse />
                    
                    {/* Beam to Slack (Bottom Left) */}
                    <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={slackRef} duration={4} curvature={50} reverse />
                    
                    {/* Beam to Whatsapp (Top Right) */}
                    <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={whatsappRef} duration={4} curvature={-50} />
                    
                    {/* Beam to Discord (Bottom Right) */}
                    <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={discordRef} duration={4} curvature={50} />

                </div>
            ),
        },

        {

            Icon: CalendarIcon,
            name: "Calendar",
            description: "Use the calendar to filter your files by date.",
            className: "p-2 col-span-3 lg:col-span-1",
            href: "#",
            cta: "Learn more",
            background: (
                <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
                />
            ),

        },

    ];

    return (
        <BentoGrid className="px-10">
        {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
        ))}
        </BentoGrid>
    );
}