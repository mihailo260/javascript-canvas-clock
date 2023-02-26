function run(){
    now = new Date();
canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');
ctx.save();
ctx.clearRect(0, 0, 600, 600);
ctx.translate(300, 300);
ctx.rotate(-Math.PI / 2);
ctx.strokeStyle = "black";
ctx.fillStyle = "#f4f4f4";
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.save();
ctx.beginPath();
ctx.lineWidth = 10;
ctx.arc(0, 0, 145, 0, Math.PI * 2, true);
ctx.strokeStyle = "#401000"
ctx.stroke();
ctx.fill();
ctx.restore();

ctx.save();
for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6)
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
}
ctx.restore();



ctx.save();
ctx.lineWidth = 4;
for (let i = 0; i < 60; i++) {
    if (i % 5 != 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();

    }
    ctx.rotate(Math.PI / 30);

}
ctx.restore();
hour = now.getHours() % 12;
min = now.getMinutes();
sec = now.getSeconds();
ctx.save();
ctx.rotate((Math.PI / 6) * hour + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
ctx.strokeStyle = 'red'
ctx.lineWidth = 14;
ctx.beginPath();
ctx.moveTo(-20, 0);
ctx.lineTo(80, 0)
ctx.stroke();
ctx.restore();

ctx.save();
ctx.rotate((Math.PI / 30) * min + (Math.PI/1800)*sec);
ctx.strokeStyle = 'orange'
ctx.lineWidth = 9;
ctx.beginPath();
ctx.moveTo(-20, 0);
ctx.lineTo(100, 0)
ctx.stroke();
ctx.restore();

ctx.save();
ctx.rotate(sec * Math.PI/30);
ctx.strokeStyle = 'Green'
ctx.fillStyle='Green';
ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(-30, 0);
ctx.lineTo(110, 0)
ctx.stroke();
ctx.beginPath();
ctx.arc(0,0,10,0,Math.PI*2,true);
ctx.fill();
ctx.restore();

ctx.restore();
requestAnimationFrame(run);
}
requestAnimationFrame(run);