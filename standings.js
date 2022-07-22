// Dependinces
var replace = (arr, oldVal, newVal) => (arr[arr.indexOf(oldVal)] = newVal, arr)

//Gain class
var Gain = "glg"
var Lose = "gll"
var Equal = "gle"

//Team Colors
var FerrariC = '#F91536'
var RedBullC = '#3671C6'
var MercedesC = '#6CD3BF'
var McLarenC = '#F58020'
var RomeoC = '#C92D4B'
var AlpineC = '#2293D1'
var HaasC = '#B6BABD'
var AlphatauriC = '#00293F'
var AstonC = '#156E48'
var WilliamsC = '#0093C9'

// Driver Standings
var P1 = ['Max', 'Verstappen', RedBullC, 'Red Bull Racing', 208, "0", "+0", Equal]
var P2 = ['Charles', 'Leclerc', FerrariC, 'Ferrari', 170, "GapEX", "+0", Equal]
var P3 = ['Sergio', 'Perez', RedBullC, 'Red Bull Racing', 151, "GapEX", "+0", Equal]
var P4 = ['Carlos', 'Sainz', FerrariC, 'Ferrari', 133, "GapEX", "+0", Equal]
var P5 = ['George', 'Russell', MercedesC, 'Mercedes', 128, "GapEX", "+0", Equal]
var P6 = ['Lewis', 'Hamilton', MercedesC, 'Mercedes', 109, "GapEX", "+0", Equal]
var P7 = ['Lando', 'Norris', McLarenC, 'McLaren', 64, "GapEX", "+0", Equal]
var P8 = ['Esteban', 'Ocon', AlpineC, 'Alpine', 52, "GapEX", "+0", Equal]
var P9 = ['Valtteri', 'Bottas', RomeoC, 'Alfa Romeo', 46, "GapEX", "+0", Equal]
var P10 = ['Fernando', 'Alonso', AlpineC, 'Alpine', 29, "GapEX", "+0", Equal]
var P11 = ['Kevin', 'Magnussen', HaasC, 'Haas', 22, "GapEX", "+0", Equal]
var P12 = ['Daniel', 'Riccardo', McLarenC, 'McLaren', 17, "GapEX", "+0", Equal]
var P13 = ['Peirre', 'Gasly', AlphatauriC, 'Alphatauri', 16, "GapEX", "+0", Equal]
var P14 = ['Sebastian', 'Vettel', AstonC, 'Aston Martin', 15, "GapEX", "+0", Equal]
var P15 = ['Mick', 'Schumacher', HaasC, 'Haas', 12, "GapEX", "+4", Gain]
var P16 = ['Yuki', 'Tsunoda', AlphatauriC, 'Alphatauri', 11, "GapEX", "+0", Equal]
var P17 = ['Zhou', 'Guanyu', RomeoC, 'Alfa Romeo', 5, "GapEX", "+0", Equal]
var P18 = ['Alexander', 'Albon', WilliamsC, 'Williams', 3, "GapEX", "+0", Equal]
var P19 = ['Lance', 'Stroll', AstonC, 'Aston Martin', 3, "GapEX", "+0", Equal]
var P20 = ['Nico', 'Hulkenberg', AstonC, 'Aston Martin', 0, "GapEX", "+0", Equal]
var P21 = ['Nicholas', 'Latifi', WilliamsC, 'Williams', 0, "GapEX", "+0", Equal]

// Constructor Standings
var CP1 = ['Red Bull Racing', RedBullC, 'RBPT', 359, "0", "+0", Equal]
var CP2 = ['Scudaria Ferrari ', FerrariC, 'Ferrari', 303, "GapEX", "+0", Equal]
var CP3 = ['Mercedes AMG F1', MercedesC, 'Mercedes', 237, "GapEX", "+0", Equal]
var CP4 = ['McLaren F1', McLarenC, 'Mercedes', 81, "GapEX", "+0", Equal]
var CP5 = ['Alpine', AlpineC, 'Renault', 81, "GapEX", "+0", Equal]
var CP6 = ['Alfa Romeo', RomeoC, 'Ferrari', 51, "GapEX", "+0", Equal]
var CP7 = ['Haas', HaasC, 'Ferrari', 34, "GapEX", "+0", Equal]
var CP8 = ['Alphatauri', AlphatauriC, 'RBPT', 27, "GapEX", "+0", Equal]
var CP9 = ['Aston Martin', AstonC, 'Aramc Mercedes', 18, "GapEX", "+0", Equal]
var CP10 = ['Williams Racing', WilliamsC, 'Mercedes ', 3, "GapEX", "+0", Equal]

