import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <Link
              href="/"
              className="font-medium underline underline-offset-4"
            >
              cyberdogs
            </Link>
            . The source code is available on{' '}
            <Link
              href="https://github.com"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Link href="https://twitter.com" className="rounded-2xl bg-muted p-2 hover:bg-muted/80">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://github.com" className="rounded-2xl bg-muted p-2 hover:bg-muted/80">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" className="rounded-2xl bg-muted p-2 hover:bg-muted/80">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="/contact" className="rounded-2xl bg-muted p-2 hover:bg-muted/80">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Contact</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

