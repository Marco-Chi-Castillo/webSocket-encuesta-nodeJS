var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', function (data) {
  console.log(data);
  render(data);
})

function render(data) {
  let id = 0;
  data.map(function (elem, index) {
    id = elem.select;
    // setTimeout(function () { location.reload(); }, 3000);
  }).join(" ");
  inspeccion(id);
}

function addMessage(e) {
  var select = document.getElementById("lenguajes");
  var message = {
    select: select.value
  };
  socket.emit('new-message', message);
  // location.reload()
  return false;
}

let inspeccion = (id) => {

  try {
    valor = document.getElementById(id).textContent;
    let nuevoValor = Number(valor) + 1;
    document.getElementById(id).innerHTML = nuevoValor;
  } catch (error) {

  }
}


