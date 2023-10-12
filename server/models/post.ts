export class Post {
  postId: number
  userId: number
  postImage: string
  content: string
  date: Date
  postLikes: Array<any>
  comments: Array<any>

  constructor(
    postId: number,
    userId: number,
    postImage: string,
    content: string,
    postLikes: [],
    comments: []
  ) {
    this.postId = postId
    this.userId = userId
    this.postImage = postImage
    this.content = content
    this.date = new Date()
    this.postLikes = postLikes
    this.comments = comments
  }
}

// const newPost = new Post(1, 1, 'post Image', 'This is a post', [], [])
