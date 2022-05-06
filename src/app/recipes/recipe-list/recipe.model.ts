export class Recipe {
   public name: string;
   public description: string;
   public imagePath: string;
   //basic blueprint

   constructor(name: string, desc:string, imagePath: string){
     this.name = name;
     this.description = desc;
     this.imagePath = imagePath;
   }
 }
