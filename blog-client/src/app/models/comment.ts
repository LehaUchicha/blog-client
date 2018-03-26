import { Post } from "app/models/post";

export class Comment {
   constructor(
      public id: number,
      public authorName: string,
	  public text: string,
	  public post: Post
   ) {}
}