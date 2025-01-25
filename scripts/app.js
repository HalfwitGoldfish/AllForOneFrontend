const menuOpenBtn = document.getElementById( "menuOpenBtn" );
const menuCloseBtn = document.getElementById( "menuCloseBtn" );
const mobileMenu = document.getElementById( "mobileMenu" );

menuOpenBtn.addEventListener( "click", async () =>
    {
        menuOpenBtn.classList.add("hidden");
        mobileMenu.classList.remove("hidden");
        menuCloseBtn.classList.remove("hidden");
    });

menuCloseBtn.addEventListener( "click", async () =>
    {
        menuOpenBtn.classList.remove("hidden");
        mobileMenu.classList.add("hidden");
        menuCloseBtn.classList.add("hidden");
    });