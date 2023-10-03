let visitas = localStorage.getItem('contador_visitas');

if(!visitas){
    visitas = 0;
}

visitas++

localStorage.setItem('contador_visitas', visitas);

document.getElementById('contador').textContent=visitas;