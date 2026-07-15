import React from "react";
import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-5xl font-bold">
          Career <span className="text-amber-400">Opportunities</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-zinc-400">
          Explore our latest job openings and find a role that matches your
          skills and interests.
        </p>

        <Outlet />
      </div>
    </section>
  );
};

export default JobsLayout;