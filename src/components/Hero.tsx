import Image from "next/image";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMoodle, SiTypescript } from "react-icons/si";

const techs = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "GitHub", icon: FaGithub },
  { name: "Moodle", icon: SiMoodle },
];

export default function HeroSection() {
  return (
    <section
      className="
        min-h-screen
        flex flex-col items-center justify-center
        bg-[url(/Background_Intro.png)]
        bg-cover bg-center bg-no-repeat
        text-slate-100 px-4
    "
    >
      {/* Foto */}
      <div className="mb-8">
        <div className="w-40 h-40 rounded-full border-4 border-rose-500 overflow-hidden">
          <Image
            src="/me.jfif"
            alt="Bruno Mosko"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <p className="text-sm md:text-base mb-2 text-slate-300">
        Olá! Chamo-me <span className="text-rose-400">Bruno Mosko</span> e sou
      </p>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4">
        Desenvolvedor <span className="text-rose-400">Fullstack</span>
      </h1>

      <p className="max-w-3xl text-center text-sm md:text-base text-slate-300 mb-10">
        Transformo necessidades em aplicações reais, evolventes e funcionais.
        Desenvolvo sistemas através da minha paixão pela tecnologia,
        contribuindo com soluções inovadoras e eficazes para desafios complexos.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {techs.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-100 border border-slate-700"
          >
            <Icon className="text-lg" />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
