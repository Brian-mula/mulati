function Abount() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-background/40"
    >
      <div className="px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-[30rem]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Me
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Who I Am
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m Brian Mulati, a versatile tech professional skilled in
              full-stack development, DevOps, UI/UX design, and cybersecurity. I
              build end-to-end digital solutions that are scalable,
              user-centric, and secure. With strong experience in cloud
              platforms like AWS and Azure, I design and manage infrastructure
              using tools like Terraform, Docker, and CI/CD pipelines. My
              background in UI/UX allows me to create clean, intuitive
              interfaces that enhance user experience across web and mobile
              platforms. As a cybersecurity engineer, I apply secure coding
              practices, conduct vulnerability assessments, and implement robust
              protection for data and systems. I thrive in dynamic environments
              where I can integrate code, cloud, design, and security to deliver
              high-impact solutions. Whether deploying apps, streamlining
              infrastructure, or defending against threats, I bring a holistic,
              detail-oriented approach to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abount;
