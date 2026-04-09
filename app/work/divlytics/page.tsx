export default function DivlyticsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-900">
      <h1 className="text-[24px] leading-[24px] font-medium text-black mb-6">
        AI-powered Websites (Divlytics — Sole Trader)
      </h1>

      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        Client-focused web projects built using AI-assisted workflows, practical automation, and cloud-based deployment.
      </p>

      <h2 className="text-[18px] font-medium mb-3">Overview</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        Through Divlytics (my sole trader consultancy), I worked on building and delivering websites for real-world use cases, focusing on simplicity, performance, and usability. These projects allowed me to combine AI-assisted development, cloud hosting, and practical problem-solving while working directly with business requirements.
      </p>

      <h2 className="text-[18px] font-medium mb-4">Selected Projects</h2>

      <section className="border-t border-gray-200 py-8">
        <h3 className="text-[20px] leading-[28px] font-medium text-black mb-4">
          Gangadharam Tiny House
        </h3>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Built and deployed a business website with a focus on performance and reliability.
        </p>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          The site uses a high-availability static hosting architecture on AWS (S3, CloudFront, and Route 53), providing fast content delivery and scalable infrastructure. The front-end was rapidly prototyped using no-code tools and refined using AI-assisted coding with GitHub Copilot.
        </p>

        <a
          href="https://www.tinyhousekerala.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition mb-4"
        >
          View project
        </a>

        <img
          src="/images/divlytics/tinyhouse.png"
          alt="Gangadharam Tiny House website"
          className="w-full border"
        />
      </section>

      <section className="border-t border-gray-200 py-8">
        <h3 className="text-[20px] leading-[28px] font-medium text-black mb-4">
          Zyamadhari
        </h3>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Revamped an existing website and introduced additional functionality to support business operations.
        </p>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Using AI-assisted tools, I implemented a lightweight workflow that allows users to browse products, add items to a cart, and send order details directly to the business owner via WhatsApp. This reduced friction in the ordering process without requiring a full e-commerce setup.
        </p>
        <a
          href="https://zyamadhari.in/"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition mb-4"
        >
          View project
        </a>
        <img
          src="/images/divlytics/zyamadhari.png"
          alt="Zyamadhari website"
          className="w-full border"
        />
      </section>

      <section className="border-t border-b border-gray-200 py-8 mb-8">
        <h3 className="text-[20px] leading-[28px] font-medium text-black mb-4">
          Smile Yoga
        </h3>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          Helped a small business improve its online presence and better communicate its credibility.
        </p>

        <p className="text-[17px] leading-[26px] text-[#171717] mb-4">
          The website was structured to highlight certifications, experience, and testimonials, making it easier for potential clients to understand the value offered and build trust.
        </p>

        <a
          href="https://mridulasmileyoga.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[15px] px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition mb-4"
        >
          View project
        </a>

        <img
          src="/images/divlytics/yoga.png"
          alt="Smile Yoga website"
          className="w-full border"
        />
      </section>

      <h2 className="text-[18px] font-medium mb-3">What this work involved</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>Delivering websites for real client requirements</li>
        <li>Using AI-assisted tools to accelerate development workflows</li>
        <li>Implementing practical automation for business use cases</li>
        <li>Deploying and hosting applications using AWS</li>
        <li>Translating business needs into simple, usable solutions</li>
        <li>Iterating based on real user feedback</li>
      </ul>

      <h2 className="text-[18px] font-medium mb-3">Tech & Approach</h2>
      <ul className="list-disc pl-6 mb-8 text-[17px] leading-[26px] text-[#171717]">
        <li>AWS (S3, CloudFront, Route 53) for hosting and deployment</li>
        <li>AI-assisted development using GitHub Copilot and no-code tools</li>
        <li>Lightweight automation workflows, including WhatsApp-based ordering</li>
        <li>Focus on performance, simplicity, and real-world usability</li>
      </ul>

      <h2 className="text-[18px] font-medium mb-3">Why this matters</h2>
      <p className="text-[17px] leading-[26px] text-[#171717] mb-8">
        These projects were an exploration of how quickly a functional front end can be delivered using AI-assisted tools and streamlined workflows. This allowed me to shift focus away from repetitive UI work and spend more time on what matters — system design, integrations, automation, and solving real business problems.
      </p>

      <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
        <p className="text-[16px] leading-[26px] text-[#171717]">
          Because these projects were built for real clients, the original repositories are kept private. 
          I’m always happy to talk through the implementation details, architecture, and decisions behind them.
        </p>
      </div>
    </main>
  );
}