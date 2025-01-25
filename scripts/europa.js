const europaBtn = document.getElementById( "europaBtn" );
const europaNum = document.getElementById( "europaNum" );
const europaBox = document.getElementById( "europaBox" );
const europaText = document.getElementById( "europaText" );

europaBtn.addEventListener ( "click", async () =>
    {
        let num = europaNum.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/oddoreven/oddoreven/${num}` );
        const data = await response.text();
        europaText.innerText = data;
        europaBox.classList.remove("hidden");
    });