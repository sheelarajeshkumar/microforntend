let cmp = ["AA","BB"]
function print(v){
    console.log(v)
}
// --------
cmp.forEach(print)

with(cmp){
    forEach(print)
}
// ------------
cmp.map((val)=>{
    console.log(val.toLowerCase())
})
// -----------
/**
 * .find
 * .map
 * .filter
 * .some
 * .every
 * .reduce
 */