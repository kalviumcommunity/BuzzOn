export class User {
  userId: number
  userName: string
  password: string
  email: string
  bio: string
  profilePic: string
  registrationDate: Date

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
}

// const newUser = new User(1, "Priyanshi", "password", "email@gmail.com", "happy! happy!", "", new Date())
