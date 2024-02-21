import {Rectangle} from "./shapes/Rectangle";
import {random} from "./helper";

const canvasElement: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');

const rect = new Rectangle(20, 10, 'darkviolet', ctx, canvasElement);

function animate() {
    rect.animate();
    requestAnimationFrame(animate);
}
canvasElement.addEventListener('click',(e)=>{
    const x:number = e.offsetX;
    const y:number = e.offsetY;
    if((x>=rect.x && x<=rect.x+rect.width)&&(y>=rect.y && y <= rect.y+rect.height)){
        console.log('HEADSHOT');
        rect.color=`rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
    }
});


animate();
