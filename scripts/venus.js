const venusBtn = document.getElementById( "venusBtn" );
const venus2Btn = document.getElementById( "venus2Btn" );
const venusName = document.getElementById( "venusName" );
const venusTime = document.getElementById( "venusTime" );
const venus2Name = document.getElementById( "venus2Name" );
const venus2Time = document.getElementById( "venus2Time" );
const venusBox = document.getElementById( "venusBox" );
const venusText = document.getElementById( "venusText" );

venusBtn.addEventListener ( "click", async () =>
    {
        let name = venusName.value;
        let time = venusTime.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/askingquestions/nameandtime/${name}/${time}` );
        const data = await response.text();
        venusText.innerText = data;
        venusBox.classList.remove("hidden");
    });

venus2Btn.addEventListener ( "click", async () =>
    {
        let name = venus2Name.value;
        let time = venus2Time.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/askingquestions/nameandtime/${name}/${time}` );
        const data = await response.text();
        venusText.innerText = data;
        venusBox.classList.remove("hidden");
    });