export default function RagDocumentAssistantPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-900">
      {/* Title */}
      <h1 className="text-[24px] leading-[24px] font-medium text-black mb-6">
        RAG Document Assistant
      </h1>

      {/* One-line summary */}
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        AI-powered document Q&A app that uses Retrieval-Augmented Generation (RAG) to answer questions from uploaded PDFs.
      </p>

      {/* Project links */}
      <h2 className="text-[18px] font-medium mb-3">Project Links</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="https://github.com/divyakputhussery/rag-document-assistant"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          GitHub Repository
        </a>
        <a
          href="https://rag-document-assistant-dysnwr4pxpnxsuv2pcpbpe.streamlit.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Live Demo
        </a>
        <a
          href="https://medium.com/@divlytics/creating-a-custom-document-assistant-with-rag-fa52b29a03a3"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Medium Article
        </a>
      </div>

      {/* Overview */}
      <h2 className="text-[18px] font-medium mb-3">Overview</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        This project lets users upload a PDF and ask natural language questions about its content. The app performs semantic retrieval over document chunks and sends the most relevant context to the LLM, producing grounded answers with source attribution.
      </p>

      {/* Features */}
      <h2 className="text-[18px] font-medium mb-3">Features</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>Upload a PDF and ask questions in plain language.</li>
        <li>Semantic search with vector embeddings for relevant retrieval.</li>
        <li>Context-aware answers with source attribution.</li>
      </ul>

      {/* Tech stack */}
      <h2 className="text-[18px] font-medium mb-3">Tech Stack</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        Python, Streamlit, LangChain, FAISS, OpenAI, Docker.
      </p>

      {/* Demo */}
      <h2 className="text-[18px] font-medium mb-3">Demo</h2>
      <img
        src="/images/rag/dashboard.png"
        alt="RAG Document Assistant dashboard"
        className="mb-8 border rounded-md"
      />

      {/* How it works */}
      <h2 className="text-[18px] font-medium mb-3">How it works</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>
          <strong>PDF ingestion:</strong> the uploaded PDF is parsed and split into text chunks.
        </li>
        <li>
          <strong>Embedding:</strong> chunks are converted to vectors and indexed in FAISS.
        </li>
        <li>
          <strong>Retrieval:</strong> user queries are embedded and matched against the vector store.
        </li>
        <li>
          <strong>Generation:</strong> retrieved context is passed to the LLM for grounded answers.
        </li>
      </ul>

      {/* Run locally */}
      <h2 className="text-[18px] font-medium mb-3">Run locally</h2>
      <pre className="mb-8 p-4 bg-[#f5f5f5] rounded-md overflow-x-auto text-[15px] leading-[24px] text-[#171717]">
        <code>{`pip install -r requirements.txt
streamlit run app.py`}</code>
      </pre>

      {/* Docker */}
      <h2 className="text-[18px] font-medium mb-3">Docker</h2>
      <pre className="mb-8 p-4 bg-[#f5f5f5] rounded-md overflow-x-auto text-[15px] leading-[24px] text-[#171717]">
        <code>{`docker build -t rag-app .
docker run -p 8501:8501 rag-app`}</code>
      </pre>

    </main>
  );
}