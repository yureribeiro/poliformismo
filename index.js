class Veiculo {
  move() {
    console.log('o veiculo está em movimento')
  }
}

class Car extends Veiculo {
  move() {
    console.log('o carro está em movimento')
  }
}

class Aeronave extends Veiculo {
  move(speed) {
    console.log(`A aeronave está a ${speed} km/h.`)
  }
}

const camaro = new Car()
const latam = new Aeronave()


function start(veiculo) {
  console.log('Iniciando um veiculo...')
  veiculo.move()
}

start(camaro)
start(latam)