import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ThemeSelect() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-27.5 h-9 bg-zinc-100 dark:bg-zinc-800 rounded-full animate-pulse" />

  return (
    <Select value={theme} onValueChange={setTheme}>
      
      <SelectTrigger className="w-27.5 h-9 rounded-full cursor-pointer bg-transparent border-zinc-200 dark:border-zinc-800 focus:ring-0">
        <div className="flex items-center gap-2">
          {theme === "light" && <Sun className="h-4 w-4 text-orange-500" />}
          {theme === "dark" && <Moon className="h-4 w-4 text-blue-400" />}
          {theme === "system" && <Monitor className="h-4 w-4 text-zinc-500" />}
          <SelectValue placeholder="Theme" />
        </div>
      </SelectTrigger>
      
      <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
        
        <SelectItem value="light" className="rounded-lg cursor-pointer">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" /> <span>Light</span>
          </div>
        </SelectItem>
        <SelectItem value="dark" className="rounded-lg cursor-pointer">
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4" /> <span>Dark</span>
          </div>
        </SelectItem>
        <SelectItem value="system" className="rounded-lg cursor-pointer">
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4" /> <span>System</span>
          </div>
        </SelectItem>
        
      </SelectContent>

    </Select>
  )
}