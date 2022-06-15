class secretDiary {
    constructor(){
        this.entries =[]
        this.lock= 0
    }

    lock(){
        this.lock = 0
    }

    unlock(){
        this.lock= 1
    }

    addEntry(entry){
        if (this.lock===0){
            return 'diary locked'
        }
        else {
            this.entries.push(entry)
            return this.entries
        }
    }

    getEntries(){
        if (this.lock===0){
            return 'diary locked'
        }
        else return this.entries
    }



}


module.exports = secretDiary