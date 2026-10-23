import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Open Science II (OmiCZ, Czech Omics Node)",
    description:
      "National project supporting the Czech implementation of the EOSC initiative and the building of the National Data Infrastructure. CEITEC contributes by developing OmiCZ, the Czech Omics Node, a FAIR repository for biological and omics data within the Bio/Health/Food thematic cluster.",
    link: "https://www.eosc.cz/projekty/open-science-ii",
    funding: "OP JAK (MEYS / EU)",
    dateStart: "Oct 2025",
    dateEnd: "Dec 2028",
    status: "in-progress",
  },
  {
    id: 2,
    title: "Federated EGA, Czech Node",
    description:
      "Setting up the Czech national node of the Federated EGA, the global network of repositories for secure discovery and controlled access to sensitive human genomic and clinical data. Part of the ELIXIR infrastructure.",
    link: "https://ega-archive.org/about/projects-and-funders/federated-ega/",
    funding: "National / EOSC CZ",
    dateStart: "Ongoing",
    dateEnd: null,
    status: "in-progress",
  },
  {
    id: 3,
    title: "Genomic Data Infrastructure (GDI)",
    description:
      "European project deploying a federated, secure infrastructure for cross-border access to genomic, phenotypic and clinical data, realising the 1+Million Genomes initiative. CEITEC is the Czech participant.",
    link: "https://gdi.onemilliongenomes.eu/",
    funding: "EUR 40M — EU Digital Europe Programme + member states",
    dateStart: "Nov 2022",
    dateEnd: "Oct 2026",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Genome of Europe (GoE)",
    description:
      "Pan-European effort to build a reference genome cohort representative of Europe's populations. CEITEC (Sarka Pospisilova) is the Czech partner, contributing whole-genome sequences of Czech samples.",
    link: "https://genomeofeurope.eu/",
    funding: "EUR 45M total (EUR 20M EU Digital Europe Programme) + member states",
    dateStart: "2024",
    dateEnd: "2028",
    status: "in-progress",
  },
  {
    id: 5,
    title: "ACGT2 — Comprehensive Genomic Testing",
    description:
      "Strategic alliance of Czech genomics groups (MUNI/CEITEC, Charles University, Palacky University, and clinical partners) advancing comprehensive genomic testing towards better, more patient-centred diagnostics.",
    link: "https://www.muni.cz/vyzkum/projekty/73125",
    funding: "OP JAK (MEYS / EU)",
    dateStart: "Jan 2025",
    dateEnd: "Dec 2028",
    status: "in-progress",
  },
  {
    id: 6,
    title: "Analysis of Czech Genomes for Theranostics (ACGT)",
    description:
      "Created the National Reference Genome Database mapping the genetic variability of the Czech population, based on whole-genome sequencing of healthy Czech individuals. The database is openly available to the professional community via e-INFRA CZ login.",
    link: "https://database.acgt.cz/",
    funding: "OP RDE (EU)",
    dateStart: null,
    dateEnd: "Jun 2023",
    status: "finished",
  },
];

const STATUS_STYLES = {
  "in-progress": {
    dot: "bg-[#21a9c0]",
    text: "text-[#21a9c0]",
    bg: "bg-[#21a9c00f]",
    label: "In Progress",
  },
  finished: {
    dot: "bg-gray-400",
    text: "text-gray-500",
    bg: "bg-gray-50",
    label: "Finished",
  },
};

function DateRange({ start, end }) {
  if (!start && !end) return null;
  if (start === "Ongoing") return <span>Ongoing</span>;
  if (!end) return <span>{start} –</span>;
  if (!start) return <span>– {end}</span>;
  return (
    <span>
      {start} – {end}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-15 mt-10 relative z-[9]">
      <div className="max-w-[960px] mx-auto px-8 mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2">
            BioIT
          </p>
          <h2>Projects</h2>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => {
            const s = STATUS_STYLES[project.status] ?? STATUS_STYLES["finished"];
            return (
              <motion.div
                key={project.id}
                className="flex flex-col border border-gray-100 rounded-xl p-6 bg-white hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              >
                {/* Status + Funding */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                  <span className="text-[0.7rem] text-gray-400 text-right leading-tight">
                    {project.funding}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[1rem] font-semibold text-[#39464a] leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[0.82rem] text-gray-500 leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Footer: dates + link */}
                <div className="flex items-center justify-between gap-2 pt-4 border-t border-gray-100">
                  <span className="text-[0.75rem] text-gray-400">
                    <DateRange start={project.dateStart} end={project.dateEnd} />
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.75rem] font-medium text-[#21a9c0] hover:text-[#39464a] transition-colors duration-200 no-underline"
                  >
                    Learn more →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
