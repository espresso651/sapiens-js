function activate() {

  if (selected == 1) {
    actitem = item1p
    actsold = lastsold1
    actday = sold1day
  }

  if (selected == 2) {
    actitem = item2p 
    actsold = lastsold2
    actday = sold2day

  }

  if (selected == 3) {
    actitem = item3p
    actsold = lastsold3
    actday = sold3day
  }

  if (selected == 4) {
    actitem = item4p
    actsold = lastsold4
    actday = sold4day

  }

  actsum = actitem.reduce(function(a, b) { return a + b })
  actavg = Math.ceil(actsum / actitem.length) / 100
}

function deactivate() {

  if (selected == 1) {
    item1p = actitem
    lastsold1 = actsold
    sold1day = actday
  }

  if (selected == 2) {
    item2p = actitem
    lastsold2 = actsold
    sold2day = actday

  }

  if (selected == 3) {
    item3p = actitem
    lastsold3 = actsold
    sold3day = actday

  }

  if (selected == 4) {
    item4p = actitem
    lastsold4 = actsold
    sold4day = actday
  }

  item1low = item1p[0] / 100
  item2low = item2p[0] / 100
  item3low = item3p[0] / 100
  item4low = item4p[0] / 100

}


function randomDrop() {
  //This decides how many items the player has.
  roller = Math.ceil(Math.random() * 4)
  if (roller == 1) {
    pitem1 = Math.ceil(Math.random() * 3) 
  } 
  if (roller == 2) {
    pitem2 = Math.ceil(Math.random() * 3) 
  }
  if (roller == 3) {
    pitem4 = Math.ceil(Math.random() * 3)
  } 
  if (roller == 4) {
    pitem4 = Math.ceil(Math.random() * 3)
  }
}
