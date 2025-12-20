import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      desc: "Ideal for beginners testing the waters.",
      price: 0,
      features: ["Up to 25 products", "Framer domain export", "Standard support", "Basic analytics"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Essential",
      desc: "Perfect for growing small businesses.",
      price: 12,
      features: ["Custom domain mapping", "No platform branding", "Email support", "Advanced SEO"],
      cta: "Go Pro",
      popular: false,
    },
    {
      name: "Elite",
      desc: "The ultimate power for Shopify experts.",
      price: 24,
      features: ["Unlimited products", "Subscription engine", "Custom attributes", "Priority 24/7"],
      cta: "Choose Elite",
      popular: true,
    },
    {
      name: "Diamond",
      desc: "Maximum scale for global brands.",
      price: 40,
      features: ["Everything in Elite", "White-label reports", "Dedicated Manager", "Beta access"],
      cta: "Go Diamond",
      popular: false,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
        
        {/* Background Decorative Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-blue-500/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 font-[Montserrat]">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
                
                {/* Small Overline Badge */}
                <div className="mb-6 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[13px] font-bold text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/10 dark:text-blue-400">
                    <i className="fa-solid fa-dollar"></i>
                    Pricing
                </div>

                {/* Main Headline - High Contrast Black & Blue */}
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1] max-w-4xl">
                    Grow with fewer <br />
                    <span className="text-blue-600 drop-shadow-sm">tools and lower fees</span>
                </h2>

                {/* Sub-headline */}
                <p className="text-zinc-500  dark:text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    Pay for one software subscription instead of five. <br className="hidden md:block" />
                    No contracts. No per user fees.
                </p>

                {/* UI-Optimized Segmented Control Toggle */}
                <div className="flex items-center justify-center pt-6">
                    <div className="relative flex items-center p-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full select-none w-fit shadow-inner">

                        {/* Monthly Option (First for logical flow) */}
                        <button onClick={() => setIsYearly(false)}
                            className={cn(
                                "relative z-10 px-8 py-2.5 text-sm font-bold cursor-pointer transition-all duration-300 rounded-full min-w-35",
                                !isYearly ? "text-white" : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                            )}
                        >
                            Billed monthly
                        </button>

                        {/* Yearly Option */}
                        <button onClick={() => setIsYearly(true)}
                            className={cn(
                                "relative z-10 px-8 py-2.5 text-sm font-bold cursor-pointer transition-all duration-300 rounded-full flex items-center justify-center gap-2 min-w-40",
                                isYearly ? "text-white" : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                            )}
                        >
                            Billed yearly
                            <span className={cn(
                                "text-[10px] px-2 py-0.5 rounded-md font-black transition-all duration-300",
                                isYearly ? "bg-white/20 text-white" : "bg-blue-600 text-white"
                            )}>
                                -30%
                            </span>
                        </button>

                        {/* Perfect Alignment Slider */}
                        <div className={cn(
                            "absolute inset-y-1.5 w-[calc(50%-6px)] bg-blue-600 rounded-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-md shadow-blue-500/20",
                            isYearly ? "left-[calc(50%)]" : "left-1.5"
                        )}/>

                    </div>
                </div>

            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:gr  id-cols-2 lg:grid-cols-4 gap-6 items-end">
                
                {plans.map((plan) => (
                    <div key={plan.name}
                    className={cn(
                        "group relative flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:shadow-2xl",
                        plan.popular 
                        ? "bg-white dark:bg-zinc-900 border-blue-500 shadow-xl scale-105 z-20 min-h-145" 
                        : "bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 min-h-135"
                    )}>

                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-blue-500/30">
                                <Star className="size-3 fill-current" /> Most popular
                            </div>
                        )}
                    
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{plan.desc}</p>
                        </div>
                        
                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                                ${isYearly ? Math.floor(plan.price * 0.7) : plan.price}
                            </span>
                            <span className="text-zinc-500 text-sm font-medium">/mo</span>
                            </div>
                            <p className="text-[10px] text-zinc-400 mt-2 font-medium uppercase tracking-tighter">Billed {isYearly ? "annually" : "monthly"}</p>
                        </div>

                        <div className="space-y-4 mb-8 grow">
                            {plan.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <div className="flex size-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                                <Check className="size-3 stroke-[3px]" />
                                </div>
                                <span className="text-sm text-zinc-600 dark:text-zinc-300 font-medium">{feature}</span>
                            </div>
                            ))}
                        </div>

                        <Button className={cn("w-full rounded-2xl py-6 text-sm font-bold cursor-pointer transition-all active:scale-95",
                            plan.popular 
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25" 
                            : "bg-zinc-900 hover:bg-black text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950"
                        )}>
                            {plan.cta}
                        </Button>

                    </div>
                ))}

            </div>

            {/* Enterprise Glass Card */}
            <div className="mt-12 p-1 dark:p-px bg-linear-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent rounded-[2rem]">
                <div className="p-8 md:p-12 rounded-[2rem] bg-white dark:bg-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                
                    <div className="space-y-2">
                        
                        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                            Enterprise
                        </div>
                        <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">Need a custom solution?</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">We provide tailored infrastructure, SLA support, and dedicated managers for high-volume stores.</p>
                        
                    </div>
                    
                    <Button variant="outline" className="rounded-2xl px-10 py-7 text-[17px] font-bold  text-gray-500 border-2 cursor-pointer hover:bg-zinc-50 transition-all">
                        Book a Demo
                    </Button>
                    
                </div>
            </div>

        </div>

    </section>
  );
};

export default PricingSection;