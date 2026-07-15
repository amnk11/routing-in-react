import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-amber-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-amber-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Subject
        </label>
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-amber-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          rows="6"
          placeholder="Write your message..."
          className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-amber-400"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-amber-400 py-3 font-semibold text-black transition duration-300 hover:bg-amber-300 active:scale-95"
      >
        Send Message 🚀
      </button>
    </form>
  );
};

export default ContactForm;