// API Code


// Constructor Gap Calculator
var Gap = CP1[3] - CP2[3]
var RepGap = replace(CP2, "GapEX", Gap)
// P3 Gap Calc
var Gap = CP2[3] - CP3[3]
var RepGap = replace(CP3, "GapEX", Gap)
// P4 Gap Calc
var Gap = CP3[3] - CP4[3]
var RepGap = replace(CP4, "GapEX", Gap)
// P5 Gap Calc
var Gap = CP4[3] - CP5[3]
var RepGap = replace(CP5, "GapEX", Gap)
// P6 Gap Calc
var Gap = CP5[3] - CP6[3]
var RepGap = replace(CP6, "GapEX", Gap)
// P7 Gap Calc
var Gap = CP6[3] - CP7[3]
var RepGap = replace(CP7, "GapEX", Gap)
// P8 Gap Calc
var Gap = CP7[3] - CP8[3]
var RepGap = replace(CP8, "GapEX", Gap)
// P9 Gap Calc
var Gap = CP8[3] - CP9[3]
var RepGap = replace(CP9, "GapEX", Gap)
// P10 Gap Calc
var Gap = CP9[3] - CP10[3]
var RepGap = replace(CP10, "GapEX", Gap)

// Driver Gap Calculator
var Gap = P1[4] - P2[4]
var RepGap = replace(P2, "GapEX", Gap)
// P3 Gap Calc
var Gap = P2[4] - P3[4]
var RepGap = replace(P3, "GapEX", Gap)
// P4 Gap Calc
var Gap = P3[4] - P4[4]
var RepGap = replace(P4, "GapEX", Gap)
// P5 Gap Calc
var Gap = P4[4] - P5[4]
var RepGap = replace(P5, "GapEX", Gap)
// P6 Gap Calc
var Gap = P5[4] - P6[4]
var RepGap = replace(P6, "GapEX", Gap)
// P7 Gap Calc
var Gap = P6[4] - P7[4]
var RepGap = replace(P7, "GapEX", Gap)
// P8 Gap Calc
var Gap = P7[4] - P8[4]
var RepGap = replace(P8, "GapEX", Gap)
// P9 Gap Calc
var Gap = P8[4] - P9[4]
var RepGap = replace(P9, "GapEX", Gap)
// P10 Gap Calc
var Gap = P9[4] - P10[4]
var RepGap = replace(P10, "GapEX", Gap)
// P11 Gap Calc
var Gap = P10[4] - P11[4]
var RepGap = replace(P11, "GapEX", Gap)
// P12 Gap Calc
var Gap = P11[4] - P12[4]
var RepGap = replace(P12, "GapEX", Gap)
// P13 Gap Calc
var Gap = P12[4] - P13[4]
var RepGap = replace(P13, "GapEX", Gap)
// P14 Gap Calc
var Gap = P13[4] - P14[4]
var RepGap = replace(P14, "GapEX", Gap)
// P15 Gap Calc
var Gap = P14[4] - P15[4]
var RepGap = replace(P15, "GapEX", Gap)
// P16 Gap Calc
var Gap = P15[4] - P16[4]
var RepGap = replace(P16, "GapEX", Gap)
// P17 Gap Calc
var Gap = P16[4] - P17[4]
var RepGap = replace(P17, "GapEX", Gap)
// P18 Gap Calc
var Gap = P17[4] - P18[4]
var RepGap = replace(P18, "GapEX", Gap)
// P19 Gap Calc
var Gap = P18[4] - P19[4]
var RepGap = replace(P19, "GapEX", Gap)
// P20 Gap Calc
var Gap = P19[4] - P20[4]
var RepGap = replace(P20, "GapEX", Gap)
// P21 Gap Calc
var Gap = P20[4] - P21[4]
var RepGap = replace(P21, "GapEX", Gap)

