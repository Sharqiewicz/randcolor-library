function randomize(){

    var rgb = [];

    for(let i = 0; i < 3; i++)  rgb.push(Math.floor(Math.random() * 255));

    return 'rgb('+ rgb.join(',') +')';
}


function randcolor(selector){

    const self = {

        element: document.querySelector(selector),
        html: () => self.element,
        color: () => {
            self.element.style.color = randomize();
        },
        colorByTime: (seconds = 500) => {
            setInterval( ()=>{
                self.element.style.color = randomize();
            }, seconds)
        },
        backcolor: () => {
            self.element.style.backgroundColor = randomize();
        },
        backcolorByTime: (seconds = 500) => {
            setInterval( ()=>{
                self.element.style.backgroundColor = randomize();
            }, seconds)
        },
        bordercolor: () => {
            self.element.style.borderColor = randomize();
        },
        bordercolorByTime: (seconds = 500) => {
            setInterval( ()=>{
                self.element.style.borderColor = randomize();
            }, seconds)
        },
        border: (px = 1, type = 'solid') => {
            self.element.style.border = `${px}px ${type} ${randomize()}`;
        },
        borderByTime: (px = 1, type = 'solid', seconds = 500) => {
            setInterval( ()=>{
                self.element.style.border = `${px}px ${type} ${randomize()}`;
            }, seconds)
        }

    }
    return self;
}