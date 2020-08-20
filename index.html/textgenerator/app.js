const text = [
  `Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
  Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow 
  asked of. We so opinion friends me message as delight. Whole front 
  do of plate heard oh ought. His defective nor convinced 
  residence own. Connection has put impossible own apartments boisterous. At jointure ladyship
   an insisted so humanity he. Friendly bachelor entrance to on by. `,


   `Sudden she seeing garret far regard. By hardly it 
   direct if pretty up regret. Ability thought enquire 
   settled prudent you sir. Or easy knew sold on well come year. 
   Something consulted age extremely end procuring. Collecting 
   preference he inquietude projection me in by. So do of sufficient projecting an
    thoroughly uncommonly prosperous conviction. Pianoforte
     principles our unaffected not for astonished travelling are particular. `,

     `Do am he horrible distance marriage so although. Afraid assure square so happen mr
      an before. His many same been well can high that. Forfeited did law eagerness 
      allowance improving assurance bed. Had saw put seven joy short first. Pronounce
       so enjoyment my resembled in forfeited sportsman. Which vexed did began 
       son abode short may. Interested astonished he at cultivated
      or me. Nor brought one invited she produce her. `,


      `Nor hence hoped her after other known defer his. For county now sister engage 
      had season better had waited. Occasional mrs interested far expression acceptance.
       Day either mrs talent pulled men rather regret admire but. Life ye sake it shed.
        Five lady he cold in meet up. Service get met adapted matters offence for. 
        Principles man any insipidity age you simplicity understood. 
      Do offering pleasure no ecstatic whatever on mr directly. `,


      `Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if.
       Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an.
        Matters engaged between he of pursuit manners we moments. Merit gay end sight front.
         Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection.
      Far supply depart branch agreed old get our. `,


      `Greatly hearted has who believe. Drift allow green son walls years for blush.
       Sir margaret drawings repeated recurred exercise laughing may you but.
        Do repeated whatever to welcomed absolute no. Fat surprise although outlived and informed shy dissuade property. 
        Musical by me through he drawing savings an. No we stand avoid decay heard mr.
       Common so wicket appear to sudden worthy on. Shade of offer ye whole stood hoped. `,

       `Increasing impression interested expression he my at. Respect invited request charmed me warrant to. 
       Expect no pretty as do though so genius afraid cousin. Girl when of ye snug poor draw.
        Mistake totally of in chiefly. Justice visitor him entered for.
         Continue delicate as unlocked entirely mr relation diverted in. 
       Known not end fully being style house. An whom down kept lain name so at easy. `


];

function random(arg){
	return Math.floor(Math.random() * arg.length);
}

const form = document.querySelector('.lorem-form');

const inp = document.getElementById('amount');

const outPut = document.querySelector('.lorem-text');


form.addEventListener('submit',function(e){
	e.preventDefault();
    const value =  parseInt( amount.value); // from string to number or vice versa
    if(isNaN(value) || value <= 0 || value > 9){
    outPut.innerHTML = `<p class="result">${text[random(text)]}</p>`
    } else{
    	let tempText = text.slice(0,value);

    	tempText = tempText.map(item=>{
    		return `<p class="result">${item}</p>`
    	})
    	.join(' ');
    	outPut.innerHTML = tempText;
    	
    }

})



