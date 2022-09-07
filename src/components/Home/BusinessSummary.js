import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
             <div className='text-center py-7 mb-5'>
            <h2 className='text-5xl text-bold uppercase'>All summary</h2>
        <ul className="steps steps-vertical text-2xl text-bold">
            <li className="step step-primary mt-7">EXECUTIVE SUMMARY</li>
            <li className="step step-primary ">DESCRIPTION OF BUSINESS</li>
            <li className="step step-primary">SALES AND MARKETING</li>
            <li className="step step-primary">COMPETITION</li>
            <li className="step step-primary">MANAGEMENT</li>
            <li className="step step-primary">FUNDING REQUIREMENTS</li>
            <li className="step step-primary">FINANCIAL PROJECTIONS</li>
        </ul>
        </div>

       <div className='text-center mb-8 px-5'>
       <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

  <div className="stat">
    <div className="stat-title">Annual revenue</div>
    <div className="stat-value">1,200K</div>
    <div className="stat-desc">↘︎ 98 (18%)</div>
  </div>

  <div className="stat">
    <div className="stat-title">Reviews</div>
    <div className="stat-value">10K</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

  <div className="stat">
    <div className="stat-title"> Tools</div>
    <div className="stat-value">1,200K</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
       </div>
        </div>
    );
};

export default BusinessSummary;