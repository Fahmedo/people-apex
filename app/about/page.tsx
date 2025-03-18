import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Learn about our mission, vision, and the values that drive
            everything we do at People Apex Solution.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
              <div className="w-24 h-1 bg-primary"></div>
              <p className="text-gray-600">
                People Apex Solution was founded in 2025 with a clear mission:
                to help organizations unlock the full potential of their most
                valuable asset—their people.
              </p>
              <p className="text-gray-600">
                Our founder,Lilian Ofere-Nosakharen, recognized that many
                businesses were struggling with HR challenges that were holding
                them back from achieving their goals. Drawing on her extensive
                experience in human resources leadership, she assembled a team
                of experts dedicated to transforming how organizations approach
                talent management.
              </p>
              <p className="text-gray-600">
                Since then, we've grown into a trusted partner for businesses of
                all sizes across various industries. Our client-centered
                approach and commitment to excellence have earned us a
                reputation for delivering measurable results and exceptional
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                To empower organizations through innovative HR solutions that
                optimize workforce performance, foster positive workplace
                cultures, and drive sustainable business success.
              </p>
              <p className="text-gray-600">
                We are committed to delivering exceptional service and
                measurable results that exceed our clients' expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-4">
                To be the leading HR solutions provider, recognized for our
                expertise, innovation, and commitment to transforming how
                organizations manage their human capital.
              </p>
              <p className="text-gray-600">
                We envision a world where businesses thrive by placing people at
                the center of their strategy and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              These principles guide our actions and decisions every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4 bg-primary text-white rounded-full p-2">
                <ChevronRight className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Integrity</h4>
                <p className="text-gray-600">
                  We uphold the highest ethical standards in all our
                  interactions. We are honest, transparent, and accountable in
                  everything we do.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 bg-primary text-white rounded-full p-2">
                <ChevronRight className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Innovation</h4>
                <p className="text-gray-600">
                  We continuously seek new and better ways to serve our clients.
                  We embrace creativity and forward-thinking approaches to solve
                  complex HR challenges.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 bg-primary text-white rounded-full p-2">
                <ChevronRight className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Empowerment</h4>
                <p className="text-gray-600">
                  We enable organizations and individuals to reach their full
                  potential. We believe in providing the tools, knowledge, and
                  support needed for success.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 bg-primary text-white rounded-full p-2">
                <ChevronRight className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  Collaboration
                </h4>
                <p className="text-gray-600">
                  We work together with our clients to achieve shared goals. We
                  value partnerships built on trust, respect, and open
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Approach</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We believe in a client-centered approach that focuses on
              understanding your unique needs and delivering tailored solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  What Sets Us Apart
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 bg-primary/10 text-primary rounded-full p-1">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Tailored Solutions</h4>
                      <p className="text-gray-600">
                        We don't believe in one-size-fits-all approaches. We
                        customize our services to address your specific
                        challenges and goals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-primary/10 text-primary rounded-full p-1">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Experienced Team</h4>
                      <p className="text-gray-600">
                        Our consultants bring decades of combined experience
                        across various industries and HR specialties.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-primary/10 text-primary rounded-full p-1">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Results-Driven</h4>
                      <p className="text-gray-600">
                        We focus on delivering measurable outcomes that
                        contribute to your organization's success.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-primary/10 text-primary rounded-full p-1">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Ongoing Support</h4>
                      <p className="text-gray-600">
                        We build long-term partnerships with our clients,
                        providing continuous guidance and support.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our approach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our team of HR professionals is passionate about helping
              organizations unlock the full potential of their workforce.
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg mb-8">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=1600"
                alt="Team photo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent/20 flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Dedicated HR Experts
                  </h3>
                  <p className="text-white/90 max-w-2xl">
                    Our team brings together diverse expertise in human
                    resources, organizational development, talent acquisition,
                    and more. We're united by a shared commitment to excellence
                    and a passion for helping organizations thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-primary hover:bg-[#5a0b8d]">
              <Link href="/team">Meet Our Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Key milestones in our growth and development as a company.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="bg-primary text-white px-4 py-2 rounded-md font-bold text-xl">
                  2025
                </div>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Company Founded
                </h3>
                <p className="text-gray-600">
                  Sarah Johnson establishes People Apex Solution with a vision
                  to transform HR practices.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="bg-primary text-white px-4 py-2 rounded-md font-bold text-xl">
                  2025
                </div>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Expansion of Services
                </h3>
                <p className="text-gray-600">
                  We expand our service offerings to include comprehensive HR
                  consulting and training programs.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="bg-primary text-white px-4 py-2 rounded-md font-bold text-xl">
                  2025
                </div>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Regional Growth
                </h3>
                <p className="text-gray-600">
                  We open our second office to better serve clients across the
                  region and expand our team of HR experts.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="bg-primary text-white px-4 py-2 rounded-md font-bold text-xl">
                  2025
                </div>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Digital Transformation
                </h3>
                <p className="text-gray-600">
                  We launch our digital HR solutions platform to help clients
                  navigate the changing workplace landscape.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="bg-primary text-white px-4 py-2 rounded-md font-bold text-xl">
                  2025
                </div>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Industry Recognition
                </h3>
                <p className="text-gray-600">
                  People Apex Solution receives multiple industry awards for
                  excellence in HR consulting and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Partner With Us
            </h2>
            <p className="text-gray-600">
              Ready to transform your HR practices and unlock your
              organization's full potential? Contact us today to start the
              conversation.
            </p>
            <Button asChild className="bg-primary hover:bg-[#5a0b8d]">
              <a href="mailto:info@peopleapexsolution.org">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
