export default function AutomationWorkflowsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-900">
      <h1 className="text-[24px] leading-[24px] font-medium text-black mb-6">
        AI Automation & Intelligent Workflows
      </h1>

      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        AI-driven workflows designed to streamline business processes, integrate systems, and reduce manual effort through practical, real-world use cases.
      </p>

      <h2 className="text-[18px] font-medium mb-3">Project Links</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="https://medium.com/@divlytics/how-to-qualify-high-value-leads-automatically-a05f9c5ebb5f"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Lead Qualification Case Study
        </a>
        <a
          href="https://www.youtube.com/watch?v=20sebSvPO8U&t=112s"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Lead Qualification Demo
        </a>
        <a
          href="https://medium.com/@divlytics/when-words-are-hard-to-find-building-wispello-with-voiceflow-make-and-a-little-christmas-magic-9e99fc88706a"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Wispello Story
        </a>
      </div>

      <h2 className="text-[18px] font-medium mb-3">Overview</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
          These projects were built as proof-of-concepts to explore how quickly meaningful workflows can be created using no-code automation platforms like Make and Voiceflow. The focus was not just on building, but on understanding how AI, logic, and integrations can come together to solve real problems with minimal overhead. This exploration helped me experiment with different approaches and identify where automation and AI can deliver practical value.
      </p>

      <h2 className="text-[18px] font-medium mb-4">Selected Projects</h2>

      <section className="border-t border-gray-200 py-8">
        <h3 className="text-[20px] leading-[28px] font-medium text-black mb-4">
          Lead Qualification Automation
        </h3>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Built an automated workflow to identify and qualify high-value leads based on predefined criteria.
        </p>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          The workflow processes incoming lead data, applies filtering and qualification logic, and helps prioritise high-value opportunities. The focus was on reducing manual screening effort and creating a more consistent decision flow.
        </p>

        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href="https://medium.com/@divlytics/how-to-qualify-high-value-leads-automatically-a05f9c5ebb5f"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Read case study
          </a>

          <a
            href="https://www.youtube.com/watch?v=20sebSvPO8U&t=112s"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Watch demo
          </a>
        </div>

        <img
          src="/images/automation/leadcapture.png"
          alt="Lead qualification automation screenshot"
          className="w-full border"
        />
      </section>

      <section className="border-t border-b border-gray-200 py-8 mb-8">
        <h3 className="text-[20px] leading-[28px] font-medium text-black mb-4">
          Wispello
        </h3>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Built as an exploration of how AI can support structured thinking when users struggle to express ideas clearly.
        </p>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Wispello combines conversational flow, automation, and AI processing to capture user input and turn it into more structured, meaningful output. The project focused on how prompts, workflow design, and tool orchestration can simulate lightweight decision-support systems.
        </p>

        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href="https://medium.com/@divlytics/when-words-are-hard-to-find-building-wispello-with-voiceflow-make-and-a-little-christmas-magic-9e99fc88706a"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Read story
          </a>

          <a
            href="https://www.youtube.com/watch?v=c2B0_iVGoOQ"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Watch demo
          </a>
        </div>

        <img
          src="/images/automation/wispello.png"
          alt="Wispello workflow screenshot"
          className="w-full border"
        />
      </section>

      <h2 className="text-[18px] font-medium mb-3">What this work involved</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>Designing workflows that balance automation with control</li>
        <li>Structuring prompts for consistent and usable outputs</li>
        <li>Connecting inputs, logic, and outputs into lightweight systems</li>
        <li>Using AI as part of a workflow, not just as a standalone tool</li>
        <li>Focusing on practical value over unnecessary complexity</li>
      </ul>

      <h2 className="text-[18px] font-medium mb-3">Why this matters</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        These projects were an exploration of how AI and automation can be used in practical ways to support real tasks. They helped me think more clearly about workflow design, prompt structure, tool integration, and how to turn ideas into systems that are useful, lightweight, and easier to maintain.
      </p>
    </main>
  );
}