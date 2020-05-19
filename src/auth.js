class authStatus {
    constructor(){
        this.isauthenticated = false
    }
    setStatus(val) {
        this.isauthenticated = val;
    }
}

export default new authStatus();