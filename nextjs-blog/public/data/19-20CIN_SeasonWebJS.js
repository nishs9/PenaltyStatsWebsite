const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2019-09-08,SEA,21,CIN,20,5,44,3,25,2.7921000000000005,1,15,1.05,1,4,0.7640000000000002
2019-09-15,CIN,17,SF,41,5,40,5,40,3.988,0,0,0,0,0,0
2019-09-22,BUF,21,CIN,17,4,23,2,10,0.6714999999999995,1,11,3.2255000000000003,1,2,4.8445
2019-09-30,PIT,27,CIN,3,6,50,3,15,0.7121999999999997,2,30,2.3760000000000003,1,5,0.73
2019-10-06,CIN,23,ARI,26,6,52,4,27,2.8002000000000002,2,25,4.6145,0,0,0
2019-10-13,BAL,23,CIN,17,3,20,3,20,2.6850000000000005,0,0,0,0,0,0
2019-10-20,CIN,17,JAX,27,5,35,5,35,3.9450000000000007,0,0,0,0,0,0
2019-10-27,LA,24,CIN,10,5,30,5,30,4.7903,0,0,0,0,0,0
2019-11-10,CIN,13,BAL,49,0,0,0,0,0,0,0,0,0,0,0
2019-11-17,LV,17,CIN,10,3,30,2,15,1.335,1,15,2.2439999999999998,0,0,0
2019-11-24,CIN,10,PIT,16,7,79,4,30,3.0232000000000006,3,49,5.2364999999999995,0,0,0
2019-12-01,CIN,22,NYJ,6,1,10,1,10,1.35,0,0,0,0,0,0
2019-12-08,CLE,27,CIN,19,6,70,4,50,5.4079999999999995,2,20,5.0901250000000005,0,0,0
2019-12-15,CIN,13,NE,34,3,15,2,10,0.9965000000000002,0,0,0,1,5,0.7299999999999998
2019-12-22,MIA,38,CIN,35,9,67,6,30,2.803000000000001,3,37,5.742,0,0,0
2019-12-29,CIN,33,CLE,23,2,10,1,5,0.6749999999999998,0,0,0,1,5,1.06
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,279,PA,420,70,575,50,352,37.974999999999994,15,202,29.578625,5,21,8.128499999999999
Averages,PF,17.4375,PA,26.25,4.375,35.9375,3.125,22.0,2.3734374999999996,0.9375,12.625,1.8486640625,0.3125,1.3125,0.5080312499999999
`;

module.exports = {csv:function(){return text;}}