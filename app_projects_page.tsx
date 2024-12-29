import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: "Enterprise Network Security Audit",
    description: "Conducted a comprehensive security audit for a Fortune 500 company, identifying and mitigating critical vulnerabilities.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Network Security", "Vulnerability Assessment", "Enterprise"],
  },
  {
    title: "Secure IoT Implementation",
    description: "Designed and implemented a secure IoT infrastructure for a smart city project, ensuring data privacy and integrity.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["IoT", "Smart City", "Data Privacy"],
  },
  {
    title: "Cybersecurity Training Program",
    description: "Developed and delivered a company-wide cybersecurity awareness training program, reducing phishing susceptibility by 75%.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Training", "Phishing", "Awareness"],
  },
  {
    title: "Financial Institution Penetration Test",
    description: "Performed a thorough penetration test for a major bank, uncovering and helping to patch several critical security flaws.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Penetration Testing", "Financial", "Critical Infrastructure"],
  },
  {
    title: "Secure Cloud Migration",
    description: "Assisted a healthcare provider in securely migrating their infrastructure to the cloud, ensuring HIPAA compliance throughout the process.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Cloud Security", "Healthcare", "Compliance"],
  },
  {
    title: "Industrial Control System Security",
    description: "Evaluated and enhanced the security of industrial control systems for a power plant, protecting critical infrastructure from cyber threats.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["ICS", "Critical Infrastructure", "Energy Sector"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 space-y-4">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-md object-cover w-full"
              />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

