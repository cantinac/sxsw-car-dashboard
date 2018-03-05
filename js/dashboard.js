const speedElem = document.querySelector('#speed');
const rpmElem = document.querySelector('#rpm');

let timeStart = performance.now();

fetch('data/drive.json')
    .then(response => response.json())
    .then(data => {

        const updateDashboard = timestamp => {

            const time = (timestamp - timeStart) / 1000;

            const filteredFrames = data.filter(t => t.s < time);

            if (filteredFrames.length > 0) {

                const currentFrame = filteredFrames.slice(-1)[0];

                if (currentFrame) {

                    speedElem.innerText = Math.round(currentFrame.speed);
                    rpmElem.innerText = Math.round(currentFrame.rpm);

                }

                if (filteredFrames.length == data.length) {

                    timeStart = performance.now();

                }

            }

            requestAnimationFrame(updateDashboard);

        }

        requestAnimationFrame(updateDashboard);

    });
