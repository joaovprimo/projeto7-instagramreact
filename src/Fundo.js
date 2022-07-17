const Listion = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];

export default function Fundo(){
return(
<div class="fundo-mobile">
{Listion.map((icon)=> <ion-icon name={icon}></ion-icon>)}
</div>
);
}

