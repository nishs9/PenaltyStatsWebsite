const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2018-09-09,DEN,27,SEA,24,6,40,5,35,3.7460999999999998,0,0,0,1,5,0.6599999999999999
2018-09-17,CHI,24,SEA,17,5,37,2,14,1.5045000000000002,1,15,0.929,2,8,0.8770000000000002
2018-09-23,SEA,24,DAL,13,5,42,2,15,2.0100000000000002,1,15,4.3535,2,12,3.706899999999999
2018-09-30,ARI,17,SEA,20,8,57,5,30,4.5200000000000005,1,17,4.3748,2,10,1.46
2018-10-07,SEA,31,LA,33,6,40,2,15,1.6799999999999995,2,15,5.539,2,10,1.4025
2018-10-14,LV,3,SEA,27,7,59,5,39,3.4375,1,15,0.18900000000000006,1,5,0.015000000000000124
2018-10-28,DET,14,SEA,28,5,106,2,20,1.665,3,86,6.220000000000001,0,0,0
2018-11-04,SEA,17,LAC,25,8,68,8,68,7.582300000000001,0,0,0,0,0,0
2018-11-11,LA,36,SEA,31,5,41,5,41,3.9272,0,0,0,0,0,0
2018-11-15,SEA,27,GB,24,6,30,6,30,3.257,0,0,0,0,0,0
2018-11-25,CAR,27,SEA,30,4,36,1,5,0.6749999999999998,3,31,6.864899999999999,0,0,0
2018-12-02,SEA,43,SF,16,8,80,6,50,4.486,2,30,3.8120000000000007,0,0,0
2018-12-10,SEA,21,MIN,7,3,35,1,15,1.9800000000000002,2,20,2.9322500000000002,0,0,0
2018-12-16,SF,26,SEA,23,9,93,5,45,5.19975,2,30,4.08,2,18,2.158
2018-12-23,SEA,38,KC,31,3,20,3,20,2.4090000000000003,0,0,0,0,0,0
2018-12-30,SEA,27,ARI,24,1,10,1,10,0.6600000000000001,0,0,0,0,0,0
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,428,PA,347,89,794,59,452,48.73934999999999,18,274,39.29445,12,68,10.279399999999999
Averages,PF,26.75,PA,21.6875,5.5625,49.625,3.6875,28.25,3.046209374999999,1.125,17.125,2.455903125,0.75,4.25,0.6424624999999999
`;

module.exports = {csv:function(){return text;}}