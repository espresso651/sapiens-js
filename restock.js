function pricing() {
    
    
    item1p.sort(function(a,b){return a - b})
    item2p.sort(function(a,b){return a - b})
    item3p.sort(function(a,b){return a - b})
    item4p.sort(function(a,b){return a - b}) 
 
    item1low = item1p[0] / 100
    item2low = item2p[0] / 100
    item3low = item3p[0] / 100
    item4low = item4p[0] / 100
     
    item1sum = item1p.reduce(function(a, b) { return a + b })
    item1avg = Math.ceil(item1sum / item1p.length) / 100
    item1hi = item1p[item1p.length - 1] / 100
    item2sum = item2p.reduce(function(a, b) { return a + b })
    item2avg = Math.ceil(item2sum / item2p.length) / 100
    item2hi = item2p[item2p.length - 1] / 100
    item3sum = item3p.reduce(function(a, b) { return a + b })
    item3avg = Math.ceil(item3sum / item3p.length) / 100
    item3hi = item3p[item3p.length - 1] / 100
    item4sum = item4p.reduce(function(a, b) { return a + b })
    item4avg = Math.ceil(item4sum / item4p.length) / 100
    item4hi = item4p[item4p.length - 1] / 100
    
    sold1week = sold1day.reduce(function(a, b) { return a + b })
    sold2week = sold2day.reduce(function(a, b) { return a + b })
    sold3week = sold3day.reduce(function(a, b) { return a + b })
    sold4week = sold4day.reduce(function(a, b) { return a + b })
    
    item1rank = 4
    item2rank = 4
    item3rank = 4
    item4rank = 4

    totalsum = item1sum + item2sum + item3sum + item4sum
    totalavg = item1p.length + item2p.length + item3p.length + item4p.length
    totalavg = Math.ceil(totalsum / totalavg)


    
    if (sold1week > sold2week) {
        item1rank = item1rank - 1
    }
    if (sold1week > sold3week) {
        item1rank = item1rank - 1
    }
    if (sold1week > sold4week) {
        item1rank = item1rank - 1
    }
    if (sold2week > sold1week) {
        item2rank = item2rank - 1
    }
    if (sold2week > sold3week) {
        item2rank = item2rank - 1
    }
    if (sold2week > sold4week) {
        item2rank = item2rank - 1
    }
    if (sold3week > sold1week) {
        item3rank = item3rank - 1
    }
    if (sold3week > sold2week) {
        item3rank = item3rank - 1
    }
    if (sold3week > sold4week) {
        item3rank = item3rank - 1
    }
    if (sold4week > sold1week) {
        item4rank = item4rank - 1
    }
    if (sold4week > sold2week) {
        item4rank = item4rank - 1
    }
    if (sold4week > sold3week) {
        item4rank = item4rank - 1
    }
}

function popular() {
  if (selected == 1) {
    if (item1avg > totalavg) {
      popmod = Math.ceil(Math.random * 20)
      item1pop = item1pop - popmod
    }
    if (item1avg < totalavg) {
      popmod = Math.ceil(Math.random * 20)
      item1pop = item1pop + popmod
    }
    if (item1rank == 1) {
      popmod = Math.ceil(Math.random * 50)
      item1pop = item1pop + popmod
    }
  }
}

function restock() {

  aiitem1 = Math.ceil(Math.random() * 80) + 10

  item1p[0]=Math.ceil(Math.random() * 150000) + 2
  item2p[0]=Math.ceil(Math.random() * 150000) + 2
  item3p[0]=Math.ceil(Math.random() * 150000) + 2
  item4p[0]=Math.ceil(Math.random() * 150000) + 2

  //Calls pricing, then stockloop to generate new items, then pricing to update everything.
  pricing()
  stockloop()
  pricing()

  bizcount = 100
  bizCycle()
}

function stockloop() {
  if (aiitem1 > 0) {
    aiitem1 = aiitem1 - 1
    sale()
    stockloop()
  }
}