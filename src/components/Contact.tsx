// src/components/ContactSection.tsx
import { contacts } from "@/data/contact";
import { JSX } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  linkedin: <FaLinkedinIn className="text-lg" />,
  instagram: <FaInstagram className="text-lg" />,
  github: <FaGithub className="text-lg" />,
  email: <FaEnvelope className="text-lg" />,
};

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-xl mx-auto px-4 text-center">
        {/* título */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
          Gostou do meu trabalho?
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Entre em contato ou acompanhe minhas redes sociais.
        </p>

        {/* lista de botões */}
        <div className="mt-10 space-y-4">
          {contacts.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.type === "email" ? "_self" : "_blank"}
              rel="noreferrer"
              className="
                flex items-center justify-between
                rounded-2xl bg-[#151821] border border-slate-800/80
                px-5 py-4
                text-slate-100 text-sm
                shadow-lg shadow-black/40
                hover:border-rose-400/70 hover:bg-[#181c26]
                hover:shadow-xl hover:shadow-black/60
                transition-colors transition-shadow
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-xl bg-slate-900 text-slate-100
                  "
                >
                  {iconMap[item.type]}
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
              <span className="text-sky-400 text-lg" aria-hidden>
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* botão flutuante de WhatsApp (opcional) */}
      
      <a
        href="https://wa.me/5541991012987"
        target="_blank"
        rel="noreferrer"
        className="
          fixed right-6 bottom-6
          flex h-14 w-14 items-center justify-center
          rounded-full bg-emerald-500 text-white
          shadow-xl shadow-emerald-500/50
          hover:bg-emerald-400 transition-colors
        "
      >
        <FaWhatsapp className="text-2xl" />
      </a>
     
    </section>
  );
}
