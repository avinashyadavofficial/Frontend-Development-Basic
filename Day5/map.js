
let ans=$.map(['a', 'b', 'c'],function(item){
    return item.toUpperCase();
});
console.log(ans); // ['A', 'B', 'C']

let ans1=$.map(["Alice", "Bob", "Charlie"],function(item){
     return "Hello, "+item;
});
console.log(ans1); // ['Hello, Alice', 'Hello, Bob', 'Hello, Charlie']