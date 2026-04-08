import { Hero } from "@/components/landing/Hero";
import { LeadForm } from "@/components/landing/LeadForm";
import { SectionReveal } from "@/components/landing/SectionReveal";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-full flex-col">
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:border focus:border-paper/20 focus:bg-anthracite focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        Aller au contenu
      </a>
      <SiteHeader />
      <Hero />

      <main className="relative z-10 flex flex-1 flex-col px-5 pb-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-14 lg:max-w-4xl lg:gap-20">
          <SectionReveal delay={0.05}>
            <p className="max-w-2xl text-base leading-relaxed text-paper/85 sm:text-lg">
              L&apos;intelligence artificielle, entre les mains d&apos;experts
              créatifs, n&apos;est pas une menace pour la qualité — c&apos;est
              un multiplicateur de talent.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <p className="max-w-2xl border-l border-paper/10 pl-5 text-sm leading-relaxed text-paper/70 sm:pl-6 sm:text-base">
              Notre mission est de rendre accessible à toute entreprise
              Genevoise une production publicitaire visuellement irréprochable,
              sans délais et les coûts d&apos;une production traditionnelle.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="glass-panel max-w-xl rounded-sm p-6 sm:p-8">
              <h2 className="mb-5 font-display text-xs font-semibold tracking-[0.28em] text-acid">
                ACCÈS ANTICIPÉ
              </h2>
              <p className="mb-6 text-sm text-paper/65">
                Laissez votre e-mail — nous vous prévenons au lancement.
              </p>
              <LeadForm />
            </div>
          </SectionReveal>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
