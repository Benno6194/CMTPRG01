class GameObject {
    
    protected element: HTMLElement;
    protected posy:number;
    protected posx:number;
    private rectangle: ClientRect;
        
    constructor(objectType:string) {
        this.element = document.createElement(objectType)
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
    }

    public update():void {
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }

    public getBoundingRect(): ClientRect{
        this.rectangle = this.element.getBoundingClientRect();
        return this.rectangle;
    }
}