//declaro la clase AdminRequest
export class AdminRequest {
  method: 'POST' | 'PUT' | 'DELETE'
  endpoint: string
  body: unknown
  timestamp: string

  constructor(method: 'POST' | 'PUT' | 'DELETE', endpoint: string, body: unknown) {
    this.method = method
    this.endpoint = endpoint
    this.body = body
    this.timestamp = new Date().toISOString()
  }

  log() {
    console.log(
      `%c[AdminRequest] ${this.method} ${this.endpoint}`,
      'color: #4ABAB6; font-weight: bold;',
      { body: this.body, timestamp: this.timestamp }
    )
  }
}