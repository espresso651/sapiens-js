
function personal() {
  roller1 = 0
  personam = Math.ceil(Math.random() * persona)
  personbm = Math.ceil(Math.random() * personb)
  personcm = Math.ceil(Math.random() * personc)
  persondm = Math.ceil(Math.random() * persond)
  personem = Math.ceil(Math.random() * persone)
  personfm = Math.ceil(Math.random() * personf)
  persongm = Math.ceil(Math.random() * persong)
  personvar = personam + personbm + personcm + persondm + personem + personfm + persongm
  personmod = Math.ceil(Math.random() * personvar)

  if (personmod - personam < 1 && roller1 == 0) {
    roller1 = 1
  }
  personmod = personmod - personam

  if (personmod - personbm < 1 && roller1 == 0) {
    roller1 = 2
  }
  personmod = personmod - personbm  

  if (personmod - personcm < 1 && roller1 == 0) {
    roller1 = 3
  }
  personmod = personmod - personcm  

  if (personmod - persondm < 1 && roller1 == 0) {
    roller1 = 4
  }
  personmod = personmod - persondm  

  if (personmod - personem < 1 && roller1 == 0) {
    roller1 = 5
  }
  personmod = personmod - personem  

  if (personmod - personfm < 1 && roller1 == 0) {
    roller1 = 6
  }
  personmod = personmod - personfm  

  if (personmod - persongm < 1 && roller1 == 0) {
    roller1 = 7
  }
  personmod = personmod - persongm  
}

function aibuy() {
    //roller1 is the personality type, and roller2 is item.
    roller = Math.ceil(Math.random() * 2)
    roller2 = Math.ceil(Math.random() * 4)
    if (item1rank > 3) {
      roller3 = Math.ceil(Math.random() * 10)
      if (roller3 == 1) {
        roller2 = 1
      }
    }
    if (item2rank > 3) {
      roller3 = Math.ceil(Math.random() * 10)
      if (roller3 == 1) {
        roller2 = 2
      }
    }
    if (item3rank > 3) {
      roller3 = Math.ceil(Math.random() * 10)
      if (roller3 == 1) {
        roller2 = 3
      }
    }
    if (item4rank > 3) {
      roller3 = Math.ceil(Math.random() * 10)
      if (roller3 == 1) {
        roller2 = 4
      }
    }
    if (roller == 1) {
      //Personality is speculator.  They buy cheap items to drive up the price.
      //Temporary disabling buying personality.

      selected = roller2
      activate()

      if (actitem.length > 1) {
        actsold.splice(0, 0, actsold[0])
        actitem.splice(0, 1)
        actday[0] = actday[0] + 1
      }
      deactivate()
    }
    if (roller == 2) {
      //Personality is looking for cheap items only.  

      selected = roller2
      activate()

      if (actitem.length > 1) {
        if (actitem[0] < totalavg) {
          actsold.splice(0, 0, actsold[0])
          actitem.splice(0, 1)
          actday[0] = actday[0] + 1
        }
      }
      deactivate()
    }

  }

function biz() {
  roller = Math.ceil(Math.random() * 6)
  //1 means an item has been purchased.
  if (roller < 3) {
    aibuy()
  }
  //New sale
  if (roller > 4) {
    sale()
  }
  pricing()
}

function buyit() {
  //Checks price to make sure it can be purchased.  price is multiplied by 100 and compared to funds + 1.
  //Order may be important here.  Is the failed check is after the successful check, both conditions will appear true.
  if (price * 100 > funds + 1) {
    alert("You can't afford this!")
  }
  if (price * 100 < funds + 1) {
    //Compares checkout with item name.  Increases player inventory by 1, deducts price, reduces sale inventory by 1, removes lowest price, and reestablishes a new base price.
    if (checkout == "doobyflop") {
      pitem1 = pitem1 + 1
      funds = funds - price * 100
      lastsold1.splice(0, 0, item1p[0])
      item1p.splice(0, 1)
      item1low = item1p[0] / 100
      sold1day[0] = sold1day[0] + 1
    }
    if (checkout == "thingamajig") {
      pitem2 = pitem2 + 1
      funds = funds - price * 100
      lastsold2.splice(0, 0, item2p[0])
      item2p.splice(0, 1)
      item2low = item2p[0] / 100
      sold2day[0] = sold2day[0] + 1
    }
    if (checkout == "doohickey") {
      pitem3 = pitem3 + 1
      funds = funds - price * 100
      lastsold3.splice(0, 0, item3p[0])
      item3p.splice(0, 1)
      item3low = item3p[0] / 100
      sold3day[0] = sold3day[0] + 1
    }
    if (checkout == "whatsit") {
      pitem4 = pitem4 + 1
      funds = funds - price * 100
      lastsold4.splice(0, 0, item4p[0])
      item4p.splice(0, 1)
      item4low = item4p[0] / 100
      sold4day[0] = sold4day[0] + 1
    }
  }
  pricing()
  //Returns to main menu.
  //Currently bugged, so going to main also triggers going to inventory.
  menumode = "main"
  menupos = 1
  menustate()  
}

