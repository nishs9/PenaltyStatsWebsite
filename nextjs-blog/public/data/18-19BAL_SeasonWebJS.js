const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2018-09-09,BAL,47,BUF,3,8,73,6,45,4.9792,1,8,3.8983,1,20,2.928
2018-09-13,CIN,34,BAL,23,7,51,3,15,1.6507999999999998,3,31,5.7546,1,5,0.47750000000000004
2018-09-23,BAL,27,DEN,14,6,47,2,10,1.6150000000000002,1,17,1.1219999999999999,3,20,1.692
2018-09-30,PIT,14,BAL,26,4,30,3,25,1.8479999999999999,0,0,0,1,5,0.79
2018-10-07,CLE,12,BAL,9,2,25,1,10,0.5280000000000002,1,15,2.9286,0,0,0
2018-10-14,TEN,0,BAL,21,8,50,7,45,4.8222000000000005,1,5,0.968,0,0,0
2018-10-21,BAL,23,NO,24,3,34,1,5,0.33,1,25,2.726,1,4,0.7640000000000002
2018-10-28,CAR,36,BAL,21,8,63,6,45,4.335312500000001,1,13,1.5433,1,5,0.9102999999999994
2018-11-04,BAL,16,PIT,23,3,15,2,10,1.569,0,0,0,1,5,0.6749999999999998
2018-11-18,BAL,24,CIN,21,5,31,4,30,3.7760999999999996,0,0,0,1,1,0.19099999999999984
2018-11-25,BAL,34,OAK,17,3,20,3,20,3.4189999999999996,0,0,0,0,0,0
2018-12-02,ATL,16,BAL,26,8,83,2,15,2.01,5,63,6.5,1,5,0.73
2018-12-09,KC,27,BAL,24,9,97,4,35,3.7681000000000004,4,57,11.305299999999999,1,5,0.6750000000000003
2018-12-16,BAL,20,TB,12,7,65,5,52,6.072000000000001,0,0,0,2,13,2.800125
2018-12-22,LAC,10,BAL,22,3,35,1,5,0.33000000000000007,2,30,2.75,0,0,0
2018-12-30,BAL,26,CLE,24,10,65,7,50,3.9431999999999996,0,0,0,3,15,2.1414
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,389,PA,287,94,784,57,417,44.995912499999996,20,264,39.4961,17,103,14.774324999999997
Averages,PF,24.3125,PA,17.9375,5.875,49.0,3.5625,26.0625,2.8122445312499997,1.25,16.5,2.46850625,1.0625,6.4375,0.9233953124999998
`;

module.exports = {csv:function(){return text;}}