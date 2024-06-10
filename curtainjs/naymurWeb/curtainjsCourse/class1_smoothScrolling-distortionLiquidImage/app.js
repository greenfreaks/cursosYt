import {
    Curtains,
    Plane,
    Vec2
} from "https://cdn.jsdelivr.net/npm/curtainsjs@7.2.0/src/index.mjs";
window.addEventListener("load", () => {
    //Set up the WebGl context
    const curtains = new Curtains({
        container: "canvas",
        watchScroll: false,
        pixelRatio: Math.min(1.5, window.devicePixelRatio),
    })
});

//create mouse position and deltas
const mousePosition = new Vec2();
const mouseLastPosition = new Vec2();

const deltas = {
    max: 10,
    applied: 0,
};

//Create Plane element

const planeElements = document.getElementsByClassName("curtain");

//Some basic parameters
const params = {
    vertexShader: vs,
    fragmentShader: fs,
    widthSegment: 20,
    heightSegments: 20,
    uniforms: {
        resolution: {
            name: "uResolution",
            type: "2f",
            value: [planeElements[0].clientWidth, planeElements[0].clientHeight],
        },
        time: {
            name: "uTime",
            type: "1f",
            value: 0,
        },
        mousePosition: {
            name: "uMousePosition",
            type: "2f",
            value: mousePosition,
        },
        mouseMoveStength: {
            name: "mouseMoveStrength",
            type: "1f",
            value: 0,
        },
    },
};

//Create the plane
const simplePlane = new Plane(curtains, planeElements[0], params);

simplePlane.onReady(() => {
        //Set the fov between 1 - 130 to get the perspective animation or wobbly animation
        simplePlane.setPerspective(120);
        //deltas for a little bit effect on the plane
        deltas.max = 2;

        const wrapper = document.getElementById("curtainjs");
        wrapper.addEventListener("mousemove", (e) => {
            handleMovement(e, simplePlane);
        });
    })
    .onRender(() => {
        simplePlane.uniforms.time.value++;

        //if the cursor does not move the wobbly effect will fade away
        //and when we hover pver the canvas then the effect again start
        deltas.applied += (deltas.max - deltas.applied) * 1;
        deltas.max += (0 - deltas.max) * 0.01;

        simplePlane.uniforms.mouseMoveStength.value = deltas.applied;
    });

// The last part: handle the mouse move event

function handleMovement(e, plane) {
    mouseLastPosition.copy(mousePosition);
    const mouse = new Vec2();

    //touch event

    if (e.targetTouches) {
        mouse.set(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
    } else {
        mouse.set(e.clientX, e.clientY);
    }
    // Lerp the mouse position for smooth th overall effect
    mousePosition.set(
        curtains.lerp(mousePosition.x, mousePosition.x, 0.3),
        curtains.lerp(mouseLastPosition.y, mousePosition.y, 0.3),
    );

    //updata our uniform
    plane.uniform.mousePosition.value =
        plane.mouseToPlaneCoords(mousePosition);
    // CALCULATE THE MOUSE MOVE STRENGHT

    if (mouseLastPosition.x && mouseLastPosition.y) {
        let delta = Math.sqrt(
            Math.pow(mousePosition.x - mouseLastPosition.x, 2) +
            Math.pow(mousePosition.y - mouseLastPosition.y, 2)
        ) / 30
        delta = Math.min(4, delta);

        if (delta >= deltas.max) {
            deltas.max = delta;
        }
    }
}