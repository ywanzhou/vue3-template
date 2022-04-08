interface ProxyStorage {
  getItem(key: string): any
  setItem(Key: string, value: string): void
  removeItem(key: string): void
  clear(): void
}

class Cache implements ProxyStorage {
  private storage: ProxyStorage

  constructor(storageModel: ProxyStorage) {
    this.storage = storageModel
  }

  // 增加
  public setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value))
  }

  // 获取
  public getItem(key: string): any {
    return JSON.parse(this.storage.getItem(key))
  }

  // 删除
  public removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  // 清空
  public clear(): void {
    this.storage.clear()
  }
}

export const SessionCache = new Cache(sessionStorage)
export const LocalCache = new Cache(localStorage)
