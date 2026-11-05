import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '', inline = false }) => {
  const renderedContent = useMemo(() => {
    if (!content) return '';

    // Regex to split by $$...$$ (display) or $...$ (inline)
    const regex = /(\$\$[\s\S]+?\$\$|\$[^\$]+?\$)/g;
    const parts = content.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const math = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, {
            displayMode: true,
            throwOnError: false
          });
          return <span key={index} dangerouslySetInnerHTML={{ __html: html }} className="my-2 block overflow-x-auto text-center" />;
        } catch {
          return <span key={index} className="font-mono text-sm">{part}</span>;
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1).trim();
        try {
          const html = katex.renderToString(math, {
            displayMode: false,
            throwOnError: false
          });
          return <span key={index} dangerouslySetInnerHTML={{ __html: html }} className="inline-block px-0.5" />;
        } catch {
          return <span key={index} className="font-mono text-sm">{part}</span>;
        }
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  }, [content]);

  if (inline) {
    return <span className={className}>{renderedContent}</span>;
  }

  return <div className={className}>{renderedContent}</div>;
};
