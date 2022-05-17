


export class Session {
  private  _sessionId  : number  = 0;
  private  _sessionName  : string  = '';
  private _sessionDate: Date = new Date();
  private  _track  : string  = '';
  private _car: string  = '';


  constructor() {
  }

  get sessionId(): number {
    return this._sessionId;
  }

  set sessionId(value: number) {
    this._sessionId = value;
  }

  get sessionName(): string {
    return this._sessionName;
  }

  set sessionName(value: string) {
    this._sessionName = value;
  }

  get sessionDate(): Date {
    return this._sessionDate;
  }

  set sessionDate(value: Date) {
    this._sessionDate = value;
  }

  get track(): string {
    return this._track;
  }

  set track(value: string) {
    this._track = value;
  }

  get car(): string {
    return this._car;
  }

  set car(value: string) {
    this._car = value;
  }


  }
