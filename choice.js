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

// Example First Name[0], Last Name[2], Team Color[3], Team[4], Points[5], Gap[6], Gain/Lost of Positions[7], Gain Type[8]

// Positions
var P1 = ['Charles','Leclerc',FerrariC,'Ferrari',104,"0","+0",Equal]
var P2 = ['Max','Verstappen',RedBullC,'Red Bull Racing',85,"GapEX","+0",Equal]
var P3 = ['Sergio','Perez',RedBullC,'Red Bull Racing',66,"GapEX","+0",Equal]
var P4 = ['George','Russell',MercedesC,'Mercedes',59,"GapEX","+0",Equal]
var P5 = ['Carlos','Sainz',FerrariC,'Ferrari',53,"GapEX","+0",Equal]
var P6 = ['Lewis','Hamilton',MercedesC,'Mercedes',36,"GapEX","+1",Gain]
var P7 = ['Lando','Norris',McLarenC,'McLaren',35,"GapEX","-1",Lose]
var P8 = ['Valtteri','Bottas',RomeoC,'Alfa Romeo',30,"GapEX","+0",Equal]
var P9 = ['Esteban','Ocon',AlpineC,'Alpine',24,"GapEX","+0",Equal]
var P10 = ['Kevin','Magnussen',HaasC,'Haas',15,"GapEX","+0",Equal]

// Example Team Name[0], Team Color[1], Engine Provider[3], Points[4], Gap[5], Gain/Lost of Positions[6], Gain Type[7]

// Constructor Positions
var CP1 = ['Scudaria Ferrari ',FerrariC,'Ferrari',157,"0","+0",Equal]
var CP2 = ['Red Bull Racing',RedBullC,'RBPT',151,"GapEX","+0",Equal]
var CP3 = ['Mercedes AMG F1',MercedesC,'Mercedes',95,"GapEX","+0",Equal]
var CP4 = ['McLaren F1',McLarenC,'Mercedes',46,"GapEX","+0",Equal]
var CP5 = ['Alfa Romeo',RomeoC,'Ferrari',31,"GapEX","+0",Equal]
var CP6 = ['Alpine',AlpineC,'Renault',26,"GapEX","+0",Equal]
var CP7 = ['Alphatauri',AlphatauriC,'RBPT',16,"GapEX","+0",Equal]
var CP8 = ['Haas',HaasC,'Ferrari',15,"GapEX","+0",Equal]
var CP9 = ['Aston Martin',AstonC,'Aramc Mercedes',6,"GapEX","+0",Equal]
var CP10 = ['Williams Racing',WilliamsC,'Mercedes ',3,"GapEX","+0",Equal]

// P2 Gap Calc
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
document.getElementsByTagName("Choice")[0].innerHTML = content


function changeDrivers() {
  var content = `<div class="title2"> <h1>2022 Driver Standings<t>.</t><br></h1> <h2>Up-to-date Formula 1 2022 Driver Standings</h2> <P1> ${p1c} </P1> <P2> ${p2c} </P2> <P3> ${p3c} </P3> <P4> ${p4c} </P4> <P5> ${p5c} </P5> <P6> ${p6c} </P6> <P7> ${p7c} </P7> <P8> ${p8c} </P8> <P9> ${p9c} </P9> <P10> ${p10c} </P10> </div> <div class="button1"> <a class="button" href="https://pittimes.com/en/drivers" style="margin-left: 43%;"> View Full Standings > </a> </div>`
  document.getElementsByTagName("Choice")[0].innerHTML = content
}

function changeCounstructor() {
  var content = `<div class="title2"> <h1>2022 Constructor Standings<t>.</t><br></h1> <h2>Up-to-date Formula 1 2022 Constructor Standings</h2> <P1> ${p1c2} </P1> <P2> ${p2c2} </P2> <P3> ${p3c2} </P3> <P4> ${p4c2} </P4> <P5> ${p5c2} </P5> <P6> ${p6c2} </P6> <P7> ${p7c2} </P7> <P8> ${p8c2} </P8> <P9> ${p9c2} </P9> <P10> ${p10c2} </P10> </div>`
  document.getElementsByTagName("Choice")[0].innerHTML = content
}
