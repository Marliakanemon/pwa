if('serviceWorker' in navigator){
    console.log('ServiceWorker disponible');
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./js/serviceWork.js')
        .then(res => console.log('serviceWorker cargado correctamente:'+response))
        .catch(err=>console.error(err));
    });
}