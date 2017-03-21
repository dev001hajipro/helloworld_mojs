'use strict';

const burst1 = new mojs.Burst({
    radius: { 0: 100 },
    count: 20,
    children: {
        shape: 'cross',
        stroke: 'teal',
        strokeWidth: { 6: 0 },
        angle: { '-360': 0 },
        radius: { 30: 5 },
        duration: 3000
    }
});
const burst2 = new mojs.Burst({
    radius: { 0: 200 },
    count: 12,
    children: {
        shape: 'zigzag',
        points: 7,
        stroke: { 'magenta': 'pink' },
        fill: 'none',
        strokeWidth: { 6: 0 },
        angle: { 360: 0 },
        radius: { 30: 5 },
        opacity: { 1: 0 },
        duration: 3000
    }
});
const burst3 = new mojs.Burst({
    radius: { 0: 200 },
    count: 14,
    children: {
        fill : 'purple',
        points: 7,
        angle: { 360: 0 },
        radius: { 10: 5 },
        opacity: { 1: 0 },
        duration: 3000
    }
});

const circ_opt = {
    radius: { 0: 200 },
    fill: 'none',
    stroke: 'yellow',
    opacity: { 1: 0 },
    duration: 3500
};

// ES2015
// Object.assign({}, circ_opt)
// Babel can use rest parameter and 3 bot syntax.
// { ...circ_opt }
const circ = new mojs.Shape(Object.assign({}, circ_opt));
const circ2 = new mojs.Shape(Object.assign({ delay: 500 }, circ_opt));

const timeline = new mojs.Timeline({
    repeat: 999
})
    .add(burst1, burst2, burst3, circ, circ2)
    .play();
