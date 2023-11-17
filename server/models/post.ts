abstract class Post {
  postId: number
  userId: number
  content: string
  date: Date
  postLikes: Array<any>
  comments: Array<any>

  constructor(
    postId: number,
    userId: number,
    content: string,
    postLikes: any[],
    comments: any[]
  ) {
    this.postId = postId
    this.userId = userId
    this.content = content
    this.date = new Date()
    this.postLikes = postLikes
    this.comments = comments
  }
}

export class TextPost extends Post {
  contentText: string

  constructor(
    postId: number,
    userId: number,
    content: string,
    postLikes: any[],
    comments: any[],
    contentText: string
  ) {
    super(postId, userId, content, postLikes, comments)
    this.contentText = contentText
  }

  displayContent() {
    console.log(this.contentText)
  }
}

export class ImagePost extends Post {
  imageUrl: string

  constructor(
    postId: number,
    userId: number,
    content: string,
    postLikes: any[],
    comments: any[],
    imageUrl: string
  ) {
    super(postId, userId, content, postLikes, comments)
    this.imageUrl = imageUrl
  }

  displayContent() {
    console.log(`Displaying image from URL: ${this.imageUrl}`)
  }
}

// let newPost: null | Post = new Post(
//   1,
//   1,
//   'post Image',
//   'This is a post',
//   [],
//   []
// )

// By setting newPost to null, we're dereferencing the object, making it eligible for garbage collection.
// This is analogous to deallocating memory in languages with manual memory management.
// newPost = null

// console.log(newPost)
