
export class FileItem{
  public archivo:File;
  public nombreArchivo:string;
  public url:string = '';
  public estaSubiendo:boolean = false;
  public progreso:number = 0;

  constructor (_archivo:File){
    this.archivo = _archivo;
    this.nombreArchivo = _archivo.name;
  }

}
