const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2019-09-08,TB,17,SF,31,11,87,7,46,4.7051,3,36,3.9274999999999993,1,5,0.66
2019-09-15,CIN,17,SF,41,8,65,5,40,3.7790000000000004,1,15,1.671,2,10,1.4049999999999998
2019-09-22,SF,24,PIT,20,5,71,4,39,4.4595,1,32,2.112,0,0,0
2019-10-07,SF,31,CLE,3,4,34,4,34,4.63875,0,0,0,0,0,0
2019-10-13,LA,7,SF,20,2,20,2,20,3.8815000000000004,0,0,0,0,0,0
2019-10-20,WAS,0,SF,9,2,20,1,5,0.33000000000000007,0,0,0,1,15,0.99
2019-10-27,SF,51,CAR,13,2,15,2,15,2.423,0,0,0,0,0,0
2019-10-31,ARI,25,SF,28,7,65,5,35,9.104,2,30,3.5451,0,0,0
2019-11-11,SF,24,SEA,27,3,20,3,20,2.7266,0,0,0,0,0,0
2019-11-17,SF,37,ARI,26,9,117,7,86,10.641599999999999,2,31,6.956799999999999,0,0,0
2019-11-24,SF,37,GB,8,9,78,3,27,2.4187,2,22,3.7894999999999994,4,29,8.4115
2019-12-01,BAL,20,SF,17,5,49,3,20,1.5314999999999999,2,29,3.3099,0,0,0
2019-12-08,NO,46,SF,48,7,46,5,35,3.9619999999999997,2,11,2.535799999999999,0,0,0
2019-12-15,SF,22,ATL,29,7,67,4,25,2.604,2,37,4.611,1,5,0.73
2019-12-21,SF,34,LA,31,2,11,1,5,0.675,1,6,4.3858,0,0,0
2019-12-29,SEA,21,SF,26,5,42,3,23,2.6654999999999998,1,14,1.9020000000000001,1,5,0.73
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,480,PA,310,88,807,59,475,60.54574999999999,19,263,38.746399999999994,10,69,12.9265
Averages,PF,30.0,PA,19.375,5.5,50.4375,3.6875,29.6875,3.7841093749999994,1.1875,16.4375,2.4216499999999996,0.625,4.3125,0.80790625
`;

module.exports = {csv:function(){return text;}}