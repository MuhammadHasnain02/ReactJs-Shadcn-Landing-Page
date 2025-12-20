import './App.css'
import { cn } from './lib/utils'

import Navbar from './components/ui/Navbar'
import { HeroVideoDialog } from './components/ui/hero-video-dialog'
import HeroTextSection from './components/HeroTextSection'
import { Meteors } from './components/ui/meteors'

import { BentoGridSection } from './components/BentoGridSection'
import { OrbitingCircles } from './components/ui/orbiting-circles'
import PricingSection from './components/ui/PricingSection'
import { AvatarCircles } from './components/ui/avatar-circles'
import { Marquee } from './components/ui/marquee'
import Footer from './components/Footer'

// font-[Montserrat]

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300",
        // Base Layout & Animation
        "flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl",
        // Light Styles: Frosted glass with soft border
        "border-black/[0.08] bg-white/50 backdrop-blur-md hover:bg-white/80 hover:shadow-black/[0.05]",
        // Dark Styles: Deep zinc with subtle highlights
        "dark:border-white/[0.08] dark:bg-zinc-900/50 dark:backdrop-blur-md dark:hover:bg-zinc-900/80 dark:hover:shadow-white/[0.02]"
      )}
    >
      <div className="flex flex-row items-center gap-3">

        {/* Avatar with Ring */}
        <div className="relative">
          <img 
            className="rounded-full ring-2 ring-black/5 dark:ring-white/10" 
            width="44" 
            height="44" 
            alt={name} 
            src={img} 
          />
          {/* Online Status Dot */}
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-900"></span>
        </div>

        <div className="flex flex-col">
          <figcaption className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {username}
          </p>
        </div>

      </div>

      <blockquote className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        "{body}"
      </blockquote>

      {/* Subtle Shine Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </figure>
  )
}

function App() {

  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ]

  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ]

  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)

  return (

    <div className="min-h-screen bg-background text-foreground">

      {/* --- UPPER SECTION --- */}
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden">

        {/* Meteors */}
        <Meteors number={30} />

        {/* Navbar */}
        <Navbar />

        {/* HeroTextSection */}
        <div className='pt-35'>
          <HeroTextSection />
        </div>

      </section>

      <main>

        {/* --- HERO VIDEO SECTION --- */}
        <section className="max-w-5xl mx-auto my-20 relative group">

          {/* Decorative glow background */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-300 to-cyan-300 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative rounded-2xl border bg-card shadow-2xl overflow-hidden">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video Light"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video Dark"
            />
          </div>

        </section>

        {/* --- Binto Grid SECTION --- */}
        <section className="max-w-7xl mx-auto py-20 bg-slate-50/50 dark:bg-zinc-900/20">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Heading */}
            <div className="mb-16 flex flex-col items-center text-center font-[Montserrat]">
              
              <h2 className="mb-6 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[13px] font-medium text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/10 dark:text-blue-400">
                <i className="fa-solid fa-bars-staggered mr-2"></i>
                Features
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                Everything you need to <span className="text-blue-600">scale.</span>
              </h3>
              <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
                Our all-in-one platform provides the most advanced tools for modern developers and creative teams.
              </p>

            </div>

            {/* THE BENTO GRID */}
            <BentoGridSection />

          </div>
        </section>

        {/* --- Orbiting Circles galaxy (showing integrations and connectivity) SECTION --- */}
        <section className="relative flex w-full py-10 flex-col items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
  
          {/* --- 1. TOP BRANDING & HEADING --- */}
          <div className="z-20 mb-16 flex flex-col items-center text-center font-[Montserrat]">

            <div className="mb-6 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[13px] font-medium text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/10 dark:text-blue-400">
              <i className="fa-solid fa-share-nodes mr-2"></i>
              Universal Integrations
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 max-w-3xl">
              Everything you need, <span className="text-blue-600">perfectly connected</span>
            </h2>
            
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base leading-relaxed">
              Sync data across all your favorite platforms with high-speed orbits and secure industry-standard protocols.
            </p>

          </div>

          {/* --- 2. THE ORBITING GALAXY --- */}
          <div className="relative flex h-125 w-full items-center justify-center">

            {/* Central Core */}
            <div className="z-30 flex size-20 items-center justify-center rounded-full border-4 border-blue-500/10 bg-white shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] dark:bg-zinc-950 dark:border-blue-500/20">

              <div className="flex size-14 items-center justify-center rounded-full bg-linear-to-tr from-blue-600 to-cyan-400 text-white shadow-inner animate-pulse">
                <i className="fa-solid fa-bolt text-2xl"></i>
              </div>

            </div>

            {/* Inner Orbit (Visible Ring) */}
            <OrbitingCircles
              radius={100}
              duration={25}
              className="border-blue-500/10 dark:border-zinc-800/50"
            >
              <div className="flex size-10 items-center justify-center rounded-full border px-2 bg-white shadow-sm dark:bg-zinc-900 transition-transform hover:scale-125">
                <i className="fa-brands fa-openai text-lg text-zinc-800 dark:text-white"></i>
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border px-2 bg-white shadow-sm dark:bg-zinc-900 transition-transform hover:scale-125">
                <i className="fa-brands fa-slack text-lg text-purple-600"></i>
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border px-2 bg-white shadow-sm dark:bg-zinc-900 transition-transform hover:scale-125">
                <i className="fa-brands fa-notion text-lg text-black dark:text-white"></i>
              </div>

            </OrbitingCircles>

            {/* Outer Orbit (Visible Ring, Reverse) */}
            <OrbitingCircles
              radius={200}
              duration={45}
              reverse
              className="border-zinc-200/50 dark:border-zinc-800/30"
            >
              <div className="flex size-12 items-center justify-center rounded-full border px-2 border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all hover:scale-110">
                <i className="fa-brands fa-whatsapp text-emerald-500 text-xl"></i>
              </div>
              <div className="flex size-12 items-center justify-center rounded-full border px-2 border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all hover:scale-110">
                <i className="fa-brands fa-google-drive text-amber-500 text-xl"></i>
              </div>
              <div className="flex size-12 items-center justify-center rounded-full border px-2 border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all hover:scale-110">
                <i className="fa-brands fa-discord text-indigo-500 text-xl"></i>
              </div>
              <div className="flex size-12 items-center justify-center rounded-full border px-2 border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all hover:scale-110">
                <i className="fa-brands fa-figma text-pink-500 text-xl"></i>
              </div>

            </OrbitingCircles>

            {/* Atmospheric Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          </div>
          
        </section>

        {/* --- Avatar Circles SECTION --- */}
        <PricingSection />

        {/* --- Avatar Circles SECTION --- */}
        <section className="py-10">
          <AvatarCircles numPeople={99} avatarUrls={avatars} />
        </section>

        {/* --- Marquee SECTION --- */}
        <div className="flex w-full py-20 flex-col items-center justify-center overflow-hidden">
          
          {/* First Row Items */}
          <Marquee pauseOnHover className="[--duration:20s]">

            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}

          </Marquee>

          {/* Second Row Items */}
          <Marquee reverse pauseOnHover className="[--duration:20s]">

            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}

          </Marquee>

          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        
        </div>

      </main>

      <Footer />
    </div>

  )
}

export default App