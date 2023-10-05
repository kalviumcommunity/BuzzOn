export class Post
{
  postId: number;
  userId: number;
  content: string;
  date: Date;
  likeCount: number;
  commentCount: number;

  constructor(postId: number, userId: number, content: string, likeCount: number, commentCount: number) {
    this.postId = postId;
    this.userId = userId;
    this.content = content;
    this.date = new Date();
    this.likeCount = likeCount;
    this.commentCount = commentCount;
  }
}
