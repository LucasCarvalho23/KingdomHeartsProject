class Creche {
    
    constructor() {

        // MENU
        this.menuIcon = document.querySelector ("#menuIcon")
        this.menuExtends = document.querySelector ("#menuExtends-id")
        this.homeOption = document.querySelector ("#homeOption-id")
        this.whoWeAre = document.querySelector ("#whoWeAre-id")
        this.directory = document.querySelector ("#directory-id")
        this.moments = document.querySelector ("#moments-id")

        this.menuExtends.style.display = "none"
        
        this.menuIcon.addEventListener ("click", () => this.menuResposive())
        this.homeOption.addEventListener ("click", () => this.clickHome())
        this.whoWeAre.addEventListener ("click", () => this.clickWho())
        this.directory.addEventListener ("click", () => this.clickDir())
        this.moments.addEventListener ("click", () => this.clickMom())


        // SLIDER
        this.sliderPass = 0
        this.count2 = 2

        if (this.sliderPass == 0) {
            this.sliderPassFunction()
        }

    }


    // MENU

    menuResposive() {
        
        if (this.menuExtends.style.display == "block") {
            this.menuExtends.style.display = "none"
        } else if (this.menuExtends.style.display == "none") {
            this.menuExtends.style.display = "block"
        }
         
    }

    clickHome() {
        console.log ("test")
    }

    clickWho() {
        console.log ("test")
    }

    clickDir() {
        console.log ("test")
    }

    clickMom() {
        console.log ("test")
    }


    // SLIDER
    sliderPassFunction() {
        
        this.arrayImg = []
        this.slideClass = document.querySelector ("#img1-id")

        
        for (this.count = 1; this.count < 7; this.count++) {
            this.arrayImg[this.count] = document.querySelector ("#slide" + this.count + "-id")
        }

        console.log (this.arrayImg)
        this.validationSlider()

    }

    validationSlider() {
        
        setInterval(() => {
            console.log ("it's ok")
            this.slideClass.src = "./image/pic" + this.count2 + "-div1.jpg"
            this.count2++
            
            if (this.count2 == 7) {
                this.count2 = 1
            }
        }
        , 3000);
        
    }


}

let creche = new Creche()