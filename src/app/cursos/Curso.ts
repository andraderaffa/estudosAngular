export class Curso {
    public nomeCurso:string;
    public valorCurso:number;
    public areaCurso:string;

    //Atributos
    constructor(nome:string, valor:number, area:string){
        this.nomeCurso = nome;
        this.valorCurso = valor;
        this.areaCurso = area;
    }
}