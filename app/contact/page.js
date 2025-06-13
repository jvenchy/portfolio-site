// app/contact/page.tsx
"use client";

import React from "react";
import SendMail from "../../components/SendMail";
import Socials from "../../components/Socials";
import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-16">
        <section id="socials" className="min-h-screen">
          <Socials />
        </section>
      </div>
    </main>
  );
}