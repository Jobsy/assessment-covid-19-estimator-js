const covid19ImpactEstimator = (data) => ({
      data: data,
      impact: {
        currentlyInfected: data.data.reportedCases * 10,
        infectionsByRequestedTime: impact.currentlyInfested * 1024
      },
      severeImpact: {
        currentlyInfested: data.data.reportedCases * 50,
        infectionsByRequestedTime: impact.currentlyInfested * 1024
      }
    };
  
});
export default covid19ImpactEstimator;

// {
//     region: {
//       name: 'Africa',
//       avgAge: 19.7,
//       avgDailyIncomeInUSD: 1,
//       avgDailyIncomePopulation: 0.75
//     },
//     reportedCases: 1294,
//     population: 8300519,
//     totalHospitalBeds: 184315,
//     timeToElapse: 59,
//     periodType: 'days'
//   }
