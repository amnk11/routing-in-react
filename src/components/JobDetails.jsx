import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetail = useLoaderData();

  return (
    <section className="min-h-[calc(100vh-80px)] bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-block rounded-full bg-amber-400/10 px-4 py-1 text-sm font-medium text-amber-400">
              {jobDetail.type}
            </span>

            <h1 className="mt-4 text-4xl font-bold">
              {jobDetail.title}
            </h1>

            <p className="mt-2 text-lg text-zinc-400">
              {jobDetail.company}
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-950 px-6 py-4 text-center">
            <p className="text-sm text-zinc-500">Salary</p>
            <p className="mt-1 text-xl font-semibold text-amber-400">
              {jobDetail.salary}
            </p>
          </div>
        </div>

        {/* Job Info */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <h3 className="mb-2 text-lg font-semibold text-amber-400">
              📍 Location
            </h3>
            <p className="text-zinc-400">{jobDetail.location}</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <h3 className="mb-2 text-lg font-semibold text-amber-400">
              💼 Employment Type
            </h3>
            <p className="text-zinc-400">{jobDetail.type}</p>
          </div>
        </div>

        {/* Description */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-4 text-2xl font-bold text-amber-400">
            Job Description
          </h2>

          <p className="leading-8 text-zinc-300">
            {jobDetail.description}
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="w-full rounded-xl bg-amber-400 py-4 text-lg font-semibold text-black transition duration-300 hover:bg-amber-300 active:scale-95">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:5000/jobs/${id}`);

  return response.json();
};