import Suggests from "./Suggests";

let list=[{nam:"links",txt:"Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"},
{name:"copyright", txt:"© 2021 INSTAGRAM DO FACEBOOK"}];

export default function Sidebar(){
    return(
        <div class="sidebar">
        <User/>
        <Suggests/>;
       {list.map = ((element)=> <Texts class={element.nam} txt={element.txt}/>)}
      </div>    
    );
}

function Texts (props){
return(
     <div class={props.nam}>{props.txt}</div>
);
}

function User (){
    const obj1= {src:"img/catanacomics.svg", txt1:"catanacomics", txt2:"Catana"};
    return(
    <div class="usuario">
            <img src={obj1.src} alt=""/>
            <div class="texto">
              <strong>{obj1.txt1}</strong>
              {obj1.txt2}
            </div>
          </div>
    );
}