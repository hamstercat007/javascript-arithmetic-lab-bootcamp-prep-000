function add(a, b){
  return a + b
}



function makeInt(n){
  if (typeof n === 'string' || typeof n === 'number') 
  {
    return parseInt(n, 10)
  }
}

function preserveDecimal(n) {
  return parseFloat(n)
}