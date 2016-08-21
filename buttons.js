function goDown() {

  if (kcount == 2 || kcount == 3) {
    kcount = kcount + 1
  }
  else {
    kcount = 0
    document.merchant.ok.value = "ok"
  }

  if (btnlock == 0) {
    btnlock = 1

    if (menupos != menumax) {
      menupos = menupos + 1

    }
    else if (menupos == menumax) {
      menupos = 1
    }

    if (menumode == "intro") {
      loadMenu()
    }

    if (menumode == "main") {
      menustate()
    }
    if (menumode == "iteminfo") {
      reports()
    }
    if (menumode == "detail") {
      details()
    }
    if (menumode == "sale") {
      confirm()
    }
    if (menumode == "list") {
      liststate()
    }
  }

  btnlock = 0
}

function goLeft() {
  if (kcount == 4 || kcount == 6) {
    kcount = kcount + 1
  }
  else {
    kcount = 0
    document.merchant.ok.value = "ok"
  }

  if (menumode == "invent") {
    menumode = "main"
    menupos = 1  
    menustate()
  }
  if (menumode == "list") {
    menumode = "main"
    menupos = 2
    menustate()
  }
  if (menumode == "sale") {
    menumode = "list"
    liststate()
  }
  if (menumode == "iteminfo") {
    menumode = "main"
    menupos = 3
    menustate()
  }
  if (menumode == "detail") {
    menumode = "iteminfo"
    reports()
  }
}

function goOkay() {

  if (kcount < 8) {
    kcount = 0
    document.merchant.ok.value = "ok"
  }
 
  if (kcount > 7) {
    alert(kcount)
    if (kcount == 8) {
      document.merchant.ok.value = "A"
    }

    if (kcount == 9) {
      document.merchant.ok.value = "Start"
    }

    kcount = kcount + 1
    alert(kcount)

    if (kcount == 11) {
      alert("I see you know the code.  Here, have some money.")
      funds = funds + 6510000
      kcount = 0  
      document.merchant.ok.value = "ok"
    }
  }

  if (document.merchant.field.value == "greed is good") {
    alert("If you believe that, you deserve this.")
    document.merchant.field.value = ""
    funds = 0
  }

  if (document.merchant.field.value == "all your base are belong to us") {
    alert("That's not how you make friends.")
    dyear = 2003
  }
  
  if (menumode == "intro" && btnlock == 0) {
    btnlock = 1
    if (menupos == 1) {
      gametype = "sandbox"
      start2()
    }
    if (menupos == 2) {
      alert("This feature is not implemented yet.")
    }
  }
  

  if (menumode == "iteminfo" && btnlock == 0) {
    btnlock = 1
    menumode = "detail"
    details()
  }
  if (menumode == "invent" && btnlock == 0) {
    btnlock = 1
    details()
  }
  if (menumode == "sale" && btnlock == 0) {
    btnlock = 1
    if (menupos == 1) {
      buyit()
    }
    if (menupos == 2) {
      menumode = "list"
      liststate()
    }
    if (menupos == 3) {
      noconf = 1
      buyit()
    }
  }
  if (menumode == "list" && btnlock == 0) {
    btnlock = 1
    if (noconf == 1) {
      buyit()
    }
    if (noconf == 0) {
      menumode = "sale"
      menupos = 1
      confirm()
    }
  }
  if (menumode == "main" && btnlock == 0) {
    btnlock = 1
    mainview()
  }
  btnlock = 0
}

function goRight() {

  if (kcount == 5 || kcount == 7) {
    kcount = kcount + 1
    if (kcount == 8) {
      document.merchant.ok.value = "B"
    }
  }
  else {
    kcount = 0
    document.merchant.ok.value = "ok"
  }

  alert("The following variables are set:\n\nitem1p: " + item1p + "\n\nitem2p: " + item2p + "\n\nitem3p: " + item3p + "\n\nitem4p: " + item4p + "\n\nitem1low, item1hi, item1avg: " + item1low + ", " + item1hi + ", " + item1avg + "\n\nitem2low, item2hi, item2avg: " + item2low + ", " + item2hi + ", " + item2avg + "\n\nitem3low, item3hi, item3avg: " + item3low + ", " + item3hi + ", " + item3avg + "\n\nitem4low, item4hi, item4avg: " + item4low + ", " + item4hi + ", " + item4avg + "\n\nMenumode is: " + menumode + "\n\ntotalavg: " + totalavg)
}


function goUp() {
  if (kcount == 0 || kcount == 1) {
    kcount = kcount + 1
  }

  else {
    kcount = 0
    document.merchant.ok.value = "ok"
  }

  if (btnlock == 0) {
    btnlock = 1

    if (menupos != 1) {
      menupos = menupos - 1

    }
    else if (menupos == 1) {
      menupos = menumax
    }

    if (menumode == "intro") {
      loadMenu()
    }

    if (menumode == "main") {
      menustate()
    }
    if (menumode == "iteminfo") {
      reports()
    }
    if (menumode == "detail") {
      details()
    }
    if (menumode == "sale") {
      confirm()
    }
    if (menumode == "list") {
      liststate()
    }
  }

  btnlock = 0
}