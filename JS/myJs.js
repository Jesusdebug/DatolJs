class Celular {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color
    this.peso = peso
    this.resolucionPantalla = rdp
    this.resolucionCamara = rdc
    this.memoriaRam = ram
  }
  precionarBntEncendido() {
    if (this.encendido == false) {
      alert('Encendido')
      this.encendido= true
    } else alert('apagado')
    this.encendido==false
  }
  reinciar() {
    if (this.encendido == true) {
      alert('reiniando celular')
    } else {
      alert('el celular esta apagado')
    }
  }
  tomarFoto() {
    alert(`foto tomada en una resolucion de : ${this.resolucionPantalla}`)
  }
  gravarVideo() {
    alert(`grabando video en ${this.resolucionCamara}`)
  }
  mostrarInformacion(){
      return`
      color: <b>${this.color}</b></br>
      Peso: <b>${this.peso}</b></br>
      Tamaño: <b>${this.peso}</b></br>
      Resolucion de camara: <b>${this.resolucionPantalla}</b></br>
      Resolucion de video: <b>${this.resolucionCamara}</b></br>
      Ram: <b>${this.memoriaRam}</b></br>
      `;
  }
}
celular1 = new Celular('rojo', '150g', '5pugadas', 'full', '2gb');
celular2 = new Celular('negro', '155g', '5.5pugadas', 'full hd', '20gb');
celular3 = new Celular('blanco', '15046g', '6pugadas', 'full hd', '40gb');
// celular1.precionarBntEncendido();
// celular1.tomarFoto();
// celular1.gravarVideo();
// celular1.reinciar();
// celular1.precionarBntEncendido();
document.write(`
${celular1.mostrarInformacion()}<br>
${celular2.mostrarInformacion()}<br>
${celular3.mostrarInformacion()}<br>
`);
