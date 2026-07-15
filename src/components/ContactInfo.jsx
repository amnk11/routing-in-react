import React from "react";

const ContactInfo = () => {
  return (
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

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-2 text-xl font-semibold text-amber-400">
          🌐 Website
        </h3>
        <p className="text-zinc-400">www.amanportfolio.dev</p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-2 text-xl font-semibold text-amber-400">
          ⏰ Availability
        </h3>
        <p className="text-zinc-400">
          Monday - Friday <br />
          10:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;