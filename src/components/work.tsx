import { Code } from "lucide-react";

function Work() {
  const worduiUrl =
    "https://wordui.vercel.app";

    const radionetworkurl = "https://radio-platform-two.vercel.app"
  return (
    <section
      id="work"
      className="px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-[30rem] py-12 md:py-24 lg:py-32 bg-background/40"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Featured Work
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my recent projects and accomplishments.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border px-4 py-4">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">
              The Network
            </h1>
            <p className="text-foreground/65 ">
            Radio Operations, Revenue & Engagement Management Platform
            </p>
            <p className="text-foreground/40">
            This platform is a full-stack, multi-tenant system designed to manage the entire lifecycle of radio operations across media houses, stations, shows, and presenters. It provides role-based dashboards for Master Admins, Media House Admins, Station Admins, and Presenters—each supported by powerful tools for content management, finance tracking, and performance monitoring.
            </p>

            <h2 className="text-sm font-medium mt-4 flex items-center">
              <Code className="mr-2" />
              <span>Tech Stack</span>
            </h2>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">NextJs</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Redux</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Nest.js</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">MongoDB</span>
              </div>
              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">AWS</span>
              </div>
              <a
          className="px-2 py-1 border border-foreground rounded-full hover:text-foreground transition-colors hover:scale-110"
          href={radionetworkurl}
          target="_blank"
          rel="noopener"
        >
          View project
        </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border px-4 py-4">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">
              Phoenix Sports Africa
            </h1>
            <p className="text-foreground/65 ">
              Spots Management System for St. Christophers&apos; International School
            </p>
            <p className="text-foreground/40">
              A cross-platform mobile application designed and built for Phoenix
              Sports Africa, a dynamic platform to connect sports enthusiasts,
              manage events, and promote grassroots sports talent across Africa.
              The app integrates clean, responsive UI/UX with real-time updates
              and user-friendly workflows.
            </p>

            <h2 className="text-sm font-medium mt-4 flex items-center">
              <Code className="mr-2" />
              <span>Tech Stack</span>
            </h2>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Flutter</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Riverpod</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Dart</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Firebase</span>
              </div>
              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">AWS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border px-4 py-4">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">
              Collaborative Google Docs Clone
            </h1>
            <p className="text-foreground/65 ">
              Collaborate in Real-Time. Securely. Effortlessly.
            </p>
            <p className="text-foreground/40">
              To enable secure, real-time collaborative document editing for
              teams, enhancing productivity and communication through a
              responsive and user-friendly web application.
            </p>

            <h2 className="text-sm font-medium mt-4 flex items-center">
              <Code className="mr-2" />
              <span>Tech Stack</span>
            </h2>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">NextJs</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Convex</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Clerk</span>
              </div>

              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Redux</span>
              </div>
              <div className="bg-foreground/10 py-1 px-2 flex justify-center items-center rounded-full">
                <span className="text-xs">Azure</span>
              </div>
            </div>
            <a
          className="px-2 py-1 border border-foreground rounded-full hover:text-foreground transition-colors hover:scale-110"
          href={worduiUrl}
          target="_blank"
          rel="noopener"
        >
          View project
        </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Work;
