const config1 = {
    fault: false,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 4 }
    ]
};

const config2 = {
    fault: false,
    phases: [
        { color: "red", duration: 3 },
        { color: "yellow", duration: -2 },
        { color: "green", duration: 6 }
    ]
};

const config3 = {
    fault: true,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 6 }
    ]
};

const config4 = {
    fault: false,
    phases: []
};

function runSequence(config, cycles) {
    if (!config.phases || config.phases.length === 0) {
        console.log("No phases found");
        return;
    }

    for (let c = 0; c < cycles; c++) {
        if (config.fault === true) {
        console.log("Faulted phase!");
        return;
        }
        for(let p = 0; p < config.phases.length; p++) {
        const phase = config.phases[p];

        if (phase.duration <= 0) {
            console.log("Invalid phase detected");
        } else {
            console.log(`Switching to ${phase.color} for ${phase.duration} s`);
        }
        }
    }
}

function generateTimeline(config, cycles) {
    const timeline = [];
    let elapsedTime = 0;

    for (let c = 0; c < cycles; c++) {
        for (let p = 0; p < config.phases.length; p++) {
        const phase = config.phases[p];
        elapsedTime += phase.duration;
        timeline.push(elapsedTime);
        }
    }

    return timeline;
}

