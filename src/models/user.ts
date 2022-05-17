


export class User {
  private  _userId  : number  = 0;
  private  _userName  : string  = '';
  private  _userPassword  : string  = '';
  private _sessions: string[];


  constructor() {
    this._sessions = []
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get userPassword(): string {
    return this._userPassword;
  }

  set userPassword(value: string) {
    this._userPassword = value;
  }

  get sessions(): string[] {
    return this._sessions;
  }

  set sessions(value: string[]) {
    this._sessions = value;
  }


  }
