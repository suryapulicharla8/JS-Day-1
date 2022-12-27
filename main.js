// let s="abcdefacbsde";
// let map=new Map();
// for(let i=0;i<s.length;i++){
//     if(map.has(s[i])){
//         let value=map.get(s[i])
//         map.set(s[i],value+1)
//     }
//     else{
//         map.set(s[i],1)
//     }
// }
// for(let [k,v] of map){
//     console.log(k+" "+v)
// }

let s="abcdeasbcde";
let set=new Set();
for(let i=0;i<s.length;i++){
    set.add(s[i]);
}
let res=" ";
for(let chh of set){
    res=res+chh;
}
console.log(res)