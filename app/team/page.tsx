import { Button } from '@/components/ui/button';
import { TeamMember } from '@/components/team-member';

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Team Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Meet the dedicated professionals behind People Apex Solution who are
            passionate about transforming HR practices and empowering
            organizations.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our leadership team brings decades of combined experience in human
              resources and business management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              image="/team/team-member1.webp"
              name="Lilian Ofere-Nosakharen"
              position="CEO & Founder"
              bio="With over 10 years of experience in HR leadership, Lilian founded People Apex Solution to transform how businesses approach talent management."
            />
            {/* <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Michael Chen"
              position="HR Director"
              bio="Michael specializes in organizational development and has helped numerous companies optimize their workforce strategies. He leads our consulting practice with expertise in change management."
            />
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Priya Patel"
              position="Talent Acquisition Manager"
              bio="Priya brings innovative recruitment strategies that help companies attract and retain top talent in competitive markets. Her approach combines data-driven methods with human-centered practices."
            /> */}
          </div>
        </div>
      </section>

      {/* HR Consultants */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">HR Consultants</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our consultants work directly with clients to implement effective
              HR solutions tailored to their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="David Rodriguez"
              position="Training & Development Lead"
              bio="David designs and implements learning programs that empower employees and drive organizational growth."
            />
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Jennifer Lee"
              position="Compensation Specialist"
              bio="Jennifer helps organizations design competitive compensation structures that attract and retain top talent."
            />
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Marcus Williams"
              position="Employee Relations Consultant"
              bio="Marcus specializes in building positive workplace cultures and resolving complex employee relations issues."
            />
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Aisha Khan"
              position="HR Analytics Expert"
              bio="Aisha leverages data analytics to provide insights that drive strategic HR decisions and business outcomes."
            />
          </div>
        </div>
      </section> */}

      {/* Support Team */}
      {/* <section className="py-16 bg-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Support Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our support team ensures smooth operations and exceptional client
              service at every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Carlos Mendez"
              position="Client Success Manager"
              bio="Carlos ensures our clients receive exceptional service and achieve their desired outcomes through our HR solutions."
            />
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="Sophia Wilson"
              position="Operations Coordinator"
              bio="Sophia keeps our internal processes running smoothly, allowing our consultants to focus on delivering value to clients."
            />
            <TeamMember
              image="/placeholder.svg?height=400&width=400"
              name="James Taylor"
              position="Marketing Specialist"
              bio="James helps share our expertise and solutions with organizations that can benefit from our services."
            />
          </div>
        </div>
      </section> */}

      {/* Join Our Team CTA */}
      <section className="py-16 bg-primary /10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Join Our Team</h2>
            <p className="text-gray-600">
              We're always looking for talented HR professionals who are
              passionate about making a difference. If you're interested in
              joining our team, we'd love to hear from you.
            </p>
            <Button className="bg-primary hover:bg-[#5a0b8d]">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
