class Creche {
    
    constructor() {
        
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

}

let creche = new Creche()