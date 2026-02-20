
function delay(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

export async function loader() {
  await delay(3000)
  return null
}

export default function Test() {
  return (
    <div className="test-page">
      <style>{`
        .test-page {
          --ink: #0f172a;
          --muted: #475569;
          --accent: #ff6b00;
          --accent-2: #00c2a8;
          --paper: #fff7e6;
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 48px 20px;
          background:
            radial-gradient(1200px 600px at 10% -10%, #ffe7c2 0%, transparent 60%),
            radial-gradient(900px 500px at 110% 10%, #d7fff4 0%, transparent 55%),
            repeating-linear-gradient(135deg, rgba(15, 23, 42, 0.03) 0 10px, transparent 10px 20px),
            var(--paper);
          color: var(--ink);
          font-family: "Space Grotesk", "IBM Plex Sans", "Segoe UI", sans-serif;
        }

        .test-card {
          width: min(980px, 100%);
          border: 2px solid #111827;
          background: white;
          box-shadow: 12px 12px 0 #111827;
          padding: 28px;
          display: grid;
          gap: 20px;
        }

        .test-hero {
          display: grid;
          gap: 12px;
        }

        .test-title {
          font-size: clamp(28px, 4vw, 44px);
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0;
        }

        .test-subtitle {
          font-size: 16px;
          color: var(--muted);
          margin: 0;
          max-width: 60ch;
        }

        .test-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }

        .test-panel {
          border: 1px solid #e2e8f0;
          padding: 16px;
          background: #f8fafc;
          display: grid;
          gap: 10px;
        }

        .test-panel h3 {
          margin: 0;
          font-size: 14px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .test-panel p {
          margin: 0;
          font-size: 14px;
          color: var(--muted);
        }

        .test-left {
          grid-column: span 7;
          display: grid;
          gap: 12px;
        }

        .test-right {
          grid-column: span 5;
          display: grid;
          gap: 12px;
        }

        .test-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn {
          border: 2px solid #111827;
          background: #111827;
          color: white;
          padding: 10px 16px;
          font-size: 14px;
          cursor: pointer;
        }

        .btn.secondary {
          background: white;
          color: #111827;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff0d7;
          border: 1px solid #ffd8a8;
          padding: 6px 10px;
          font-size: 12px;
        }

        .list {
          display: grid;
          gap: 8px;
        }

        .list-item {
          display: grid;
          grid-template-columns: 36px 1fr auto;
          align-items: center;
          gap: 10px;
          background: white;
          border: 1px solid #e2e8f0;
          padding: 10px;
        }

        .dot {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--accent), var(--accent-2));
        }

        .meta {
          font-size: 12px;
          color: var(--muted);
        }

        .kpi {
          display: grid;
          gap: 6px;
          background: #0f172a;
          color: white;
          padding: 14px;
        }

        .kpi strong {
          font-size: 28px;
        }

        .timeline {
          display: grid;
          gap: 8px;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 12px 1fr;
          gap: 10px;
        }

        .timeline-dot {
          width: 10px;
          height: 10px;
          margin-top: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        .test-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          border-top: 1px dashed #cbd5f5;
          padding-top: 12px;
          font-size: 12px;
          color: var(--muted);
        }

        @media (max-width: 800px) {
          .test-left,
          .test-right {
            grid-column: span 12;
          }
        }
      `}</style>

      <div className="test-card">
        <div className="test-hero">
          <div className="pill">
            <span>Live Draft</span>
            <strong>Test Route</strong>
          </div>
          <h1 className="test-title">Reactive Notes for a Focused Sprint</h1>
          <p className="test-subtitle">
            A compact dashboard concept to test layout rhythm, hierarchy, and motion
            cues before you wire data.
          </p>
          <div className="test-actions">
            <button className="btn">Start Draft</button>
            <button className="btn secondary">Open Archive</button>
          </div>
        </div>

        <div className="test-grid">
          <div className="test-left">
            <div className="test-panel">
              <h3>Quick Stack</h3>
              <div className="list">
                <div className="list-item">
                  <div className="dot" />
                  <div>
                    <div>Landing polish</div>
                    <div className="meta">ETA 2 hours</div>
                  </div>
                  <div className="meta">P1</div>
                </div>
                <div className="list-item">
                  <div className="dot" />
                  <div>
                    <div>Route docs</div>
                    <div className="meta">ETA 1 hour</div>
                  </div>
                  <div className="meta">P2</div>
                </div>
                <div className="list-item">
                  <div className="dot" />
                  <div>
                    <div>Error states</div>
                    <div className="meta">ETA 45 min</div>
                  </div>
                  <div className="meta">P3</div>
                </div>
              </div>
            </div>

            <div className="test-panel">
              <h3>Timeline</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <div>10:30 AM - Sync with Design</div>
                    <div className="meta">Confirm gradients + type scale</div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <div>1:00 PM - Build Router Draft</div>
                    <div className="meta">Hook up routes and loaders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="test-right">
            <div className="kpi">
              <span>Progress Today</span>
              <strong>72%</strong>
              <span className="meta">4 tasks cleared, 2 pending</span>
            </div>
            <div className="test-panel">
              <h3>Notes</h3>
              <p>
                Keep the UI bold and readable. Use motion only for entry and
                staggered reveals later.
              </p>
            </div>
            <div className="test-panel">
              <h3>Now Playing</h3>
              <p>
                "Neon Logistics" - ambient test loop to review spacing and
                contrast.
              </p>
            </div>
          </div>
        </div>

        <div className="test-footer">
          <span>Draft build - v0.1</span>
          <span>Ready for data binding</span>
        </div>
      </div>
    </div>
  )
}
