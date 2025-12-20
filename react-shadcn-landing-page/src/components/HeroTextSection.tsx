import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

function HeroTextSection() {

    return (

        <section className="max-w-7xl mx-auto text-center flex flex-col items-center">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-6 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                New: Magic UI Integration
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold font-[Montserrat] tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Build landing pages <br className="hidden md:block" /> 
                <span className="text-blue-600">faster than ever.</span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-175 text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Beautifully designed components built with Radix UI, Tailwind CSS, and Magic UI. 
                The perfect starting point for your next big project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                
                <Button size="lg" className="rounded-full px-8 text-lg h-12 shadow-xl shadow-blue-500/20">
                    Get Started for free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-12">
                    View Components
                </Button>

            </div>

        </section>

    )

}

export default HeroTextSection