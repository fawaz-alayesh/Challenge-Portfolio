var bezoeker={
    naam : prompt("Type aub uw naam in"),
   leeftijd : prompt("Wat is je leeftijd?"),
};
if (bezoeker.naam != null) {
   let koptekst = document.querySelector("h2");
koptekst.innerHTML = "Welcome ! " + bezoeker.naam ;

console.log(bezoeker);


if (bezoeker.leeftijd >=18) {
  koptekst.style.color= 'green';
   }
    if (bezoeker.leeftijd <18) {
       koptekst.style.color = 'red';
       }
        if (bezoeker.leeftijd ==0) {
           koptekst.style.color = 'yellow';
                   }
               }