function confirm() {
  //Note:  For this section, aiitem2 and aiitem3 are transposed.
  //Clear checkout variable.
  checkout = 0
  //  Check menu position and place [*] as checkx value.
  if (menupos == 1) {
    check1 = "[*] "
    check2 = "    "
    check3 = "    "
  }
  if (menupos == 2) {
    check1 = "    "
    check2 = "[*] "
    check3 = "    "
  }
  if (menupos == 3) {
    check1 = "    "
    check2 = "    "
    check3 = "[*] "
  }
  //Compares position of holderx, and sets checkout to item name, and price to aiitemxt.toFixed(2)
  if (holder1 != "    ") {
    checkout = "doobyflop"
    price = item1low.toFixed(2)
  }
  if (holder2 != "    ") {
    checkout = "doohickey"
    price = item3low.toFixed(2)
  }
  if (holder3 != "    ") {
    checkout = "thingamajig"
    price = item2low.toFixed(2)
  }
  if (holder4 != "    ") {
    checkout = "whatsit"
    price = item4low.toFixed(2)
  }
  //Checks for value of noconf.  If noconf is not set, asks for buying confirmation.
  if (noconf == 0) {
    mainsel = "Would you like to buy a " + checkout + " for $" + price + "?\n\n" + check1 + "Yes\n\n" + check2 + "No\n\n" + check3 + "Yes and don't ask again"
  }
}

