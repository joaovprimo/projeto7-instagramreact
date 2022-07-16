function BoxStories(props){
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt=""/>
            </div>
            <div class="usuario">
                {props.title}
            </div>
        </div>
    );
}

export default function Stories(){
const ListStories = [{img:"9gag.svg", title :"9gag"}, {img:"img/meowed.svg", title :"meowed"}, {img:"img/barked.svg", title :"barked"}, {img:"img/nathanwpylestrangeplanet.svg", title :"nathanwpylestrangeplanet"}
, {img:"img/wawawicomics.svg", title :"wawawicomics"}, {img:"img/respondeai.svg", title :"respondeai"}, {img:"img/filomoderna.svg", title :"filomodena"},
{img:"img/memeriagourmet.svg", title :"memeriagourmet"}];

    return (
        <div class="stories">
            {ListStories.map((list)=> <BoxStories img={list.img} title={list.title}/>)}
            <Arrow/>
        </div>
        
    );
}

function Arrow(){
    return (
<div class="setinha">
<ion-icon name="chevron-forward-circle"></ion-icon>
</div>
);
}
