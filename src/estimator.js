// const covid19ImpactEstimator = (data) => ({
//   data,
//   impact: {
//     currentlyInfected: data.reportedCases * 10,
//     infectionsByRequestedTime: data.reportedCases * 10 * 1024
//   },
//   sevImpact: {
//     currentlyInfected: data.reportedCases * 50,
//     infectionsByRequestedTime: data.reportedCases * 10 * 1024
//   }
// });
function covid19ImpactEstimator(data) {
  let calImpCurrentlyInfected;
  let calSevImpCurrentlyInfected;
  let calImpInfectionsByRequestedTime;
  let calSevImpInfectionsByRequestedTime;

  const impCurrentlyInfected = data.reportedCases * 10;
  const sevImpCurrentlyInfected = data.reportedCases * 50;
  const impInfectionsByRequestedTime = impCurrentlyInfected * 2 ** 3;
  const sevImpInfectionsByRequestedTime = sevImpCurrentlyInfected * 2 ** 3;

  if (data.periodType === 'days') {
    calImpCurrentlyInfected = impCurrentlyInfected * (data.timeToElapse / 3);
    calSevImpCurrentlyInfected =
      sevImpCurrentlyInfected * (data.timeToElapse / 3);
    calImpInfectionsByRequestedTime =
      impInfectionsByRequestedTime * (data.timeToElapse / 3);
    calSevImpInfectionsByRequestedTime =
      sevImpInfectionsByRequestedTime * (data.timeToElapse / 3);
  }
  if (data.periodType === 'weeks') {
    calImpCurrentlyInfected = impCurrentlyInfected * 7;
    calSevImpCurrentlyInfected = sevImpCurrentlyInfected * 7;
    calImpInfectionsByRequestedTime = impInfectionsByRequestedTime * 7;
    calSevImpInfectionsByRequestedTime = sevImpInfectionsByRequestedTime * 7;
  }
  if (data.periodType === 'months') {
    calImpCurrentlyInfected = impCurrentlyInfected * 30;
    calSevImpCurrentlyInfected = sevImpCurrentlyInfected * 30;
    calImpInfectionsByRequestedTime = impInfectionsByRequestedTime * 30;
    calSevImpInfectionsByRequestedTime = sevImpInfectionsByRequestedTime * 30;
  }

  return {
    data,
    impact: {
      currentlyInfected: calImpCurrentlyInfected,
      infectionsByRequestedTime: calImpInfectionsByRequestedTime
    },
    severeImpact: {
      currentlyInfected: calSevImpCurrentlyInfected,
      infectionsByRequestedTime: calSevImpInfectionsByRequestedTime
    },
    debugger1: console.log(data),
    debugger2: console.log(data.reportedCases),
    debugger3: console.log(calImpCurrentlyInfected),
    debugger4: console.log(calImpInfectionsByRequestedTime),
    debugger5: console.log(calSevImpCurrentlyInfected),
    debugger6: console.log(calSevImpInfectionsByRequestedTime)
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
