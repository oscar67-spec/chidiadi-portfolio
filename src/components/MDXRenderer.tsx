"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MDXRendererProps {
  body: string;
}

export function MDXRenderer({ body }: MDXRendererProps) {
  return (
    <div className="article-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </div>
  );
}
