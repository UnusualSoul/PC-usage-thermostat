    const test = document.querySelectorAll("img");
    // const test2 = document.querySelectorAll("background-image");
    // for (let index = 0; index < test2.length; index++) {
    //     const element = test2[index];
    //     element.remove();   
    // }
    
    const h1 = test.appendChild("h1");
    h1.innerText = "LET'S GOOOOOOOOOOOO!!!";
    console.log('h1.innerText :', h1.innerText);

    function addMinutes(seconds) {
        if(seconds)
            return Date.now() + seconds*1000;
        else
            return Date.now() + 1000 // one minute;
    }
    
    //time
    function calculateTimeRemaining(endTime){
        return endTime - Date.now();
    }
