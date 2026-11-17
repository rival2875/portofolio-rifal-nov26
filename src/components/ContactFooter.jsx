"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { SectionBadge, SparkleRays } from "./Decorations";
import { useScrollReveal } from "@/lib/animations";

export default function ContactFooter({ contact, brand }) {
  const [submitted, setSubmitted] = useState(false);
  const footerRef = useRef(null);
  useScrollReveal(footerRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="bg-[#07040D] border-t border-white/10 text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[250px] rounded-full bg-[#9333EA]/15 blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          {/* Kolom Info Kiri */}
          <div data-reveal className="lg:col-span-5">
            <SectionBadge text={contact.subtitle} />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {contact.titlePrefix}{" "}
              <span className="text-[#C084FC] relative inline-block">
                {contact.titleHighlight}
                <SparkleRays color="#FFFFFF" />
              </span>
            </h2>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              {contact.description}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3.5 group"
              >
                <span className="w-10 h-10 rounded-full bg-[#9333EA] text-white flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#0B0714] transition-all">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs text-gray-400">Alamat Email</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#C084FC] transition-colors">
                    {contact.email}
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/6285889662159"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 group"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 text-[#C084FC] flex items-center justify-center shrink-0 group-hover:bg-[#9333EA] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs text-gray-400">Telepon / WhatsApp</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#C084FC] transition-colors">
                    {contact.phone}
                  </p>
                </div>
              </a>

              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 group"
                >
                  <span className="w-10 h-10 rounded-full bg-white/10 text-[#C084FC] flex items-center justify-center shrink-0 group-hover:bg-[#9333EA] group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400">LinkedIn</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#C084FC] transition-colors">
                      valoza-rifaldi
                    </p>
                  </div>
                </a>
              )}

              <div className="flex items-center gap-3.5">
                <span className="w-10 h-10 rounded-full bg-white/10 text-[#C084FC] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs text-gray-400">Lokasi</p>
                  <p className="text-sm font-bold text-white">
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Form Kanan */}
          <div
            data-reveal
            className="lg:col-span-7 bg-[#140D25] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Nama Kamu
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Budi Santoso"
                    className="w-full bg-white/[0.05] border border-white/15 focus:border-[#A855F7] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Email Kamu
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="budi@contoh.com"
                    className="w-full bg-white/[0.05] border border-white/15 focus:border-[#A855F7] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Layanan yang Dibutuhkan
                </label>
                <select className="w-full bg-[#1C1233] border border-white/15 focus:border-[#A855F7] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors">
                  <option>Pengembangan Web (React.js / Laravel)</option>
                  <option>Desain UI/UX & Website (Figma)</option>
                  <option>Desain Grafis & Media Sosial</option>
                  <option>Animasi & Konten Kreatif</option>
                  <option>Lainnya / Kolaborasi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Detail Proyek
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Ceritakan tujuan proyek, timeline, dan budget kamu..."
                  className="w-full bg-white/[0.05] border border-white/15 focus:border-[#A855F7] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-1 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 bg-[#9333EA] hover:bg-white text-white hover:text-[#0B0714] hover:scale-105 active:scale-95 font-extrabold text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-lg shadow-[#9333EA]/30"
                >
                  <span>Kirim Pesan</span>
                  <Send className="w-4 h-4" />
                </button>

                {submitted && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C084FC]">
                    <CheckCircle2 className="w-4 h-4" />
                    Pesan terkirim!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center">
            <span className="text-base font-extrabold text-white">
              {brand.name}
              <span className="text-[#A855F7]">{brand.dot}</span>
            </span>
          </div>

          <p>{contact.copyright}</p>
        </div>
      </div>
    </footer>
  );
}