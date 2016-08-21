function bizCycle() {
  if (bizcount > 0) {
    bizcount = bizcount - 1
    biz()
    bizCycle()
  }
}

function updateClock() {
  setTimeout("timeless()", 200)
}

function timeless() {

  cashdisp = funds / 100
  cashdisp = cashdisp.toFixed(2)

  if (menumode == "list") {
    timemode = "pause"
  }

  if (menumode == "sale") {
    timemode = "pause"
  }


  if (timemode != "pause") {
    dsec = dsec + 1
    if (dsec == 20 || dsec == 40 || dsec == 60) {
      if (menumode != "sale") {
        biz()
        updateSales()
      }
    }

    if (dsec == 60) {
      dmin = dmin + 1
      dsec = 0
    }
    if (dmin == 60) {
      dhours = dhours + 1
      dmin = 0
//      tupdate()
    }
    dmintxt = dmin
    if (dmin < 10) {
      dmintxt = "0" + dmin
    }
    if (dhours == 25) {
      ddays = ddays + 1
      dweek = dweek + 1
      dhours = 1
      sold1day.splice(6, 1)
      sold1day.splice(0, 0, 0)
      sold2day.splice(6, 1)
      sold2day.splice(0, 0, 0)
      sold3day.splice(6, 1)
      sold3day.splice(0, 0, 0)
      sold4day.splice(6, 1)
      sold4day.splice(0, 0, 0)
      if (dweek == 8) {
        dweek = 1
      }
    }
    dhourstxt = dhours

    ampm = "AM"
 
    if (dhours > 11) {
      ampm = "PM"
      if (dhours != 12) {
        dhourstxt = dhours - 12
      }
      if (dhours == 24) {
      ampm = "AM"
      }
    }

    if (dhours == 0) {
      dhourstxt = 12
    }

    if (ddays == 365) {
      ddays = 0 
      dyear = dyear + 1
    }

    if (ddays > 0) {
      dmonth = "January"
      ddaym = ddays
    } 

    if (ddays - 31 > 0) {
      dmonth = "February"
      ddaym = ddays - 31
    }

    if (ddays - 59 > 0) {
      dmonth = "March"
      ddaym = ddays - 59
    }

    if (ddays - 90 > 0) {
      dmonth = "April"
      ddaym = ddays - 90
    }

    if (ddays - 120 > 0) {
      dmonth = "May"
      ddaym = ddays - 120
    }

    if (ddays - 151 > 0) {
      dmonth = "June"
      ddaym = ddays - 151
    }

    if (ddays - 181 > 0) {
      dmonth = "July"
      ddaym = ddays - 181
    }

    if (ddays - 212 > 0) {
      dmonth = "August"
      ddaym = ddays - 212
    }

    if (ddays - 243 > 0) {
      dmonth = "September"
      ddaym = ddays - 243
    }

    if (ddays - 273 > 0) {
      dmonth = "October" 
      ddaym = ddays - 273
    }

    if (ddays - 304 > 0) {
      dmonth = "November"
      ddaym = ddays - 304
    }

    if (ddays - 334 > 0) {
      dmonth = "December"
      ddaym = ddays - 334
    }
 
    if (dweek == 1) {
      dweektxt = "Monday"
    }

    if (dweek == 2) {
      dweektxt = "Tuesday"
    }

    if (dweek == 3) {
      dweektxt = "Wednesday"
    }

    if (dweek == 4) {
      dweektxt = "Thursday"
    }

    if (dweek == 5) {
      dweektxt = "Friday"
    }

    if (dweek == 6) {
      dweektxt = "Saturday"
    }

    if (dweek == 7) {
      dweektxt = "Sunday"
    }  
  
    datatime = dweektxt + ", " + dmonth + " " + ddaym + ", " + dyear + ":  " + dhourstxt + ":" + dmintxt + " " + ampm + " EST - You currently have $" + cashdisp + "."
  updateScreen()

  }

  if (timemode == "pause") {
    datatime = dweektxt + ", " + dmonth + " " + ddaym + ", " + dyear + ":  " + dhourstxt + ":" + dmintxt + " " + ampm + " EST - You currently have $" + cashdisp + ".  Game Paused."
    updateScreen()    
  }
//  Commenting this out and replacing it with a faster speed for testing.
//  setTimeout("timeless()", 100)

  timemode = "time"
  setTimeout("timeless()", 100)

}

function tupdate() {
  document.merchant.tshoot.value = document.merchant.tshoot.value + "Day " + ddaym + " Hour " + dhours + "\n\n"
  if (item1low > 20 && item2low > 20 && item3low > 20 && item4low > 20) {
    document.merchant.tshoot.value = document.merchant.tshoot.value + "Sales critical, cannot purchase.\n\n"
  }
  document.merchant.tshoot.value = document.merchant.tshoot.value + "item1p: " + item1p + "\n\nitem2p: " + item2p + "\n\nitem3p: " + item3p + "\n\nitem4p: " + item4p + "\n\nitem1low, item1hi, item1avg: " + item1low + ", " + item1hi + ", " + item1avg + "\n\nitem2low, item2hi, item2avg: " + item2low + ", " + item2hi + ", " + item2avg + "\n\nitem3low, item3hi, item3avg: " + item3low + ", " + item3hi + ", " + item3avg + "\n\nitem4low, item4hi, item4avg: " + item4low + ", " + item4hi + ", " + item4avg + "\n\n"
}