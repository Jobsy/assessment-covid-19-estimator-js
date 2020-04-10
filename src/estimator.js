// const covid19ImpactEstimator = (data) => ({
//   data,
//   impact: {
//     currentlyInfected: data.reportedCases * 10,
//     infectionsByRequestedTime: data.reportedCases * 10 * 1024
//   },
//   severeImpact: {
//     currentlyInfected: data.reportedCases * 50,
//     infectionsByRequestedTime: data.reportedCases * 10 * 1024
//   }
// });
function covid19ImpactEstimator(data) {
  let currentlyInfected1 = data.reportedCases * 10;
  let currentlyInfected2 = data.reportedCases * 50;

  return {
    data,
    impact: {
      currentlyInfected: currentlyInfected1
      //   infectionsByRequestedTime: data.reportedCases * 10 * 1024
    },
    severeImpact: {
      currentlyInfected: currentlyInfected2
      //   infectionsByRequestedTime: data.reportedCases * 10 * 1024
    }
  };
}
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
