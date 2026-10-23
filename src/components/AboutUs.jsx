export default function AboutUs() {
  return (
    <section id="about" className="py-15 bg-[#fafafa] mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          About CEITEC Bioinformatics Core Facility
        </h2>
        <p className="text-md text-gray-700 font-thin  mx-auto [text-align-last:center] text-justify">
          The Bioinformatics Core Facility offers support, education, and
          infrastructure services to researchers within CEITEC. Our main focus
          is the analysis of Next Generation Sequencing data and the development
          of infrastructure (pipelines, web-servers) that facilitate this
          analysis. The facility currently maintains standardized data
          processing pipelines for basic NGS analyses (e.g. expression analysis,
          variant calling, protein-DNA/RNA interactions). Detailed downstream
          analysis of results, and assistance with interpretation of results can
          be provided upon request. As part of our educational responsibilities,
          we provide training and consultations in bioinformatics, biostatistics
          and experimental design. We organize and collaborate on various
          workshops and bioinformatics courses. Bioinformatics support is
          available for both basic research and clinical research.
        </p>
      </div>
    </section>
  );
}
