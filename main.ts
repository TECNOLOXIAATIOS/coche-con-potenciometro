let VELOCIDADE = 0
basic.forever(function () {
    VELOCIDADE = Math.map(PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J1), 0, 1023, 0, 100)
    neZha.setMotorSpeed(neZha.MotorList.M1, VELOCIDADE)
    neZha.setMotorSpeed(neZha.MotorList.M4, VELOCIDADE)
})
