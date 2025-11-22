import { Timeline } from "@/components/ui/timeline"

export function TimelineDemo() {
  const data = [
    {
      title: "PHASE 1: THE ARMORY",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Most students skip this. You won't. Before we write a single line of code, 
            we set up a professional environment so you never have to say "it works on my machine" again.
          </p>
          <div className="grid gap-4">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">The Terminal:</span> Stop fear-clicking folders. You will learn to navigate your computer using only the command line.
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">Git & GitHub:</span> Your "Save Button" for your career. We cover pushing, committing, and basic version control discipline.
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">VS Code Mastery:</span> Setting up specific extensions, prettier configs, and shortcuts to code at 2x speed.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "PHASE 2: THINKING IN DIVS",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Syntax is easy. Logic is hard. I won't just teach you CSS; I will teach you how to 
            mentally dismantle any website into rectangular boxes.
          </p>
          <div className="grid gap-4">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">The Box Model:</span> Understanding that everything on the web is just a rectangle, and how to manipulate it.
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">Layout Architecture:</span> How to structure a page using Flexbox so it doesn't fall apart on mobile screens.
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">The Imagination Challenge:</span> If you can draw it on a napkin, we will code it together.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "PHASE 3: THE ANTI-TUTORIAL VAULT",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            No more 12-hour YouTube marathons. The internet is full of noise; I give you the signal.
          </p>
          <div className="grid gap-4">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">Curated Documentation:</span> I blacklist bad tutorials and force you to read the official docs.
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">The Search Drill:</span> Learning exactly what to type into Google when you get stuck (a skill 90% of juniors lack).
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "PHASE 4: THE LAUNCH",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            It is not real until it is a link. Your code doesn't live on localhost anymore.
          </p>
          <div className="grid gap-4">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">Deployment:</span> Pushing your static sites to Netlify/Vercel.
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="h-2 w-2 mt-1.5 rounded-full bg-neutral-500 shrink-0" />
              <div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">Live Review:</span> Your first project goes live, and you get a URL to share on WhatsApp/LinkedIn immediately.
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}