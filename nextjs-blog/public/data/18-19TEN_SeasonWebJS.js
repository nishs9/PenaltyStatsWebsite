const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2018-09-09,MIA,27,TEN,20,5,48,3,28,1.8683,1,15,1.2540000000000002,1,5,0.6749999999999998
2018-09-16,TEN,20,HOU,17,5,49,3,28,3.9014999999999995,1,16,2.2220000000000004,1,5,0.33000000000000007
2018-09-23,JAX,6,TEN,9,2,15,2,15,1.1075000000000002,0,0,0,0,0,0
2018-09-30,TEN,26,PHI,23,3,23,2,10,0.869,1,13,1.263,0,0,0
2018-10-07,BUF,13,TEN,12,3,20,2,15,1.335,0,0,0,1,5,0.873
2018-10-14,TEN,0,BAL,21,3,20,2,15,2.0100000000000002,0,0,0,1,5,0.6600000000000001
2018-10-21,LAC,20,TEN,19,4,32,4,32,3.1535,0,0,0,0,0,0
2018-11-05,DAL,14,TEN,28,2,10,1,5,0.6599999999999999,0,0,0,1,5,0.73
2018-11-11,TEN,34,NE,10,4,35,3,30,1.6649999999999998,0,0,0,1,5,0.6599999999999999
2018-11-18,IND,38,TEN,10,8,112,5,47,5.327,3,65,9.252500000000001,0,0,0
2018-11-26,HOU,34,TEN,17,6,45,5,40,4.2486,1,5,0.968,0,0,0
2018-12-02,TEN,26,NYJ,22,5,50,4,40,4.2844999999999995,1,10,0.9240000000000002,0,0,0
2018-12-06,TEN,30,JAX,9,2,25,1,10,0.6599999999999997,1,15,0.4200000000000002,0,0,0
2018-12-16,NYG,0,TEN,17,2,15,1,10,0.6599999999999999,1,5,2.6390000000000002,0,0,0
2018-12-22,TEN,25,WAS,16,2,10,0,0,0,1,5,0.5279999999999999,1,5,0.6599999999999999
2018-12-30,TEN,17,IND,33,8,65,7,52,5.87925,0,0,0,1,13,1.7159999999999997
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,310,PA,303,64,574,45,377,37.629149999999996,11,149,19.4705,8,48,6.304
Averages,PF,19.375,PA,18.9375,4.0,35.875,2.8125,23.5625,2.3518218749999997,0.6875,9.3125,1.21690625,0.5,3.0,0.394
`;

module.exports = {csv:function(){return text;}}