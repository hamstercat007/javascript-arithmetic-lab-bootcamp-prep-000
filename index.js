function makeInt(n) {
  if (typeof n === 'string' || typeof n === 'number') 
  {
    return parseInt(n, 10)
  }
  else 
  {
   return "returns NaN as appropriate"
   }
}