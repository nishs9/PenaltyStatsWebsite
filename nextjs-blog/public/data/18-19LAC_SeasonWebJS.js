const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2018-09-09,LAC,28,KC,38,6,36,5,35,3.831,0,0,0,1,1,6.284
2018-09-16,BUF,20,LAC,31,2,10,2,10,1.6149999999999993,0,0,0,0,0,0
2018-09-23,LA,35,LAC,23,4,30,1,5,0.6749999999999998,1,15,0.9900000000000002,2,10,1.3900000000000001
2018-09-30,LAC,29,SF,27,4,39,0,0,0,2,27,2.7856,2,12,2.9459999999999993
2018-10-07,LAC,26,OAK,10,8,72,5,45,3.792,1,17,3.661,2,10,1.17
2018-10-14,CLE,14,LAC,38,6,40,5,35,2.574,0,0,0,1,5,0.6599999999999997
2018-10-21,LAC,20,TEN,19,1,5,1,5,0.32749999999999996,0,0,0,0,0,0
2018-11-04,SEA,17,LAC,25,7,69,2,10,1.427,3,49,5.084,2,10,1.005
2018-11-11,LV,6,LAC,20,3,35,2,20,1.7460000000000002,1,15,0.7919999999999998,0,0,0
2018-11-18,LAC,22,DEN,23,12,100,8,60,7.3591999999999995,3,35,3.806,1,5,0.6749999999999999
2018-11-25,LAC,45,ARI,10,4,30,2,20,2.6422999999999996,1,5,0.2519999999999998,1,5,0.675
2018-12-02,PIT,30,LAC,33,5,80,1,10,1.3200000000000003,4,70,7.398000000000001,0,0,0
2018-12-09,LAC,26,CIN,21,4,25,1,10,0.3959999999999999,2,10,6.680999999999999,1,5,0.6599999999999999
2018-12-13,KC,28,LAC,29,7,50,4,25,2.6850000000000005,1,15,1.8780000000000001,2,10,0.99
2018-12-22,LAC,10,BAL,22,8,69,7,60,7.1975,0,0,0,1,9,1.314
2018-12-30,DEN,9,LAC,23,5,41,5,41,5.048,0,0,0,0,0,0
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,428,PA,329,86,731,51,391,42.6355,19,258,33.3276,16,82,17.769
Averages,PF,26.75,PA,20.5625,5.375,45.6875,3.1875,24.4375,2.66471875,1.1875,16.125,2.082975,1.0,5.125,1.1105625
`;

module.exports = {csv:function(){return text;}}