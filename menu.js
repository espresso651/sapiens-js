function details() {
  //Looks for menu position, then changes mainsel to list item info.
  if (menupos == 1) {
    mainsel = "Doobyflops.  What would we do without them?  Maybe the cavemen could survive without their doobyflops, but we're much more civilized.  We take them everywhere, we keep them in our homes, they are a major part of our lives.  Doobyflops, cornerstones of civilization.\n\nYou own " + pitem1 + " doobyflop(s).\n\n" + aiitem1 + " available for sale.\n\nLowest price: $" + item1low.toFixed(2) + "\n\nHighest Price: $" + item1hi.toFixed(2) + "\n\nAverage Price: $" + item1avg.toFixed(2)
    if (lastsold1[0] != 0) {
      mainsel = mainsel + "\n\nAverage Price (current): $" + item1avg.toFixed(2) + "\n\nAverage Sale Price (Today): $" +  lastsold1.reduce(function(a, b) { return a + b }) / lastsold1.length / 100 + "\n\nSales (Today): " + lastsold1.length + "\n\nSales rank: " + item1rank + "."
    }
    else {
      mainsel = mainsel + "\n\nNo sales data."
    }
  }
  if (menupos == 2) {
    mainsel = "Where did I leave my thingamjig?  Those words have been spoken with hushed mysticism for generations, as the elusive and essential thingamajig disappears only to prove its necessity.  Not only are thingamajigs useful, they're great for parties.  Everyone needs a thingamajig or 30.\n\nYou own " + pitem2 + " thingamajig(s).\n\n" + aiitem2 + " available for sale.\n\nLowest price: $" + item2low.toFixed(2) + "\n\nHighest Price: $" + item2hi.toFixed(2)
    
    if (lastsold2[0] != 0) {
      mainsel = mainsel + "\n\nAverage Price (current): $" + item2avg.toFixed(2) + "\n\nAverage Sale Price (Today): $" +  lastsold2.reduce(function(a, b) { return a + b }) / lastsold2.length / 100 + "\n\nSales (Today): " + lastsold2.length + "\n\nSales rank: " + item2rank + "."
    }
    else {
      mainsel = mainsel + "\n\nNo sales data."
    }
  }
  if (menupos == 3) {
    mainsel = "What is this doohickey?  Be the first to answer this, and amaze your friends and loved ones!  It's the pinnacle of human technology, a monument to our progress from club wielding maniacs to doohickey wielding maniacs.  Do you know someone special in your life who could use a shiny new doohickey?  Of course you do!\n\nYou own " + pitem3 + " doohickey(s).\n\n" + aiitem3 + " available for sale.\n\nLowest price: $" + item3low.toFixed(2) + "\n\nHighest Price: $" + item3hi.toFixed(2) + "\n\nAverage Price: $" + item3avg.toFixed(2)
    if (lastsold3[0] != 0) {
      mainsel = mainsel + "\n\nAverage Price (current): $" + item3avg.toFixed(2) + "\n\nAverage Sale Price (Today): $" +  lastsold3.reduce(function(a, b) { return a + b }) / lastsold3.length / 100 + "\n\nSales (Today): " + lastsold3.length + "\n\nSales rank: " + item3rank + "."
    }
    else {
      mainsel = mainsel + "\n\nNo sales data."
    }
  }
  if (menupos == 4) {
    mainsel = "What's in a name?  Probably very little, so does it matter what you call your whatsit?  The makers of the whatsit don't think so.  It's good for anything you need it to be, and you can call it whatever you want.  So long as it gets the job done.\n\nYou own " + pitem4 + " whatsit(s).\n\n" + aiitem4 + " available for sale.\n\nLowest price: $" + item4low.toFixed(2) + "\n\nHighest Price: $" + item4hi.toFixed(2) + "\n\nAverage Price (current): $" + item4avg.toFixed(2)
    if (lastsold4[0] != 0) {
      mainsel = mainsel + "\n\nAverage Price (current): $" + item4avg.toFixed(2) + "\n\nAverage Sale Price (Today): $" +  lastsold4.reduce(function(a, b) { return a + b }) / lastsold4.length / 100 + "\n\nSales (Today): " + lastsold4.length + "\n\nSales rank: " + item4rank + "."
    }
    else {
      mainsel = mainsel + "\n\nNo sales data."
    }
  }
  //Adds additional text to mainsel.
  mainsel = mainsel + "\n\nPress Left to go back.  Press Up and Down to change items."
}

