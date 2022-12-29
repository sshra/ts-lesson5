import { User } from "./User";

export abstract class AbstractUsers<T extends User> {
  protected userList: T[] = [];

  public add(user: T):this {
    this.userList.push(user);
    return this;
  }

  public remove(id: number): boolean {
    const itemIndexToRemove = this.userList.findIndex(item => item.id === id);
    if (itemIndexToRemove != -1) {
      this.userList.splice(itemIndexToRemove, 1);
    }
    return itemIndexToRemove !== -1;
  }

  public get(id: number): T | null {
    return this.userList.find(item => item.id === id) ?? null;
  }
}