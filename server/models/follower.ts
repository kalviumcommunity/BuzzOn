export class Follower {
  followerId: number
  followingId: number
  date: Date

  constructor(followerId: number, followingId: number) {
    this.followerId = followerId
    this.followingId = followingId
    this.date = new Date()
  }
}

// const follower = new Follower(1, 1)
