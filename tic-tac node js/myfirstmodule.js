exports.myDateTime = function (a,b) {
if(a[0].playr==b && a[1].playr==b && a[2].playr==b ||
   a[3].playr==b && a[4].playr==b && a[5].playr==b||
   a[6].playr==b && a[7].playr==b && a[8].playr==b||

   a[0].playr==b && a[3].playr==b && a[6].playr==b||
   a[1].playr==b && a[4].playr==b && a[7].playr==b||
   a[2].playr==b && a[5].playr==b && a[8].playr==b||

   a[0].playr==b && a[4].playr==b && a[8].playr==b||
   a[2].playr==b && a[4].playr==b && a[6].playr==b
   ){

    return true}
    else return false
  };
  // a+"!"