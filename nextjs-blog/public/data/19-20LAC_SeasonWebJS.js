const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2019-09-08,LAC,30,IND,24,3,20,3,20,1.6500000000000004,0,0,0,0,0,0
2019-09-15,DET,13,LAC,10,6,50,4,30,4.9045,1,15,1.056,1,5,0.6599999999999999
2019-09-22,LAC,20,HOU,27,6,54,4,35,3.8953749999999996,1,14,1.1660000000000001,1,5,0.73
2019-09-29,MIA,10,LAC,30,6,61,4,46,3.3340999999999994,2,15,2.4110000000000005,0,0,0
2019-10-06,LAC,13,DEN,20,2,23,1,14,1.8768000000000002,1,9,1.2980000000000003,0,0,0
2019-10-13,LAC,17,PIT,24,6,59,2,22,2.28,2,27,3.0336,2,10,1.3900000000000001
2019-10-20,TEN,23,LAC,20,4,29,3,14,1.684,1,15,5.368,0,0,0
2019-10-27,CHI,16,LAC,17,8,53,3,30,2.6861999999999995,1,7,1.166,4,16,3.7274999999999996
2019-11-03,LAC,26,GB,11,4,40,3,25,1.7551000000000005,1,15,3.54875,0,0,0
2019-11-07,LV,26,LAC,24,5,45,2,15,1.6800000000000002,2,25,1.4080000000000001,1,5,0.3340000000000001
2019-11-18,LAC,17,KC,24,8,55,5,40,4.1247,0,0,0,3,15,1.68
2019-12-01,DEN,23,LAC,20,6,67,5,30,2.9799999999999995,1,37,2.4419999999999997,0,0,0
2019-12-08,JAX,10,LAC,45,6,65,3,30,3.3,3,35,5.3536,0,0,0
2019-12-15,LAC,10,MIN,39,5,48,3,28,3.099125,1,15,3.519,1,5,0.73
2019-12-22,LAC,17,OAK,24,2,15,2,15,0.9899999999999999,0,0,0,0,0,0
2019-12-29,KC,31,LAC,21,7,35,5,25,2.6860000000000004,1,5,1.0999999999999999,1,5,1.3484999999999996
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,337,PA,345,84,719,52,419,42.9259,18,234,32.86995,14,66,10.6
Averages,PF,21.0625,PA,21.5625,5.25,44.9375,3.25,26.1875,2.68286875,1.125,14.625,2.054371875,0.875,4.125,0.6625
`;

module.exports = {csv:function(){return text;}}