// Constructor Standings Code
var p1c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">1st</span> <span class="team-border" style="background: ${CP1[1]}; color: ${CP1[1]}; border-radius: 2px;">|</span> <span class="name">${CP1[0]}</span> <span class="d-team">${CP1[2]}</span> <span class="${CP1[6]}">${CP1[5]}</span> <span class="points">${CP1[3]} PTS</span> <span class="gap">GAP: ${CP1[4]} PTS</span> </a> </div>`
var p2c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">2nd</span> <span class="team-border" style="background: ${CP2[1]}; color: ${CP2[1]}; border-radius: 2px;">|</span> <span class="name">${CP2[0]}</span> <span class="d-team">${CP2[2]}</span> <span class="${CP2[6]}">${CP2[5]}</span> <span class="points">${CP2[3]} PTS</span> <span class="gap">GAP: ${CP2[4]} PTS</span> </a> </div>`
var p3c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">3rd</span> <span class="team-border" style="background: ${CP3[1]}; color: ${CP3[1]}; border-radius: 2px;">|</span> <span class="name">${CP3[0]}</span> <span class="d-team">${CP3[2]}</span> <span class="${CP3[6]}">${CP3[5]}</span> <span class="points">${CP3[3]} PTS</span> <span class="gap">GAP: ${CP3[4]} PTS</span> </a> </div>`
var p4c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">4th</span> <span class="team-border" style="background: ${CP4[1]}; color: ${CP4[1]}; border-radius: 2px;">|</span> <span class="name">${CP4[0]}</span> <span class="d-team">${CP4[2]}</span> <span class="${CP4[6]}">${CP4[5]}</span> <span class="points">${CP4[3]} PTS</span> <span class="gap">GAP: ${CP4[4]} PTS</span> </a> </div>`
var p5c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">5th</span> <span class="team-border" style="background: ${CP5[1]}; color: ${CP5[1]}; border-radius: 2px;">|</span> <span class="name">${CP5[0]}</span> <span class="d-team">${CP5[2]}</span> <span class="${CP5[6]}">${CP5[5]}</span> <span class="points">${CP5[3]} PTS</span> <span class="gap">GAP: ${CP5[4]} PTS</span> </a> </div>`
var p6c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">6th</span> <span class="team-border" style="background: ${CP6[1]}; color: ${CP6[1]}; border-radius: 2px;">|</span> <span class="name">${CP6[0]}</span> <span class="d-team">${CP6[2]}</span> <span class="${CP6[6]}">${CP6[5]}</span> <span class="points">${CP6[3]} PTS</span> <span class="gap">GAP: ${CP6[4]} PTS</span> </a> </div>`
var p7c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">7th</span> <span class="team-border" style="background: ${CP7[1]}; color: ${CP7[1]}; border-radius: 2px;">|</span> <span class="name">${CP7[0]}</span> <span class="d-team">${CP7[2]}</span> <span class="${CP7[6]}">${CP7[5]}</span> <span class="points">${CP7[3]} PTS</span> <span class="gap">GAP: ${CP7[4]} PTS</span> </a> </div>`
var p8c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">8th</span> <span class="team-border" style="background: ${CP8[1]}; color: ${CP8[1]}; border-radius: 2px;">|</span> <span class="name">${CP8[0]}</span> <span class="d-team">${CP8[2]}</span> <span class="${CP8[6]}">${CP8[5]}</span> <span class="points">${CP8[3]} PTS</span> <span class="gap">GAP: ${CP8[4]} PTS</span> </a> </div>`
var p9c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">9th</span> <span class="team-border" style="background: ${CP9[1]}; color: ${CP9[1]}; border-radius: 2px;">|</span> <span class="name">${CP9[0]}</span> <span class="d-team">${CP9[2]}</span> <span class="${CP9[6]}">${CP9[5]}</span> <span class="points">${CP9[3]} PTS</span> <span class="gap">GAP: ${CP9[4]} PTS</span> </a> </div>`
var p10c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">10th</span> <span class="team-border" style="background: ${CP10[1]}; color: ${CP10[1]}; border-radius: 2px;">|</span> <span class="name">${CP10[0]}</span> <span class="d-team">${CP10[2]}</span> <span class="${CP10[6]}">${CP10[5]}</span> <span class="points">${CP10[3]} PTS</span> <span class="gap">GAP: ${CP10[4]} PTS</span> </a> </div>`

var con_content = `<div class="title2"> <h1>2022 Constructor Standings<t>.</t><br></h1> <h2>Up-to-date Formula 1 2022 Constructor Standings</h2> <P1> ${p1c2} </P1> <P2> ${p2c2} </P2> <P3> ${p3c2} </P3> <P4> ${p4c2} </P4> <P5> ${p5c2} </P5> <P6> ${p6c2} </P6> <P7> ${p7c2} </P7> <P8> ${p8c2} </P8> <P9> ${p9c2} </P9> <P10> ${p10c2} </P10> </div>`
document.getElementsByTagName("ConstructorStandings").innerHTML = con_content

