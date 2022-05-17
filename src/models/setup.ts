


export class Setup {
  private  _setupId  : number  = 0;
  private  _setupName  : string  = '';
  private _setupFLPsi: number  = 0;
  private _setupFRPsi: number  = 0;
  private _setupRLPsi: number  = 0;
  private _setupRRPsi: number  = 0;
  private _setupFLToe: number  = 0;
  private _setupFRToe: number  = 0;
  private _setupRLToe: number  = 0;
  private _setupRRToe: number  = 0;
  private _setupFLCamber: number  = 0;
  private _setupFRCamber: number  = 0;
  private _setupRLCamber: number  = 0;
  private _setupRRCamber: number  = 0;
  private _setupFLCaster: number  = 0;
  private _setupFRCaster: number  = 0;
  private _setupsetupDesc: string  = '';
  private _weather: string  = '';
  private _condition: string  = '';


  constructor() {
  }

  get setupId(): number {
    return this._setupId;
  }

  set setupId(value: number) {
    this._setupId = value;
  }

  get sessionName(): string {
    return this._setupName;
  }

  set sessionName(value: string) {
    this._setupName = value;
  }

  get setupFLPsi(): number {
    return this._setupFLPsi;
  }

  set setupFLPsi(value: number) {
    this._setupFLPsi = value;
  }
  get setupFRPsi(): number {
    return this._setupFRPsi;
  }

  set setupFRPsi(value: number) {
    this._setupFRPsi = value;
  }

  get setupRLPsi(): number {
    return this._setupRLPsi;
  }

  set setupRLPsi(value: number) {
    this._setupRLPsi = value;
  }
  get setupRRPsi(): number {
    return this._setupRRPsi;
  }

  set setupRRPsi(value: number) {
    this._setupRRPsi = value;
  }

  get setupFLToe(): number {
    return this._setupFLToe;
  }

  set setupFLToe(value: number) {
    this._setupFLToe = value;
  }

  get setupFRToe(): number {
    return this._setupFRToe;
  }

  set setupFRToe(value: number) {
    this._setupFRToe = value;
  }

  get setupRLToe(): number {
    return this._setupRLToe;
  }

  set setupRLToe(value: number) {
    this._setupRLToe = value;
  }

  get setupRRToe(): number {
    return this._setupRRToe;
  }

  set setupRRToe(value: number) {
    this._setupRRToe = value;
  }

  get setupFLCamber(): number {
    return this._setupFLCamber;
  }

  set setupFLCamber(value: number) {
    this._setupFLCamber = value;
  }

  get setupFRCamber(): number {
    return this._setupFRCamber;
  }

  set setupFRCamber(value: number) {
    this._setupFRCamber = value;
  }

  get setupRLCamber(): number {
    return this._setupRLCamber;
  }

  set setupRLCamber(value: number) {
    this._setupRLCamber = value;
  }

  get setupRRCamber(): number {
    return this._setupRRCamber;
  }

  set setupRRCamber(value: number) {
    this._setupRRCamber = value;
  }

  get setupFLCaster(): number {
    return this._setupFLCaster;
  }

  set setupFLCaster(value: number) {
    this._setupFLCaster = value;
  }

  get setupFRCaster(): number {
    return this._setupFRCaster;
  }

  set setupFRCaster(value: number) {
    this._setupFRCaster = value;
  }

  get setupsetupDesc(): string {
    return this._setupsetupDesc;
  }

  set setupsetupDesc(value: string) {
    this._setupsetupDesc = value;
  }

  get weather(): string {
    return this._weather;
  }

  set weather(value: string) {
    this._weather = value;
  }

  get condition(): string {
    return this._condition;
  }

  set condition(value: string) {
    this._condition = value;
  }


  }
