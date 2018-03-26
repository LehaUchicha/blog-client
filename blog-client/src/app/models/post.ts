export class Post {
   constructor(
      public id: number,
      public title: string,
	  public shortText: string,
	  public fullText: string,
	  public likes: number,
   ) {}
}