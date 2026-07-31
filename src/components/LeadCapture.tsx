"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    const { error } = await supabase.from("subscribers").insert([{ email }]);

    if (error && error.code !== "23505") {
      setStatus("error");
      setMessage("Hubo un error al guardar tu correo. Intentalo de nuevo.");
    } else {
      setStatus("success");
      setMessage("¡Gracias por sumarte! Te enviaremos las novedades del Holding cada semana.");
      setEmail("");
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-950/80 border border-indigo-500/30 rounded-2xl p-8 my-12 text-center shadow-2xl relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30 uppercase tracking-wider">
          Comunidad K-Media
        </span>
        
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
          Sumate al Newsletter Semanal de IA
        </h2>
        
        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          Recibí en tu casilla la curaduría de nuevas herramientas auditadas, análisis de mercado y flujos de automatización para creadores. Sin humo ni spam.
        </p>

        {status === "success" ? (
          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-medium text-sm">
            ✓ {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu mejor correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/30 disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "Procesando..." : "Suscribirme"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-red-400 text-xs">{message}</p>
        )}
      </div>
    </section>
  );
}
