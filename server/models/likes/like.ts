export class Like {
  likeId: number
  userId: number
  date: Date

  constructor(likeId: number, userId: number, date: Date) {
    this.likeId = likeId
    this.userId = userId
    this.date = date
  }
}

// const like = new Like(1, 1, new Date())