// Driver Standing Code
var p1c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">1st</span> <span class="team-border" style="background: ${P1[2]}; color: ${P1[2]}; border-radius: 2px;">|</span> <span class="name">${P1[0]} <strong>${P1[1]}</strong></span> <span class="d-team">${P1[3]}</span> <span class="${P1[7]}">${P1[6]}</span> <span class="points">${P1[4]} PTS</span> <span class="gap">GAP: ${P1[5]} PTS</span> </a> </div>`
var p2c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">2nd</span> <span class="team-border" style="background: ${P2[2]}; color: ${P2[2]}; border-radius: 2px;">|</span> <span class="name">${P2[0]} <strong>${P2[1]}</strong></span> <span class="d-team">${P2[3]}</span> <span class="${P2[7]}">${P2[6]}</span> <span class="points">${P2[4]} PTS</span> <span class="gap">GAP: ${P2[5]} PTS</span> </a> </div>`
var p3c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">3rd</span> <span class="team-border" style="background: ${P3[2]}; color: ${P3[2]}; border-radius: 2px;">|</span> <span class="name">${P3[0]} <strong>${P3[1]}</strong></span> <span class="d-team">${P3[3]}</span> <span class="${P3[7]}">${P3[6]}</span> <span class="points">${P3[4]} PTS</span> <span class="gap">GAP: ${P3[5]} PTS</span> </a> </div>`
var p4c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">4th</span> <span class="team-border" style="background: ${P4[2]}; color: ${P4[2]}; border-radius: 2px;">|</span> <span class="name">${P4[0]} <strong>${P4[1]}</strong></span> <span class="d-team">${P4[3]}</span> <span class="${P4[7]}">${P4[6]}</span> <span class="points">${P4[4]} PTS</span> <span class="gap">GAP: ${P4[5]} PTS</span> </a> </div>`
var p5c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">5th</span> <span class="team-border" style="background: ${P5[2]}; color: ${P5[2]}; border-radius: 2px;">|</span> <span class="name">${P5[0]} <strong>${P5[1]}</strong></span> <span class="d-team">${P5[3]}</span> <span class="${P5[7]}">${P5[6]}</span> <span class="points">${P5[4]} PTS</span> <span class="gap">GAP: ${P5[5]} PTS</span> </a> </div>`
var p6c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">6th</span> <span class="team-border" style="background: ${P6[2]}; color: ${P6[2]}; border-radius: 2px;">|</span> <span class="name">${P6[0]} <strong>${P6[1]}</strong></span> <span class="d-team">${P6[3]}</span> <span class="${P6[7]}">${P6[6]}</span> <span class="points">${P6[4]} PTS</span> <span class="gap">GAP: ${P6[5]} PTS</span> </a> </div>`
var p7c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">7th</span> <span class="team-border" style="background: ${P7[2]}; color: ${P7[2]}; border-radius: 2px;">|</span> <span class="name">${P7[0]} <strong>${P7[1]}</strong></span> <span class="d-team">${P7[3]}</span> <span class="${P7[7]}">${P7[6]}</span> <span class="points">${P7[4]} PTS</span> <span class="gap">GAP: ${P7[5]} PTS</span> </a> </div>`
var p8c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">8th</span> <span class="team-border" style="background: ${P8[2]}; color: ${P8[2]}; border-radius: 2px;">|</span> <span class="name">${P8[0]} <strong>${P8[1]}</strong></span> <span class="d-team">${P8[3]}</span> <span class="${P8[7]}">${P8[6]}</span> <span class="points">${P8[4]} PTS</span> <span class="gap">GAP: ${P8[5]} PTS</span> </a> </div>`
var p9c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">9th</span> <span class="team-border" style="background: ${P9[2]}; color: ${P9[2]}; border-radius: 2px;">|</span> <span class="name">${P9[0]} <strong>${P9[1]}</strong></span> <span class="d-team">${P9[3]}</span> <span class="${P9[7]}">${P9[6]}</span> <span class="points">${P9[4]} PTS</span> <span class="gap">GAP: ${P9[5]} PTS</span> </a> </div>`
var p10c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">10th</span> <span class="team-border" style="background: ${P10[2]}; color: ${P10[2]}; border-radius: 2px;">|</span> <span class="name">${P10[0]} <strong>${P10[1]}</strong></span> <span class="d-team">${P10[3]}</span> <span class="${P10[7]}">${P10[6]}</span> <span class="points">${P10[4]} PTS</span> <span class="gap">GAP: ${P10[5]} PTS</span> </a> </div>`
var p11c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">11th</span> <span class="team-border" style="background: ${P11[2]}; color: ${P11[2]}; border-radius: 2px;">|</span> <span class="name">${P11[0]} <strong>${P11[1]}</strong></span> <span class="d-team">${P11[3]}</span> <span class="${P11[7]}">${P11[6]}</span> <span class="points">${P11[4]} PTS</span> <span class="gap">GAP: ${P11[5]} PTS</span> </a> </div>`
var p12c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">12th</span> <span class="team-border" style="background: ${P12[2]}; color: ${P12[2]}; border-radius: 2px;">|</span> <span class="name">${P12[0]} <strong>${P12[1]}</strong></span> <span class="d-team">${P12[3]}</span> <span class="${P12[7]}">${P12[6]}</span> <span class="points">${P12[4]} PTS</span> <span class="gap">GAP: ${P12[5]} PTS</span> </a> </div>`
var p13c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">13th</span> <span class="team-border" style="background: ${P13[2]}; color: ${P13[2]}; border-radius: 2px;">|</span> <span class="name">${P13[0]} <strong>${P13[1]}</strong></span> <span class="d-team">${P13[3]}</span> <span class="${P13[7]}">${P13[6]}</span> <span class="points">${P13[4]} PTS</span> <span class="gap">GAP: ${P13[5]} PTS</span> </a> </div>`
var p14c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">14th</span> <span class="team-border" style="background: ${P14[2]}; color: ${P14[2]}; border-radius: 2px;">|</span> <span class="name">${P14[0]} <strong>${P14[1]}</strong></span> <span class="d-team">${P14[3]}</span> <span class="${P14[7]}">${P14[6]}</span> <span class="points">${P14[4]} PTS</span> <span class="gap">GAP: ${P14[5]} PTS</span> </a> </div>`
var p15c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">15th</span> <span class="team-border" style="background: ${P15[2]}; color: ${P15[2]}; border-radius: 2px;">|</span> <span class="name">${P15[0]} <strong>${P15[1]}</strong></span> <span class="d-team">${P15[3]}</span> <span class="${P15[7]}">${P15[6]}</span> <span class="points">${P15[4]} PTS</span> <span class="gap">GAP: ${P15[5]} PTS</span> </a> </div>`
var p16c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">16th</span> <span class="team-border" style="background: ${P16[2]}; color: ${P16[2]}; border-radius: 2px;">|</span> <span class="name">${P16[0]} <strong>${P16[1]}</strong></span> <span class="d-team">${P16[3]}</span> <span class="${P16[7]}">${P16[6]}</span> <span class="points">${P16[4]} PTS</span> <span class="gap">GAP: ${P16[5]} PTS</span> </a> </div>`
var p17c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">17th</span> <span class="team-border" style="background: ${P17[2]}; color: ${P17[2]}; border-radius: 2px;">|</span> <span class="name">${P17[0]} <strong>${P17[1]}</strong></span> <span class="d-team">${P17[3]}</span> <span class="${P17[7]}">${P17[6]}</span> <span class="points">${P17[4]} PTS</span> <span class="gap">GAP: ${P17[5]} PTS</span> </a> </div>`
var p18c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">18th</span> <span class="team-border" style="background: ${P18[2]}; color: ${P18[2]}; border-radius: 2px;">|</span> <span class="name">${P18[0]} <strong>${P18[1]}</strong></span> <span class="d-team">${P18[3]}</span> <span class="${P18[7]}">${P18[6]}</span> <span class="points">${P18[4]} PTS</span> <span class="gap">GAP: ${P18[5]} PTS</span> </a> </div>`
var p19c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">19th</span> <span class="team-border" style="background: ${P19[2]}; color: ${P19[2]}; border-radius: 2px;">|</span> <span class="name">${P19[0]} <strong>${P19[1]}</strong></span> <span class="d-team">${P19[3]}</span> <span class="${P19[7]}">${P19[6]}</span> <span class="points">${P19[4]} PTS</span> <span class="gap">GAP: ${P19[5]} PTS</span> </a> </div>`
var p20c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">20th</span> <span class="team-border" style="background: ${P20[2]}; color: ${P20[2]}; border-radius: 2px;">|</span> <span class="name">${P20[0]} <strong>${P20[1]}</strong></span> <span class="d-team">${P20[3]}</span> <span class="${P20[7]}">${P20[6]}</span> <span class="points">${P20[4]} PTS</span> <span class="gap">GAP: ${P20[5]} PTS</span> </a> </div>`
var p21c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">21st</span> <span class="team-border" style="background: ${P21[2]}; color: ${P21[2]}; border-radius: 2px;">|</span> <span class="name">${P21[0]} <strong>${P21[1]}</strong></span> <span class="d-team">${P21[3]}</span> <span class="${P21[7]}">${P21[6]}</span> <span class="points">${P21[4]} PTS</span> <span class="gap">GAP: ${P21[5]} PTS</span> </a> </div>`

