import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-extrabold text-amber-400">404</h1>

        <h2 className="mb-4 text-3xl font-bold">Oops! Page Not Found</h2>

        <p className="mx-auto mb-8 max-w-md text-zinc-400">
          The page you're looking for doesn't exist or may have been moved.
          Please check the URL or head back to the homepage.
        </p>

        <button
          className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black transition duration-300 hover:bg-amber-300 active:scale-95"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
