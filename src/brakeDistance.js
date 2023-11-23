var ss = [
	["null",0,20,40,60,70,80,90],
	[-60,0,72,147,299,438,559,681],	
	[-50,0,66,135,261,377,501,586],
	[-40,0,44,100,194,335,464,492],
	[-30,0,38,84,174,257,326,418],
	[-20,0,34,77,154,226,275,354],
	[-10,0,32,68,134,196,241,318],
	[0,0,28,60,124,162,226,282],
	[10,0,20,57,111,153,196,255],
	[20,0,19,52,104,144,190,230],
	[30,0,18,50,100,138,177,211],
	[40,0,17,48,95,128,166,198],
	[50,0,15,39,91,120,159,191],
	[60,0,13,37,88,114,154,189]
];
var sp = [
	["null",0,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90],
	[-60,0,19,23,35,50,65,85,110,145,170,205,245,285,330,375,425,475,530],
	[-50,0,18,22,32,45,60,80,100,130,155,185,220,255,290,330,375,420,465],
	[-40,0,16,20,30,40,55,75,95,115,140,170,195,230,265,305,345,395,450],
	[-30,0,15,18,27,37,50,65,80,100,125,150,175,205,235,270,310,355,405],
	[-20,0,14,17,25,34,45,58,72,90,110,130,155,180,210,240,275,315,360],
	[-10,0,13,16,23,32,42,53,65,80,95,115,135,160,185,215,245,280,320],
	[0,0,12,15,22,30,40,50,60,75,90,105,125,145,165,190,220,265,295],
	[10,0,12,14,20,27,35,45,55,70,85,100,115,135,155,180,205,235,265],
	[20,0,11,14,18,23,31,40,50,65,80,95,110,125,145,170,195,220,245],
	[30,0,11,13,17,22,30,38,48,60,70,85,100,120,140,160,180,200,220],
	[40,0,10,13,17,21,29,37,45,55,65,80,95,110,130,150,170,190,210],
	[50,0,6,11,16,20,28,36,53,53,63,78,93,105,125,145,165,185,205],
	[60,0,6,10,15,19,27,35,41,52,62,75,92,100,120,140,160,180,200]
];

function sUkl(v, u) {
	return Interpolizer(u, v, ss).result;
}

function arsFull(v, uklon1, uklon2, sPer) {
	var epk = sARS(v, uklon1, uklon2, sPer);
	var sP = (v / 3.6) * 4.125;
	var s = epk + sP;
	return 1.1 * s;
}

function sARS(v, uklon1, uklon2, sPer) {
    if (uklon1 != uklon2) {
        var sP = (v / 3.6) * 4.125;
        var sPerEnd = sPer + trainHalf;
        sPerEnd -= sP;
        if (sP < sPer + trainHalf)
            var epk = sEPK(v, uklon1, uklon2, sPerEnd);
        else
            var epk = sUkl(v, uklon2);
    }
    else
        epk = sUkl(v, uklon1);
    return epk;
}

function ars(x,v) {
    
}