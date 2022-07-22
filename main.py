#ウインカー右
def maqBlinkLedR():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.pause(100)
    for i in range(3):
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
        basic.pause(100)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        basic.pause(100)

#ウインカー左
def maqBlinkLedL():
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    basic.pause(100)
    for i in range(3):
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
        basic.pause(100)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        basic.pause(100)

#止まる
def maqStop():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(200)

#進む
def maqforward(x):
    if x == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        t = 4500 * x
        basic.pause(t)
        maqStop()

#後退する
def maqBackward(x):
    if x == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        t = 4500 * x
        basic.pause(t)
        maqStop()

#左に曲がる
def maqTurnLeft():
    maqBlinkLedL()
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 225)
    basic.pause(425)
    maqStop()

#右に曲がる
def maqTurnRight():
    maqBlinkLedR()
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 225)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(425)
    maqStop()

#ハンドル操作左曲がり
def maqSteerLeft():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 160)

#ハンドル操作右曲がり
def maqSteerRight():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 160)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)

#ライントレース用右回り
def maqSlightRight():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 30)

#ライントレース用左回り
def maqSlightLeft():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)


####################################################################################################################################


def on_forever():
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==0:
        #basic.show_string("S")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 200)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==0:
        #basic.show_string("R")
        maqSlightRight()
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==1:
        #basic.show_string("L")
        maqSlightLeft()
basic.forever(on_forever)