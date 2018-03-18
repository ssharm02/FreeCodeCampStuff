 //Value of denominations - Array of objects
  var demoninations = [
    {name: 'ONE HUNDRED', value: 100.00},
    {name: 'TWENTY',      value: 20.00},
    {name: 'TEN',         value: 10.00},
    {name: 'FIVE',        value: 5.00},
    {name: 'ONE',         value: 1.00},
    {name: 'QUARTER',     value: 0.25},
    {name: 'DIME',        value: 0.10},
    {name: 'NICKEL',      value: 0.05},
    {name: 'PENNY',       value: 0.01}
  ];
  
  //calculate change we owe the customer
  function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    //CID = cash in drawer
    var totalCID = cid.reduce(function(acc, next) {
      //grab fund value from multidimensional aray
      return acc + next[1];
    }, 0.0);
    
    /*if total cash in drawer is less than change return insufficient funds
    *if total cash in drawer equals change return closed
    */
    if (totalCID < change) {
      return 'Insufficient Funds';
    }
    else if (totalCID === change) {
      return 'Closed';
    }
    //reverse multid array
    cid = cid.reverse();
    var result = demoninations.reduce(function(acc, next, index) {
      if(change >= next.value) {
        var currentValue = 0.0;
        while(change >= next.value && cid[index][1] >= next.value) {
          currentValue += next.value;
          change -= next.value;
          change = Math.round(change * 100) / 100;
          cid[index][1] -= next.value;
        }//end of while loop
        acc.push([next.name, currentValue]);
        return acc;
      } else {
        return acc;
      }
    }, []);
    return result.length > 0 && change === 0 ? result : 'Insufficient Funds';
}
  
  checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
