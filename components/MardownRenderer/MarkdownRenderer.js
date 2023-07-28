import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownRenderer({ filePath }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Load the Markdown file content here.
    // Make sure to adjust the file path as needed.
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data));
  }, [filePath]);

  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;

};