function inventory() {
  mainsel = mainsel + "\n\nInventory: You own the following items:"
  if (pitem1 > 0) {
    mainsel = mainsel + "\n\n"
    haveitem = "true"
    if (pitem1 == 1) {
      mainsel = mainsel + pitem1 + " doobyflop.  "
    } 
    else {
      mainsel = mainsel + pitem1 + " doobyflops.  "
    }
    mainsel = mainsel + "Lowest price is $" + item1low + "."
  }
  if (pitem2 > 0) {
    mainsel = mainsel + "\n\n"
    haveitem = "true"
    if (pitem2 == 1) {
      mainsel = mainsel + pitem2 + " thingamajig.  "
    } 
    else {
      mainsel = mainsel + pitem2 + " thingamajigs.  "
    }
    mainsel = mainsel + "Lowest price is $" + item2low + "."

  }
  if (pitem3 > 0) {
    mainsel = mainsel + "\n\n"
    haveitem = "true"
    if (pitem3 == 1) {
      mainsel = mainsel + pitem3 + " doohickey.  "
    } 
    else {
      mainsel = mainsel + pitem3 + " doohickeys.  "
    }
    mainsel = mainsel + "Lowest price is $" + item3low + "."

  }
  if (pitem4 > 0) {
    mainsel = mainsel + "\n\n"
    haveitem = "true"
    if (pitem4 == 1) {
      mainsel = mainsel + pitem4 + " whatsit.  "
    } 
    else {
      mainsel = mainsel + pitem4 + " whatsits.  "
    }
    mainsel = mainsel + "Lowest price is $" + item4low + "."
  }

  if (haveitem == "false") {
    mainsel = mainsel + "You have no items."
  }
  haveitem = "false"
  mainsel = mainsel + "\n\nPress left to go back.  "
  updateScreen()
}

function listings() {
  slots()
  mainsel = "Sales Listings\n\nThe following items are for sale:\n\n" + holder1 + slot1 + holder2 + slot2 + holder3 + slot3 + holder4 + slot4 + "Press left to go back.  Press OK to buy at lowest price.\n\n"
  updateScreen()
}

function loadMenu() {
  if (menupos == 1) {
    mainsel = "[*]Play Sandbox\n\n   Play Scenario (Not Available)"
  }
  if (menupos == 2) {
    mainsel = "   Play Sandbox\n\n[*]Play Scenario (Not Available)"
  }
  updateScreen()
}
  

function liststate() {
  if (menupos == 1) {
    holder1 = "[*] "
    holder2 = "    "
    holder3 = "    "
    holder4 = "    "
  }
  if (menupos == 2) {
    holder1 = "    "
    holder2 = "[*] "
    holder3 = "    "
    holder4 = "    "
  }
  if (menupos == 3) {
    holder1 = "    "
    holder2 = "    "
    holder3 = "[*] "
    holder4 = "    "
  }
  if (menupos == 4) {
    holder1 = "    "
    holder2 = "    "
    holder3 = "    "
    holder4 = "[*] "
  }
  listings()
}

function mainview() {
  if (menupos == 1) {
    menumode = "main"
//    inventory()
  }
  if (menupos == 2) {
    menumode = "list"
    menupos = 1
    holder1 = "[*] "
    holder2 = "    "
    holder3 = "    "
    holder4 = "    "
    listings()
  }
  if (menupos == 3) {
    menumode = "iteminfo"
    menupos = 1
    reports()
  }
  if (menupos == 4) {
    menumode = "options"
    menupos = 1
    optMenu()
  }
}

function menuset() {
  if (menumode == "intro") {
    menumax = 2
  }

  if (menumode == "main") {
    menumax = 4
  }
  if (menumode == "iteminfo") {
    menumax = 4
  }
  if (menumode == "list") {
    menumax = 4
  }
  if (menumode == "sale") {
    menumax = 3
  }
  if (menumode == "detail") {
    menumax = 4
  }

  if (menumode == "options") {
    menumax = 1
  }


}


function menustate() {
  if (menupos == 1) {
    mainsel = "Main Menu\n\n[*]Sell Item (Disabled)\n\n   View Listings\n\n   View Item Details\n\n   Game Options"
  }
  if (menupos == 2) {
    mainsel = "Main Menu\n\n   Sell Item (Disabled)\n\n[*]View Listings\n\n   View Item Details\n\n   Game Options"
  }
  if (menupos == 3) {
    mainsel = "Main Menu\n\n   Sell Item (Disabled)\n\n   View Listings\n\n[*]View Item Details\n\n   Game Options"
  }
  if (menupos == 4) {
    mainsel = "Main Menu\n\n   Sell Item (Disabled)\n\n   View Listings\n\n   View Item Details\n\n[*]Game Options"
  }

  inventory()
}

function optMenu() {
  if (gametype == "sandbox") {
    if (menupos == 1) {
      mainsel = "Sandbox Options\n\n[*]Change Speed\n\n   Change money\n\n"
    }
    if (menupos == 2) {
      mainsel = "Sandbox Options\n\n   Change Speed\n\n[*]Change money\n\n"
    }
  }
}

function optMoney() {
  mainsel = "Change Money\b\bType the amount of money you desire in the text field below.  Press ok to set money or left to cancel."
}


function optSpeed() {
  mainsel = "Change Speed\b\bThis feature is not ready."
}

function reports() {
  if (menupos == 1) {
    mainsel = "Item Details\n\n[*]Doobyflop\n\n   Thingamajig\n\n   Doohickey\n\n   Whatsit\n\n"
  }
  if (menupos == 2) {
    mainsel = "Item Details\n\n   Doobyflop\n\n[*]Thingamajig\n\n   Doohickey\n\n   Whatsit\n\n"
  }
  if (menupos == 3) {
    mainsel = "Item Details\n\n   Doobyflop\n\n   Thingamajig\n\n[*]Doohickey\n\n   Whatsit\n\n"
  }
  if (menupos == 4) {
    mainsel = "Item Details\n\n   Doobyflop\n\n   Thingamajig\n\n   Doohickey\n\n[*]Whatsit\n\n"
  }
  mainsel = mainsel + "\n\nPress left to go back.  Press OK for details."
  updateScreen()
}