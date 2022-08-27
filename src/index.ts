import { Ball } from './ball';
import { Vector2 } from './vector';

const canvas = document.getElementById('canvas');

let balls = [
    new Ball(canvas, new Vector2(10,0), new Vector2(10, 10), 128),
    new Ball(canvas, new Vector2(100,0), new Vector2(30, 10), 128),
    new Ball(canvas, new Vector2(0, 100), new Vector2(10, 20), 128),
    new Ball(canvas, new Vector2(0,200), new Vector2(10, -10), 128),
    new Ball(canvas, new Vector2(100,100), new Vector2(-20, 10), 128),
    new Ball(canvas, new Vector2(200,200), new Vector2(10, -20), 128),
];

let lastTick: number = Date.now();

const update = () => {
    let now, ticks: number;
    now = Date.now();
    ticks = now - lastTick;
    lastTick = now;
    balls.map((ball) => ball.update(ticks));
}

setInterval(update, 1);