import { useState, useEffect, useCallback } from "react";

const publications = [
  {
    year: "2026",
    title:
      "SeqUIaSCOPE: multi-omics data integration platform for Single-patient Clinical Oncology Pathway Exploration",
    authors: "Jurásková, K; Pokorná, P; Kováč, K; Blavet, N, et al.",
    journal: "Bioinformatics",
    doi: "https://doi.org/10.1093/bioinformatics/btag630",
  },
  {
    year: "2026",
    title:
      "Molecular profiling of chemotherapy-resistant breast cancer reveals DNA methylation remodeling associated with the acquisition of paclitaxel resistance",
    authors: "Trnkova, L; Burikova, M; Soltysova, A; Ficek, A, et al.",
    journal: "ScienceDirect",
    doi: "http://dx.doi.org/10.1016/j.drup.2026.101350",
  },
  {
    year: "2026",
    title:
      "Balancing speed and precision in protein folding: a comparison of AlphaFold2, ESMFold, and OmegaFold ",
    authors: "Hysková, A; Marsálková, E; Simecek",
    journal: "Front",
    doi: "http://dx.doi.org/10.3389/fgene.2025.1715037",
  },
  {
    year: "2025",
    title:
      "Thyroid hormone receptor beta signaling is a targetable driver of prostate cancer growth",
    authors: "Aleksandra Fesiuk, Daniel Pölöske, et al.",
    journal: "Molecular Cancer ",
    doi: "https://www.ceitec.eu/thyroid-hormone-receptor-beta-signaling-is-a-targetable-driver-of-prostate-cancer-growth/p127117#:~:text=10.1186/s12943%2D025%2D02451%2D2",
  },
  {
    year: "2025",
    title:
      "Differential expression of reproduction and sex-determining genes in the gonads of genotypic and temperature-induced males of gibel carp (Carassius gibelio)",
    authors: "Jacques, F; Vetesník, L; Dyková, I; Blavet, N, et al.",
    journal: "SCIENTIFIC REPORTS",
    doi: "http://dx.doi.org/10.1038/s41598-025-27347-5",
  },
  {
    year: "2025",
    title:
      "A class III ligand oscillates between internal and terminal binding modes as it engages with the Dishevelled PDZ domain",
    authors: "Kumar, J; Micka, M; Komarek, J; Klumpler, T; Bystry, V, et al.",
    journal: "Structure",
    doi: "http://dx.doi.org/10.1016/j.str.2025.05.012",
  },
];

const HEX_SIZE = 460;
const cx = HEX_SIZE / 2;
const cy = HEX_SIZE / 2;

function hexPoints(r) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

function Hexagon({ rotation }) {
  const r = HEX_SIZE / 2 - 4;
  return (
    <svg
      width={HEX_SIZE}
      height={HEX_SIZE}
      viewBox={`0 0 ${HEX_SIZE} ${HEX_SIZE}`}
      fill="none"
      className="pub-hexagon absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <polygon points={hexPoints(r)} fill="#FFFFFF" stroke="#e5e7eb" strokeWidth="1.5" />
      <polygon points={hexPoints(r * 0.82)} fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
    </svg>
  );
}

export default function Publications() {
  const [current, setCurrent] = useState(0);
  const [rotation, setRotation] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % publications.length);
    setRotation((r) => r + 60);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + publications.length) % publications.length);
    setRotation((r) => r - 60);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section
      id="publications"
      className="px-8 py-16 overflow-hidden relative z-[99] bg-[#21a9c00a]"
    >
      <div className="max-w-[900px] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2">
              Research
            </p>
            <h2>Publications</h2>
          </div>
          <a
            href="https://www.ceitec.eu/bioinformatics-core-facility/cf284/publication"
            target="_blank"
            className="text-[0.85rem] text-gray-500 hover:text-[#39464a] no-underline border-b border-gray-300 pb-0.5 transition-colors"
          >
            View all →
          </a>
        </div>

        {/* Slider stage */}
        <div className="relative h-[380px]">
          <Hexagon rotation={rotation} />

          {/* Slides strip */}
          <div className="relative h-full overflow-hidden z-[1]">
            <div
              className="flex h-full"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="min-w-full h-full flex flex-col items-center justify-center text-center px-12"
                >
                  <span className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-gray-400">
                    {pub.journal} · {pub.year}
                  </span>
                  <h3 className="text-[1.2rem] font-semibold text-[#39464a] leading-[1.6] mt-4 mb-3 max-w-[560px]">
                    {pub.title}
                  </h3>
                  <p className="text-[0.82rem] text-gray-400 mb-7">
                    {pub.authors}
                  </p>
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-gray-500 hover:text-white no-underline border border-gray-200 hover:bg-[#39464a] hover:border-[#39464a] rounded-full px-[18px] py-1.5 transition-all duration-200"
                  >
                    Read paper →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={goPrev}
            className="w-[38px] h-[38px] rounded-full border border-gray-200 bg-transparent flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer transition-all duration-200"
          >
            ←
          </button>

          <div className="flex gap-2">
            {publications.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setRotation((r) => r + (i > current ? 60 : -60));
                  setCurrent(i);
                }}
                className="h-[7px] rounded-full border-none cursor-pointer p-0 transition-all duration-300"
                style={{
                  width: i === current ? 20 : 7,
                  background: i === current ? "#39464a" : "#d1d5db",
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-[38px] h-[38px] rounded-full border border-gray-200 bg-transparent flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer transition-all duration-200"
          >
            →
          </button>
        </div>

        <p className="text-center text-xs text-gray-300 mt-4">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(publications.length).padStart(2, "0")}
        </p>

      </div>
    </section>
  );
}
