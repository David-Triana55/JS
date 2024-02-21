class HttpAdapter {  

    constructor(type){    
        this.type = type;  
    }
    get(){
        throw new error("Method not implemented")
    }
    post(){
        throw new error("Method not implemented")
    }
    put(){
        throw new error("Method not implemented")
    }
    delete(){    
        throw new error("Method not implemented")
    }
}

class Express extends HttpAdapter{
    constructor(){
        super("Express")
    }
    get(){
        console.log(`get Method for ${this.type} adapter`);  
    }
    post(){
        console.log(`post Method for ${this.type} adapter`)
    }
    put(){
        console.log(`put  Method for ${this.type} adapter`)
    }
    delete(){    
        console.log(`delete Method for ${this.type} adapter`)
    }
}

class NextJs extends HttpAdapter{
    constructor(){
        super("NextJs")
    }
    get(){
        console.log(`get Method for ${this.type} adapter`);  
    }
    post(){
        console.log(`post Method for ${this.type} adapter`)
    }
    put(){
        console.log(`put  Method for ${this.type} adapter`)
    }
    delete(){    
        console.log(`delete Method for ${this.type} adapter`)
    }
}

class HttpAdapterFactory{
    makeAdapter(){    
        throw new error("Method not implemented")
    }
}

class ExpressFactory extends HttpAdapterFactory {
    makeAdapter() {
        return new Express();
    }
}

class NextJsFactory extends HttpAdapterFactory {
    makeAdapter() {
    return new NextJs();
    }
}

function appAdapter(adapter){
    let httpAdapter = adapter.makeAdapter()
    httpAdapter.get()
    httpAdapter.post()
    httpAdapter.put()
    httpAdapter.delete()
}

function createAdapter(type){
    const adapters = {
        "Express": ExpressFactory,
        "NextJs": NextJsFactory
    }
    
    const adaptadores = adapters[type]
    return new adaptadores()
}

appAdapter(createAdapter("Express"))
appAdapter(createAdapter("NextJs"))
