import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name='Хочу купить у вас слона';
    expect(userData.name).toEqual('Хочу купить у вас слона');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='Хочу купить у вас слона';
    expect(userData.email).toEqual('Хочу купить у вас слона');
  });

  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone='+380977360309';
    expect(userData.phone).toEqual('+380977360309');
  });

  it('Sum is accessible', () => {
    expect(userData.total).toEqual('');
    userData.total='3252';
    expect(userData.total).toEqual('3252');
  });

  it('txtmsg is accessible', () => {
    expect(userData.txtmsg).toEqual('');
    userData.txtmsg='Хочу купить у вас слона';
    expect(userData.txtmsg).toEqual('Хочу купить у вас слона');
  });

});
