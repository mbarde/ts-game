import { AnimatedProperty } from './animation';
import { Vector2 } from './vector';

export class Ball {

    private canvas: HTMLElement;
    private htmlEl: HTMLElement;
    private pos: Vector2;
    private dir: Vector2;
    private size: AnimatedProperty;

    constructor (canvas: HTMLElement, 
                 pos: Vector2, dir: Vector2, 
                 size: number) {
        this.canvas = canvas;

        this.htmlEl = document.createElement('div');
        this.htmlEl.classList.add('ball');
        this.htmlEl.style.position = 'absolute';
        this.htmlEl.style.height = `${size}px`;
        this.htmlEl.style.width = `${size}px`;
        canvas.append(this.htmlEl);

        this.dir = dir;
        this.pos = pos;
        this.size = new AnimatedProperty(size, 1.5 * size, 0.1);
    }

    update(ticks: number) {
        let tdir: Vector2 = this.dir.clone();
        tdir.scale(ticks / 100);
        this.pos.add(tdir);

        this.htmlEl.style.left = `${this.pos.x}px`;
        this.htmlEl.style.top = `${this.pos.y}px`;
        // this.htmlEl.style.transform = `rotate(${rot}deg) scale(${size.getValue()})`;

        this.size.update();
        this.htmlEl.style.height = `${this.size.getValue()}px`;
        this.htmlEl.style.width = `${this.size.getValue()}px`;


        if (this.pos.x <= 0 ||
            this.pos.x + this.size.getValue() >= this.canvas.clientWidth) {
            this.dir.x = -this.dir.x;
        }

        if (this.pos.y <= 0 ||
            this.pos.y + this.size.getValue() >= this.canvas.clientHeight) {
            this.dir.y = -this.dir.y;
        }

    }

}