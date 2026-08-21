import { Container } from "@/components/layout/Container";

export type LegalBlock =
  | string
  | { subhead: string }
  | { list: string[] };

export type LegalSectionData = {
  heading: string;
  blocks: LegalBlock[];
};

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (typeof block === "string") {
          return <p key={i}>{block}</p>;
        }
        if ("subhead" in block) {
          return (
            <h3 key={i} className="text-zinc-200 text-lg font-semibold pt-2">
              {block.subhead}
            </h3>
          );
        }
        return (
          <ul key={i} className="list-disc space-y-2 pl-5 marker:text-green-500">
            {block.list.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
      })}
    </>
  );
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSectionData[];
}) {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
            Legal
          </span>
          <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            {title}
          </h1>
          <p className="text-zinc-500 text-sm mt-4">Last updated: {updated}</p>
          {intro ? <p className="text-zinc-400 leading-relaxed mt-6">{intro}</p> : null}

          <div className="mt-12 space-y-10 text-zinc-400 leading-relaxed">
            {sections.map((section, i) => (
              <section key={i} className="space-y-3">
                <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                  {section.heading}
                </h2>
                <Blocks blocks={section.blocks} />
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
