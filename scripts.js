const badCoffee = 'Pine Bark';
const brands = [
  {"Foldgers": 10}, 
  {"Hardees": 0},
  {"Petes": 75},
  {"Starbucks": 60}, 
  {"Stumptown": 80}, 
  {"Deathwish": 2000},
  {"Water Avenue": 100}
];

function isGood(grinds){
  return (grinds > 70) ? true : false;
}

function coffee(pour = 'Deathwish'){
  let brew;
  let cup = pour.replace(/[\W_-]/g, '').toLowerCase().trim();
  console.log(cup);
  const brand = Object.keys(brands);
  const taste = Object.values(brands);

  for(let grind = 0; grind < brands.length; grind += 1){
    const name = Object.keys(taste[grind])[0].replace(/[\W_-]/g, '').toLowerCase().trim();
    const rating = Object.values(taste[grind]);
    if(cup && cup.includes(name)){
      brew = isGood(parseInt(rating));
    }
  }
  pour = pour.trim()
  return (brew) ? `Drink ${pour} Now!` : `Uuuuggg, ${badCoffee}! ${pour}, Toss-it!`;
}

document.addEventListener('DOMContentLoaded', () => {
  const toDrink = document.querySelector('.coffee');
  const whatBrand = document.querySelector('.cup-a-joe');
  const event = new Event('change');

  whatBrand.addEventListener('change', (e) => {
    toDrink.innerHTML = "";
    toDrink.appendChild(document.createTextNode(coffee(e.target.value)));
  });
  
  whatBrand.value = "Deathwish";
  whatBrand.dispatchEvent(event);
  
  setTimeout(()=>{
    whatBrand.value = "Foldgers";
    whatBrand.dispatchEvent(event);
  }, 15000);
  
  setTimeout(()=>{
    whatBrand.value = "Starbucks";
    whatBrand.dispatchEvent(event);
  }, 20000);
  
  setTimeout(()=>{
    whatBrand.value = "Stumptown";
    whatBrand.dispatchEvent(event);
  }, 25000);
  
  
});
