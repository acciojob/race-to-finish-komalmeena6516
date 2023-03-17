 window.promises = [];

const ans = document.getElementById("output");
// ans.innerText = "hello"

let sec = Math.floor(Math.random()*5)+1;

let p1 = new Promise((resolve , reject) =>{
setTimeout(()=>{
	resolve("Promise 1 is resolve");
}, (Math.floor(Math.random()*5)+1)*1000)
});

let p2 = new Promise((resolve , reject) =>{
setTimeout(()=>{
	resolve("Promise 2 is resolve");
}, (Math.floor(Math.random()*5)+1)*1000)
});

let p3 = new Promise((resolve , reject) =>{
setTimeout(()=>{
	resolve("Promise 3 is resolve");
}, (Math.floor(Math.random()*5)+1)*1000)
});

let p4 = new Promise((resolve , reject) =>{
setTimeout(()=>{
	resolve("Promise 4 is resolve");
},(Math.floor(Math.random()*5)+1)*1000)
});

let p5 = new Promise((resolve , reject) =>{
setTimeout(()=>{
	resolve("Promise 5 is resolve");
}, (Math.floor(Math.random()*5)+1)*1000)
});

promises.push(p1);
promises.push(p2);
promises.push(p3);
promises.push(p4);
promises.push(p5);

Promise.any(promises)
	.then((res)=>{
		ans.innerText = res;
})