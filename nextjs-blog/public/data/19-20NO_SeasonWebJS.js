const text = `Date,Home Team,Home Score,Away Team,Away Score,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
2019-09-09,NO,30,HOU,28,4,25,1,10,0.8409999999999999,1,5,0.4690000000000003,2,10,1.3521999999999998
2019-09-15,LA,27,NO,9,11,87,9,74,9.000499999999999,1,8,1.3765999999999998,1,5,0.9550000000000001
2019-09-22,SEA,27,NO,33,10,66,6,46,4.471500000000001,1,5,2.619,3,15,2.1289999999999996
2019-09-29,NO,12,DAL,10,9,80,6,55,5.6823500000000005,2,20,3.1899999999999995,1,5,0.6599999999999997
2019-10-06,NO,31,TB,24,4,25,2,15,1.3435000000000001,0,0,0,2,10,1.4049999999999998
2019-10-13,JAX,6,NO,13,2,20,2,20,1.4754999999999998,0,0,0,0,0,0
2019-10-20,CHI,25,NO,36,2,20,2,20,3.0389999999999997,0,0,0,0,0,0
2019-10-27,NO,31,ARI,9,2,15,2,15,1.6475,0,0,0,0,0,0
2019-11-10,NO,9,ATL,26,10,70,5,45,4.022,3,15,6.2238,2,10,1.4296999999999997
2019-11-17,TB,17,NO,34,9,76,4,35,8.3384,2,25,2.391,3,16,2.0205
2019-11-24,NO,34,CAR,31,10,95,5,39,3.634875,1,29,3.577,4,27,3.1790000000000003
2019-11-28,ATL,18,NO,26,7,102,1,10,1.3199999999999998,4,82,8.9953,2,10,1.478
2019-12-08,NO,46,SF,48,4,35,1,10,1.3199999999999998,1,14,2.9045,2,11,2.0208000000000004
2019-12-16,NO,34,IND,7,5,42,2,15,2.4802,2,20,7.152,1,7,1.0219999999999998
2019-12-22,TEN,28,NO,38,8,55,6,45,4.695,0,0,0,2,10,1.2205
2019-12-29,CAR,10,NO,42,1,29,0,0,0,1,29,2.319,0,0,0
,,Points For,,Points Against,tPEN(#),tPEN(yards),tDHP(#),tDHP(yards),tEPDHP,tDEP(#),tDEP(yards),tEPDEP,tOP(#),tOP(yards),tEPDOP
Totals,PF,458,PA,341,98,842,54,454,53.311325000000004,19,252,41.2172,25,136,18.8717
Averages,PF,28.625,PA,21.3125,6.125,52.625,3.375,28.375,3.3319578125000002,1.1875,15.75,2.576075,1.5625,8.5,1.17948125
`;

module.exports = {csv:function(){return text;}}