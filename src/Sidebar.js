import Suggests from "./Suggests";

let list=[{nam:"links",txt:"Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"},
{name:"copyright", txt:"© 2021 INSTAGRAM DO FACEBOOK"}];
const obj1= {src:"img/catanacomics.svg", txt1:"catanacomics", txt2:"Catana"};

export default function Sidebar(){
    return(
        <div class="sidebar">
        {obj1.map = ((user)=> <User src={user.src} txt={user.txt1} txt2={user.txt2}/>)}
        <Suggests/>
       {list.map = ((element)=> <Texts class={element.nam} txt={element.txt}/>)}
      </div>    
    );
}

function Texts (props){
return(
     <div class={props.nam}>{props.txt}</div>
);
}

function User (props){
    
    return(
    <div class="usuario">
            <img src={props.src} alt=""/>
            <div class="texto">
              <strong>{props.txt1}</strong>
              {props.txt2}
            </div>
          </div>
    );
}