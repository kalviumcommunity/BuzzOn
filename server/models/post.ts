abstract class Post {
  postId: number
  content: string
  userId: number
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

  // Defining verious methods
  addLike(userId: number) {
    if (!this.postLikes.includes(userId)) {
      this.postLikes.push(userId)
    }
  }

  // Encapsulating the logic to add a comment
  addComment(comment: string) {
    this.comments.push(comment)
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

// In the future, if I want to add support for video posts, I an not required to modify the existing classes. I just add a new class instead:
class VideoPost extends Post {
  videoUrl: string

  constructor(
    postId: number,
    userId: number,
    content: string,
    postLikes: any[],
    comments: any[],
    videoUrl: string
  ) {
    super(postId, userId, content, postLikes, comments)
    this.videoUrl = videoUrl
  }

  displayPost() {
    console.log(`Playing video from URL: ${this.videoUrl}`)
  }
}

let newPost: null | Post = new VideoPost(
  1,
  1,
  'post video',
  [],
  [],
  'This is a new Post'
)

// By setting newPost to null, we're dereferencing the object, making it eligible for garbage collection.
// This is analogous to deallocating memory in languages with manual memory management.
newPost = null

console.log(newPost)
