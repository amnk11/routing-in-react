import React from "react";

const Contact = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-5xl font-bold">
          Contact <span className="text-amber-400">Me</span>
        </h1>

        <p className="mb-12 max-w-2xl text-lg text-zinc-400">
          Have a project in mind or just want to say hello? Feel free to reach
          out. I'll get back to you as soon as possible.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 text-xl font-semibold text-amber-400">
                📧 Email
              </h3>
              <p className="text-zinc-400">aman@example.com</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 text-xl font-semibold text-amber-400">
                📱 Phone
              </h3>
              <p className="text-zinc-400">+91 98765 43210</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 text-xl font-semibold text-amber-400">
                📍 Location
              </h3>
              <p className="text-zinc-400">Purnia, Bihar, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-400"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-lg bg-amber-400 py-3 font-semibold text-black transition duration-300 hover:bg-amber-300 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;