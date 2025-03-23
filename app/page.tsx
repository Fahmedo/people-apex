'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  Users,
  BarChart,
  Award,
  MessageSquare,
  PieChart,
  FileText,
} from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { TeamMember } from '@/components/team-member';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-white py-12 md:py-20">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              People{' '}
              <span className="bg-primary text-white px-3 py-1 rounded-md">
                Apex
              </span>{' '}
              Solution
            </h1>
            <p className="text-xl text-gray-600">
              Integrity, Innovation, Empowerment and Collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-[#5a0b8d]">
                Our Services <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] ">
            <Image
              src="/hr-pic.jpg"
              alt="People management digital concept"
              fill
              className="object-contain rounded-t-lg rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              People Apex Solution provides tailored HR services designed to
              empower businesses through strategic people management and
              workforce optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Talent Acquisition & Recruitment:"
              description="We specialize in finding and placing the right talent to drive your business forward, ensuring alignment with your organizational culture and goals."
            />
            <ServiceCard
              icon={<BarChart className="h-10 w-10 text-primary" />}
              title="Outsourcing"
              description="Streamline your operations by entrusting us with comprehensive HR functions, allowing your team to focus on core objectives while we handle your people needs."
            />
            <ServiceCard
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Culture Consulting & Projects"
              description="We partner with organizations to cultivate a positive and productive work culture, guiding teams through transformations that improve engagement and performance."
            />
            <ServiceCard
              icon={<MessageSquare className="h-10 w-10 text-primary" />}
              title="Startup Support:"
              description="Our expert team helps startups establish solid HR foundations, from recruitment to employee policies, setting you up for sustainable growth."
            />
            <ServiceCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="HR Compliance & Policy"
              description="Stay compliant and safeguard your business with policies and processes that meet regulatory standards and reflect best practices in HR."
            />

            <ServiceCard
              icon={<PieChart className="h-10 w-10 text-primary" />}
              title="Workforce Planning"
              description="We help you strategically manage your workforce, planning for future needs to ensure your organization is always equipped with the right skills and talent."
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Meet our dedicated team of HR professionals committed to
              delivering exceptional service and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="/team/team-member1.webp"
              name="Lilian Ofere-Nosakhare"
              position="CEO & Founder"
              bio="With over 15 years of experience in HR leadership, Lilian founded People Apex Solution to transform how businesses approach talent management."
            />
            {/* <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Michael Chen"
              position="HR Director"
              bio="Michael specializes in organizational development and has helped numerous companies optimize their workforce strategies."
            />
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Priya Patel"
              position="Talent Acquisition Manager"
              bio="Priya brings innovative recruitment strategies that help companies attract and retain top talent in competitive markets."
            />
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="David Rodriguez"
              position="Training & Development Lead"
              bio="David designs and implements learning programs that empower employees and drive organizational growth."
            /> */}
          </div>

          {/* <div className="text-center mt-8">
            <Button asChild className="bg-primary hover:bg-[#5a0b8d]">
              <Link href="/team">View All Team Members</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                About People Apex Solution
              </h2>
              <div className="w-24 h-1 bg-primary"></div>
              <p className="text-gray-600">
                At People Apex Solution, we believe that people are the most
                valuable asset of any organization. Our mission is to help
                businesses optimize their human resources through innovative
                strategies and solutions.
              </p>
              <p className="text-gray-600">
                With years of experience in the HR industry, our team of experts
                is dedicated to delivering exceptional service and measurable
                results for our clients.
              </p>
              <Button className="bg-primary hover:bg-[#5a0b8d]">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="bg-primary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 bg-white text-primary rounded-full p-1">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Integrity</h4>
                    <p className="text-white/80">
                      Transparency and trustworthiness are at the heart of
                      everything we do.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-white text-primary rounded-full p-1">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Innovation</h4>
                    <p className="text-white/80">
                      We constantly adapt and innovate to meet the changing
                      needs of our clients.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-white text-primary rounded-full p-1">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Empowerment</h4>
                    <p className="text-white/80">
                      We empower both employers and employees to reach their
                      full potential.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-white text-primary rounded-full p-1">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Collaboration</h4>
                    <p className="text-white/80">
                      Our success is driven by close partnerships with clients,
                      understanding that each organization is unique.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
