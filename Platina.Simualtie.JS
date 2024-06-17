document.addEventListener('DOMContentLoaded', () => {
    let currentStopIndex = 0;
    const stops = ["Station", "Sporthal", "Centrum", "Gildeopleidingen"];
    const busElement = document.getElementById('bus');
    const stopListElement = document.getElementById('stopList').children;
    const busSound = document.getElementById('busSound');

    function moveBus() {
        const maxDistance = window.innerWidth - busElement.offsetWidth - 200; 
        const distance = maxDistance * (currentStopIndex / (stops.length - 1));
        console.log('Moving bus to distance:', distance); // Debugging output
        busElement.style.transform = `translateX(${distance}px)`;

        busSound.play();

        setTimeout(() => {
            currentStopIndex = (currentStopIndex + 1) % stops.length;
            updateStopList();
            moveBus(); 
        }, 5000);
    }

    function updateStopList() {
        Array.from(stopListElement).forEach((stop, index) => {
            stop.classList.toggle('active', index === currentStopIndex);
        });
        console.log('Updated stop list to index:', currentStopIndex); // Debugging output
    }

    updateStopList();
    moveBus();
});
