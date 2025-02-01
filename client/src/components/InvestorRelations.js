import React from 'react';

function InvestorRelations() {
  return (
    <section id="investor-relations">
      <h2>Investor Relations</h2>
      <p>Download our business plan to understand how RouteLogic is poised to change the future of AI logistics.</p>
      
      <div className="investor-relations-content">
        <h3>Executive Summary</h3>
        <p>[Summarize your business plan here]</p>
        
        <h3>Value Proposition</h3>
        <p>[Describe your target market and industry trends]</p>
        
        <h3>Traction & Milestones</h3>
        <p>[Explain the AI solutions you provide]</p>
        
        <h3>Investor Relations Section</h3>
        <p>[Provide an overview of your financial outlook]</p>
      </div>
      
      <a href="/investor-deck.ppt" target="_blank" rel="noopener noreferrer" className="download-link">
        Download Investor Deck (PPT)
      </a>
    </section>
  );
}

export default BusinessPlan;

