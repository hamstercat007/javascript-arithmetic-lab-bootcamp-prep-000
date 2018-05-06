function makeInt(n) {
  if (typeof n === 'string' || typeof n === 'number') 
  {
    return parseInt(n, 10)
  }
  if (isNaN(n))
  {
   return "returns NaN as appropriate"
   }
}