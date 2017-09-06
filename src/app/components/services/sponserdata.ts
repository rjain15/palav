export class SponserData {


  /**
   * @type {string} title The title of the book.
   */
  sponsername: string;
  sponsermessage: string;

  constructor(sponsername: string,sponsermessage: string)
  {
    this.sponsername = sponsername;
    this.sponsermessage = sponsermessage;
  }
}
