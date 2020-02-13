





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

    class Color {
        constructor(name, source, audioSource){
          this.name = name;
          this.source = document.querySelector(source);
          this.audioSource = audioSource;
        }
      }
      
      let green = new Color("green", "#topLeft", "#greenAudio");
      let yellow = new Color("yellow", "#bottomLeft", "#redAudio");
      let blue = new Color("blue", "#bottomRight", "#blueAudio");
      let red = new Color("red", "#topRight", "#yellowAudio");
      
      let colors = [green, yellow, blue, red]
    
    
    
    
    
    const panel = [
        topLeft, topRight, bottomRight, bottomLeft
    ];
    
     const getRandomPanel = () => {
        const panels = [
          topLeft,
          topRight,
          bottomright,
          bottomleft
        ];
        return panels[parseInt(Math.random() * panels.length)];
      };
      
      const sequence = [getRandomPanel()];
    