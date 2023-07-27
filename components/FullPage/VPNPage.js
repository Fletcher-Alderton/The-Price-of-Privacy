import VPNTable from "../Tables/VPNTable";
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function VPNPage() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Fetch the content of VPNmd file from the public folder
    fetch('/VPNinfo.md')
      .then((response) => response.text())
      .then((data) => setMarkdown(data))
      .catch((error) => console.error('Error fetching VPNmd:', error));
  }, []);
  

  // Custom renderer for headings to preserve heading tags
  const headingRenderer = (props) => {
    return React.createElement(`h${props.level}`, {}, props.children);
  };

  return (
    <>
      <div>
        {/* Render the Markdown content with custom renderer */}
        <ReactMarkdown
          children={markdown}
          skipHtml={false}
          escapeHtml={false}
          components={{ h1: headingRenderer, h2: headingRenderer, h3: headingRenderer, h4: headingRenderer, h5: headingRenderer, h6: headingRenderer }}
        />
      </div>
      <div className="flex-1 z-0 mt-10 ">
        <VPNTable />
      </div>
    </>
  );
}
