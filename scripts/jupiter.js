const jupiterBtn = document.getElementById( "jupiterBtn" );
const jupiterQuestion = document.getElementById( "jupiterQuestion" );
const jupiterBox = document.getElementById( "jupiterBox" );
const jupiterText = document.getElementById( "jupiterText" );

jupiterBtn.addEventListener ( "click", async () =>
    {
        let question = jupiterQuestion.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/magic8ballcontrollers/magicball/${question}` );
        const data = await response.text();
        jupiterText.innerText = data;
        jupiterBox.classList.remove("hidden");
    });