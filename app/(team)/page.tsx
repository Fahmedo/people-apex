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

      {/* Join Our Team CTA */}
      <section className="py-16 bg-primary /10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Our Promise to You
            </h2>
            <p className="text-gray-100">
              At People Apex Solution, we are more than just an HR firm—we are
              your strategic partner in building a thriving, people-first
              organization. Our mission is to empower you with the tools,
              strategies, and support you need to navigate the complexities of
              the modern business environment. Together, we can create a
              workplace where your business and your people flourish.
            </p>
            <p className="text-gray-100">
              Let us help you transform your HR practices, unlock the potential
              of your workforce, and achieve your organizational goals. With
              People Apex Solution by your side, the future of your business is
              in capable hands.
            </p>
            <Button className="bg-primary hover:bg-[#5a0b8d] hidden">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
