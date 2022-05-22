// Replace Function
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

// Example Team Name[0], Team Color[1], Engine Provider[3], Points[4], Gap[5], Gain/Lost of Positions[6], Gain Type[7]

// Constructor Positions
var CP1 = ['Red Bull Racing',RedBullC,'RBPT',196,"GapEX","+1",Gain]
var CP2 = ['Scudaria Ferrari ',FerrariC,'Ferrari',169,"0","-1",Lose]
var CP3 = ['Mercedes AMG F1',MercedesC,'Mercedes',120,"GapEX","+0",Equal]
var CP4 = ['McLaren F1',McLarenC,'Mercedes',50,"GapEX","+0",Equal]
var CP5 = ['Alfa Romeo',RomeoC,'Ferrari',39,"GapEX","+0",Equal]
var CP6 = ['Alpine',AlpineC,'Renault',33,"GapEX","+0",Equal]
var CP7 = ['Alphatauri',AlphatauriC,'RBPT',17,"GapEX","+0",Equal]
var CP8 = ['Haas',HaasC,'Ferrari',15,"GapEX","+0",Equal]
var CP9 = ['Aston Martin',AstonC,'Aramc Mercedes',6,"GapEX","+0",Equal]
var CP10 = ['Williams Racing',WilliamsC,'Mercedes ',3,"GapEX","+0",Equal]

//Constructor Calc
// P2 Gap Calc
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

var content = `<div class="title2"> <h1>2022 Constructor Standings<t>.</t><br></h1> <h2>Up-to-date Formula 1 2022 Constructor Standings</h2> <P1> ${p1c2} </P1> <P2> ${p2c2} </P2> <P3> ${p3c2} </P3> <P4> ${p4c2} </P4> <P5> ${p5c2} </P5> <P6> ${p6c2} </P6> <P7> ${p7c2} </P7> <P8> ${p8c2} </P8> <P9> ${p9c2} </P9> <P10> ${p10c2} </P10> </div>`
document.getElementsByTagName("Choice")[0].innerHTML = content
