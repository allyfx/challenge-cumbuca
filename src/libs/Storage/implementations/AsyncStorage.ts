import Storage from '@react-native-async-storage/async-storage'

import { IStorageDto } from "../dtos/storage.dto"

export class AsyncStorage implements IStorageDto {
  async get(key: string): Promise<string | null> {
    return await Storage.getItem(key)
  }

  async set(key: string, value: string): Promise<void> {
    await Storage.setItem(key, value)
  }

  async remove(key: string): Promise<void> {
    await Storage.removeItem(key)
  }

  async clear(): Promise<void> {
    await Storage.clear()
  }
}