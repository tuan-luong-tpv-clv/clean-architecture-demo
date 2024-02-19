export interface IUserService {
  findOneById(id: number | string): any;
  getListUser(): any;
}
