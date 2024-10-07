import React, { useState } from 'react';

interface CreatedPaymentLinkProps {
  url: string;
}

const CreatedPaymentLink: React.FC<CreatedPaymentLinkProps> = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Payment Link Created:</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={url}
          readOnly
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        Open in new tab
      </a>
    </div>
  );
};

export default CreatedPaymentLink;
