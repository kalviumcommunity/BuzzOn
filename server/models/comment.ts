export class Comment {
  commentId: number
  postId: number
  userId: number
  date: Date
  content: string
  commentLikes: Array<any>

  constructor(
    commentId: number,
    userId: number,
    postId: number,
    content: string,
    commentLikes: []
  ) {
    this.commentId = commentId
    this.userId = userId
    this.postId = postId
    this.content = content
    this.date = new Date()
    this.commentLikes = commentLikes
  }
}

// const myComment = new Comment(1, 1, 1, 'This is a comment', [])
