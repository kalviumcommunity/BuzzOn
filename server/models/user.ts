import { Like } from './likes/like'
import { Postlikes } from './likes/like.post'
import { Commentlikes } from './likes/like.comment'
import { Message } from './message'
import { ImagePost, TextPost } from './post'
import { Comment } from './comment'
import { Follower } from './follower'

// const db = require('./db')

// Example function to retrieve user by ID

export class User {
  userId: number
  userName: string
  password: string
  email: string
  bio: string
  profilePic: string
  registrationDate: Date
  // Defining arrays to store posts, comments, likes, messages, followers and following
  textPosts: TextPost[] = []
  imagePosts: ImagePost[] = []
  comments: Comment[] = []
  likes: Like[] = []
  postLikes: Postlikes[] = []
  commentLikes: Commentlikes[] = []
  messages: Message[] = []
  followers: Follower[] = []
  following: Follower[] = []

  private static userCount: number = 0
  constructor(
    userId: number,
    userName: string,
    password: string,
    email: string,
    bio: string,
    profilePic: string,
    registrationDate: Date
  ) {
    this.userId = userId
    this.userName = userName
    this.password = password
    this.email = email
    this.bio = bio
    this.profilePic = profilePic
    this.registrationDate = registrationDate
  }

  public static howManyUsers(): number {
    return User.userCount
  }

  cleanUp(): void {
    if (typeof this.userName !== 'string') {
      this.userName = ''
    }
    if (typeof this.email !== 'string') {
      this.email = ''
    }
    if (typeof this.password !== 'string') {
      this.password = ''
    }
    if (typeof this.bio !== 'string') {
      this.bio = ''
    }
  }

  // Defining various methods
  createTextPost(
    postId: number,
    content: string,
    likes: [],
    comments: [],
    contentText: string
  ) {
    const newTextPost = new TextPost(
      postId,
      this.userId,
      content,
      likes,
      comments,
      contentText
    )
    this.textPosts.push(newTextPost)
    return newTextPost
  }

  createImagetPost(
    postId: number,
    content: string,
    likes: [],
    comments: [],
    imageUrl: string
  ) {
    const newImagePost = new ImagePost(
      postId,
      this.userId,
      content,
      likes,
      comments,
      imageUrl
    )
    this.imagePosts.push(newImagePost)
    return newImagePost
  }

  deleteTextPost(postId: number): void {
    const index = this.textPosts.findIndex(
      (textPosts) => textPosts.postId === postId
    )
    this.textPosts.splice(index, 1)
  }

  deleteImagePost(postId: number): void {
    const index = this.imagePosts.findIndex(
      (imagePosts) => imagePosts.postId === postId
    )
    this.imagePosts.splice(index, 1)
  }

  writeComment(
    commentId: number,
    imagePosts: ImagePost,
    content: string,
    likes: []
  ): Comment {
    const newComment = new Comment(
      commentId,
      this.userId,
      imagePosts.postId,
      content,
      likes
    )
    imagePosts.comments.push(newComment)
    this.comments.push(newComment)
    return newComment
  }

  deleteComment(commentId: number): void {
    const index = this.comments.findIndex(
      (comment) => comment.commentId === commentId
    )
    this.comments.splice(index, 1)
  }

  likeImagePost(likeId: number, post: ImagePost, date: Date): Postlikes {
    const newLike = new Postlikes(likeId, post.postId, this.userId, date)
    post.postLikes.push(newLike)
    this.postLikes.push(newLike) // Push the new Postlikes object to the likes array
    return newLike
  }

  likeComment(likeId: number, comment: Comment, date: Date): Commentlikes {
    const newLike = new Commentlikes(
      likeId,
      comment.commentId,
      this.userId,
      date
    )
    this.commentLikes.push(newLike)
    comment.commentLikes.push(newLike)
    return newLike
  }

  followUser(usertoFollow: User): void {
    const newFollower = new Follower(this.userId, usertoFollow.userId)
    this.following.push(newFollower)
    usertoFollow.followers.push(newFollower)
  }

  unfollowUser(usertoUnfollow: User): void {
    const index = this.following.findIndex(
      (following) => following.followerId === usertoUnfollow.userId
    )
    this.following.splice(index, 1)
    const index1 = usertoUnfollow.followers.findIndex(
      (follower) => follower.followerId === this.userId
    )
    usertoUnfollow.followers.splice(index1, 1)
  }

  sendMessage(messageId: number, receiver: User, content: string): Message {
    const newMessage = new Message(
      messageId,
      this.userId,
      receiver.userId,
      content
    )
    this.messages.push(newMessage)

    receiver.messages.push(newMessage)
    return newMessage
  }

  deleteMessage(messageId: number): void {
    const index = this.messages.findIndex(
      (message) => message.messageId === messageId
    )
    this.messages.splice(index, 1)
  }
}

const newUser = new User(
  1,
  'Priyanshi',
  'password',
  'email@gmail.com',
  'happy! happy!',
  '',
  new Date()
)

newUser.cleanUp()
