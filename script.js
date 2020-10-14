
const $emoji = document.getElementById('emoji')

const emojis=[]


for(let i=128512; i<128562; i++){
    emojis.push(`<div class="box">
       <div id="emoji" class="emoji1">
        <p style="text-align: center;">
            <span style="font-size: 5rem;">&#${i};</span><br>
            <code>${i}</code>
          </p>
       </div>
   </div>`)
    
}

$emoji.innerHTML += emojis.join('')