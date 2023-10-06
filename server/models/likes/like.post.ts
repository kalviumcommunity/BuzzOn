import { Like } from './like'

export class Postlikes extends Like {
  postId: number

  constructor(likeId: number, postId: number, userId: number, date: Date) {
    super(likeId, userId, date)
    this.postId = postId
  }
}

// const postLike = new Postlikes(1, 1, 1, new Date())
