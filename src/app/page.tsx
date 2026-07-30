import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function Home() {
  const { data: tools } = await supabase.from("tools").select("*");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center py-12 border-b border-slate-800 mb-12">
          <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            K-Media Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
            Las Mejores Herramientas de IA para Creadores
          </h1>
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Curaduría de software de inteligencia artificial para escalar tu producción de contenido, audio y video.
          </p>
        </header>

        {/* Grid de Productos desde Supabase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools && tools.length > 0 ? (
            tools.map((tool: any) => (
              <div 
                key={tool.id} 
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-medium text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40">
                        {tool.category}
                      </span>
                      <h2 className="text-2xl font-bold mt-2 text-white">{tool.name}</h2>
                    </div>
                    <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-2.5 py-1 rounded-full font-semibold">
                      ★ {tool.rating} | {tool.badge}
                    </span>
                  </div>
                  
                  <p className="text-slate-200 font-medium text-sm mb-2">{tool.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{tool.description}</p>
                </div>

                <a
                  href={tool.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-indigo-600/20"
                >
                  Probar Herramienta →
                </a>
              </div>
            ))
          ) : (
            <p className="text-slate-500 text-center col-span-2 py-12">No se encontraron productos o cargando Supabase...</p>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-slate-600 text-xs mt-16 pt-8 border-t border-slate-900">
          © 2026 K-Media Digital Lab. Todos los derechos reservados.
        </footer>

      </div>
    </main>
  );
}
