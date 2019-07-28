
const {get}= require("superagent");
const baseURL = "https://noykou.glitch.me/api/v1/";

module.exports.getImage = async function getImage(endpoint,options){
return new Promise(async(resolve, reject) => {
const {body} =await get(`${baseURL}${endpoint}?username=${options.username.split('').filter(a => ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "].includes(a.toLowerCase())).join("")}&url=${options.url}&action=${options.action}&text=${options.text}&message=${options.message}&back=${options.back}&style=${options.style}&roundcolor=${options.roundcolor}&textcolor=${options.textcolor}`)
await resolve(body)
})
}
