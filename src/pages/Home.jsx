import React from "react";

const Home = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-zinc-950 text-white">
      {/* Background Blur */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/20 blur-[150px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a1a_1px,transparent_1px),linear-gradient(to_bottom,#27272a1a_1px,transparent_1px)] bg-size-[55px_55px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}

        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-medium text-amber-300 backdrop-blur">
          ✨ Modern React Experience
        </span>

        {/* Heading */}

        <h1 className="mt-8 max-w-5xl text-6xl font-black leading-tight tracking-tight md:text-8xl">
          Build Stunning
          <span className="block bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Web Experiences
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          Create fast, beautiful and scalable web applications using
          React, Tailwind CSS and modern development tools.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex gap-5">
          <button className="rounded-xl bg-amber-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-amber-300 active:scale-95">
            Get Started
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-white hover:bg-zinc-900">
            Learn More
          </button>
        </div>

        {/* Stats */}

        <div className="mt-24 grid w-full max-w-4xl grid-cols-3 gap-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
            <h2 className="text-4xl font-bold text-amber-400">100+</h2>
            <p className="mt-2 text-zinc-400">Projects</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
            <h2 className="text-4xl font-bold text-amber-400">50K+</h2>
            <p className="mt-2 text-zinc-400">Users</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
            <h2 className="text-4xl font-bold text-amber-400">24/7</h2>
            <p className="mt-2 text-zinc-400">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;