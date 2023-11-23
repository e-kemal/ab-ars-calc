var lines = lines || {};
lines['neocrimson'] = lines['neocrimson'] || {};
lines['neocrimson']['1'] = [
  {
    name: 'Братеево',
    trackLength: 1054,
    arsDrawBreakpoint: 7,
    arsAllSteps: true,
    tStay: 25,
    K: 1.5,
    curves: {
      0: 0,
      225: -60,
      240: 0,
      249: 158,
      516: 0,
      789: 68,
      896: 0
    },
    slopes: {
      0: 0,
    },
    modes: {
      0: 'H',
      43: '0',
      379: 'H',
      475: '0',
      993: 'T'
    },
    joints: [
      { x: 66, name: '19', limit: 70 },
      { x: 103.5, name: '19а', limit: 70, later: { 70: 2 } },
      { x: 141, name: '21', limit: 70, later: { 70: 2 } },
      // { x: 460.5 - 12.5 - 175 - 87.5, name: '21аа', limit: 70, later: { 70: 1 } },
      { x: 460.5 - 12.5 - 150 - 37.5 - 7, name: '21а', limit: 70, later: { 70: 1 } },
      { x: 460.5 - 25 + 6, name: '23', limit: 70, later: { 70: 1 } },
      { x: 610.5 + 6, name: '25', limit: 70 },
      { x: 698 + 6, name: '25а', limit: 70, later: { 40: 1 } },
      { x: 785.5 + 6, name: '27', limit: 70 },
      { x: 860.5 + 6, name: '29', limit: 60 },
      { x: 923 + 6, name: '31', limit: 60 },
      // { x: 973-6.5+12.5, name: '33', limit: 60 },
      { x: 1010.5 - 6.5, name: '33', limit: 60 },
      { x: 1048 + 6, name: '35', limit: 60 },
      { x: 1098 + 6, name: '37', limit: 40, /*vks: 'min'*/ },
      { x: 1154, name: '37а', limit: 0 },
      { x: 1179, name: '39', limit: 0 },
      { x: 1179 + 40 - 6 + 3.5, name: '41', limit: 0 },
      { x: 1179 + 40 - 6 + 50 - 12.5 + 12.5, name: '43', limit: 0 },
      { x: 1179 + 40 - 6 + 90 - 2.5 + 12.5, name: '45', limit: 0 },
      { x: 1179 + 40 - 6 + 90 + 60, name: '45а', limit: 0 },
    ],
    signals: [
      { joint: '19', name: 'БР-21', lenses: 'WYYGRw', autostop: 1, guard: 35, y: '21а', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '21', name: '23', lenses: 'YYGR', autostop: 1, guard: 70, y: '23', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '21а', name: '25', lenses: 'YYGR', autostop: 1, guard: 80, y: '25а', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '23', name: '27', lenses: 'YYGR', autostop: 1, guard: 80, y: '27', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '25', name: '29', lenses: 'YYGR', autostop: 1, guard: 70, y: '29', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '25а', name: '31', lenses: 'YYGR', autostop: 1, guard: 65, y: '31', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '27', name: '33', lenses: 'YYGR', autostop: 1, guard: 60, y: '33', yg: 'NEXT_y', g: 'NEXT_g' },
      { joint: '29', name: '35', lenses: 'YYGR', autostop: 1, guard: 60, y: '35', g: 'NEXT_yg' },
      { joint: '31', name: 'ПН-37', lenses: 'YYGRw', autostop: 1, guard: 60, yg: '37а', shift: 13 },
      { joint: '37', name: 'ПН-39', lenses: 'x', autostop: 1, guard: 35 },
      { joint: '43', name: '41', lenses: 'x', autostop: 1 },
      { joint: '45', name: '43', lenses: 'x', autostop: 1 },
      { joint: '45а', name: '45', lenses: 'x', autostop: 1 },
    ],
  },
  {
    name: 'Пионерская',
    trackLength: 680,
    arsDrawBreakpoint: 9,
    arsAllSteps: true,
    tStay: 25,
    K: 1.5,
    curves: {
      0: 0,
      93: 68,
      200: 0,
      518: 60,
      613: 0,
    },
    slopes: {
      0: 0,
      298: -35,
      515: 0,
    },
    modes: {
      0: 'H',
      60: '0',
      600: 'T'
    },
    joints: [
      { x: 50, name: '37', limit: 60 },
      { x: 50 + 50, name: '37а', limit: 60, later: { 40: 2 } },
      { x: 50 + 50 + 25, name: '39', limit: 60, later: { 40: 1 } },
      { x: 120 + 40 + 2.5, name: '39а', limit: 60 },
      { x: 697.5 - 25 - 25 - 62.5 - 62.5 - 75 - 75 - 62.5 - 50 - 50, name: '39б', limit: 60 },
      { x: 697.5 - 25 - 25 - 62.5 - 62.5 - 75 - 75 - 62.5 - 50, name: '39в', limit: 60 },
      { x: 697.5 - 25 - 25 - 62.5 - 62.5 - 75 - 75 - 62.5, name: '39г', limit: 60 },
      { x: 697.5 - 25 - 25 - 62.5 - 62.5 - 75 - 75, name: '39д', limit: 60 },
      { x: 697.5 - 25 - 25 - 62.5 - 62.5 - 75, name: '41', limit: 60 },
      { x: 697.5 - 25 - 25 - 62.5 - 62.5, name: '43', limit: 60 },
      { x: 697.5 - 25 - 25 - 62.5, name: '45', limit: 60 },
      { x: 697.5 - 25 - 25, name: '47', limit: 60 },
      { x: 697.5 - 25, name: '47с', limit: 60, vks: 'min' },
      { x: 697.5, name: '49', limit: 60 },
      { x: 710, name: '49с', limit: 40, vks: 'min' },
      { x: 680 + 55, name: '51', limit: 40 },
      { x: 785 - 12.5, name: '53', limit: 0, },
      { x: 680 + 155, name: '55', limit: 0, },
      { x: 935 - 25, name: '55а', limit: 0 },
      { x: 1010 + 25, name: '49а', limit: 0 },
    ],
    signals: [
      { joint: '37', name: 'ПН-39', lenses: 'WYY-GR-w', autostop: 3, guard: 35, y: '39д', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '39б', name: '41', lenses: 'YYGR', autostop: 1, guard: 60, y: '41', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '39в', name: '43', lenses: 'YYGR', autostop: 1, guard: 60, y: '43', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '39г', name: '45', lenses: 'YYGR', autostop: 1, guard: 60, y: '45', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '39д', name: '47', lenses: 'YYGR', autostop: 1, guard: 60, y: '47с', yg: 'NEXT_y', g: 'NEXT_yg', shift: 13 },
      { joint: '41', name: '49', lenses: 'YYGR', autostop: 1, guard: 60, y: '49с', yg: 'NEXT_y', g: 'NEXT_g' },
      { joint: '43', name: '51', lenses: 'YYGR', autostop: 1, guard: 60, y: '51', g: 'NEXT_yg' },
      { joint: '45', name: '53', lenses: 'YYGR', autostop: 1, guard: 60, yg: '53', left: true },
      { joint: '51', name: '55', lenses: 'x', autostop: 3, guard: 35 },
      { joint: '55а', name: '57', lenses: 'x', left: true },
    ],
  },
  {
    name: 'Литиевая',
    trackLength: 1227,
    arsAllSteps: true,
    arsDrawBreakpoint: 8,
    tStay: 25,
    K: 1,
    curves: {
      0: 0,
      103: 160,
      356: 0,
      422: 600,
      445: -600,
      468: 0,
      566: 158,
      815: 0,
      1024: 58,
      1136: -60,
      1159: 0

    },
    slopes: {
      0: 0,
      820: -35,
      1019: 0,

    },
    modes: {
      0: 'H',
      140: '0',
      1140: 'T',
    },
    joints: [
      { x: 80, name: '53', limit: 70 },
      { x: 80 + 37.5, name: '53а', limit: 70, later: { 40: 1 } },
      { x: 80 + 37.5 + 62.5, name: '55', limit: 70 },
      { x: 80 + 37.5 + 62.5 + 75, name: '55а', limit: 80 },
      { x: 80 + 37.5 + 62.5 + 75 + 125, name: '55б', limit: 80, later: {} },
      { x: 530 - 25, name: '57', limit: 80, later: { 80: 3 } },
      { x: 530 - 25 + 125, name: '57а', limit: 80, later: { 70: 2 } },
      { x: 914.5 - 125 - 25, name: '59', limit: 80, later: { 60: 1 } },
      { x: 1039.5 - 12.5 - 25 - 75, name: '59а', limit: 80, later: { 60: 1 } },
      { x: 1039.5 - 25, name: '59б', limit: 70, later: { 40: 1 } },
      { x: 1102 - 12.5, name: '61', limit: 70 },
      { x: 1164.5 - 12.5, name: '63', limit: 70 },
      { x: 1164.5 - 12.5 + 50, name: '65', limit: 60 },
      { x: 1227 + 12.5, name: '67', limit: 60 },
      { x: 1227 + 62.5, name: '69', limit: 40 },
      { x: 1352 - 25, name: '71', limit: 0 },
      { x: 1427 - 25 - 25, name: '71а', limit: 0 },
      { x: 1427 - 25 - 25 + 37.5 + 25, name: '71аа', limit: 0 },
      { x: 1502 - 37.5 + 37.5 - 12.5, name: '71б', limit: 0 },
      { x: 1502 + 12.5 + 122, name: '71в', limit: 0 },
    ],
    signals: [
      { joint: '53', name: '55', lenses: 'YYGR', autostop: 3, guard: 35, y: '55б', g: 'NEXT_y' },
      { joint: '55а', name: '57', lenses: 'YYGR', autostop: 3, guard: 80, y: '57а', g: 'NEXT_y', left: true },
      { joint: '57', name: '59', lenses: 'YYGR', autostop: 3, guard: 80, y: '59б', g: 'NEXT_y' },
      { joint: '59', name: '61', lenses: 'YYGR', autostop: 1, guard: 80, y: '61', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '59а', name: '63', lenses: 'YYGR', autostop: 1, guard: 70, y: '63', yg: 'NEXT_y', g: 'NEXT_g' },
      { joint: '59б', name: '65', lenses: 'YYGR', autostop: 1, guard: 70, y: '65', yg: 'NEXT_y', g: 'NEXT_g' },
      { joint: '61', name: '67', lenses: 'YYGR', autostop: 1, guard: 65, y: '67', g: 'NEXT_yg', left: true },
      { joint: '63', name: '69', lenses: 'YYGR', autostop: 1, guard: 60, yg: '69', left: true },
      { joint: '69', name: 'МТ-71', lenses: 'x', autostop: 3, guard: 35 },
      // { joint: '65в', name: 'МТ-73', lenses: 'x', autostop: 3, guard: 35 },
      //47: 80
    ]
  },
  {
    name: 'Метростроителей',
    trackLength: 1476,
    arsAllSteps: true,
    arsDrawBreakpoint: 12,
    tStay: 25,
    K: 1,
    curves: {
      0: 0,
      69: -60,
      92: 60,
      115: 0,
      284: 78,
      408: 0,
      725: 158,
      974: 0,
      1149: 158,
      1398: 0
    },
    slopes: {
      0: 0,
      120: -35,
      280: 0,
      979: -35,
      1144: 0

    },
    modes: {
      0: 'H',
      140: '0',
      1371: 'T'
    },
    joints: [
      { x: 62.5, name: '69', limit: 70 },
      { x: 62.5 + 50, name: '71', limit: 70, later: { 40: 1, 60: 4, 70: 4 } },
      { x: 62.5 + 50 + 50, name: '71а', limit: 70, later: { 60: 3, 70: 6 } },
      { x: 62.5 + 50 + 50 + 62.5, name: '71б', limit: 70, later: { 60: 3, 70: 4 } },
      { x: 287.5 - 12.5, name: '71в', limit: 70, later: { 60: 1, 70: 3 } },
      { x: 409.5, name: '71г', limit: 70, later: { 40: 1, 60: 3 } },
      { x: 447, name: '71д', limit: 70, later: { 60: 2 } },
      { x: 484.5, name: '71е', limit: 70, later: { 60: 1 } },
      { x: 484.5 + 64, name: '71ж', limit: 70, later: { 40: 2 } },
      { x: 648.5, name: '73', limit: 80 },
      { x: 686, name: '73а', limit: 80 },
      { x: 723.5, name: '73б', limit: 80 },
      { x: 988.5 - 100, name: '75', limit: 80 },
      { x: 1113.5 - 75, name: '75а', limit: 70, later: { 70: 2 } },
      { x: 1238.5, name: '75б', limit: 70, later: { 70: 1 } },
      { x: 1338.5, name: '77', limit: 70 },
      { x: 1413.5, name: '79', limit: 70 },
      { x: 1488.5, name: '81', limit: 60 },
      { x: 1538.5, name: '83', limit: 40 },
      { x: 1601 + 12.5, name: '85', limit: 0 },
      { x: 1663.5, name: '85а', limit: 0 },
      { x: 1726 - 12.5, name: '85б', limit: 0 },
    ],
    signals: [
      { joint: '69', name: 'МТ-71', lenses: 'WYY-GRw', autostop: 3, guard: 35, y: '71ж', g: 'NEXT_g' },
      { joint: '71г', name: 'МТ-73', lenses: 'WyY-YG-Rw', autostop: 3, guard: 80, g: '73б' },
      { joint: '73', name: 'МТ-75', lenses: 'WYY-GRw', autostop: 3, guard: 80, y: '75б', g: 'NEXT_y' },
      { joint: '75а', name: '77', lenses: 'YY-GR', autostop: 1, guard: 80, y: '77', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '75б', name: '79', lenses: 'YY-GR', autostop: 1, guard: 70, y: '79', yg: 'NEXT_y', g: 'NEXT_g' },
      { joint: '77', name: '81', lenses: 'YY-GR', autostop: 1, guard: 65, y: '81', g: 'NEXT_yg' },
      { joint: '79', name: '83', lenses: 'YY-GR', autostop: 1, guard: 60, yg: '83' },
      { joint: '83', name: '85', lenses: 'x', autostop: 3, guard: 35 },
      { joint: '85б', name: '87', lenses: 'x', autostop: 3 },
    ]
  },
  {
    name: 'Славутич',
    trackLength: 1985,
    arsAllSteps: true,
    arsDrawBreakpoint: 8,
    tStay: 25,
    K: 1,
    curves: {
      0: 0,
      273: 88,
      540: -60,
      568: 0,
      841: -160,
      1095: 0,
      1134: -160,
      1387: 0,
      1655: -160,
      1909: 0,


    },
    slopes: {
      0: 0,
      102: -35,
      268: 0,
      1412: -35,
      1636: 0,


    },
    modes: {
      0: 'H',
      102: '0',
      562: 'H',
      662: '0',
      1874: 'T'
    },
    joints: [
      { x: 62.5, name: '83', limit: 0 },
      { x: 62.5 + 75, name: '85', limit: 70 },
      { x: 62.5 + 75 + 50, name: '85а', limit: 70 },
      { x: 62.5 + 75 + 50 + 50, name: '85б', limit: 70 },
      { x: 62.5 + 75 + 50 + 50 + 150, name: '85в', limit: 70 },
      { x: 522.5, name: '87', limit: 70 },
      { x: 522.5 + 150, name: '87а', limit: 70 },
      { x: 822.5, name: '89б', limit: 80 },
      { x: 822.5 + 150, name: '89в', limit: 80 },
      { x: 1072.5 + 50, name: '91', limit: 80 },
      { x: 1072.5 + 50 + 125, name: '91а', limit: 80 },
      { x: 1272.5 + 112.5, name: '93', limit: 80 },
      { x: 1497.5 + 25 + 50, name: '93а', limit: 80, later: { 80: 1 } },
      { x: 1660 - 75 + 37.5 + 75, name: '95', limit: 80 },
      { x: 1747.5 - 25 + 50 + 12.5, name: '95а', limit: 70 },
      { x: 1835 - 12.5 + 25 + 12.5, name: '97', limit: 70, later: { 70: 1 } },
      { x: 1922.5, name: '99', limit: 70 },
      { x: 1985 - 25, name: '101', limit: 60 },
      { x: 1985 - 25 + 37.5 + 12.5, name: '103', limit: 60 },
      { x: 2047.5, name: '105', limit: 40 },
      { x: 2047.5 + 50, name: '107', limit: 0 },
      { x: 2047.5 + 50 + 50, name: '107а', limit: 0 },
      { x: 2047.5 + 50 + 50 + 37.5, name: '107б', limit: 0 },
      { x: 2047.5 + 50 + 62.5 + 75, name: '107в', limit: 0 },
      { x: 2047.5 + 50 + 62.5 + 62.5 + 50 + 75, name: '107д', limit: 0 },
    ],
    signals: [
      { joint: '83', name: '85', lenses: 'YGR', autostop: 3, guard: 80, g: '85в' },
      { joint: '85б', name: '87', lenses: 'YY-GR', autostop: 3, guard: 80, y: '87а', g: 'NEXT_g' },
      { joint: '87', name: '89', lenses: 'YGR', autostop: 3, guard: 80, g: '89в' },
      { joint: '89б', name: '91', lenses: 'YY-GR', autostop: 3, guard: 80, y: '91а', g: 'NEXT_y' },
      { joint: '91', name: '93', lenses: 'YY-GR', autostop: 3, guard: 80, y: '93а', g: 'NEXT_y' },
      { joint: '93', name: '95', lenses: 'YY-GR', autostop: 1, guard: 80, y: '95а', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '93а', name: 'ФН-97', lenses: 'YYGRw', autostop: 1, guard: 80, y: '97', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '95', name: 'ФН-99', lenses: 'YYGRw', autostop: 1, guard: 75, y: '99', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '95а', name: 'ФН-101', lenses: 'YYGRw', autostop: 1, guard: 70, y: '101', yg: 'NEXT_y', g: 'NEXT_g' },
      { joint: '97', name: 'ФН-103', lenses: 'YYGRw', autostop: 1, guard: 65, y: '103', g: 'NEXT_yg' },
      { joint: '99', name: 'ФН-105', lenses: 'YYGRw', autostop: 1, guard: 60, yg: '105' },
      { joint: '105', name: 'ФН-107', lenses: 'x', autostop: 3, guard: 35 },
      { joint: '107в', name: 'СТ-109', lenses: 'x', autostop: 3 },
    ]
  },
  {
    name: 'Фауна',
    trackLength: 1784,
    arsAllSteps: true,
    tStay: 25,
    K: 1,
    arsDrawBreakpoint: 8,
    curves: {
      0: 0,
      244: -80,
      371: 0,
      643: -160,
      897: 0,
      1150: -160,
      1404: 0,
      1443: -160,
      1696: 0,
    },
    slopes: {
      0: 0,
      393: -35,
      618: 0,
    },
    modes: {
      0: 'H',
      140: '0',
      1725: 'T'
    },
    joints: [
      { x: 62.5, name: '105', limit: 70 },
      { x: 62.5 + 50, name: '107', limit: 70, later: { 40: 1 } },
      { x: 62.5 + 50 + 50, name: '107а', limit: 70 },
      { x: 62.5 + 50 + 50 + 37.5, name: '107б', limit: 70 },
      { x: 62.5 + 50 + 50 + 75 + 12.5, name: '107в', limit: 70 },
      { x: 62.5 + 50 + 50 + 75 + 37.5 + 200 - 25, name: '107г', limit: 80, later: { 80: 2 } },
      { x: 612.5 + 12.5 + 25, name: '109', limit: 80, later: { 70: 2, 80: 2 } },
      { x: 612.5 + 200, name: '109а', limit: 80 },
      { x: 989.5 - 2, name: '109б', limit: 80, later: { 70: 1, 80: 2 } },
      { x: 1027, name: '111', limit: 80, later: { 70: 1, 80: 2 } },
      { x: 1027 + 150, name: '111а', limit: 80, later: { 70: 1, 80: 3 } },
      { x: 1702 - 75 - 75 - 75 - 150, name: '113', limit: 80, later: { 60: 1, 70: 2, 80: 3 } },
      { x: 1702 - 75 - 75 - 75 - 25, name: '113а', limit: 80, later: { 60: 1, 70: 2, 80: 1 } },
      { x: 1702 - 75 - 75, name: '115', limit: 80, later: { 60: 1 } },
      { x: 1702 - 75, name: '115а', limit: 70 },
      { x: 1702, name: '117', limit: 70 },
      { x: 1764.5 - 12.5, name: '119', limit: 60 },
      { x: 1764.5 - 12.5 + 25, name: '121', limit: 60 },
      { x: 1784 + 43, name: '123', limit: 60 },
      { x: 1877, name: '125', limit: 0 },
      { x: 1877 + 75 + 12.5, name: '125а', limit: 0 },
      { x: 1877 + 175, name: '125б', limit: 0 },
    ],
    signals: [
      { joint: '105', name: 'ФН-107', lenses: 'WYG-Rw', autostop: 3, guard: 80, g: '107г' },
      { joint: '107в', name: 'СТ-109', lenses: 'YG-Rw', autostop: 1, guard: 80, g: '109б' },
      { joint: '109', name: 'СТ-111', lenses: 'YYGRw', autostop: 1, guard: 80, y: '111а', g: 'NEXT_y' },
      { joint: '109б', name: 'СТ-113', lenses: 'YYGRw', autostop: 1, guard: 80, y: '113а', g: 'NEXT_y' },
      { joint: '113', name: 'СТ-115', lenses: 'YYGRw', autostop: 1, guard: 80, y: '115а', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '113а', name: 'СТ-117', lenses: 'YYGRw', autostop: 1, guard: 80, y: '117', yg: 'NEXT_y', g: 'NEXT_yg' },
      { joint: '115', name: 'СТ-119', lenses: 'YYGRw', autostop: 1, guard: 70, y: '119', yg: 'NEXT_y', g: 'NEXT_g' },
      { joint: '115а', name: 'СТ-121', lenses: 'YYGRw', autostop: 1, guard: 65, y: '121', g: 'NEXT_yg' },
      { joint: '117', name: 'СТ-123', lenses: 'YYGRw', autostop: 1, guard: 60, yg: '123' },
      { joint: '123', name: 'СТ-125', lenses: 'x', autostop: 1, guard: 35 },
    ]
  },
  {
    name: 'Сталинская',
    trackLength: 300,
    arsAllSteps: true,
    tStay: 25,
    K: 1,
    curves: {
      0: 0,

    },
    slopes: {
      0: 0,

    },
    modes: {
      0: 'H',
      40: '0',
      214: 'T'

    },
    joints: [

    ],
    signals: [
    ]
  },
]