export class
VerifiedUser{
  verificationuserId: number;
  userId: number;
  verficationStatus: boolean;
  verificationDocument: string;
  verficaitonDate: Date;

  constructor(verificationuserId:number, userId: number,verficationStatus: boolean, verificationDocument: string, verficaitonDate: Date) {
    this.verificationuserId = verificationuserId;
    this.userId = userId;
    this.verficationStatus = verficationStatus;
    this.verificationDocument = verificationDocument;
    this.verficaitonDate = verficaitonDate;
  }
}
