import Link from "next/link"
import { Heart } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/dashboard" className="flex items-center space-x-2">
        <Heart className="h-6 w-6 text-rose-600" />
        <span className="font-bold">CounselorConnect</span>
      </Link>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
          Dashboard
        </Link>
        <Link
          href="/students/1"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Students
        </Link>
        <Link
          href="/documentation"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Documentation
        </Link>
        <Link
          href="/communication"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Communication
        </Link>
        <Link
          href="/analytics"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Analytics
        </Link>
      </nav>
    </div>
  )
}
