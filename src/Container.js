
export default function Container() {
    return (
        <div class="container">
            <LogoType />
            <LogoMobile />
            <InstagramMobile />
            <Search />
            <Icons />
            <IconesMobile />
        </div>
    );
}

function LogoType() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="img/logo.png" alt=""/>
        </div>
    );
}

function LogoMobile() {
    return (
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    );
}

function InstagramMobile() {
    return (
        <div class="instagram-mobile">
            <img src="img/logo.png" alt=""/>
        </div>
    );
}

function Search() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}

function Icons() {
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    return (
        <div class="icones">
            {icons.map((ion) => <ion-icon name={ion}></ion-icon>)}
        </div>
    );
}

function IconesMobile() {
    return (
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}


