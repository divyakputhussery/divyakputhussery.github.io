# AWS + AI Portfolio Site

Personal portfolio website built with Next.js to showcase AI, data, automation, and cloud projects.

## Highlights

- Recruiter-friendly portfolio listing with clear project summaries
- Tech stack badges on each project card for quick scanning
- Prominent project links on work pages (GitHub, demo, article)
- Detailed case-study style project pages with architecture and decisions

## Featured Projects

### 1. RAG Document Assistant
- PDF question-answering app using Retrieval-Augmented Generation
- Stack: Python, Streamlit, LangChain, FAISS, OpenAI, Docker

### 2. Job Market Insights Pipeline
- End-to-end data pipeline from API ingestion to dashboard insights
- Stack: Python, PostgreSQL, dbt, Streamlit, AWS S3

### 3. Serverless AI News Engine
- Serverless content pipeline for AI news summarization and newsletter generation
- Stack: AWS Lambda, DynamoDB, Amazon Bedrock, EventBridge, S3

### 4. AI Automation and Intelligent Workflows
- Applied automation projects for lead qualification and conversational workflows
- Stack: Make, Voiceflow, AI prompts, workflow integrations

### 5. AI-powered Websites (Divlytics)
- Client-focused web delivery with AI-assisted workflows and AWS hosting
- Stack: Next.js, React, TypeScript, AWS (S3, CloudFront, Route 53)

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- ESLint

## Project Structure

```text
app/
	portfolio/page.tsx
	work/
		automation-workflows/page.tsx
		divlytics/page.tsx
		job-market-insights/page.tsx
		rag-document-assistant/page.tsx
		serverless-ai-news-engine/page.tsx
public/images/
```

## Run Locally

Install dependencies and start development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run lint checks

## Deployment

This site can be deployed on Vercel or any platform that supports Next.js.

## Author

Divya K P

