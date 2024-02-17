var DepressionTest=[
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed",
    "Thoughts that you would be better off dead, or of hurting yourself"
]

var length = DepressionTest.length;

var currentQuestionIndex=-1;

function startGame(){
    currentQuestionIndex = -1;
    $(".start-btn").click(function(){
        $(this).toggleClass('hide');
        $("#question-container").removeClass('hide');
        $("#next-button").removeClass('hide');
    })
}
var score = 0;
var final_score = 0;

$(".btn").click(function(){
    score = parseInt($(this).attr('name'));
})

$("#next-button").click(function(){
    currentQuestionIndex++;
    $("#question").text(DepressionTest[currentQuestionIndex]);
    $("#question-count").text(`${currentQuestionIndex+1}/${DepressionTest.length}`);

    if(currentQuestionIndex==length-1){
        $("#next-button").addClass('hide');
        $("#result-button").removeClass('hide');
        $("#question-count").addClass('hide');

    }
    score = score ? score : 0;
    final_score+=score;
    console.log(final_score);
    score = 0; // reset score after each question
});
$("#result-button").click(function(){
    var Result = "";
    if(final_score <= 4){
        Result = "Minimal depression";
    }
    else if(final_score <= 9){
        Result = "Mild depression";
    }
    else if(final_score <= 14){
        Result = "Moderate depression";
    }
    else if(final_score <= 19){
        Result = "Moderately severe depression";
    }
    else {
        Result = "Severe depression";
    }
    $("#result").text(Result);
});

startGame();


var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array,
    colors = ['#0044cc', '#0066ff', '#3399ff', '#66b2ff', '#99ccff'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
        parts[i] = {
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            toX: Math.random() * 5 - 1,
            toY: Math.random() * 2 - 1,
            c: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * size
        };
    }
}

function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener('mousemove', MouseMove, false);
    for (var i = 0; i < arc; i++) {
        var li = parts[i];
        var distanceFactor = DistanceBetween(mouse, parts[i]);
        var distanceFactor = Math.max(Math.min(15 - (distanceFactor / 10), 10), 1);
        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 == 0)
            ctx.stroke();
        else
            ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) {
            li.x = 0;
        }
        if (li.y > h) {
            li.y = 0;
        }
        if (li.x < 0) {
            li.x = w;
        }
        if (li.y < 0) {
            li.y = h;
        }


    }
    if (time < speed) {
        time++;
    }
    setTimeout(particles, 1000 / rate);
}

function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;
}

function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

create();
particles();
