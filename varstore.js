var menupos
var mainsel
var menumode
var mm2
var btnlock = 0

var gametype

var bizcount

var menumax

var haveitem

var timemode

var kcount = 0

var funds
var cashdisp
var dsec = 0
var dmin = 0
var dmintxt
var dhours = 10
var dhourstxt
var ddays = 182
var ddaym = 1
var dyear = 2013
var dmonth 
var dweek = 1
var dweektxt = "Monday"
var datatime
var ampm

var roller
var roller1
var roller2
var roller3
var rollcnt

var temp

var pitem1 = 0
var pitem2 = 0
var pitem3 = 0
var pitem4 = 0

var aiitem1
var aiitem2
var aiitem3
var aiitem4

var aiitem1p
var aiitem2p
var aiitem3p
var aiitem4p

//Price text.

var aiitem1t
var aiitem2t
var aiitem3t
var aiitem4t

//Average Price

  var aiitem1a
  var aiitem2a
  var aiitem3a
  var aiitem4a

  var totalavg
  var totalsum

//Items sold.

  var aiitem1s
  var aiitem2s
  var aiitem3s
  var aiitem4s

// Item demand based on availability.

  var aiitem1d
  var aiitem2d
  var aiitem3d
  var aiitem4d
  
  var item1p = new Array()
  var item2p = new Array()
  var item3p = new Array()
  var item4p = new Array()

// actitem copies and modifies the active item array.  selected informs actitem which array to copy.  This allows limitless items.  actsold replaces last sold.
  var actitem = new Array()
  var selected = 1
  var actsold = new Array(0)
  var actday = new Array(0,0,0,0,0,0,0)
  var actweek = 0

  var item1sum = 0
  var item1avg = 0
  var item2sum = 0
  var item2avg = 0
  var item3sum = 0
  var item3avg = 0
  var item4sum = 0
  var item4avg = 0
  var actsum = 0
  var actavg = 0
  
  var item1hi = 0
  var item2hi = 0
  var item3hi = 0
  var item4hi = 0
  
  var item1low = 0
  var item2low = 0
  var item3low = 0
  var item4low = 0
  
  var item1rank = 1
  var item2rank = 2
  var item3rank = 3
  var item4rank = 4

  //Popularity rating
  var item1pop = 1
  var item2pop = 1
  var item3pop = 1
  var item4pop = 1
  var popmod = 1
  
  //items sold
  
  var sold1day = new Array(0,0,0,0,0,0,0)
  var sold1week = 0
  var sold2day = new Array(0,0,0,0,0,0,0)
  var sold2week = 0
  var sold3day = new Array(0,0,0,0,0,0,0)
  var sold3week = 0
  var sold4day = new Array(0,0,0,0,0,0,0) 
  var sold4week = 0

  var lastsold1 = new Array(0)
  var lastsold2 = new Array(0)
  var lastsold3 = new Array(0)
  var lastsold4 = new Array(0)
  
  var numsold1 = 0
  var numsold2 = 0
  var numsold3 = 0
  var numsold4 = 0
// Item slots for display.

  var slot1 = ""
  var slot2 = ""
  var slot3 = ""
  var slot4 = ""

// Holder for [*] symbol.

  var holder1 = "    "
  var holder2 = "    "
  var holder3 = "    "
  var holder4 = "    "

  var checkout = 0
  var price = 0

  var check1 = "    "
  var check2 = "    "
  var check3 = "    "

  var noconf = 0

//Player sale variables
var playsale1 = 0
var playsale2 = 0
var playsale3 = 0
var playsale4 = 0

//Personality
var persona = 20
var personb = 125
var personc = 250
var persond = 270
var persone = 8
var personf = 2
var persong = 700

var personam = 0
var personbm = 0
var personcm = 0
var persondm = 0
var personem = 0
var personfm = 0
var persongm = 0

var personvar = 0
var personmod = 0

