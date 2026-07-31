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

    if (error) {
      if (error.code === "23505") {
        // Error de duplicado en Postgres
        setStatus("success");
        setMessage("¡Ya estabas registrado! Te mantendremos al tanto de las novedades.");
      } else {
        setStatus("error");
        setMessage("Hubo un error al guardar tu mail. Intentalo de nuevo.");
      }
    } else {
      setStatus("success");
      setMessage("¡Suscripción exitosa! Te enviamos los mejores recursos a tu casilla.");
      setEmail("");
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-950/80 border border-indigo-500/30 rounded-2xl p-8 my-12 text-center shadow-2xl relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30 uppercase tracking-wider">
          Recursos Exclusivos
        </span>
        
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
          Descargá la Guía de 50 Prompts Pro para IA
        </h2>
        
        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          Recibí semanalmente nuevas herramientas auditadas, flujos de trabajo de automatización y prompts listos para usar.
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
              {status === "loading" ? "Guardando..." : "Obtener Acceso"}
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
