import { useState } from "react";

const panels = [
  {
    id: "our-team",
    label: "Our Team",
    heading: "Meet the Innovators",
    body: "A team of bioinformaticians, data scientists, and researchers dedicated to advancing NGS data analysis and bioinformatics infrastructure.",
    cta: "Meet the Team",
    href: "https://www.ceitec.eu/bioinformatics-core-facility/cf284/people",
    bg: "#ffffff",
    images: [`${import.meta.env.BASE_URL}assets/images/team.jpeg`],
  },
  {
    id: "join-us",
    label: "Join Us",
    heading: "Build the Future of Bioinformatics",
    body: "We're looking for passionate scientists and engineers to join our multidisciplinary team at CEITEC.",
    cta: "Explore Positions",
    href: "https://www.ceitec.eu/ceitec-values-diversity-and-promotes-an-inclusive-working-environment/t7",
    bg: "#f9fafb",
    images: [`${import.meta.env.BASE_URL}assets/images/hiring.jpg`],
  },
  {
    id: "location",
    label: "Location",
    heading: "CEITEC, Brno",
    body: "Central European Institute of Technology, University Campus Bohunice, Brno, Czech Republic.",
    cta: "Get Directions",
    href: "https://www.ceitec.eu/contacts/t1015",
    bg: "#f3f4f6",
    images: [`${import.meta.env.BASE_URL}assets/images/location.jpg`],
  },
];

export default function JoinTeamLocation() {
  const [active, setActive] = useState("our-team");

  return (
    <section
      id="join-team-location"
      className="flex overflow-hidden jtl-section h-[480px] border-t border-b border-gray-200"
    >
      {panels.map((panel) => {
        const isActive = active === panel.id;
        return (
          <div
            key={panel.id}
            className="relative flex overflow-hidden cursor-pointer border-r border-gray-200"
            style={{
              flex: isActive ? 3 : 1,
              transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              background: panel.bg,
            }}
            onMouseEnter={() => setActive(panel.id)}
          >
            {/* Collapsed label */}
            {!isActive && (
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap z-[1] text-gray-400 text-xs font-medium tracking-widest uppercase jtl-collapsed-label">
                {panel.label}
              </span>
            )}

            {/* Expanded content */}
            <div
              className="flex w-full h-full jtl-content jtl-inner"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.3s ease 0.1s",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {/* Left: text */}
              <div className="flex flex-col justify-end shrink-0 p-10 w-[320px]">
                <p className="text-gray-400 text-xs font-medium tracking-widest uppercase mb-4">
                  {panel.label}
                </p>
                <h3 className="text-[#39464a] font-semibold text-[1.4rem] mb-3">
                  {panel.heading}
                </h3>
                <p className="text-gray-500 text-sm leading-7 mb-8">
                  {panel.body}
                </p>
                <a
                  target="_blank"
                  href={panel.href}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-[#39464a] text-sm font-medium border-b border-gray-300 pb-0.5 self-start transition-colors"
                >
                  {panel.cta} →
                </a>
              </div>

              {/* Right: photo */}
              <div className="flex flex-col gap-3 flex-1 overflow-hidden jtl-images pt-8 pr-8 pb-8">
                {panel.images.map((src, i) => (
                  <div key={i} className="flex-1 overflow-hidden min-h-0">
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{
                        transform: isActive ? "scale(1)" : "scale(1.04)",
                        transition: "transform 0.6s ease",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
