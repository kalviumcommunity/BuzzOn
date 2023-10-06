import { Like } from './like'

export class Commentlikes extends Like {
  commentId: number

  constructor(likeId: number, commentId: number, userId: number, date: Date) {
    super(likeId, userId, date)
    this.commentId = commentId
  }
}

// const commentLike = new Commentlikes(1, 1, 1, new Date())
