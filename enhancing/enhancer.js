module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {
  name: "marc",
  durability: 10,
  enhancement: 20
}

function succeed(item) {
  console.log('item.enh', item.enhancement)
  if(item.enhancement < 20){
    let enhance = ++item.enhancement
    return{...item, enhancement: enhance}
  } else if(item.enhancement == 20){
    return item;
  } else if(item.enhancement > 20) 
    throw 'enhancement should be no more than 20';  
}
console.log("succeed", succeed(item));
function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}
console.log("repair", repair(item));
function get(item) {
  return { ...item };
}