function sale() {
    personal()
    roller2 = Math.ceil(Math.random() * 4)
    if (roller1 == 1) {
      //Personality is speculator.  They sell at high prices.
      roller3 = Math.ceil(Math.random() * 100) / 100 + 0.25
      if (roller2 == 1) {
        temp = Math.ceil(item1hi * roller3 * 100)
        item1p.splice(0,0, temp)
      }
      if (roller2 == 2) {
        temp = Math.ceil(item2hi * roller3 * 100)
        item2p.splice(0,0, temp)
      }
      if (roller2 == 3) {
        temp = Math.ceil(item3hi * roller3 * 100)
        item3p.splice(0,0, temp)
      }
      if (roller2 == 4) {
        temp = Math.ceil(item4hi * roller3 * 100)
        item4p.splice(0,0, temp)
      }
    }
    if (roller1 == 2) {

      //Seller is clearance, just wants rid of it.
      roller3 = Math.ceil(Math.random() * 100) / 100 - 0.3
      if (roller3 < 0) {
        roller3 = 0.5
      }
      //This should fix the problem of negative prices...
      if (roller2 == 1) {
        temp = Math.ceil(item1low * roller3 * 100)
        item1p.splice(0,0, temp)
      }
      if (roller2 == 2) {
        temp = Math.ceil(item2low * roller3 * 100)
        item2p.splice(0,0, temp)
      }
      if (roller2 == 3) {
        temp = Math.ceil(item3low * roller3 * 100)
        item3p.splice(0,0, temp)
      }
      if (roller2 == 4) {
        temp = Math.ceil(item4low * roller3 * 100)
        item4p.splice(0,0, temp)
      }
    }
    if (roller1 == 3) {
      roller3 = Math.ceil(Math.random() * 10) / 100 + .9
      //Seller is competitive and wants to undercut the current price.
      if (roller2 == 1) {
        temp = Math.ceil(item1low * roller3 * 100)
        item1p.splice(0,0, temp)
      }
      if (roller2 == 2) {
        temp = Math.ceil(item2low * roller3 * 100)
        item2p.splice(0,0, temp)
      }
      if (roller2 == 3) {
        temp = Math.ceil(item3low * roller3 * 100)
        item3p.splice(0,0, temp)
      }
      if (roller2 == 4) {
        temp = Math.ceil(item4low * roller3 * 100)
        item4p.splice(0,0, temp)
      }
    }
    if (roller1 == 4) {
      roller3 = Math.ceil(Math.random() * 100) / 100 + 0.1
      //Seller is a merchant hoping to turn a profit.
      if (roller2 == 1) {
        temp = Math.ceil(item1avg * roller3 * 100)
        item1p.splice(0,0, temp)
      }
      if (roller2 == 2) {
        temp = Math.ceil(item2avg * roller3 * 100)
        item2p.splice(0,0, temp)
      }
      if (roller2 == 3) {
        temp = Math.ceil(item3avg * roller3 * 100)
        item3p.splice(0,0, temp)
      }
      if (roller2 == 4) {
        temp = Math.ceil(item4avg * roller3 * 100)
        item4p.splice(0,0, temp)
      }
    }
    if (roller1 == 5) {
      roller3 = Math.ceil(Math.random() * 300) / 100
      //Seller is a collector, and wants a lot of money.
      if (roller2 == 1) {
        temp = Math.ceil(item1hi * roller3 * 100)
        item1p.splice(0,0, temp)
      }
      if (roller2 == 2) {
        temp = Math.ceil(item2hi * roller3 * 100)
        item2p.splice(0,0, temp)
      }
      if (roller2 == 3) {
        temp = Math.ceil(item3hi * roller3 * 100)
        item3p.splice(0,0, temp)
      }
      if (roller2 == 4) {
        temp = Math.ceil(item4hi * roller3 * 100)
        item4p.splice(0,0, temp)
      }
    }
    if (roller1 == 6) {
      roller3 = Math.ceil(Math.random() * 1000) / 100 
      //Seller is random and is totally insane.
      if (roller2 == 1) {
        temp = Math.ceil(Math.random() * 15000) / 1000
        temp = Math.ceil(temp * item1avg)
        item1p.splice(0,0, temp)
      }
      if (roller2 == 2) {
        temp = Math.ceil(Math.random() * 15000) / 1000
        temp = Math.ceil(temp * item1avg)
        item2p.splice(0,0, temp)
      }
      if (roller2 == 3) {
        temp = Math.ceil(Math.random() * 15000) / 1000
        temp = Math.ceil(temp * item1avg)
        item3p.splice(0,0, temp)
      }
      if (roller2 == 4) {
        temp = Math.ceil(Math.random() * 15000) / 1000
        temp = Math.ceil(temp * item1avg)
        item4p.splice(0,0, temp)
      }
    }
    if (roller1 == 7) {
      roller3 = Math.ceil(Math.random() * 3)
      //Seller wants to make a quick sale.
      if (roller2 == 1) {
        temp = Math.ceil(item1low - roller3)
        item1p.splice(0,0, temp)
      }
      if (roller2 == 2) {
        temp = Math.ceil(item2low - roller3)
        item2p.splice(0,0, temp)
      }
      if (roller2 == 3) {
        temp = Math.ceil(item3low - roller3)
        item3p.splice(0,0, temp)
      }
      if (roller2 == 4) {
        temp = Math.ceil(item4low - roller3)
        item4p.splice(0,0, temp)
      }
    }

    if (item1p[0] < 3) {
      item1p[0] = 3
    }
    if (item2p[0] < 3) {
      item2p[0] = 3
    }
    if (item3p[0] < 3) {
      item3p[0] = 3
    }
    if (item4p[0] < 3) {
      item4p[0] = 3
    }  
}

