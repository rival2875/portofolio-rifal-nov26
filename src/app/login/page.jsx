"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  User,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { gsap } from "@/lib/animations";
import { loginUser, saveSession } from "@/lib/auth";
import { SparkleRays } from "@/components/Decorations";

export default function LoginPage() {
  const router = useRouter();
  const pageRef = useRef(null);
  const cardRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successUser, setSuccessUser] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-login-card]", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
      })
        .from(
          "[data-login-item]",
          { y: 24, opacity: 0, stagger: 0.08, duration: 0.5 },
          "-=0.4"
        )
        .from("[data-login-glow]", { opacity: 0, duration: 1.2 }, "<");

      gsap.to("[data-login-glow]", {
        scale: 1.2,
        opacity: 0.7,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.6,
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await loginUser(username.trim(), password);
      saveSession(user);
      setSuccessUser(user);

      gsap.to(cardRef.current, {
        scale: 1.02,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });

      setTimeout(() => router.push("/"), 1800);
    } catch (err) {
      const message =
        err instanceof TypeError
          ? "Tidak bisa terhubung ke server. Cek koneksi internet kamu."
          : err.message;
      setError(message);
      gsap.fromTo(
        cardRef.current,
        { x: 0 },
        { x: 12, duration: 0.08, repeat: 5, yoyo: true, ease: "none", clearProps: "x" }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#0B0714] text-white flex items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      <div
        data-login-glow
        className="pointer-events-none absolute -top-20 left-1/4 w-[420px] h-[420px] rounded-full bg-[#9333EA]/20 blur-[120px]"
      />
      <div
        data-login-glow
        className="pointer-events-none absolute -bottom-24 right-1/4 w-[380px] h-[380px] rounded-full bg-[#A855F7]/15 blur-[110px]"
      />

      <div className="w-full max-w-md relative z-10">
        <div
          ref={cardRef}
          data-login-card
          className="bg-[#140D25] border border-white/15 rounded-3xl p-7 sm:p-9 shadow-2xl shadow-[#9333EA]/15"
        >
          {successUser ? (
            <div className="text-center py-6">
              <img
                src={successUser.image}
                alt={successUser.firstName}
                className="w-20 h-20 rounded-full mx-auto border-2 border-[#A855F7] shadow-lg shadow-[#9333EA]/30"
              />
              <div className="mt-4 inline-flex items-center gap-2 text-[#C084FC] font-bold">
                <CheckCircle2 className="w-5 h-5" />
                Login Berhasil!
              </div>
              <h1 className="mt-2 text-2xl font-extrabold">
                Selamat datang, {successUser.firstName}!
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Token akses sudah tersimpan. Mengalihkan ke beranda...
              </p>
              <Loader2 className="w-5 h-5 mx-auto mt-4 animate-spin text-[#A855F7]" />
            </div>
          ) : (
            <>
              <div data-login-item className="text-center mb-7">
                <span className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7E22CE] to-[#A855F7] items-center justify-center shadow-lg shadow-[#9333EA]/40 mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Masuk ke{" "}
                  <span className="text-[#C084FC] relative inline-block">
                    Akun
                    <SparkleRays color="#FFFFFF" />
                  </span>
                </h1>
                <p className="mt-2 text-sm text-gray-400">
                  Login dulu untuk mengakses seluruh fitur website.
                </p>
              </div>

              {error && (
                <div
                  role="alert"
                  className="mb-5 flex items-start gap-2.5 bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-medium rounded-xl px-4 py-3"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div data-login-item>
                  <label
                    htmlFor="username"
                    className="block text-xs font-semibold text-gray-300 mb-1.5"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      id="username"
                      type="text"
                      required
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Masukkan username"
                      className="w-full bg-white/[0.05] border border-white/15 focus:border-[#A855F7] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div data-login-item>
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-gray-300 mb-1.5"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan password"
                      className="w-full bg-white/[0.05] border border-white/15 focus:border-[#A855F7] rounded-xl pl-11 pr-12 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword
                          ? "Sembunyikan password"
                          : "Tampilkan password"
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#C084FC] transition-colors cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#9333EA] hover:bg-[#7E22CE] hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold text-sm py-3.5 rounded-full transition-all cursor-pointer shadow-lg shadow-[#9333EA]/30"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <span>Masuk</span>
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        <p
          data-login-item
          className="mt-6 text-center text-xs text-gray-500"
        >
          © 2026 Rifaldi Valoza. Hak cipta dilindungi.
        </p>
      </div>
    </div>
  );
}