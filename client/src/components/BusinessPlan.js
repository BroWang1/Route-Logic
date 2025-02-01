import React from 'react';

function BusinessPlan() {
  return (
    <section id="business-plan">
      <h2>Business Plan</h2>
      <p>Download our business plan to understand how RouteLogic is poised to change the future of AI logistics.</p>
      
      <div className="business-plan-content">
        <h3>Executive Summary</h3>
        <p>[Summarize your business plan here]</p>
        
        <h3>Market Analysis</h3>
        <p>[Describe your target market and industry trends]</p>
        
        <h3>Product Offering</h3>
        <p>[Explain the AI solutions you provide]</p>
        
        <h3>Financial Projections</h3>
        <p>[Provide an overview of your financial outlook]</p>
      </div>
      
      <a href="/business-plan.pdf" target="_blank" rel="noopener noreferrer" className="download-link">
        Download Full Business Plan (PDF)
      </a>
    </section>
  );
}

export default BusinessPlan;

