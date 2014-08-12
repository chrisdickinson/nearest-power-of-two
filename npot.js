module.exports = nearestPowerOfTwo

function nearestPowerOfTwo(size) {
  if(size > 4294967296) {
    return
  } 

  if((size & (size - 1)) !== 0) {
    --size
    for(var i = 1; i < 32; i <<= 1)
      size = size | size >> i
    size += 1
  } 
  return size
}
