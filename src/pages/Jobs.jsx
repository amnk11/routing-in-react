import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobs = useLoaderData();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:border-amber-400 hover:-translate-y-1"
        >
          <span className="inline-block rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-400">
            {job.type}
          </span>

          <h2 className="mt-4 text-2xl font-bold text-white">{job.title}</h2>

          <p className="mt-2 text-lg text-zinc-300">{job.company}</p>

          <p className="mb-6 text-zinc-500">📍 {job.location}</p>

          <Link
            to={job.id}
            className="block w-full rounded-lg bg-amber-400 py-3 text-center font-semibold text-black transition duration-300 hover:bg-amber-300 active:scale-95"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const response = await fetch("http://localhost:5000/jobs");
  return response.json();
};
