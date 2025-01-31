import React from "react";

function BusinessPlan() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Business Plan</h1>
      <iframe
        src="/business-plan.pdf"
        className="w-full h-screen"
        title="Business Plan"
      ></iframe>
    </div>
  );
}

export default BusinessPlan;
