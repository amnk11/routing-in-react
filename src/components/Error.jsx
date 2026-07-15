import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center shadow-lg">
        <h1 className="mb-3 text-6xl font-extrabold text-amber-400">Oops!</h1>

        <h2 className="mb-4 text-3xl font-bold">Something Went Wrong</h2>

        <p className="mb-6 text-zinc-400">
          An unexpected error occurred while loading this page.
        </p>

        <div className="mb-8 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
          <p className="font-medium text-red-400">
            {error?.message || "Unknown Error"}
          </p>
        </div>

        <button
          onClick={() => navigate("/", { replace: true })}
          className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-black transition duration-300 hover:bg-amber-300 active:scale-95"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default Error;
