const titanBtn = document.getElementById( "titanBtn" );
const titanInput = document.getElementById( "titanInput" );
const titanBox = document.getElementById( "titanBox" );
const titanText = document.getElementById( "titanText" );

titanBtn.addEventListener ( "click", async () =>
    {
        let input = titanInput.value;
        const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/reverseitalphanumeric/reverseitalpha/${input}` );
        const data = await response.text();
        titanText.innerText = data;
        titanBox.classList.remove("hidden");
    });