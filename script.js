





    let topLeft = document.querySelector("#topLeft");
    let topRight = document.querySelector("#topRight");
    let bottomRight = document.querySelector("#bottomRight");
    let bottomLeft = document.querySelector("#bottomLeft");

    let start = document.querySelector("#start")
    let reset = document.querySelector("#reset")

    var greenAudio = document.querySelector("#greenAudio")
    var redAudio = document.querySelector("#redAudio")
    var blueAudio = document.querySelector("#blueAudio")
    var yellowAudio = document.querySelector("#yellowAudio")



    const sequences = [ 
        getRandomPanel(),
         getRandomPanel(),
          getRandomPanel(),
           getRandomPanel()
    ];
    
    const panel = [
        topLeft, topRight, bottomRight, bottomLeft
    ];
    
    const getRandomPanel = () => {
        const panels = [
          topLeft,
          topRight,
          bottomRight,
          bottomLeft
        ];
        return panels[parseInt(Math.random() * panels.length)];
      };

    const flash = panel => {
        return new Promise((resolve, reject) =>{
        panel.className += 'active';
        setTimeout(() => {
            panel.className = board.className.replace('active',
            ''
            );
                setTimeout(() => {
            resolve();
                }, 250);
        }, 500);
    });
};

