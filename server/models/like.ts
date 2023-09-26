export class Like {
  likeId: number
  postId: number
  userId: number
  date: Date

  constructor(likeId: number, postId: number, userId: number, date: Date) {
    this.likeId = likeId
    this.postId = postId
    this.userId = userId
    this.date = date
  }
}

// const like = new Like(1, 1, 1, new Date());
