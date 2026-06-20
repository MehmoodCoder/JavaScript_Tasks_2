const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// Object.defineProperty(Math, "PI", {
//   enumerable: true,
// })

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    },
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false, // if I make it true it also enumerate name in Object
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}










// Object.defineProperty(globalThis, 'Math', {
//   value: new Proxy(Math, {
//     get(target, prop) {
//       if (prop === 'PI') return 5; 
//       return target[prop];
// functions (Math.sin, Math.floor) waise hi chalenge
//     }
//   }),
//   configurable: true,
//   writable: true
// });

// console.log(Math.PI
// console.log(Math.max(10, 20)); 

Object.defineProperty(globalThis, 'Math', {
  value: new Proxy({}, {
    get(target, prop) {
      if (prop === 'PI') return 5; 
      
      const original = Reflect.get(window.Math, prop);
      if (typeof original === 'function') {
        return original.bind(window.Math); 
      }
      return original;
    }
  }),
  configurable: true,
  writable: true
});

console.log(Math.PI);

