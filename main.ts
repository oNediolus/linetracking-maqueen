// ウインカー右
function maqBlinkLedR() {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
}

// ウインカー左
function maqBlinkLedL() {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(100)
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
}

// 止まる
function maqStop() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(200)
}

// 進む
function maqforward(x: number) {
    let t: number;
    if (x == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        t = 4500 * x
        basic.pause(t)
        maqStop()
    }
    
}

// 後退する
function maqBackward(x: number) {
    let t: number;
    if (x == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        t = 4500 * x
        basic.pause(t)
        maqStop()
    }
    
}

// 左に曲がる
function maqTurnLeft() {
    maqBlinkLedL()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 225)
    basic.pause(425)
    maqStop()
}

// 右に曲がる
function maqTurnRight() {
    maqBlinkLedR()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 225)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(425)
    maqStop()
}

// ハンドル操作左曲がり
function maqSteerLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 160)
}

// ハンドル操作右曲がり
function maqSteerRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 160)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

// ライントレース用右回り
function maqSlightRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
}

// ライントレース用左回り
function maqSlightLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
}

// ###################################################################################################################################
basic.forever(function on_forever() {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        // basic.show_string("S")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        // basic.show_string("R")
        maqSlightRight()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        // basic.show_string("L")
        maqSlightLeft()
    }
    
})
