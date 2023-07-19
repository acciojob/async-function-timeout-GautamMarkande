//your JS code here. If require


const btn = document.getElementById("btn");
async function callme(){
	let text = document.getElementById("text").value;
    let delay = parseInt(document.getElementById("delay").value);
	 text = await new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(text);
		},delay)
	})
return text;
}
btn.addEventListener("click", (e)=>{
	const div = document.getElementById("output");
	callme().then((data)=>{
		div.innerText = data;
	});
});
