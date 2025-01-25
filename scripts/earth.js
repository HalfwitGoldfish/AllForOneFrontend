const earthBtn = document.getElementById( "earthBtn" );
const earth2Btn = document.getElementById( "earth2Btn" );
const earthNum1 = document.getElementById( "earthNum1" );
const earthNum2 = document.getElementById( "earthNum2" );
const earth2Num1 = document.getElementById( "earth2Num1" );
const earth2Num2 = document.getElementById( "earth2Num2" );
const earthBox = document.getElementById( "earthBox" );
const earthText = document.getElementById( "earthText" );

earthBtn.addEventListener ( "click", async () =>
    {
        let num1 = earthNum1.value;
        let num2 = earthNum2.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/greaterorless/greaterorless/${num1}/${num2}` );
        const data = await response.text();
        earthText.innerText = data;
        earthBox.classList.remove("hidden");
    });

earth2Btn.addEventListener ( "click", async () =>
    {
        let num1 = earth2Num1.value;
        let num2 = earth2Num2.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/greaterorless/greaterorless/${num1}/${num2}` );
        const data = await response.text();
        earthText.innerText = data;
        earthBox.classList.remove("hidden");
    });