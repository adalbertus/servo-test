function driveBackward (ms: number) {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
    if (ms > 0) {
        basic.pause(ms)
        driveStop()
    }
}
function driveForward (ms: number) {
    pins.servoWritePin(AnalogPin.P1, 80)
    pins.servoWritePin(AnalogPin.P2, 100)
    
    basic.pause(50)
    pins.servoWritePin(AnalogPin.P1, 70)
    pins.servoWritePin(AnalogPin.P2, 120)
    
    basic.pause(30)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
        
    // basic.pause(20)
    // pins.servoWritePin(AnalogPin.P1, 0)
    if (ms > 0) {
        basic.pause(ms)
        driveStop()
    }
}

function driveForward2 (ms: number) {
    pins.servoWritePin(AnalogPin.P1, 85)
    pins.servoWritePin(AnalogPin.P2, 95)
    
    basic.pause(50)
    pins.servoWritePin(AnalogPin.P1, 80)
    pins.servoWritePin(AnalogPin.P2, 100)
    
    basic.pause(50)
    pins.servoWritePin(AnalogPin.P1, 70)
    pins.servoWritePin(AnalogPin.P2, 120)

    basic.pause(30)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
        
    // basic.pause(20)
    // pins.servoWritePin(AnalogPin.P1, 0)
    if (ms > 0) {
        basic.pause(ms)
        driveStop()
    }
}

function driveStop () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}

input.onButtonPressed(Button.A, function () {
    basic.pause(250)
    driveForward(1000)    
})

input.onButtonPressed(Button.B, function () {
    basic.pause(250)
    driveForward2(1000)    
})
basic.forever(function () {
    basic.pause(100)
})
