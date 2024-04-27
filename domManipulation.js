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
    
    let hit50 = false;
    let hit60 = false;
    let hit70 = false;
    let hit80 = false;
    let hit90 = false;

    let firstTime10 = firstTime20 = firstTime30 = firstTime40 = true;
    let hitAgain = true;
    const interval = setInterval(() => {
        // if(!firstTime10)
        //     hitAgain = false;
        
        const timeRemaining = calculateTimeRemaining(endTime);
        console.log(timeRemaining);//60000 / 10 = 54000
        
        // if((percent40 > timeRemaining && firstTime40) || hitAgain){
        //     console.log("hit40")
        //     firstTime40 = false;
        //     hitAgain = true;
        // }
        // if((percent30 > timeRemaining && firstTime30) || hitAgain){
        //     console.log("hit30")
        //     firstTime30 = false;
        //     hitAgain = true;
        // }
        // if((percent20 > timeRemaining && firstTime20) || hitAgain){
        //     console.log("hit20")
        //     firstTime20 = false;
        //     hitAgain = true;
        // }
        // if((percent10 > timeRemaining && firstTime10) || hitAgain){
        //     //run dom manip
        //     console.log("hit10")
        //     firstTime10 = false;
        //     hitAgain = true;
        // }
            
        //change images to outdoor images

        if (percent50 > timeRemaining && !hit50) {
            // alert('50% time passed! Go outside!');
            const newImage = document.querySelectorAll("img");
            for (let i = 0; i < newImage.length; i++) {
                newImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6zt50rc9YX61OUe9DfmPSh8hgxkDWl6NxqAaaIaZm2e_4hKlL72RIvEIqeskPAkl860&usqp=CAU"; // Replace with your actual image URL
            }
            //document.body.appendChild(newImage);
            hit50 = true;
        }

        if (percent60 > timeRemaining && !hit60) {
            // alert('60% time passed! Go outside!');
            const allSpan = document.cre
            hit60 = true;
        }

        if (percent70 > timeRemaining && !hit70) {
            const newMessage = document.createElement("h1");
            document.body.appendChild(newMessage);
            newMessage.innerText = "LETS GO OUTSIDEEEEEEE!!!";       
            console.log(newMessage); 
            hit70 = true;
        }
        
        if (percent80 > timeRemaining && !hit80) {
            const newImage = document.createElement("img");
            newImage.src = "https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI="; // Replace with your actual image URL
            document.body.children[0].appendChild(newImage);
            console.log('image added'); 
            hit80 = true;
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
