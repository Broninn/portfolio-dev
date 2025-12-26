import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-[#0b0c10]">
      <div className="max-w-6xl mx-auto px-4">
        {/* título */}
        <div className="text-center mb-12">
          <p className="text-sm text-rose-400 mb-1">Meu trabalho</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
            Veja os projetos em destaque
          </h2>
        </div>

        {/* grid de cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                group
                flex flex-col
                rounded-3xl bg-[#151821] border border-slate-800/70
                shadow-lg shadow-black/40
                overflow-hidden
                hover:-translate-y-2 hover:shadow-xl hover:shadow-black/60
              "
            >
              {/* imagem com moldura */}
              <div className="relative bg-slate-900/80 px-6 pt-6 pb-3">
                <div className="rounded-3xl bg-slate-800/80 p-3">
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* conteúdo */}
              <div className="flex flex-col flex-1 px-6 pb-6 text-center">
                <h3 className="mt-4 text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>

                {/* tech pills */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-800/80 text-[11px] uppercase tracking-wide text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* link */}
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      text-sm font-medium text-rose-400
                      hover:text-rose-300
                    "
                  >
                    Ver projeto
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
