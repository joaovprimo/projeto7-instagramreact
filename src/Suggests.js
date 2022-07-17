const suggest = [
{img:"img/bad.vibes.memes.svg", 
name:"bad.vibes.memes",
 motivation:"Segue você"},

 {img:"img/chibirdart.svg", 
name:"chibirdart",
 motivation:"Segue você"},

{img:"img/razoesparaacreditar.svg", 
name:"razoesparaacreditar",
 motivation:"Novo no Instagram"},

 {img:"img/adorable_animals.svg", 
name:"adorableanimals",
 motivation:"Segue você"},

 {img:"img/smallcutecats.svg", 
name:"smallcutecats",
 motivation:"Segue você"}
] 

export default function Suggests(){
return (
    <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
    {suggest.map((elements)=> <ListSuggest img={elements.img} name={elements.name} motivation={elements.motivation}/>)}
    </div>
);
}

function ListSuggest(props){
    return (
        <div class="sugestao">
              <div class="usuario">
                <img src={props.img} alt=""/>
                <div class="texto">
                  <div class="nome">{props.name}</div>
                  <div class="razao">{props.motivation}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
    )
}