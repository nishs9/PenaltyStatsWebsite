const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2019-09-08,CLE,13,TEN,43,13,130,9,90,7.2015,3,35,4.724500000000001,1,5,0.6599999999999999
2019-09-16,NYJ,3,CLE,23,6,55,2,15,1.6800000000000002,1,15,2.024,3,25,3.385
2019-09-22,CLE,13,LA,20,6,35,6,35,5.201200000000001,0,0,0,0,0,0
2019-09-29,BAL,25,CLE,40,5,40,4,35,2.7575,0,0,0,1,5,0.8620000000000001
2019-10-07,SF,31,CLE,3,5,40,4,25,2.8364000000000003,1,15,0.9809999999999999,0,0,0
2019-10-13,CLE,28,SEA,32,9,83,4,38,4.631,1,15,0.99,4,30,6.035299999999999
2019-10-27,NE,27,CLE,13,12,75,9,60,6.528487499999999,0,0,0,3,15,2.163
2019-11-03,DEN,24,CLE,19,4,30,0,0,0,1,15,1.826,3,15,2.135
2019-11-10,CLE,19,BUF,16,4,70,2,20,1.0911000000000004,2,50,3.843,0,0,0
2019-11-14,CLE,21,PIT,7,4,73,0,0,0,3,68,5.8035,1,5,0.6600000000000001
2019-11-24,CLE,41,MIA,24,7,70,3,25,2.9811999999999994,2,30,3.2779999999999996,2,15,2.7091250000000002
2019-12-01,PIT,20,CLE,13,5,34,4,23,2.4539999999999997,1,11,3.579,0,0,0
2019-12-08,CLE,27,CIN,19,5,25,4,20,2.7489999999999997,0,0,0,1,5,0.73
2019-12-15,ARI,38,CLE,24,3,36,2,15,1.3350000000000002,1,21,3.335,0,0,0
2019-12-22,CLE,15,BAL,31,7,62,4,40,4.077,1,15,2.2937999999999996,2,7,5.5085999999999995
2019-12-29,CIN,33,CLE,23,3,23,2,15,1.98,1,8,1.3639999999999999,0,0,0
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,335,PA,393,98,881,59,456,47.5033875,18,298,34.041799999999995,21,127,24.848025
Averages,PF,20.9375,PA,24.5625,6.125,55.0625,3.6875,28.5,2.96896171875,1.125,18.625,2.1276124999999997,1.3125,7.9375,1.5530015625
`;

module.exports = {csv:function(){return text;}}