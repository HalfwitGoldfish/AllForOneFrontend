const saturnBtn = document.getElementById( "saturnBtn" );
const saturnType = document.getElementById( "saturnType" );
const saturnBox = document.getElementById( "saturnBox" );
const saturnText = document.getElementById( "saturnText" );

saturnBtn.addEventListener ( "click", async () =>
    {
        let type = saturnType.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/${type}` );
        const data = await response.text();
        saturnText.innerText = data;
        saturnBox.classList.remove("hidden");
    });