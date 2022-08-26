import { AnimatedProperty } from './animation';

const canvas = document.getElementById('canvas');

const ball = document.createElement('div');
ball.classList.add('ball');
ball.style.position = 'absolute';

canvas.append(ball);

let x: number = 0;
let y: number = 0;
let rot: number = 0;

let lastTick: number = Date.now();

let size: AnimatedProperty = new AnimatedProperty(1.0, 1.5, 0.001);

const update = (ball: HTMLElement) => {
    let now, ticks: number;
    now = Date.now();
    ticks = now - lastTick;
    lastTick = now;
    x += (ticks / 50);
    y += (ticks / 40);
    rot += (ticks / 50);
    rot = rot > 360 ? rot - 360 : rot;
    size.update();
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    ball.style.transform = `rotate(${rot}deg) scale(${size.getValue()})`;
}

setInterval(() => update(ball), 1);