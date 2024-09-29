// Recuperation des donnnes depuis le fichier json

const response = await fetch("pieces-autos.json");
const pieces = await response.json();

const tmps = pieces.length

for (let i = 0; i < tmps; i++ ){

    // Recuperons l'element section

    const sectionElement = document.querySelector(".fiches")
    const article = document.createElement("article")
    sectionElement.appendChild(article)
    // ajoutons l'image
    const imgElement = document.createElement("img")
    imgElement.src = pieces[i].image
    article.appendChild(imgElement)

    // Ajoutons le nom
    const nomElements = document.createElement("h3")
    nomElements.innerText = pieces[i].nom;
    article.appendChild(nomElements)

    // Ajoutons le prix
    const prixElements = document.createElement("h3")
    prixElements.innerText = pieces[i].prix;
    article.appendChild(prixElements)

    // Ajoutons la categorie
    const categorieElements = document.createElement("h3")
    categorieElements.innerText = pieces[i].categorie;
    article.appendChild(categorieElements)

    // Ajoutons la description
    const descElements = document.createElement("h3")
    descElements.innerText = pieces[i].description;
    article.appendChild(descElements)

    // Ajoutons la disponibilite
    const dispoElements = document.createElement("h3")
    dispoElements.innerText = pieces[i].disponibilite;
    article.appendChild(dispoElements)

}

const croissantBtn = document.querySelector(".btn-trier")

croissantBtn.addEventListener("click" , () => {

    const croissant = Array.from(pieces);

    croissant.sort((a, b) => b.prix - a.prix)

    console.log(croissant)

})

const filterButton = document.querySelector(".btn-filtrer")

filterButton.addEventListener("click", () => {

    const filterd = pieces.filter((piece) => piece.description !== "")

    console.log(filterd)
})


const noms = pieces.map( (piece) => piece.nom)

for (let i = pieces.length - 1; i >= 0; i--) {

    if(pieces[i].prix > 35){
        noms.splice(i, 1)
    }

}

const ulELement = document.createElement("ul")

for (let i = 0; i < noms.length; i++){

    const listElement = document.createElement("li")
    listElement.innerHTML = noms[i]

    ulELement.appendChild(listElement)
}

document.querySelector(".abordables").appendChild(ulELement)





