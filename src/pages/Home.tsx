import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div style={{ display: 'grid', gap: 12 }}>
            <h2>Choose a demo</h2>
            <div style={{ display: 'flex', gap: 12 }}>
                <Link to="/nonscalable">
                    <div style={{ padding: 16, background: '#ffdede', borderRadius: 8 }}>
                        <strong>Non-scalable</strong>
                        <div style={{ fontSize: 13, color: '#333' }}>Fetch & render everything</div>
                    </div>
                </Link>

                <Link to="/scalable">
                    <div style={{ padding: 16, background: '#def7ff', borderRadius: 8 }}>
                        <strong>Scalable</strong>
                        <div style={{ fontSize: 13, color: '#333' }}>Virtualized + lazy-loaded</div>
                    </div>
                </Link>
            </div>

            <div style={{ marginTop: 8, color: '#666' }}>
                Tip: open browser devtools and compare memory / paint / CPU while scrolling.
            </div>
        </div>
    );
}
