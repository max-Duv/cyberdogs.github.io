import { Button } from '@/components/ui/button'
import { Shield, ArrowRight, Users, Lock, Briefcase } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const featuredProjects = [
  {
    title: "Enterprise Network Security Audit",
    description: "Conducted a comprehensive security audit for a Fortune 500 company, identifying and mitigating critical vulnerabilities.",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    title: "Secure IoT Implementation",
    description: "Designed and implemented a secure IoT infrastructure for a smart city project, ensuring data privacy and integrity.",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    title: "Cybersecurity Training Program",
    description: "Developed and delivered a company-wide cybersecurity awareness training program, reducing phishing susceptibility by 75%.",
    image: "/placeholder.svg?height=100&width=200",
  },
]

export default function Home() {
  return (
    <>
      <section className="container flex flex-col gap-4 pb-12 pt-4 md:pt-10 lg:py-28">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-lg bg-muted px-4 py-1.5 text-sm font-medium">
            Professional Security Services
          </div>
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Secure Your Digital Assets
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Comprehensive vulnerability assessments and penetration testing for organizations. 
            We specialize in Physical Security, Web Applications and Wireless Testing.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-12 lg:py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Professional Security Services
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We provide comprehensive security solutions to protect your organization from cyber threats.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Shield className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Vulnerability Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive security testing and analysis of your systems.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Users className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Security Training</h3>
                <p className="text-sm text-muted-foreground">
                  Empower your team with security awareness training.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Lock className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Penetration Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Professional security testing and vulnerability assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-12 lg:py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Featured Projects
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore some of our recent cybersecurity projects and success stories.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[300px] flex-col justify-between rounded-md p-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={100}
                  className="rounded-md object-cover"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">
              View All Projects
              <Briefcase className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

