
const myFunc=()=>{
    var emoji = ["😄","💑","😸","🍎","🍌"];
    var ranNum = Math.floor(Math.random()*emoji.length );
    var newEmoji = emoji[ranNum]; 
    return newEmoji;
} 
export default myFunc; 