var driv_content = `<div class="title2"> <h1>2022 Driver Standings<t>.</t><br></h1> <h2>Up-to-date Formula 1 2022 Driver Standings</h2> <P1> ${p1c} </P1> <P2> ${p2c} </P2> <P3> ${p3c} </P3> <P4> ${p4c} </P4> <P5> ${p5c} </P5> <P6> ${p6c} </P6> <P7> ${p7c} </P7> <P8> ${p8c} </P8> <P9> ${p9c} </P9> <P10> ${p10c} </P10> <P11> ${p11c} </P11> <P12> ${p12c} </P12> <P13> ${p13c} </P13> <P14> ${p14c} </P14> <P15> ${p15c} </P15> <P16> ${p16c} </P16> <P17> ${p17c} </P17> <P18> ${p18c} </P18> <P19> ${p19c} </P19> <P20> ${p20c} </P20> <P21> ${p21c} </P21> </div>`
document.getElementsByTagName("DriverStandings").innerHTML = driv_content

// Home Page Choice Function
// Driver Standings Code
var p1c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">1st</span> <span class="team-border" style="background: ${P1[2]}; color: ${P1[2]}; border-radius: 2px;">|</span> <span class="name">${P1[0]} <strong>${P1[1]}</strong></span> <span class="d-team">${P1[3]}</span> <span class="${P1[7]}">${P1[6]}</span> <span class="points">${P1[4]} PTS</span> <span class="gap">GAP: ${P1[5]} PTS</span> </a> </div>`
var p2c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">2nd</span> <span class="team-border" style="background: ${P2[2]}; color: ${P2[2]}; border-radius: 2px;">|</span> <span class="name">${P2[0]} <strong>${P2[1]}</strong></span> <span class="d-team">${P2[3]}</span> <span class="${P2[7]}">${P2[6]}</span> <span class="points">${P2[4]} PTS</span> <span class="gap">GAP: ${P2[5]} PTS</span> </a> </div>`
var p3c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">3rd</span> <span class="team-border" style="background: ${P3[2]}; color: ${P3[2]}; border-radius: 2px;">|</span> <span class="name">${P3[0]} <strong>${P3[1]}</strong></span> <span class="d-team">${P3[3]}</span> <span class="${P3[7]}">${P3[6]}</span> <span class="points">${P3[4]} PTS</span> <span class="gap">GAP: ${P3[5]} PTS</span> </a> </div>`
var p4c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">4th</span> <span class="team-border" style="background: ${P4[2]}; color: ${P4[2]}; border-radius: 2px;">|</span> <span class="name">${P4[0]} <strong>${P4[1]}</strong></span> <span class="d-team">${P4[3]}</span> <span class="${P4[7]}">${P4[6]}</span> <span class="points">${P4[4]} PTS</span> <span class="gap">GAP: ${P4[5]} PTS</span> </a> </div>`
var p5c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">5th</span> <span class="team-border" style="background: ${P5[2]}; color: ${P5[2]}; border-radius: 2px;">|</span> <span class="name">${P5[0]} <strong>${P5[1]}</strong></span> <span class="d-team">${P5[3]}</span> <span class="${P5[7]}">${P5[6]}</span> <span class="points">${P5[4]} PTS</span> <span class="gap">GAP: ${P5[5]} PTS</span> </a> </div>`
var p6c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">6th</span> <span class="team-border" style="background: ${P6[2]}; color: ${P6[2]}; border-radius: 2px;">|</span> <span class="name">${P6[0]} <strong>${P6[1]}</strong></span> <span class="d-team">${P6[3]}</span> <span class="${P6[7]}">${P6[6]}</span> <span class="points">${P6[4]} PTS</span> <span class="gap">GAP: ${P6[5]} PTS</span> </a> </div>`
var p7c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">7th</span> <span class="team-border" style="background: ${P7[2]}; color: ${P7[2]}; border-radius: 2px;">|</span> <span class="name">${P7[0]} <strong>${P7[1]}</strong></span> <span class="d-team">${P7[3]}</span> <span class="${P7[7]}">${P7[6]}</span> <span class="points">${P7[4]} PTS</span> <span class="gap">GAP: ${P7[5]} PTS</span> </a> </div>`
var p8c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">8th</span> <span class="team-border" style="background: ${P8[2]}; color: ${P8[2]}; border-radius: 2px;">|</span> <span class="name">${P8[0]} <strong>${P8[1]}</strong></span> <span class="d-team">${P8[3]}</span> <span class="${P8[7]}">${P8[6]}</span> <span class="points">${P8[4]} PTS</span> <span class="gap">GAP: ${P8[5]} PTS</span> </a> </div>`
var p9c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">9th</span> <span class="team-border" style="background: ${P9[2]}; color: ${P9[2]}; border-radius: 2px;">|</span> <span class="name">${P9[0]} <strong>${P9[1]}</strong></span> <span class="d-team">${P9[3]}</span> <span class="${P9[7]}">${P9[6]}</span> <span class="points">${P9[4]} PTS</span> <span class="gap">GAP: ${P9[5]} PTS</span> </a> </div>`
var p10c = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">10th</span> <span class="team-border" style="background: ${P10[2]}; color: ${P10[2]}; border-radius: 2px;">|</span> <span class="name">${P10[0]} <strong>${P10[1]}</strong></span> <span class="d-team">${P10[3]}</span> <span class="${P10[7]}">${P10[6]}</span> <span class="points">${P10[4]} PTS</span> <span class="gap">GAP: ${P10[5]} PTS</span> </a> </div>`

