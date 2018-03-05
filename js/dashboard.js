const speedElem = document.querySelector('#speed');
const rpmElem = document.querySelector('#rpm');

let timeStart = performance.now();

fetch('data/drive.json')
    .then(response => response.json())
    .then(data => {

        const updateDashboard = timestamp => {

            const time = (timestamp - timeStart) / 100;

            const filteredFrames = data.filter(t => t.s < time).slice(-1);

            if (filteredFrames.length > 0) {

                speedElem.innerText = Math.round(filteredFrames[0].speed);
                rpmElem.innerText = Math.round(filteredFrames[0].rpm);

            }

            requestAnimationFrame(updateDashboard);

        }

        requestAnimationFrame(updateDashboard);

    });
