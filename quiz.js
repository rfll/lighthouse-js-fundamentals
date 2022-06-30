var x = 60;

while ( x >= 1) {
    if (x === 1) {
        console.log("T-" + x + " seconds" + "\nSolid rocket booster ignition and liftoff!");
    }
    else if (x === 6) {
        console.log("T-" + x + " seconds" + "\nMain engine start");
    }
    else if (x === 10) {
        console.log("T-" + x + " seconds" + "\nActivate main engine hydrogen burnoff system");
    }
    else if (x === 16) {
        console.log("T-" + x + " seconds" + "\nActivate launch pad sound suppression system");
    }
    else if (x === 31) {
        console.log("T-" + x + " seconds" + "\nGround launch sequencer is go for auto sequence start");
    }
    else if (x === 51) {
        console.log("T-" + x + " seconds" + "\nOrbiter transfers from ground to internal power");
    }
    else {console.log("T-" + x + " seconds");
    }
    x = x - 1;
}