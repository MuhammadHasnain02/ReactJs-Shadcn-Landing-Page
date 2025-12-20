import { cn } from "@/lib/utils"

interface Avatar {
  imageUrl: string
  profileUrl: string
}
interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: Avatar[]
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (

    <section className="flex w-full flex-col items-center justify-center px-4 bg-white dark:bg-zinc-950">
  
      {/* 1. "Last Updated" Style Badge */}
      <div className="mb-6 rounded-full border border-orange-200 bg-orange-50/50 px-4 py-1.5 text-[13px] font-medium text-orange-700 dark:border-orange-900/30 dark:bg-orange-900/10 dark:text-orange-400">
        Trusted by 10k+ developers
      </div>

      {/* 2. Main Heading */}
      <h2 className="text-center text-3xl md:text-[34px] font-[Montserrat] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        Built with industry-standard tools and best practices
      </h2>

      <p className="mt-4 mb-12 text-center text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
        Our platform is engineered using the latest technologies to ensure maximum performance, security, and scalability for your projects.
      </p>

      {/* 3. The Avatar/Icon Row (Centered Layout) */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
        
        {/* Wrap your existing AvatarCircles mapping here to center it */}
        <div className="flex items-center justify-center">
            <div className="flex -space-x-3 md:-space-x-4">
                {avatarUrls.map((url, index) => (
                    <a
                        key={index}
                        href={url.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative transition-transform hover:-translate-y-1 hover:z-20"
                        style={{ zIndex: avatarUrls.length - index }}
                    >
                        <img
                            className="h-10 w-10 md:h-11 md:w-11 rounded-full border-2 border-white shadow-sm dark:border-zinc-950 ring-1 ring-zinc-200 dark:ring-zinc-800"
                            src={url.imageUrl}
                            alt={`User ${index + 1}`}
                        />
                    </a>
                ))}
                
                {/* The Count Badge matching the monochrome tech style */}
                <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-[11px] font-bold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                    +{numPeople}
                </div>
            </div>
        </div>

        {/* Optional: Add text labels next to the circles like in your image */}
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <span className="h-4 w-[1px] bg-zinc-300 dark:bg-zinc-800 hidden md:block" />
            <span className="text-sm font-medium">Active Users</span>
            <span className="rounded bg-orange-100 px-1.5 py-0.5 text-[10px] font-bold text-orange-600 dark:bg-orange-900/30">
                NEW
            </span>
        </div>

      </div>
    </section>

  )
}
