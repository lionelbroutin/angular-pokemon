import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[pkmnBorderCard]',
})
    
export class BorderCardDirective{
    private initialColor: string = '#f5f5f5';
    private initialBcgColor: string = 'rgb(252 186 163)';
    private newBcg: string = 'rgb(255 255 255)';
    private defaultColor: string = 'rgb(146 151 255)';
    private defaultHeight: number = 200;

    constructor(private el:ElementRef) {
        this.setHeight(this.defaultHeight);
    }

    //// permet de choisur la couleur à mettre sur notre template
  //  @Input('pkmnBorderCard') borderColor: string;
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder('rgb(255 113 113)');
        this.setBackground(this.initialBcgColor);
}
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
        this.setBackground(this.newBcg);
    }

    

    private setBorder(color: string) {
        let border = 'solid 4px' + color;
        this.el.nativeElement.style.border = border;
    }
    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
    private setBackground(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
 

    
}