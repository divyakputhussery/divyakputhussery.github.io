export default function JobMarketInsightsPipelinePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-900">

      {/* Title */}
      <h1 className="text-[24px] leading-[24px] font-medium text-black mb-6">
        Job Market Insights Pipeline
      </h1>

      {/* One-line summary */}
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        An end-to-end data pipeline that ingests job listings from the Adzuna API, transforms data using dbt, and presents interactive insights through a Streamlit dashboard.
      </p>

      {/* Project links */}
      <h2 className="text-[18px] font-medium mb-3">Project Links</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="https://github.com/divyakputhussery/job-market-insights-pipeline"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          GitHub Repository
        </a>
      </div>

      {/* Overview */}
      <h2 className="text-[18px] font-medium mb-3">Overview</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        This project builds a complete data pipeline to collect, process, store, and visualize job market data. The pipeline ingests job listings from the Adzuna API, transforms and stores them in PostgreSQL via dbt models, and presents insights through an interactive Streamlit dashboard.
      </p>
      
      {/* Tech Stack */}
      <h2 className="text-[18px] font-medium mb-3">Tech Stack</h2>
      <ul className="list-disc pl-6 mb-6 text-[17px] leading-[26px] text-[#171717]">
        <li>Python</li>
        <li>AWS S3</li>
        <li>PostgreSQL</li>
        <li>dbt</li>
        <li>Streamlit</li>
        <li>GitHub Actions</li>
      </ul>

      {/* Architecture */}
      <h2 className="text-[18px] font-medium mb-3">Architecture</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
        <strong>Data Flow:</strong> Adzuna API → Raw Data (JSON) → Data Transformation → S3 (raw + processed) → PostgreSQL (data warehouse) → dbt (staging + marts) → Streamlit Dashboard
      </p>
      <img
        src="/images/job-market/architecture.png"
        alt="Job Market Insights Pipeline Architecture"
        className="mb-8 border"
      />

      {/* Features */}
      <h2 className="text-[18px] font-medium mb-3">Features</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>Automated data ingestion from Adzuna API</li>
        <li>Data transformation and schema standardization</li>
        <li>Storage of raw and processed data in S3</li>
        <li>Structured data loading into PostgreSQL</li>
        <li>Data modeling using dbt (staging + marts)</li>
        <li>Interactive dashboard for job market insights</li>
        <li>End-to-end pipeline execution with a single script</li>
      </ul>

      {/* Sample Insights */}
      <h2 className="text-[18px] font-medium mb-3">Sample Insights</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>Total number of job listings</li>
        <li>Top hiring companies</li>
        <li>Top job locations</li>
        <li>Work type distribution (full-time, part-time, etc.)</li>
      </ul>

      {/* Key decisions */}
      <h2 className="text-[18px] font-medium mb-3">Key decisions</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>Used Adzuna API for comprehensive, real-time job market data across multiple regions.</li>
        <li>Implemented S3 as an intermediate storage layer for both raw and processed data.</li>
        <li>Adopted dbt for data transformation to ensure maintainability and reusability of models.</li>
        <li>Built interactive Streamlit dashboard for real-time exploration of job market trends.</li>
        <li>Designed for future scalability with plans to deploy PostgreSQL on AWS RDS and automate with scheduled workflows.</li>
      </ul>

    </main>
  );
}