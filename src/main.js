import './style.css';

const FRAMEWORK = 'Vite Vanilla JS';

const DOC_LINKS = [
  {
    title: 'Webflow Cloud overview',
    description: 'What Webflow Cloud is and what you can build on it.',
    href: 'https://developers.webflow.com/webflow-cloud',
  },
  {
    title: 'Storing data',
    description: 'Add SQLite, Key Value, and Object Storage bindings.',
    href: 'https://developers.webflow.com/webflow-cloud/storing-data/overview',
  },
  {
    title: `${FRAMEWORK} on Webflow Cloud`,
    description: 'Build and deploy your first Webflow Cloud app.',
    href: 'https://developers.webflow.com/webflow-cloud/getting-started',
  },
  {
    title: 'Environments & deployments',
    description: 'Manage previews, production, and deployment history.',
    href: 'https://developers.webflow.com/webflow-cloud/environments',
  },
];

function webflowLogo(size = 28) {
  const h = Math.round((size * 28) / 40);
  return `
    <svg width="${size}" height="${h}" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Webflow" role="img">
      <path d="M40 0L25.95 27.6H12.75L18.6 16.2H18.35C13.5 22.55 6.3 26.75 0 27.6V16.35C0 16.35 3.95 16.1 6.3 13.65H0V0.005H11.25V9.3L11.5 9.3L16.05 0H24.55L23.65 8.15L25.2 8.15L29.25 0H40Z" fill="url(#wf-mark)" />
      <defs>
        <linearGradient id="wf-mark" x1="0" y1="0" x2="40" y2="28" gradientUnits="userSpaceOnUse">
          <stop stop-color="#4353FF" />
          <stop offset="1" stop-color="#146EF5" />
        </linearGradient>
      </defs>
    </svg>`;
}

function docCard({ title, description, href }) {
  return `
    <a class="wf-card" href="${href}" target="_blank" rel="noreferrer">
      <div class="wf-card-body">
        <h3 class="wf-card-title">${title}</h3>
        <p class="wf-card-desc">${description}</p>
      </div>
      <span class="wf-card-arrow" aria-hidden>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </a>`;
}

function render() {
  const app = document.getElementById('app');
  app.className = 'wf-page';
  app.innerHTML = `
    <div class="wf-glow" aria-hidden></div>

    <header class="wf-header">
      <div class="wf-brand">
        ${webflowLogo()}
        <span class="wf-brand-text">Webflow Cloud</span>
      </div>
      <nav class="wf-nav">
        <a href="https://developers.webflow.com/webflow-cloud" target="_blank" rel="noreferrer">Docs</a>
        <a href="https://github.com/Webflow-Examples" target="_blank" rel="noreferrer" class="wf-nav-ghost">GitHub</a>
      </nav>
    </header>

    <main class="wf-main">
      <section class="wf-hero">
        <p class="wf-eyebrow">Hello, world · ${FRAMEWORK}</p>
        <h1 class="wf-title">
          Your <span class="wf-gradient">${FRAMEWORK}</span> app
          <br />is live on Webflow Cloud.
        </h1>
        <p class="wf-subtitle">
          This is a minimal starter. Customize <code>src/main.js</code> and push to deploy.
        </p>
        <div class="wf-cta">
          <a class="wf-btn wf-btn-primary" href="https://developers.webflow.com/webflow-cloud/quickstart" target="_blank" rel="noreferrer">
            Read the quickstart
          </a>
          <a class="wf-btn wf-btn-ghost" href="https://github.com/Webflow-Examples/hello-world-js-app" target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
      </section>

      <section class="wf-cards" aria-label="Documentation">
        ${DOC_LINKS.map(docCard).join('')}
      </section>
    </main>

    <footer class="wf-footer">
      <span>
        Built with ${FRAMEWORK} · Deployed on
        <a href="https://webflow.com/cloud" target="_blank" rel="noreferrer">Webflow Cloud</a>
      </span>
    </footer>
  `;
}

render();
