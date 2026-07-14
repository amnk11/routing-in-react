import React from "react";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-5xl font-bold">
          About <span className="text-amber-400">Me</span>
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-zinc-400">
          Hi! I'm a passionate frontend developer who enjoys building modern,
          responsive, and user-friendly web applications. I love learning new
          technologies, experimenting with UI designs, and solving real-world
          problems through code.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-2 hover:border-amber-400">
            <h3 className="mb-3 text-xl font-semibold text-amber-400">
              🚀 Experience
            </h3>
            <p className="text-zinc-400">
              Worked on multiple personal projects including portfolios,
              dashboards, and e-commerce UI clones.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-2 hover:border-amber-400">
            <h3 className="mb-3 text-xl font-semibold text-amber-400">
              💻 Skills
            </h3>
            <p className="text-zinc-400">
              HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express,
              MongoDB and Git.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-2 hover:border-amber-400">
            <h3 className="mb-3 text-xl font-semibold text-amber-400">
              🎯 Goal
            </h3>
            <p className="text-zinc-400">
              To become a skilled Full Stack Developer and build scalable,
              high-performance web applications.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="mb-4 text-2xl font-bold">Why I Love Coding ❤️</h2>

          <p className="leading-8 text-zinc-400">
            Coding allows me to turn ideas into reality. Whether it's creating
            beautiful user interfaces or solving challenging programming
            problems, every project helps me improve my skills and creativity.
            I'm always excited to learn new frameworks, tools, and best
            practices in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;