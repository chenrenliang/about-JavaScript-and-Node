
class Switch {
    constructor(initState = Switch.states.OPEN){
        this.state = initState
    }

    open(){
        this.state = Switch.states.OPEN
    }
    close(){
        this.state = Switch.states.CLOSED
    }
}

Switch.states = {
    OPEN: Symbol(),
    CLOSED: Symbol()
}

const st = new Switch() // this.state = ...OPEN === Symbol()

st.close() // this.state = ...CLOSED === Symbol() 不同的Symbol 

console.log(st.state === Switch.states.CLOSED) //true