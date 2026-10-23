const columns = [
  {
    heading: "Services",
    links: [
      {
        label: "RNA-seq Analysis",
        href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#RNA-seqanalysis",
      },
      {
        label: "DNA Variant Analysis",
        href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#DNA-variant-analysis",
      },
      {
        label: "Metagenomic Analysis",
        href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#Metagenomic-analysis",
      },
      {
        label: "Peak Calling",
        href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#Peak-calling-analysis",
      },
      {
        label: "CRISPR Analysis",
        href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#CRISPR-analysis",
      },
      {
        label: "Custom Bioinformatics",
        href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#Custom-Bioinformatics",
      },
    ],
  },
  {
    heading: "Projects",
    links: [
      {
        label: "OmiCZ / Open Science II",
        href: "https://www.eosc.cz/projekty/open-science-ii",
      },
      {
        label: "Federated EGA",
        href: "https://ega-archive.org/about/projects-and-funders/federated-ega/",
      },
      {
        label: "Genomic Data Infrastructure",
        href: "https://gdi.onemilliongenomes.eu/",
      },
      { label: "Genome of Europe", href: "https://genomeofeurope.eu/" },
    ],
  },
  {
    heading: "Community",
    links: [
      {
        label: "Seminar Series",
        href: "https://www.ceitec.eu/bioinformatics-seminar-series/",
      },
      {
        label: "Study Programme",
        href: "https://www.sci.muni.cz/en/studies/doctoral-degree-study-programme",
      },
      { label: "SeqUIa", href: "https://www.sequia.eu/en" },
      { label: "ELIXIR Czech", href: "https://www.elixir-czech.cz/" },
      { label: "EOSC CZ", href: "https://www.eosc.cz/en" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "CEITEC", href: "https://www.ceitec.eu" },
      { label: "CEITEC Genomics Core", href: "https://cfg.ceitec.cz/" },
      {
        label: "All Services",
        href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services",
      },
      { label: "Contact", href: "mailto:nicolas.blavet@ceitec.muni.cz" },
    ],
  },
];

const socials = [
  {
    label: "GitHub",
    href: "http://github.com/orgs/BioIT-CEITEC/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ceitec-bioinformatics-core-facility",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-[#39464a] relative overflow-hidden">
      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-8 pt-16 pb-10 flex flex-col md:flex-row gap-10 md:gap-12 relative z-[1]">
        {/* Left: brand + social */}
        <div className="shrink-0 w-full md:w-[180px]">
          <img
            src="/assets/images/logo.png"
            alt="BioIT Logo"
            className="w-[180px] mb-5"
          />
          <p className="text-[0.8rem] text-gray-500 leading-7 mb-7">
            Bioinformatics Core Facility at CEITEC — supporting research through
            data analysis, pipelines, and education.
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-[#39464a] hover:border-gray-500 transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={
                        l.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel={
                        l.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="text-sm text-gray-500 hover:text-[#39464a] no-underline transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-8 py-5 pb-12 flex flex-col md:flex-row md:justify-between md:items-center gap-2 relative z-[1]">
        <p className="text-[0.8rem] text-gray-400">
          &copy; {new Date().getFullYear()} CEITEC BioIT. All rights reserved.
        </p>
        <p className="text-[0.8rem] text-gray-400">
          Masaryk University, Brno, Czech Republic
        </p>
      </div>
    </footer>
  );
}