// Constructor Standings Code
var p1c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">1st</span> <span class="team-border" style="background: ${CP1[1]}; color: ${CP1[1]}; border-radius: 2px;">|</span> <span class="name">${CP1[0]}</span> <span class="d-team">${CP1[2]}</span> <span class="${CP1[6]}">${CP1[5]}</span> <span class="points">${CP1[3]} PTS</span> <span class="gap">GAP: ${CP1[4]} PTS</span> </a> </div>`
var p2c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">2nd</span> <span class="team-border" style="background: ${CP2[1]}; color: ${CP2[1]}; border-radius: 2px;">|</span> <span class="name">${CP2[0]}</span> <span class="d-team">${CP2[2]}</span> <span class="${CP2[6]}">${CP2[5]}</span> <span class="points">${CP2[3]} PTS</span> <span class="gap">GAP: ${CP2[4]} PTS</span> </a> </div>`
var p3c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">3rd</span> <span class="team-border" style="background: ${CP3[1]}; color: ${CP3[1]}; border-radius: 2px;">|</span> <span class="name">${CP3[0]}</span> <span class="d-team">${CP3[2]}</span> <span class="${CP3[6]}">${CP3[5]}</span> <span class="points">${CP3[3]} PTS</span> <span class="gap">GAP: ${CP3[4]} PTS</span> </a> </div>`
var p4c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">4th</span> <span class="team-border" style="background: ${CP4[1]}; color: ${CP4[1]}; border-radius: 2px;">|</span> <span class="name">${CP4[0]}</span> <span class="d-team">${CP4[2]}</span> <span class="${CP4[6]}">${CP4[5]}</span> <span class="points">${CP4[3]} PTS</span> <span class="gap">GAP: ${CP4[4]} PTS</span> </a> </div>`
var p5c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">5th</span> <span class="team-border" style="background: ${CP5[1]}; color: ${CP5[1]}; border-radius: 2px;">|</span> <span class="name">${CP5[0]}</span> <span class="d-team">${CP5[2]}</span> <span class="${CP5[6]}">${CP5[5]}</span> <span class="points">${CP5[3]} PTS</span> <span class="gap">GAP: ${CP5[4]} PTS</span> </a> </div>`
var p6c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">6th</span> <span class="team-border" style="background: ${CP6[1]}; color: ${CP6[1]}; border-radius: 2px;">|</span> <span class="name">${CP6[0]}</span> <span class="d-team">${CP6[2]}</span> <span class="${CP6[6]}">${CP6[5]}</span> <span class="points">${CP6[3]} PTS</span> <span class="gap">GAP: ${CP6[4]} PTS</span> </a> </div>`
var p7c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">7th</span> <span class="team-border" style="background: ${CP7[1]}; color: ${CP7[1]}; border-radius: 2px;">|</span> <span class="name">${CP7[0]}</span> <span class="d-team">${CP7[2]}</span> <span class="${CP7[6]}">${CP7[5]}</span> <span class="points">${CP7[3]} PTS</span> <span class="gap">GAP: ${CP7[4]} PTS</span> </a> </div>`
var p8c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">8th</span> <span class="team-border" style="background: ${CP8[1]}; color: ${CP8[1]}; border-radius: 2px;">|</span> <span class="name">${CP8[0]}</span> <span class="d-team">${CP8[2]}</span> <span class="${CP8[6]}">${CP8[5]}</span> <span class="points">${CP8[3]} PTS</span> <span class="gap">GAP: ${CP8[4]} PTS</span> </a> </div>`
var p9c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">9th</span> <span class="team-border" style="background: ${CP9[1]}; color: ${CP9[1]}; border-radius: 2px;">|</span> <span class="name">${CP9[0]}</span> <span class="d-team">${CP9[2]}</span> <span class="${CP9[6]}">${CP9[5]}</span> <span class="points">${CP9[3]} PTS</span> <span class="gap">GAP: ${CP9[4]} PTS</span> </a> </div>`
var p10c2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">10th</span> <span class="team-border" style="background: ${CP10[1]}; color: ${CP10[1]}; border-radius: 2px;">|</span> <span class="name">${CP10[0]}</span> <span class="d-team">${CP10[2]}</span> <span class="${CP10[6]}">${CP10[5]}</span> <span class="points">${CP10[3]} PTS</span> <span class="gap">GAP: ${CP10[4]} PTS</span> </a> </div>`

