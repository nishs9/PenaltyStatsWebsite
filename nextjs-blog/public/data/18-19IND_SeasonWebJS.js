const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2018-09-09,IND,23,CIN,34,7,91,3,30,3.0748000000000006,2,51,3.973,2,10,1.4379999999999997
2018-09-16,WAS,9,IND,21,5,21,3,12,1.411,0,0,0,2,9,1.258
2018-09-23,PHI,20,IND,16,8,55,3,20,1.6581000000000006,2,20,4.243,3,15,2.29
2018-09-30,IND,34,HOU,37,8,65,7,60,6.66095,0,0,0,1,5,0.6749999999999998
2018-10-04,NE,38,IND,24,3,30,2,15,2.3025,1,15,1.396,0,0,0
2018-10-14,NYJ,42,IND,34,8,66,7,51,4.46,1,15,1.1879999999999997,0,0,0
2018-10-21,IND,37,BUF,5,4,35,3,30,2.6699999999999995,0,0,0,1,5,0.7300000000000004
2018-10-28,LV,28,IND,42,8,57,8,57,4.746,0,0,0,0,0,0
2018-11-11,IND,29,JAX,26,5,35,3,25,2.717,0,0,0,2,10,1.005
2018-11-18,IND,38,TEN,10,4,30,2,10,1.335,1,15,2.8819999999999997,1,5,0.6749999999999998
2018-11-25,IND,27,MIA,24,5,32,4,25,2.6965,0,0,0,1,7,0.4620000000000002
2018-12-02,JAX,6,IND,0,6,65,4,35,3.3371,2,30,2.9066,0,0,0
2018-12-09,HOU,21,IND,24,6,39,2,10,1.3499999999999999,2,20,3.293,2,9,1.8401999999999994
2018-12-16,IND,23,DAL,0,5,50,4,45,6.2835,1,5,0.3900000000000001,0,0,0
2018-12-23,IND,28,NYG,27,5,24,4,19,1.4720000000000002,1,5,1.1,0,0,0
2018-12-30,TEN,17,IND,33,10,85,9,70,7.231900000000001,1,15,1.5839999999999999,0,0,0
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,433,PA,344,97,780,68,514,53.40635,14,191,22.9556,15,75,10.373199999999999
Averages,PF,27.0625,PA,21.5,6.0625,48.75,4.25,32.125,3.337896875,0.875,11.9375,1.434725,0.9375,4.6875,0.6483249999999999
`;

module.exports = {csv:function(){return text;}}