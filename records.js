// Replace Function
var replace = (arr, oldVal, newVal) => (arr[arr.indexOf(oldVal)] = newVal, arr)

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

// Record Wins
var WP1 = ['Lewis','Hamilton',MercedesC,'McLaren/Mercedes',103,"0"]
var WP2 = ['Micheal','Schumacher',MercedesC,'Mercedes/McLaren',91,"GapEX"]
var WP3 = ['Sebastian','Vettel',AstonC,'Red Bull Racing/Ferrari/Aston Martin',53,"GapEX"]

// Consecutive Wins
var CWP1 = ['Sebastian','Vettel',RedBullC,'Red Bull Racing',9,"0"]
var CWP2 = ['Alberto','Ascari',FerrariC,'Ferrari',7,"GapEX"]
var CWP3 = ['Micheal','Schumacher',FerrariC,'Ferrari7',7,"GapEX"]

// Record Wins Gap Calc
var Gap = WP1[4] - WP2[4]
var RepGap = replace(WP2, "GapEX", Gap)
// Record Wins Gap Calc
var Gap = WP2[4] - WP3[4]
var RepGap = replace(WP3, "GapEX", Gap)

// Consecutive Wins Gap Calc
var Gap = CWP1[4] - CWP2[4]
var RepGap = replace(CWP2, "GapEX", Gap)
// Consecutive Wins Gap Calc
var Gap = CWP2[4] - CWP3[4]
var RepGap = replace(CWP3, "GapEX", Gap)

var PWP1 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">1st</span> <span class="team-border" style="background: ${WP1[2]}; color: ${WP1[2]}; border-radius: 2px;">|</span> <span class="name">${WP1[0]} <strong>${WP1[1]}</strong></span> <span class="d-team">${WP1[3]}</span> <span class="points">${WP1[4]} Wins</span> <span class="gap">GAP: ${WP1[5]} PTS</span> </a> </div>`
document.getElementsByTagName("Choice")[0].innerHTML = PWP1
