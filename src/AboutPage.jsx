import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ padding: '24px', maxWidth: 800, margin: '0 auto', color: 'white' }}>
      <a href="./" style={{ textDecoration: 'underline' }}>← Back</a>
      <h1 style={{ marginTop: 16 }}>About Me</h1>
      <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
        I’m Asal Yazdanpanah. I study psychology and I’m interested in cognitive science,
        emotions, and building clean, reusable projects. This page is a separate route
        served as about.html.
      </p>
    </div>
  );
}
