const COL1 = [
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-01.jpeg`,
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-02.jpeg`,
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-03.jpeg`,
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-04.jpeg`,
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-05.jpeg`,
];

const COL2 = [
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-06.jpeg`,
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-07.jpeg`,
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-08.jpeg`,
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-09.jpeg`,
  `${import.meta.env.BASE_URL}assets/images/community/bioinformatics-community-01.jpeg`,
];

const TRACK1 = [...COL1, ...COL1];
const TRACK2 = [...COL2, ...COL2];

export default function Community() {
  return (
    <section className="bg-white py-20 px-8" id="community">
      {/* Layout: text left, slider right — stacks on mobile */}
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-stretch gap-8 md:gap-12 overflow-hidden">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center py-4 md:py-12 md:px-8">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2">
            Our Community
          </p>
          <h2 className="mb-6 max-w-[560px]">
            Where Bioinformatics Meets Collaboration
          </h2>
          <p className="text-[1.05rem] leading-7 text-gray-600 max-w-[520px] font-light">
            We are a growing network of researchers, developers, and scientists
            united by a passion for genomics and computational biology. From
            RNA-seq pipelines to CRISPR analysis, our community shares
            knowledge, tools, and discoveries that push the boundaries of life
            science research.
          </p>
          <p className="text-[0.9rem] leading-6 text-gray-500 max-w-[520px] mt-4">
            Interested in joining? Just drop Nic a message and he'll get you added.
          </p>
          {/* Nicolas contact card */}
          <a
            href="mailto:nicolas.blavet@ceitec.muni.cz?subject=Join%20the%20BioIT%20Community"
            className="relative mt-8 self-start z-[9999] no-underline block w-fit group"
          >
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.07)] group-hover:shadow-[0_6px_30px_rgba(141,201,95,0.18)] group-hover:border-[#8dc95f]/30 transition-all duration-200 min-w-[260px]">
              {/* Avatar with green ring */}
              <div className="relative shrink-0">
                <div className="relative w-11 h-11 rounded-full p-[2.5px] bg-gradient-to-br from-[#8dc95f] to-[#21a9c0]">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/nicolas-blavet.png`}
                    alt="Nicolas Blavet"
                    className="w-full h-full rounded-full object-cover block"
                  />
                </div>
                {/* Green online dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#8dc95f] border-2 border-white" />
              </div>
              {/* Text */}
              <div>
                <p className="text-[0.82rem] text-[#39464a] font-semibold leading-none mb-1">Nicolas Blavet</p>
                <p className="text-[0.72rem] text-gray-400 leading-none">I'll be happy to add you!</p>
              </div>
              {/* Email icon badge */}
              <div className="ml-2 w-7 h-7 rounded-full bg-[#f0faf4] group-hover:bg-[#8dc95f] flex items-center justify-center shrink-0 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#8dc95f] group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Slider */}
        <div className="w-full md:w-[40%] h-[340px] md:h-[600px] shrink-0 flex gap-3 overflow-hidden items-start relative">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[2] pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[2] pointer-events-none" />

          {/* Column 1 — scrolls upward */}
          <div className="flex-1 overflow-hidden h-full">
            <div
              className="flex flex-col gap-3"
              style={{
                animation: "marqueeUp 35s linear infinite",
                willChange: "transform",
              }}
            >
              {TRACK1.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Community"
                  className="w-full block object-cover shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Column 2 — scrolls downward */}
          <div className="flex-1 overflow-hidden h-full">
            <div
              className="flex flex-col gap-3"
              style={{
                animation: "marqueeDown 35s linear infinite",
                willChange: "transform",
              }}
            >
              {TRACK2.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Community"
                  className="w-full block object-cover shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
