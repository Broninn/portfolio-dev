import { skills } from "@/data/skills";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Ferramentas",
  special: "Especialidades",
};

export default function SkillsSection() {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const levelBadge = (level: string) => {
    const base =
      "inline-flex items-center rounded-full px-2 py-[2px] text-[10px] uppercase tracking-wide";
    switch (level) {
      case "avançado":
        return (
          base +
          " bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
        );
      case "intermediário":
        return base + " bg-sky-500/10 text-sky-300 border border-sky-500/40";
      default:
        return (
          base + " bg-slate-500/10 text-slate-300 border border-slate-500/40"
        );
    }
  };

  return (
    <section className="py-20 bg-[url(/Background_Intro.png)]
        bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto px-4">
        {/* título */}
        <div className="text-center mb-12">
          <p className="text-sm text-rose-400 mb-1">Minhas habilidades</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
            Stack que uso no dia a dia
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
            Foco em desenvolvimento frontend com React e Next.js, com
            experiência fullstack, automação e forte atuação em Moodle e
            infraestrutura.
          </p>
        </div>

        {/* grid de categorias */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(grouped).map(([category, items]) => (
            <div
              key={category}
              className="
                rounded-3xl bg-[#151821] border border-slate-800/80
                p-5 flex flex-col gap-3
              "
            >
              <h3 className="text-sm font-semibold text-slate-100 mb-1">
                {categoryLabels[category]}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-3 text-sm text-slate-200"
                  >
                    <span>{skill.name}</span>
                    <span className={levelBadge(skill.level)}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
