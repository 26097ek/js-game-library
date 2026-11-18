class Game{
    init(){
        this.gameFrame = document.querySelector("#app");
        if (!this.gameFrame){
            throw new ReferenceError("Could not access the app. Please add a div named \"app\".")
        }
        console.debug("success");
    }
}

export default new Game;