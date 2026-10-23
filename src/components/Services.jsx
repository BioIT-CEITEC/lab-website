import { useState, useRef } from "react";

const services = [
  {
    title: "RNA-seq Analysis",
    short: "Gene expression & transcriptomics",
    image:
      "https://ceitec-web-prod.fra1.digitaloceanspaces.com/thumbs/63192-pix-rnaseq-330x230-c8.jpeg",
    href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#RNA-seqanalysis",
  },
  {
    title: "DNA Variant Analysis",
    short: "SNP, indel & CNV calling",
    image:
      "https://ceitec-web-prod.fra1.digitaloceanspaces.com/thumbs/63193-pix-variant-330x230-c8.jpeg",
    href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#DNA-variant-analysis",
  },
  {
    title: "Metagenomic Analysis",
    short: "16S microbiome studies",
    image:
      "https://ceitec-web-prod.fra1.digitaloceanspaces.com/thumbs/63200-pix-metagenomics-330x230-c8.jpeg",
    href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#Metagenomic-analysis",
  },
  {
    title: "Peak Calling",
    short: "ChIP-seq · CUT&RUN · CLIP-seq",
    image:
      "https://ceitec-web-prod.fra1.digitaloceanspaces.com/thumbs/63208-pix-peakcalling-330x230-c8.png",
    href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#Peak-calling-analysis",
  },
  {
    title: "CRISPR Analysis",
    short: "Genome-wide knockout screens",
    image:
      "https://ceitec-web-prod.fra1.digitaloceanspaces.com/thumbs/63195-pix-crispr-330x230-c8.jpeg",
    href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#CRISPR-analysis",
  },
  {
    title: "Reference Assembly",
    short: "De-novo & guided assembly",
    image:
      "https://ceitec-web-prod.fra1.digitaloceanspaces.com/thumbs/63201-pix-assembly-330x230-c8.jpeg",
    href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#Reference-assembly",
  },
  {
    title: "Custom Bioinformatics",
    short: "Single-cell · Spatial · Multi-omics",
    image:
      "https://ceitec-web-prod.fra1.digitaloceanspaces.com/thumbs/63288-pix-custombioinfo1-330x230-c8.jpeg",
    href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/services#Custom-Bioinformatics",
  },
];

const GAP = 5;

export default function Services() {
  const [hovered, setHovered] = useState(null);
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.firstChild?.offsetWidth || 280;
    el.scrollBy({
      left: dir === "next" ? cardWidth + GAP : -(cardWidth + GAP),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="z-[200] relative py-20 bg-transparent overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-[960px] mx-auto px-8 mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2">
            What We Offer
          </p>
          <h2>Services</h2>
        </div>
        <div className="flex gap-2">
          {["prev", "next"].map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              className="w-[38px] h-[38px] rounded-full border border-gray-200 bg-transparent flex items-center justify-center text-gray-500 text-base cursor-pointer hover:bg-[#39464a] hover:text-white hover:border-[#39464a] transition-all duration-200"
            >
              {dir === "prev" ? "←" : "→"}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-[2] pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-[2] pointer-events-none" />

        <div
          ref={sliderRef}
          className="overflow-x-auto px-8 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max" style={{ gap: GAP }}>
            {services.map((service, i) => {
              const isHovered = hovered === i;
              return (
                <div
                  key={i}
                  className="min-w-[220px] max-w-[320px] aspect-square relative overflow-hidden cursor-pointer shrink-0"
                  style={{
                    width: "calc((100vw - 4rem - 3 * 16px) / 4)",
                    filter: hovered !== null && hovered !== i ? "blur(2px) brightness(0.75)" : "none",
                    transition: "filter 0.3s ease",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 transition-all duration-[350ms] ease-in-out"
                    style={{
                      background: isHovered
                        ? "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
                    }}
                  />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[1.05rem] font-semibold text-white leading-[1.4] mb-1">
                      {service.title}
                    </p>
                    <p className="text-[0.78rem] text-white/70 leading-[1.4] mb-3">
                      {service.short}
                    </p>
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[5px] text-[0.72rem] font-medium text-white/85 no-underline border-b border-white/35 pb-0.5"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered
                          ? "translateY(0)"
                          : "translateY(6px)",
                        transition:
                          "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
