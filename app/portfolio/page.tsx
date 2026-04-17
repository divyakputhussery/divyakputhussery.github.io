import Link from "next/link";

const portfolioItems = [
  {
    title: "RAG Document Assistant",
    description: "Developed a Retrieval-Augmented Generation (RAG) document assistant to enable contextual question answering over custom data, demonstrating practical integration of LLMs into backend systems.",
    techStack: ["Python", "LLMs", "RAG", "Vector Databases"],
    href: "/work/rag-document-assistant",
  },
  {
    title: "Job Market Insights Pipeline",
    description: "A data pipeline that aggregates, analyzes, and delivers actionable insights from job market trends using cloud infrastructure and data analytics.",
    techStack: ["Python", "PostgreSQL", "dbt", "Streamlit", "AWS S3"],
    href: "/work/job-market-insights",
  },
  {
    title: "Serverless AI News Engine",
    description: "Built a serverless AI-driven content pipeline that collects, processes, and summarises articles using AWS Lambda, DynamoDB, and LLM integration. Designed for scalability and automation, the system demonstrates how AI workflows can be integrated into production-style backend services.",
    techStack: ["AWS Lambda", "DynamoDB", "Amazon Bedrock", "Event-driven Architecture"],
    href: "/work/serverless-ai-news-engine",
  },
  {
    title: "AI-powered Websites (Divlytics)",
    description: "Client-focused web projects built using AI-assisted workflows and cloud-based deployment.",
    techStack: ["Next.js", "React", "TypeScript", "AWS"],
    href: "/work/divlytics",
  },
  {
    title: "AI Automation & Intelligent Workflows",
    description: "AI-driven workflows designed to automate real-world tasks, improve decision-making, and reduce manual effort.",
    techStack: ["Python", "LLMs", "Automation", "Cloud Services"],
    href: "/work/automation-workflows",
  }
  
];

export default function PortfolioPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-900">
      <h1 className="text-[64px] leading-none font-medium text-black mb-12 text-center">
        Portfolio
      </h1>

      <div className="border-t border-gray-200">
        {portfolioItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block border-b border-gray-200 py-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-[24px] leading-[30px] font-medium text-black mb-4 flex items-center gap-2">
                  {item.title}
                </h2>

                <p className="text-[17px] leading-[26px] text-[#171717] font-normal mb-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-100 text-gray-700 text-[13px] font-medium px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1 text-[15px] font-semibold text-sky-700 group-hover:text-sky-900 transition-colors duration-200">
                  Read more
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}