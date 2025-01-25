const marsBtn = document.getElementById( "marsBtn" );
const marsAnimal = document.getElementById( "marsAnimal" );
const marsName = document.getElementById( "marsName" );
const marsFood = document.getElementById( "marsFood" );
const marsToy = document.getElementById( "marsToy" );
const marsAge = document.getElementById( "marsAge" );
const marsAnimal2 = document.getElementById( "marsAnimal2" );
const marsName2 = document.getElementById( "marsName2" );
const marsFood2 = document.getElementById( "marsFood2" );
const marsToy2 = document.getElementById( "marsToy2" );
const marsAge2 = document.getElementById( "marsAge2" );
const marsBox = document.getElementById( "marsBox" );
const marsText = document.getElementById( "marsText" );

const mars2Btn = document.getElementById( "mars2Btn" );
const mars2Animal = document.getElementById( "mars2Animal" );
const mars2Name = document.getElementById( "mars2Name" );
const mars2Food = document.getElementById( "mars2Food" );
const mars2Toy = document.getElementById( "mars2Toy" );
const mars2Age = document.getElementById( "mars2Age" );
const mars2Animal2 = document.getElementById( "mars2Animal2" );
const mars2Name2 = document.getElementById( "mars2Name2" );
const mars2Food2 = document.getElementById( "mars2Food2" );
const mars2Toy2 = document.getElementById( "mars2Toy2" );
const mars2Age2 = document.getElementById( "mars2Age2" );

marsBtn.addEventListener ( "click", async () =>
    {
        let animal = marsAnimal.value;
        let name = marsName.value;
        let food = marsFood.value;
        let toy = marsToy.value;
        let age = marsAge.value;
        let animal2 = marsAnimal2.value;
        let name2 = marsName2.value;
        let food2 = marsFood2.value;
        let toy2 = marsToy2.value;
        let age2 = marsAge2.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/madlib/madlib/${animal}/${name}/${food}/${toy}/${age}/${animal2}/${name2}/${food2}/${toy2}/${age2}` );
        const data = await response.text();
        marsText.innerText = data;
        marsBox.classList.remove("hidden");
    });

marsBtn.addEventListener ( "click", async () =>
    {
        let animal = mars2Animal.value;
        let name = mars2Name.value;
        let food = mars2Food.value;
        let toy = mars2Toy.value;
        let age = mars2Age.value;
        let animal2 = mars2Animal2.value;
        let name2 = mars2Name2.value;
        let food2 = mars2Food2.value;
        let toy2 = mars2Toy2.value;
        let age2 = mars2Age2.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/madlib/madlib/${animal}/${name}/${food}/${toy}/${age}/${animal2}/${name2}/${food2}/${toy2}/${age2}` );
        const data = await response.text();
        marsText.innerText = data;
        marsBox.classList.remove("hidden");
    });