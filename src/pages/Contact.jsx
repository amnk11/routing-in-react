import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-5xl font-bold">
          Contact <span className="text-amber-400">Me</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-zinc-400">
          Feel free to get in touch. Choose an option below to view my contact
          details or send me a message.
        </p>

        <div className="mb-10 flex gap-4">
          <NavLink
            to="info"
            end
            className={({ isActive }) =>
              `rounded-lg px-5 py-2 font-medium transition ${
                isActive
                  ? "bg-amber-400 text-black"
                  : "border border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-amber-400 hover:text-amber-400"
              }`
            }
          >
            Contact Info
          </NavLink>

          <NavLink
            to="form"
            className={({ isActive }) =>
              `rounded-lg px-5 py-2 font-medium transition ${
                isActive
                  ? "bg-amber-400 text-black"
                  : "border border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-amber-400 hover:text-amber-400"
              }`
            }
          >
            Contact Form
          </NavLink>
        </div>

       

        <Outlet />
      </div>
    </section>
  );
};

export default Contact;
