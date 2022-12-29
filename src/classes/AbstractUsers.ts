import { allUsers } from "./User";

export const enum sortTypes {ASC, DESC};

export abstract class AbstractUsers<T extends allUsers> {
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

  public sorted<K extends keyof T>(field: K, orderDirection: sortTypes = sortTypes.ASC):T[] {
    return this.userList.sort((a: T, b: T) => orderDirection === sortTypes.ASC ?
      a[field] > b[field] ? 1 : -1 :
      a[field] > b[field] ? -1 : 1);
  }
}
