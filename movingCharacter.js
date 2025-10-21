// Create an object containing animated character data
const characterDataBeeKeeper = {
    arrImgs: ["walking e0000.png", "walking e0001.png",
        "walking e0002.png", "walking e0003.png", "walking e0004.png",
        "walking e0005.png", "walking e0006.png", "walking e0007.png"],
    poseNumber: 0,
    elem: document.querySelector("#beekeeper"),
    screenWidth: document.querySelector("#park").clientWidth,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 0,
    y: document.querySelector("#park").scrollHeight - 100,
    timerId: null,
    speed: 5,
    // walking east 
    move : function() {
        if (this.x > this.screenWidth - 150) {
            characterDataBeeKeeper.x = 5;
        } else {
            this.x += this.speed;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "beekeeper\\" + this.arrImgs[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }

}


const characterDataFarmer = {
    arrImgs: ["walking se0000.png", "walking se0001.png",
        "walking se0002.png", "walking se0003.png", "walking se0004.png",
        "walking se0005.png", "walking se0006.png", "walking se0007.png"],
    poseNumber: 0,
    elem: document.querySelector("#farmer"),
    screenWidth: document.querySelector("#park").clientWidth,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 0,
    y: 50,
    timerId: null,
    speed: 4.5 ,

    // walking south east
    move : function() {
        if ((this.x > this.screenWidth - 150) || (this.y > this.screenHeight - 100)) {
            characterDataFarmer.x = -50;
            characterDataFarmer.y = 10;
        } else {
            this.x += this.speed;
            this.y += this.speed;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "farmer\\" + this.arrImgs[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }

}

const characterDataBirb = {
    arrImgsW: [
        "birbFly w0001.png", "birbFly w0002.png",
        "birbFly w0003.png", "birbFly w0004.png", "birbFly w0005.png",
        "birbFly w0006.png", "birbFly w0007.png", "birbFly w0008.png", 
        "birbFly w0009.png", "birbFly w0010.png", "birbFly w0011.png",
        "birbFly w00012.png", "birbFly w0013.png"
        ],

    arrImgsE: [
        "birbFly e0001.png", "birbFly e0002.png",
        "birbFly e0003.png", "birbFly e0004.png", "birbFly e0005.png",
        "birbFly e0006.png", "birbFly e0007.png", "birbFly e0008.png", 
        "birbFly e0009.png", "birbFly e0010.png", "birbFly e0011.png",
        "birbFly e00012.png", "birbFly e0013.png"
        ],

    poseNumber: 1,
    elem: document.querySelector("#birb1"),
    screenWidth: document.querySelector("#park").clientWidth,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 0,
    y: 80,
    timerId: null,
    direction: "east",
    speed: 3,
    birdStatus: "alive",
    move : function() {
        if (this.direction == "east") { // going east
            this.x += this.speed;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "birb\\" + this.arrImgsE[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 8;
            if (this.x > this.screenWidth-50 && this.direction == "east"){ // change direction
                this.direction = "west";
            }
            
        } 
        else if (this.direction == "west") { // going west
            this.x -= this.speed;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "birb\\" + this.arrImgsW[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 8;
            if (this.x <= 0 && this.direction == "west"){ // change direction
                this.direction = "east";
            }

        } 
    },

    // kill bird method
    killBird : function() {
        // set bird wings in the air based on direction
        if (this.direction == "east") {
            this.elem.src = "birb\\" + this.arrImgsE[1];
            
        } else {
            this.elem.src = "birb\\" + this.arrImgsW[1];
        }

        // falling
        if (this.y < this.screenHeight) {
            this.y += 5;
            this.elem.style.top = this.y + "px";
        }

    }

}

const characterDataBirb2 = {
    // west and east images
    arrImgsW: [
        "birbFly w0001.png", "birbFly w0002.png",
        "birbFly w0003.png", "birbFly w0004.png", "birbFly w0005.png",
        "birbFly w0006.png", "birbFly w0007.png", "birbFly w0008.png", 
        "birbFly w0009.png", "birbFly w0010.png", "birbFly w0011.png",
        "birbFly w00012.png", "birbFly w0013.png"
        ],

    arrImgsE: [
        "birbFly e0001.png", "birbFly e0002.png",
        "birbFly e0003.png", "birbFly e0004.png", "birbFly e0005.png",
        "birbFly e0006.png", "birbFly e0007.png", "birbFly e0008.png", 
        "birbFly e0009.png", "birbFly e0010.png", "birbFly e0011.png",
        "birbFly e00012.png", "birbFly e0013.png"
        ],

    poseNumber: 1,
    elem: document.querySelector("#birb2"),
    screenWidth: document.querySelector("#park").clientWidth,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: (document.querySelector("#park").clientWidth),
    y: 200,
    timerId: null,
    direction: "west",
    speed: 10,
    birdStatus: "alive",
    move : function() {

        if (this.direction == "east") { // going east
            this.x += this.speed;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "birb\\" + this.arrImgsE[this.poseNumber];

            this.poseNumber = (this.poseNumber + 1) % 8;
            if (this.x > this.screenWidth-50 && this.direction == "east"){ // change direction
                this.direction = "west";
            }
            
        } 
        else if (this.direction == "west") { // going west
            this.x -= this.speed;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "birb\\" + this.arrImgsW[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 8;
            if (this.x <= 0 && this.direction == "west"){ // change direction
                this.direction = "east";
            }

        } 
    },

    // kill the bird method
    killBird : function() {
        // set bird wings in the air based on direction
        if (this.direction == "east") {
            this.elem.src = "birb\\" + this.arrImgsE[1];
            
        } else {
            this.elem.src = "birb\\" + this.arrImgsW[1];
        }

        // falling
        if (this.y < this.screenHeight) {
            this.y += 5;
            this.elem.style.top = this.y + "px";
        }

    }

}


// Function called when the move it button is clicked
function move() {

    let moveButton = document.querySelector("#moveButton");

    // different conditions checking button text and bird 1 status. i got lazy and didn't add checks for bird 2
    if (moveButton.innerText == "Move It!" && characterDataBirb.birdStatus == "alive") {
        characterDataBeeKeeper.speed = 5;
        characterDataFarmer.speed = 4.5;
        characterDataBirb.speed = 3;
        characterDataBirb2.speed = 5;
        

        characterDataBeeKeeper.timerId = setInterval(frame, 100);
        characterDataFarmer.timerId = setInterval(frame, 100);
        characterDataBirb.timerId = setInterval(frame, 100);
        characterDataBirb2.timerId = setInterval(frame, 100);

        moveButton.innerText = "Faster!!!";

    } else if (moveButton.innerText == "Move It!" && characterDataBirb.birdStatus == "dead") {
        characterDataBeeKeeper.speed = 5;
        characterDataFarmer.speed = 4.5;
        characterDataBirb.speed = 3;
        characterDataBirb2.speed = 5;

        characterDataBeeKeeper.timerId = setInterval(frame, 100);
        characterDataFarmer.timerId = setInterval(frame, 100);
        moveButton.innerText = "Faster!!!";

    } else if (moveButton.innerText == "Faster!!!" && characterDataBirb.birdStatus == "dead") {
        characterDataBeeKeeper.speed += 3;
        characterDataFarmer.speed += 3;
        console.log("increased speed by 3");

    } else {
        characterDataBeeKeeper.speed += 3;
        characterDataFarmer.speed += 3;
        characterDataBirb.speed += 3;
        characterDataBirb2.speed += 3;
        console.log("increased speed by 3");
    }
    
    
    
}

// Callback function to reset the image position
function frame() {
    
    // they will always move
    characterDataBeeKeeper.move();
    characterDataFarmer.move();

    // check bird 1 status
    if(characterDataBirb.birdStatus == "alive") {
        characterDataBirb.move();
    } else if (characterDataBirb.birdStatus == "dead") {
        characterDataBirb.killBird();
    }

    // check bird 2 status
    if(characterDataBirb2.birdStatus == "alive") {
        characterDataBirb2.move();
    } else if (characterDataBirb2.birdStatus == "dead") {
        characterDataBirb2.killBird();
    }
    
    
}

// Function called when the stop button is clicked
function stopMoving() {
    
    // stop all characters
    clearInterval(characterDataBeeKeeper.timerId);
    clearInterval(characterDataFarmer.timerId);
    clearInterval(characterDataBirb.timerId);
    clearInterval(characterDataBirb2.timerId);

    let moveButton = document.querySelector("#moveButton");
    moveButton.innerText = "Move It!";

    
}

/* You can add more characters and process the animation with an array */
const characters = [characterDataBeeKeeper, characterDataFarmer, characterDataBirb, characterDataBirb2];
