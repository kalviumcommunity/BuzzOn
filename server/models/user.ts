import { Like } from './likes/like'
import { Postlikes } from './likes/like.post'
import { Commentlikes } from './likes/like.comment'
import { Message } from './message'
import { Post } from './post'
import { Comment } from './comment'
import { Follower } from './follower'

export class User {
  userId: number
  userName: string
  password: string
  email: string
  bio: string
  profilePic: string
  registrationDate: Date
  // Defining arrays to store posts, comments, likes, messages, followers and following
  posts: Post[] = []
  comments: Comment[] = []
  likes: Like[] = []
  postLikes: Postlikes[] = []
  commentLikes: Commentlikes[] = []
  messages: Message[] = []
  followers: Follower[] = []
  following: Follower[] = []

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

  // Defining various methods
  createPost(
    postId: number,
    postImage: string,
    content: string,
    likes: [],
    comments: []
  ) {
    const newPost = new Post(
      postId,
      this.userId,
      postImage,
      content,
      likes,
      comments
    )
    this.posts.push(newPost)
    return newPost
  }
  deletePost(postId: number): void {
    const index = this.posts.findIndex((post) => post.postId === postId)
    this.posts.splice(index, 1)
  }

  writeComment(
    commentId: number,
    post: Post,
    content: string,
    likes: []
  ): Comment {
    const newComment = new Comment(
      commentId,
      this.userId,
      post.postId,
      content,
      likes
    )
    post.comments.push(newComment)
    this.comments.push(newComment)
    return newComment
  }

  deleteComment(commentId: number): void {
    const index = this.comments.findIndex(
      (comment) => comment.commentId === commentId
    )
    this.comments.splice(index, 1)
  }

  likePost(likeId: number, post: Post, date: Date): Postlikes {
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

// const newUser = new User(
//   1,
//   'Priyanshi',
//   'password',
//   'email@gmail.com',
//   'happy! happy!',
//   '',
//   new Date()
// )
