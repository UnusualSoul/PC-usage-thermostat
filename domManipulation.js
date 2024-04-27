    //const test = document.querySelectorAll("img");
    // const test2 = document.querySelectorAll("background-image");
    // for (let index = 0; index < test2.length; index++) {
    //     const element = test2[index];
    //     element.remove();   
    // }

    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = "LETS GOOOOOOOOOOOO!!!";
    console.log('h1.innerText :', h1.innerText);
    const userInput = prompt("How many minutes would you like to spend online?", 0.1)
    let seconds = Number(userInput) * 60;
    const endTime = addMinutes(seconds);
    const fullDuration = calculateTimeRemaining(endTime);
    const partialTime = Math.floor(fullDuration / 10)
    const percent10 = partialTime * 9;
    const percent20 = partialTime * 8;
    const percent30 = partialTime * 7;
    const percent40 = partialTime * 6;
    const percent50 = partialTime * 5;
    const percent60 = partialTime * 4;
    const percent70 = partialTime * 3;
    const percent80 = partialTime * 2;
    const percent90 = partialTime * 1;
    
    let hit50 = hit60 = false;
    let hitAgain = false;
    const interval = setInterval(() => {
        const timeRemaining = calculateTimeRemaining(endTime);
        console.log(timeRemaining);//60000 / 10 = 54000
        
        if(percent40 > timeRemaining){
            console.log("hit40")
            hitAgain = true;
        }
        if(percent30 > timeRemaining){
            console.log("hit30")
            hitAgain = true;
        }
        if(percent20 > timeRemaining){
            console.log("hit20")
            hitAgain = true;
        }
        if(percent10 > timeRemaining){
            //run dom manip
            console.log("hit10")
            hitAgain = true;
        }
            
        //change images to outdoor images

        if (percent50 > timeRemaining && !hit50) {
            alert('50% time passed! Go outside!');
            hit50 = true;
        }

        if (percent60 > timeRemaining && !hit60) {
            alert('60% time passed! Go outside!');
            hit60 = true;
        }

        if (percent70 > timeRemaining && !hit70) {
            const newMessage = document.createElement("h1");
            document.body.appendChild(newMessage);
            newMessage.innerText = "LETS GO OUTSIDEEEEEEE!!!";       
            console.log(newMessage); 
        }


        if(timeRemaining <= 0)
        clearInterval(interval);
    }, 500)


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
