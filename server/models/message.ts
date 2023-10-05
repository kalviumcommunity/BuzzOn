export class Message{
  messageId: number;
  senderId: number;
  receiverId: number;
  date: Date;
  content: string;

  constructor(messageId: number, senderId: number, receiverId: number, content: string) {
    this.messageId = messageId;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.content = content;
    this.date = new Date();
  }
}
