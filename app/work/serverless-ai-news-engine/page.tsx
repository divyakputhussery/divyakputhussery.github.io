export default function ServerlessAINewsEnginePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-900">

      {/* Title */}
      <h1 className="text-[24px] leading-[24px] font-medium text-black mb-6">
        Serverless AI News Engine
      </h1>

      {/* One-line summary */}
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        A serverless AWS pipeline that collects, processes, and summarizes AI news into a structured newsletter using Amazon Bedrock.
      </p>

      {/* Overview */}
      <h2 className="text-[18px] font-medium mb-3">Overview</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        This project was built to automate the process of collecting AI news, filtering what matters, and generating a newsletter draft with minimal manual effort. The system runs on a scheduled, event-driven architecture using AWS services and produces a ready-to-review HTML output stored in S3 before delivery.
      </p>
      
      {/* Links */}
      <h2 className="text-[18px] font-medium mb-3">Links</h2>
      <ul className="list-disc pl-6 mb-6 text-[17px] leading-[26px] text-[#171717]">
        <li>
          <a
            href="https://github.com/divyakputhussery/serverless-ai-news-engine"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            GitHub Repository
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@divlytics/building-a-serverless-ai-news-engine-on-aws-with-bedrock-46dbfa8bd31a"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Medium Article
          </a>
        </li>
      </ul>

      {/* Architecture */}
      <h2 className="text-[18px] font-medium mb-3">Architecture</h2>
      <img
        src="/images/architecture.png"
        alt="Serverless AI News Engine Architecture"
        className="mb-8 border"
      />

      {/* How it works */}
      <h2 className="text-[18px] font-medium mb-3">How it works</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li><strong>Amazon EventBridge schedules the pipeline</strong> to trigger collection and processing at defined intervals.</li>
        <li><strong>Collector Lambda fetches articles from RSS feeds</strong> and extracts metadata such as title, description, source, and URL.</li>
        <li><strong>Articles are stored in DynamoDB</strong> with <code>processed = false</code>, using conditional writes for idempotency and TTL for automatic cleanup.</li>
        <li><strong>Summarizer Lambda retrieves unprocessed articles</strong> from DynamoDB for further processing.</li>
        <li><strong>Amazon Bedrock (Claude Haiku 4.5) processes the articles</strong> in batch to select key stories and generate summaries.</li>
        <li><strong>A full HTML newsletter is generated</strong> from the structured output.</li>
        <li><strong>The generated newsletter is stored in Amazon S3</strong> to enable preview and validation of the output.</li>
        <li><strong>The newsletter is sent to Kit via API</strong> as a draft broadcast using securely managed credentials.</li>
        <li><strong>Articles are marked as processed in DynamoDB</strong> to prevent reprocessing in subsequent runs.</li>
      </ul>

      {/* Key decisions */}
      <h2 className="text-[18px] font-medium mb-3">Key decisions</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>Separated collection and processing into independent Lambda functions for better control and testability.</li>
        <li>Used DynamoDB for state tracking and idempotent ingestion.</li>
        <li>Processed articles in batches to improve context and efficiency of LLM output.</li>
        <li>Stored generated output in S3 to preview results independently of the delivery platform.</li>
        <li>Designed the system to remain flexible and platform-agnostic for different newsletter providers.</li>
      </ul>

    </main>
  );
}