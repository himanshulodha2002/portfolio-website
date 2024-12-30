import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 ppx-4 text-center text-gray-500">
      <small className="mb-2 block text-xs ">
        &copy; 2021 Himanshu Lodha. All rights reserved. Made with{" "}
        <span className="text-red-500">❤</span> in
        <a
          href="https://en.wikipedia.org/wiki/India"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline"
        >
          India
        </a>
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        Next.js (with Server Actions), TypeScript, Tailwind CSS, Framer Motion,
        React Email & Resend and Vercel. Hosted on Vercel.
      </p>
    </footer>
  );
}
