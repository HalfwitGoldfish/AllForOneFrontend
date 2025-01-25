const mercuryBtn = document.getElementById( "mercuryBtn" );
const mercuryNum1 = document.getElementById( "mercuryNum1" );
const mercuryNum2 = document.getElementById( "mercuryNum2" );
const mercuryBox = document.getElementById( "mercuryBox" );
const mercuryText = document.getElementById( "mercuryText" );

const mercury2Btn = document.getElementById( "mercury2Btn" );
const mercury2Num1 = document.getElementById( "mercury2Num1" );
const mercury2Num2 = document.getElementById( "mercury2Num2" );

mercuryBtn.addEventListener ( "click", async () =>
    {
        let num1 = mercuryNum1.value;
        let num2 = mercuryNum2.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/add2numbers/add/${num1}/${num2}` );
        const data = await response.text();
        mercuryText.innerText = data;
        mercuryBox.classList.remove("hidden");
    });

mercury2Btn.addEventListener ( "click", async () =>
    {
        let num1 = mercury2Num1.value;
        let num2 = mercury2Num2.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/add2numbers/add/${num1}/${num2}` );
        const data = await response.text();
        mercuryText.innerText = data;
        mercuryBox.classList.remove("hidden");
    });