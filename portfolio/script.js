var bezoeker={
    naam : prompt("Type aub uw naam in"),
   leeftijd : prompt("Wat is je leeftijd?"),
};
if (bezoeker.naam != null) {
   let koptekst = document.querySelector("h2");
koptekst.innerHTML = "Welcome dear! " + bezoeker.naam + " to my page" ;

console.log(bezoeker);


if (bezoeker.leeftijd >=18) {
  koptekst.style.color= 'lightgreen';
   }
    if (bezoeker.leeftijd <18) {
       koptekst.style.color = 'red';
       }
        if (bezoeker.leeftijd ==null) {
           koptekst.style.color = 'yellow';
                   }
               }
