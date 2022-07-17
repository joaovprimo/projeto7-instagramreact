import React from 'react';

let ListPost=[{
    img1:"img/meowed.svg", 
    title:"meowed",
    img2:"img/gato-telefone.svg",
    img3:"img/respondeai.svg",
    txt1:"respondeai",
    txt2:"outras 101.523 pessoas"
},
{
    img1:"img/barked.svg", 
    title:"barked",
    img2:"img/dog.svg",
    img3:"img/adorable_animals.svg",
    txt1:"adorable_animals",
    txt2:"outras 99.159 pessoas"
}
]

export default function Posts(){
return(
<div class="posts">
 {ListPost.map((elements)=> <Post img1={elements.img1} title={elements.title} img2={elements.img2} img3={elements.img3}
 txt1={elements.txt1} txt2={elements.txt2}/>)} 
</div>
);
}

function Post(props){
  const [corButton, setCorButton] = React.useState("");
  const [typeButton, setTypeButton] = React.useState("heart-outline");
return (
    <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.img1} alt=""/>
                  {props.title}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.img2} onDoubleClick = {()=> {  if(typeButton==="heart-outline"){
                       setCorButton("md hydrated liked");
                       setTypeButton("heart"); }else{
                        setCorButton("md hydrated");
                        setTypeButton("heart-outline");}}} alt=""/>
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon class={corButton} name={typeButton}
                    onClick = {()=> {  if(typeButton==="heart-outline"){
                       setCorButton("md hydrated liked");
                       setTypeButton("heart"); }else{
                        setCorButton("md hydrated");
                        setTypeButton("heart-outline");
                       }}}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.img3} alt=""/>
                  <div class="texto">
                    Curtido por <strong>{props.txt1}</strong> e <strong>{props.txt2}</strong>
                  </div>
                </div>
              </div>
            </div>
);
}
