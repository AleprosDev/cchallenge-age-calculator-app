

const fecha = new Date();
const AnoActual = fecha.getFullYear();
const MesActual = fecha.getMonth() + 1;
const DiaActual = fecha.getDate();

const dia = document.getElementById('day');
const mes = document.getElementById('month');
const ano = document.getElementById('year');
const svgImg = document.getElementById('svgArrow');

const DiaContainer = document.getElementById('DiaContainer');
const MesContainer = document.getElementById('MesContainer');
const AnoContainer = document.getElementById('AnoContainer');

const dayError = document.getElementById('dayError');
const monthError = document.getElementById('monthError');
const yearError = document.getElementById('yearError')

const day__error = document.getElementById('day__error')
const month__error = document.getElementById('month__error')
const year__error = document.getElementById('year__error')

svgImg.addEventListener('click', function () {
    if (!dia.value && !mes.value && !ano.value) {
        mostrarError("Todos los campos deben estar llenos.", 'todos');
        dayError.style.display = 'block';
        monthError.style.display = 'block';
        yearError.style.display = 'block';
        document.querySelector('.label-day').classList.add('label-day-error');
        document.querySelector('.label-month').classList.add('label-month-error');
        document.querySelector('.label-year').classList.add('label-year-error');
        return;
    }
    
    if (!dia.value) {
        mostrarError("This field is required.", 'dia');
        dayError.style.display = 'block';
        document.querySelector('.label-day').classList.add('label-day-error');
        return;
    }
    
    if (!mes.value) {
        mostrarError("This field is required.", 'mes');
        monthError.style.display = 'block';
        document.querySelector('.label-month').classList.add('label-month-error');
        return;
    }
    
    if (!ano.value) {
        mostrarError("This field is required.", 'ano');
        yearError.style.display = 'block';
        document.querySelector('.label-year').classList.add('label-year-error');
        return;
    }

    resetearMensajesError()

    

    // Validar que el día esté entre 1 y 31
    const diaValue = parseInt(dia.value);
    if (diaValue < 1 || diaValue > 31) {
        mostrarError("El número del día debe estar entre 1 y 31.")
        day__error.style.display = 'block';
        dia.classList.add('error-border-day');
        document.querySelector('.label-day').classList.add('label-day-error');
        return; // Detener la ejecución si el día no está en el rango
    }

    // Validar que el mes esté entre 1 y 12
    const mesValue = parseInt(mes.value);
    if (mesValue < 1 || mesValue > 12) {
        mostrarError("El número del mes debe estar entre 1 y 12.");
        month__error.style.display = 'block';
        mes.classList.add('error-border-month');
        document.querySelector('.label-month').classList.add('label-month-error');
        return; // Detener la ejecución si el mes no está en el rango
    }

    const fechaIngresada = new Date(ano.value, mesValue - 1, diaValue);
     // mesValue - 1 porque los meses en JavaScript van de 0 a 11
    if (
        fechaIngresada.getFullYear() !== parseInt(ano.value) ||
        fechaIngresada.getMonth() !== mesValue - 1 ||
        fechaIngresada.getDate() !== diaValue
    ) {
        mostrarError("La fecha ingresada es inválida.");
        year__error.style.display = 'block';
        ano.classList.add('error-border-year');
        document.querySelector('.label-year').classList.add('label-year-error');
        return; // Detener la ejecución si la fecha es inválida
    }

    // Validar que la fecha no sea en el futuro
    if (fechaIngresada > fecha) {
        mostrarError("La fecha no puede estar en el futuro.");
        year__error.style.display = 'block';
        ano.classList.add('error-border-year');
        document.querySelector('.label-year').classList.add('label-year-error');  
        return; // Detener la ejecución si la fecha está en el futuro
    }


    // Obtener los valores de los días, meses y años
    const diaCalculado  = DiaActual - dia.value + 30;
    const mesCalculado  = MesActual - mes.value + 12;
    const anoCalculado  = AnoActual - ano.value;

    // Actualizar el contenido de los divs
    DiaContainer.textContent = diaCalculado ;
    DiaContainer.style.letterSpacing = '0.7rem';
    DiaContainer.style.marginRight = '0rem';
    MesContainer.textContent = mesCalculado ;
    MesContainer.style.letterSpacing = '0.7rem';
    MesContainer.style.marginRight = '0rem';
    AnoContainer.textContent = anoCalculado ;
    AnoContainer.style.letterSpacing = '0.7rem';
    AnoContainer.style.marginRight = '0rem';

    // Restablecer estilos al hacer clic en la imagen

});

function resetearMensajesError() {
    // Ocultar los mensajes de error
    document.getElementById('dayError').style.display = 'none';
    document.getElementById('monthError').style.display = 'none';
    document.getElementById('yearError').style.display = 'none';
    document.getElementById('day__error').style.display = 'none';
    document.getElementById('month__error').style.display = 'none';
    document.getElementById('year__error').style.display = 'none';

    // Restablecer estilos de los inputs
    quitarError();
}

function quitarError() {
    // Quita la clase de error de los inputs
    dia.classList.remove('error-border-day');
    mes.classList.remove('error-border-month');
    ano.classList.remove('error-border-year');
    document.querySelector('.label-day').classList.remove('label-day-error');
    document.querySelector('.label-month').classList.remove('label-month-error');
    document.querySelector('.label-year').classList.remove('label-year-error');
    
}

// Agregar la función mostrarError modificada
function mostrarError(mensaje, campoError) {
    alert(mensaje);

    // Establece el estilo de error solo para el campo correspondiente
    if (campoError === 'dia') {
        dia.classList.add('error-border-day');
        dayError.textContent = mensaje;
        dayError.style.display = 'block';
    }

    if (campoError === 'mes') {
        mes.classList.add('error-border-month');
        monthError.textContent = mensaje;
        monthError.style.display = 'block';
    }

    if (campoError === 'ano') {
        ano.classList.add('error-border-year');
        yearError.textContent = mensaje;
        yearError.style.display = 'block';
    }

    if (campoError === 'todos') {
        dia.classList.add('error-border-day');
        mes.classList.add('error-border-month');
        ano.classList.add('error-border-year');
    }


}

function aplicarEstilosError() {

    const containers = [DiaContainer, MesContainer, AnoContainer];
    containers.forEach(container => {
        container.classList.add('error'); // Agrega una clase 'error' para estilos adicionales de error si es necesario
    })
};