function slots() {

  slot1 = ""
  slot2 = ""
  slot3 = ""
  slot4 = ""

  if (item1p.length > 0) {
    if (item1p.length == 1) {
      slot1 = item1p.length + " doobyflop.  Lowest price: $" + item1low.toFixed(2) + "\n\n"
    } 
    else {
      slot1 = item1p.length + " doobyflops.  Lowest price: $" + item1low.toFixed(2) + "\n\n"
    }
  }
  else {}

  if (item3p.length > 0) {
    if (slot1 != "" && slot2 == "") {
      if (item3p.length == 1) {
       slot2 = item3p.length + " doohickey.  Lowest price: $" + item3low.toFixed(2) + "\n\n"
       } 
      else {
        slot2 = item3p.length + " doohickeys.  Lowest price: $" + item3low.toFixed(2) + "\n\n"
      }
    }
    if (slot1 == "") {
      if (item3p.length == 1) {
       slot1 = item3p.length + " doohickey.  Lowest price: $" + item3low.toFixed(2) + "\n\n"
       } 
      else {
        slot1 = item3p.length + " doohickeys.  Lowest price: $" + item3low.toFixed(2) + "\n\n"
      }
    }
  }

  if (item2p.length > 0) {
    if (slot2 != "" && slot3 == "") {
      if (item2p.length == 1) {
       slot3 = item2p.length + " thingamajig.  Lowest price: $" + item2low.toFixed(2) + "\n\n"
       } 
      else {
        slot3 = item2p.length + " thingamajigs.  Lowest price: $" + item2low.toFixed(2) + "\n\n"
      }
    }
    if (slot1 != "" && slot2 == "") {
      if (item2p.length == 1) {
       slot2 = item2p.length + " thingamajig.  Lowest price: $" + item2low.toFixed(2) + "\n\n"
       } 
      else {
        slot2 = item2p.length + " thingamajigs.  Lowest price: $" + item2low.toFixed(2) + "\n\n"
      }
    }
    if (slot1 == "") {
      if (item2p.length == 1) {
       slot1 = item2p.length + " thingamajig.  Lowest price: $" + item2low.toFixed(2) + "\n\n"
       } 
      else {
        slot1 = item2p.length + " thingamajigs.  Lowest price: $" + item2low.toFixed(2) + "\n\n"
      }
    }
  }

  if (item4p.length > 0) {
    if (slot3 != "" && slot4 == "") {
      if (item4p.length == 1) {
       slot4 = item4p.length + " whatsit.  Lowest price: $" + item4low.toFixed(2) + "\n\n"
       } 
      else {
        slot4 = item4p.length + " whatsits.  Lowest price: $" + item4low.toFixed(2) + "\n\n"
      }
    }
    if (slot2 != "" && slot3 == "") {
      if (item4p.length == 1) {
       slot3 = item4p.length + " whatsit.  Lowest price: $" + item4low.toFixed(2) + "\n\n"
       } 
      else {
        slot3 = item4p.length + " whatsits.  Lowest price: $" + item4low.toFixed(2) + "\n\n"
      }
    }
    if (slot1 != "" && slot2 == "") {
      if (item4p.length == 1) {
       slot2 = item4p.length + " whatsit.  Lowest price: $" + item4low.toFixed(2) + "\n\n"
       } 
      else {
        slot2 = item4p.length + " whatsits.  Lowest price: $" + item4low.toFixed(2) + "\n\n"
      }
    }
    if (slot1 == "") {
      if (item4p.length == 1) {
       slot1 = item4p.length + " whatsit.  Lowest price: $" + item4low.toFixed(2) + "\n\n"
       } 
      else {
        slot1 = item4p.length + " whatsits.  Lowest price: $" + item4low.toFixed(2) + "\n\n"
      }
    }
  }
}

function start() {
  datatime = "Please select a game type."

  menumode = "intro"
  menupos = 1
  menuset()
  loadMenu()
}

function start2() {
  datatime = "Loading..."

  menumode = "main"
  menuset()
  timemode = "time"
  haveitem = "false"
  menupos = 1

  funds = 2500
  dsec = 0
  dmin = 0
  
  dhours = 10
  dhourstxt
  ddays = 182
  ddaym = 1
  dyear = 2013
  dmonth 
  dweek = 1
  dweektxt = "Monday"

  item1pop = Math.ceil(Math.random() * 100)
  item2pop = Math.ceil(Math.random() * 100)
  item3pop = Math.ceil(Math.random() * 100)
  item4pop = Math.ceil(Math.random() * 100)
  
  randomDrop()

  restock()

  menustate()


  document.merchant.tshoot.value = "Loading sales information."

//  tupdate()
  
  updateClock()
}

function updateSales() {
  document.merchant.tshoot.value = "Sales data.  Updates every 20 game seconds."
  if (item1p.length > 0) {
    document.merchant.tshoot.value = document.merchant.tshoot.value + "\n\nDoobyflops:\nLowest Price:  $" + item1low.toFixed(2) + "\nAverage Price:  $" + item1avg.toFixed(2) + "\nSales (Today): " + lastsold1.length
  }

  if (item3p.length > 0) {
    document.merchant.tshoot.value = document.merchant.tshoot.value + "\n\nDoohickeys:\nLowest Price:  $" + item3low.toFixed(2) + "\nAverage Price:  $" + item3avg.toFixed(2) + "\nSales (Today): " + lastsold3.length
  }
  if (item2p.length > 0) {
    document.merchant.tshoot.value = document.merchant.tshoot.value + "\n\nThingamajigs:\nLowest Price:  $" + item2low.toFixed(2) + "\nAverage Price:  $" + item2avg.toFixed(2) + "\nSales (Today): " + lastsold2.length
  }
  if (item4p.length > 0) {
    document.merchant.tshoot.value = document.merchant.tshoot.value + "\n\nWhatsits:\nLowest Price:  $" + item4low.toFixed(2) + "\nAverage Price:  $" + item4avg.toFixed(2) + "\nSales (Today): " + lastsold4.length
  }

}

function updateScreen() {
  document.merchant.maingame.value = datatime + "\n\nWelcome to Market Sandbox, the Market Simulator.\n\n" + mainsel
}
  
