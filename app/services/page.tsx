import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import {
  Users,
  BarChart,
  Award,
  MessageSquare,
  FileText,
  Shield,
  Briefcase,
  PieChart,
  CheckCircle,
} from 'lucide-react';
import { OurApproach } from './data';

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Comprehensive HR solutions designed to optimize your workforce and
            drive business success.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">What We Offer</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              People Apex Solution provides tailored HR services designed to
              empower businesses through strategic people management and
              workforce optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Talent Acquisition & Recruitment:"
              description="We specialize in finding and placing the right talent to drive your business forward, ensuring alignment with your organizational culture and goals."
              features={[
                'Job analysis and description development',
                'Candidate sourcing and screening',
                'Interview process management',
                'Onboarding program design',
              ]}
            />
            <ServiceCard
              icon={<BarChart className="h-10 w-10 text-primary" />}
              title="Outsourcing"
              description="Streamline your operations by entrusting us with comprehensive HR functions, allowing your team to focus on core objectives while we handle your people needs."
              features={[
                'Performance review framework design',
                'Goal setting and KPI development',
                'Feedback mechanisms implementation',
                'Recognition program creation',
              ]}
            />
            <ServiceCard
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Culture Consulting & Projects"
              description="We partner with organizations to cultivate a positive and productive work culture, guiding teams through transformations that improve engagement and performance."
              features={[
                'Training needs assessment',
                'Curriculum development',
                'Workshop facilitation',
                'Leadership development programs',
              ]}
            />
            <ServiceCard
              icon={<MessageSquare className="h-10 w-10 text-primary" />}
              title="Startup Support:"
              description="Our expert team helps startups establish solid HR foundations, from recruitment to employee policies, setting you up for sustainable growth."
              features={[
                'HR department assessment',
                'Strategic HR planning',
                'Change management support',
                'HR technology implementation',
              ]}
            />
            <ServiceCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="HR Compliance & Policy"
              description="Stay compliant and safeguard your business with policies and processes that meet regulatory standards and reflect best practices in HR."
              features={[
                'Employee handbook creation',
                'Policy review and updates',
                'Compliance documentation',
                'Standard operating procedures',
              ]}
            />

            <ServiceCard
              icon={<PieChart className="h-10 w-10 text-primary" />}
              title="Workforce Planning"
              description="We help you strategically manage your workforce, planning for future needs to ensure your organization is always equipped with the right skills and talent."
              features={[
                'HR metrics identification and tracking',
                'Data collection and analysis',
                'Reporting dashboard creation',
                'Strategic recommendations',
              ]}
            />
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
              At People Apex Solution, our approach is rooted in the belief that
              every organization is unique, and so are its HR needs. We take a
              proactive, strategic, and customized approach to address the
              specific challenges and goals of our clients. Our methodology is
              built on three core pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OurApproach.map((d, index) => (
              <div className="text-center" key={index}>
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{d.title}</h3>
                <p className="text-gray-600">{d.description}</p>
              </div>
            ))}
          </div>
          <p className="max-w-4xl mx-auto text-gray-600 mt-8 border-l-4 border-primary px-2">
            From recruitment and talent acquisition to workforce planning and
            compliance, our comprehensive suite of services is tailored to meet
            your specific needs. We take the time to understand your business,
            identify opportunities for improvement, and deliver solutions that
            drive tangible outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white hidden">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              See how our services have helped organizations transform their HR
              practices and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Tech company office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Talent Acquisition
                  </span>
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    HR Analytics
                  </span>
                </div>
                <CardTitle className="text-xl font-bold">
                  Tech Startup Scales Team by 300%
                </CardTitle>
                <CardDescription className="text-gray-600">
                  A rapidly growing tech startup needed to hire 60 new employees
                  in 6 months without compromising on quality. Our strategic
                  talent acquisition approach helped them meet their hiring
                  goals while maintaining their unique company culture.
                </CardDescription>
                <div className="pt-2">
                  <Link
                    href="#"
                    className="text-primary font-medium hover:underline"
                  >
                    Read the full case study →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Performance Management
                  </span>
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Training & Development
                  </span>
                </div>
                <CardTitle className="text-xl font-bold">
                  Manufacturing Company Increases Productivity by 35%
                </CardTitle>
                <CardDescription className="text-gray-600">
                  A manufacturing company was struggling with high turnover and
                  low productivity. Our comprehensive performance management
                  system and targeted training programs helped them transform
                  their workplace culture and boost productivity.
                </CardDescription>
                <div className="pt-2">
                  <Link
                    href="#"
                    className="text-primary font-medium hover:underline"
                  >
                    Read the full case study →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-[#5a0b8d]">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 hidden">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Hear from organizations that have partnered with us to transform
              their HR practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white p-6 shadow-md">
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-center">
                  <div className="text-primary text-5xl font-serif">"</div>
                </div>
                <p className="text-gray-600 italic">
                  "People Apex Solution transformed our approach to talent
                  acquisition. Their strategic insights and hands-on support
                  helped us build a team that's driving our business forward."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold">Sarah Thompson</p>
                  <p className="text-sm text-gray-500">CEO, TechInnovate</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 shadow-md">
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-center">
                  <div className="text-primary text-5xl font-serif">"</div>
                </div>
                <p className="text-gray-600 italic">
                  "The performance management system designed by People Apex
                  Solution has completely changed how we evaluate and develop
                  our employees. We're seeing higher engagement and better
                  results."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold">Michael Rodriguez</p>
                  <p className="text-sm text-gray-500">
                    HR Director, Global Manufacturing Inc.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 shadow-md">
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-center">
                  <div className="text-primary text-5xl font-serif">"</div>
                </div>
                <p className="text-gray-600 italic">
                  "Working with People Apex Solution on our compliance
                  management has given us peace of mind. Their expertise and
                  attention to detail ensure we're always meeting regulatory
                  requirements."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold">Jennifer Lee</p>
                  <p className="text-sm text-gray-500">
                    COO, Healthcare Solutions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h2 className="text-3xl font-bold">
              Ready to Transform Your HR Practices?
            </h2>
            <p className="text-white/80">
              Contact us today to discuss how our services can help your
              organization thrive.
            </p>
            <Button
              asChild
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <a href="mailto:info@peopleapexsolution.org">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6 space-y-4">
        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
        <ul className="space-y-2 pt-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
