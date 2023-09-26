import { User } from './user'

export class VerifiedUser extends User {
  verficationStatus: boolean
  verificationDocument: string
  verficaitonDate: Date

  constructor(
    userId: number,
    userName: string,
    password: string,
    email: string,
    bio: string,
    profilePic: string,
    registrationDate: Date,
    verficationStatus: boolean,
    verificationDocument: string,
    verficaitonDate: Date
  ) {
    super(userId, userName, password, email, bio, profilePic, registrationDate)
    this.verficationStatus = verficationStatus
    this.verificationDocument = verificationDocument
    this.verficaitonDate = verficaitonDate
  }
}

// const myVerifiedUser = new VerifiedUser(1, "Priyanshi", "password", "email@gmail.com", "happy! happy!", "", new Date(), true, "AAdhar Card", new Date());
