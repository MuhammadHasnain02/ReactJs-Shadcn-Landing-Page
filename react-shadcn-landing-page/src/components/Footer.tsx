import React from 'react'

function Footer() {


    return (
         <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* 1. Brand Section */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-lg">
                        <i className="fa-solid fa-bolt text-lg"></i>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        YourBrand
                    </span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
                    Building the future of digital connectivity with industry-standard tools and high-performance orbits.
                    </p>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors text-lg"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors text-lg"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors text-lg"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>

                {/* 2. Product Links */}
                <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-6">Product</h4>
                    <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Integrations</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Changelog</a> <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:bg-blue-900/30">New</span></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
                    </ul>
                </div>

                {/* 3. Company Links */}
                <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                {/* 4. Newsletter Section */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">Join our orbit</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Monthly updates on new tools and best practices.</p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        className="w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                    />
                    <button className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all active:scale-95">
                        Join
                    </button>
                    </div>
                </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-zinc-400">
                <p>© 2025 YourBrand. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Systems operational
                </div>
                </div>
            </div>
        </footer>   
    )

}

export default Footer