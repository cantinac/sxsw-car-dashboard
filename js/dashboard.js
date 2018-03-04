fetch('data/drive.json')
    .then(response => response.json())
    .then(data => {

        const speed = document.querySelector('#speed');
        const rpm = document.querySelector('#rpm');

        let timeStart = performance.now();

        const updateDashboard = timestamp => {

            const time = timeStart - (timestamp / 100);

            const temp = data.filter(t => t.s < time).slice(-1);

            if (temp.length) {

                speed.innerText = Math.round(temp[0].speed);
                rpm.innerText = Math.round(temp[0].rpm);

            }

            requestAnimationFrame(updateDashboard);

        }

        requestAnimationFrame(updateDashboard);

    });
