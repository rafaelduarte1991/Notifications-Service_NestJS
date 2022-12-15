import { Content } from './content';

describe('Notification content', () => {
  
  test('the application should be able to create a notification contet', () => {
    const content = new Content('you have received a friend request');  
    expect(content).toBeTruthy();
  });
  
  test('the application should not be able to create a notification contet with less than 5 characters', () => {
    expect(() => new Content('no')).toThrow();
  });
  
  test('the application should not be able to create a notification contet with more than 255 characters', () => {
    expect(() => new Content('no'.repeat(256))).toThrow();
  });

})
