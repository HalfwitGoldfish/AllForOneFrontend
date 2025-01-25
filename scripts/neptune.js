const neptuneBtn = document.getElementById( "neptuneBtn" );
const neptuneName = document.getElementById( "neptuneName" );
const neptuneBox = document.getElementById( "neptuneBox" );
const neptuneText = document.getElementById( "neptuneText" );

neptuneBtn.addEventListener ( "click", async () =>
    {
        let name = neptuneName.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/sayhello/sayhello/${name}` );
        const data = await response.text();
        neptuneText.innerText = data;
        neptuneBox.classList.remove("hidden");
    });