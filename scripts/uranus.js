const uranusBtn = document.getElementById( "uranusBtn" );
const uranusNum = document.getElementById( "uranusNum" );
const uranusBox = document.getElementById( "uranusBox" );
const uranusText = document.getElementById( "uranusText" );

uranusBtn.addEventListener ( "click", async () =>
    {
        let num = uranusNum.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/reverseitnumeric/reverseitnum/${num}` );
        const data = await response.text();
        uranusText.innerText = data;
        uranusBox.classList.remove("hidden");
    });