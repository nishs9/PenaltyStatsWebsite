const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2018-09-10,DET,17,NYJ,48,6,39,2,10,1.4749999999999994,1,12,0.7889999999999999,3,17,3.2699999999999996
2018-09-16,NYJ,12,MIA,20,6,40,3,15,1.0135,2,20,2.42,1,5,0.6600000000000001
2018-09-20,CLE,21,NYJ,17,5,45,4,30,3.596799999999999,1,15,2.222,0,0,0
2018-09-30,JAX,31,NYJ,12,6,43,4,28,4.389,1,10,2.6310000000000002,1,5,0.796
2018-10-07,NYJ,34,DEN,16,3,30,1,10,0.9225000000000001,1,15,1.5839999999999999,1,5,0.7299999999999999
2018-10-14,NYJ,42,IND,34,5,34,4,28,2.832,0,0,0,1,6,1.5774999999999997
2018-10-21,NYJ,17,MIN,37,4,43,2,25,3.062,1,15,1.452,1,3,0.43800000000000017
2018-10-28,CHI,24,NYJ,10,7,35,7,35,4.0575,0,0,0,0,0,0
2018-11-04,MIA,13,NYJ,6,3,30,3,30,2.1930000000000005,0,0,0,0,0,0
2018-11-11,NYJ,10,BUF,41,0,0,0,0,0,0,0,0,0,0,0
2018-11-25,NYJ,13,NE,27,8,47,6,40,3.3053,0,0,0,2,7,5.2451
2018-12-02,TEN,26,NYJ,22,11,96,6,60,5.6543,3,26,5.0971,2,10,1.6649999999999991
2018-12-09,BUF,23,NYJ,27,5,46,1,5,0.3945000000000001,2,30,5.204,2,11,2.1853999999999996
2018-12-15,NYJ,22,HOU,29,8,55,6,45,2.7035,1,5,1.166,1,5,0.73
2018-12-23,NYJ,38,GB,44,8,98,3,25,2.0008,3,64,7.383,2,9,1.7503000000000002
2018-12-30,NE,38,NYJ,3,3,24,2,15,2.0100000000000002,0,0,0,1,9,0.7302000000000004
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,333,PA,441,88,705,54,401,39.6097,16,212,29.9481,18,92,19.7775
Averages,PF,20.8125,PA,27.5625,5.5,44.0625,3.375,25.0625,2.47560625,1.0,13.25,1.87175625,1.125,5.75,1.23609375
`;

module.exports = {csv:function(){return text;}}