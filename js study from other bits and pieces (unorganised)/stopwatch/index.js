// console.log("Hello World");
// var test = "test";

// function myFunction() {
//     console.log("Hello World 2");
// };

let isRunning = false;
// let value;
// let startDate;


function run() {
    console.log("test");
    if (isRunning) {
        console.log("isRunning");
        // let currentDate = new Date();
        // // let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

        // if ((currentDate.getTime() - startDate.getTime()) >= 1000 ) {
        //     value++;
        //     console.log(value);
        // }
    }
    
    run();
}

function start(){
    isRunning = true;
    // startDate = new Date();

    /*
    Get the current time, set this to startTime
    set isRunning to true
    create a while loop based on if isRunning is true or not
        get the current time
        take startTime away from the new current time
        if this is bigger than 1 second
            increase value by 1
    output this value

    */


    // let startDate = new Date();
    // // let startTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    // isRunning = true;



    // while(isRunning) {
    //     let currentDate = new Date();
    //     // let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

    //     if ((currentDate.getTime() - startDate.getTime()) >= 1000 )
    //         value++;
    // }

    // console.log(value);
    // start();
};


function stop() {
    isRunning = false;
};

// var date = new Date(0);
// date.setSeconds(450000); // specify value for SECONDS here
// var timeString = date.toISOString().substr(11, 8);
// console.log(timeString)



/*
Start
    When clicked it will start the timer
    If the timer is already running then it will do nothing
    If the timer is paused then it will continue the timer from when it was paused
    If the timer is at 0 then it will start from that time

Stop
    Stops the timer
    When clicked it will stop the timer
    If the timer is not running then it will do nothing

Reset
    When clicked it will reset eveything
    The timer will be reset to 0 and it will not be running.

*/

/*
isRunning is global
value is global

Start
    Get the current time, set this to startTime
    set isRunning to true
    create a while loop based on if isRunning is true or not
        get the current time
        take startTime away from the new current time
        if this is bigger than 1 second
            increase value by 1
    output this value

Stop
    set isRunning to false

Reset
    set value to 0 and isRunning to false

*/
