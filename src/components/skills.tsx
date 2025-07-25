function Skills() {
  return (
    <section className="px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Skills
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Technical Expertise
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My diverse skill set allows me to tackle complex problems from
            multiple angles.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {/* mobile */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Mobile Development
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Flutter (dart)</li>
                  <li>App Performance Optimization</li>
                  <li>Cross-platform Development</li>
                  <li>Accessibility</li>
                  <li>Gesture handling</li>
                  <li>Custome Animations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* web development */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Front-end Development
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>React.js</li>
                  <li>Typescript</li>
                  <li>Javascript</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                 <li>Nuxt.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* backend development */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Backend Development
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Node.js</li>
                  <li>Nest.js</li>
                  <li>Express.js</li>
                  <li>Restfull APIs</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* cloud computing */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                DevOps
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Terraform</li>
                  <li>Jenkins</li>
                  <li>AWS(Amazon Web Services)</li>
                  <li>Microsoft Azure</li>
                  <li>Github Actions</li>
                  <li>Gitlab CI</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* cybersecurity */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Cybersecurity
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Penetration Testing</li>
                  <li>Vulnerability Assesment</li>
                  <li>Security Auditing</li>
                  <li>Ethical Hacking</li>
                  <li>Network Assesment</li>
                  <li>Cloud Security (AWS & Azure)</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* leadership */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Leadership
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Team Management</li>
                  <li>Project Planning</li>
                  <li>Business Development</li>
                  <li>Client Relations</li>
                  <li>Strategic Thinking</li>
                  <li>Team Collaboration</li>
                  <li>Emotional Intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
