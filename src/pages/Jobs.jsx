import React from "react";
import { useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobs = useLoaderData();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-amber-400"
        >
          <h2 className="mb-2 text-2xl font-semibold text-amber-400">
            {job.title}
          </h2>

          <p className="mb-2 text-zinc-300">
            <span className="font-semibold">Company:</span> {job.company}
          </p>

          <p className="mb-2 text-zinc-300">
            <span className="font-semibold">Location:</span> {job.location}
          </p>

          <p className="mb-2 text-zinc-300">
            <span className="font-semibold">Job Type:</span> {job.type}
          </p>

          <p className="mb-2 text-zinc-300">
            <span className="font-semibold">Salary:</span> {job.salary}
          </p>

          <p className="mb-6 line-clamp-2 text-zinc-400">{job.description}</p>

          <button className="rounded-lg bg-amber-400 px-5 py-2 font-medium text-black transition hover:bg-amber-300 active:scale-95">
            View Details
          </button>
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