var content = `<div class="title2"> <h1>2022 Driver Standings<t>.</t><br></h1> <h2>Up-to-date Formula 1 2022 Driver Standings</h2> <P1> ${p1c} </P1> <P2> ${p2c} </P2> <P3> ${p3c} </P3> <P4> ${p4c} </P4> <P5> ${p5c} </P5> <P6> ${p6c} </P6> <P7> ${p7c} </P7> <P8> ${p8c} </P8> <P9> ${p9c} </P9> <P10> ${p10c} </P10> </div> <div class="button1"> <a class="button" href="https://pittimes.com/en/drivers" style="margin-left: 43%;"> View Full Standings > </a> </div>`
document.getElementsByTagName("Choice").innerHTML = content


function changeDrivers() {
    var content = `<div class="title2"> <h1>2022 Driver Standings<t>.</t><br></h1> <h2>Up-to-date Formula 1 2022 Driver Standings</h2> <P1> ${p1c} </P1> <P2> ${p2c} </P2> <P3> ${p3c} </P3> <P4> ${p4c} </P4> <P5> ${p5c} </P5> <P6> ${p6c} </P6> <P7> ${p7c} </P7> <P8> ${p8c} </P8> <P9> ${p9c} </P9> <P10> ${p10c} </P10> </div> <div class="button1"> <a class="button" href="https://pittimes.com/en/drivers" style="margin-left: 43%;"> View Full Standings > </a> </div>`
    document.getElementsByTagName("Choice").innerHTML = content
}

function changeCounstructor() {
    var content = `<div class="title2"> <h1>2022 Constructor Standings<t>.</t><br></h1> <h2>Up-to-date Formula 1 2022 Constructor Standings</h2> <P1> ${p1c2} </P1> <P2> ${p2c2} </P2> <P3> ${p3c2} </P3> <P4> ${p4c2} </P4> <P5> ${p5c2} </P5> <P6> ${p6c2} </P6> <P7> ${p7c2} </P7> <P8> ${p8c2} </P8> <P9> ${p9c2} </P9> <P10> ${p10c2} </P10> </div>`
    document.getElementsByTagName("Choice").innerHTML = content
}