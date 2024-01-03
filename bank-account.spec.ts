import { BankAccount, ValueError } from './bank-account';

/*
Instructions:

Run the test file, and fix each of the errors in turn. When you get the
first test to pass, go to the first pending or skipped test, and make
that pass as well. When all of the tests are passing, feel free to
submit.

Remember that passing code is just the first step. The goal is to work
towards a solution that is as readable and expressive as you can make
it.

Have fun!
*/

describe('Bank Account', () => {
  const checking = new BankAccount();

  test('newly opened account has zero balance', () => {
    // Implement Me
    checking.open();
    expect(checking.balance).toBe(0);

  });

  test('can deposit money', () => {
    // Implement Me
    checking.deposit(10);
    expect(checking.balance).toBe(10);
    checking.close();


  });

  test('can deposit money sequentially', () => {
    // Implement Me
     checking.open();
    checking.deposit(50);
    checking.deposit(40);
    expect(checking.balance).toBe(90);
    checking.close();
    
  });

  test('can withdraw money', () => {
    // Implement Me
    checking.open()
    checking.deposit(10);
    checking.withdraw(10);
    expect(checking.balance).toBe(0);
    checking.close();

  });

  test('can withdraw money sequentially', () => {
    // Implement Me
    checking.open();
    checking.deposit(50);
    checking.withdraw(25);
    checking.withdraw(25);
    expect(checking.balance).toBe(0);
    checking.close();

  });

  test('checking balance of closed account throws error', () => {
    // Implement Me
    checking.open();
    checking.close();
    expect(() => checking.balance).toThrow(ValueError);
  });

  test('deposit into closed account throws error', () => {
    // Implement Me
    checking.open();
    checking.close();
    expect(() => checking.deposit(10)).toThrow(ValueError);
  });

  test('withdraw from closed account throws error', () => {
    // Implement Me
    checking.open();
    checking.close();
    expect(() => checking.withdraw(10)).toThrow(ValueError);
  });

  test('close already closed account throws error', () => {
    // Implement Me
    checking.open();
    checking.close();
    expect(() => checking.close()).toThrow(ValueError);
  });

  test('open already opened account throws error', () => {
    // Implement Me
    checking.open();
    // checking.close();
    expect(() => checking.open()).toThrow(ValueError);
    checking.close();

  });

  test('reopened account does not retain balance', () => {
    // Implement Me
    checking.open();
    checking.deposit(10);
    checking.close();
    checking.open();
    expect(checking.balance).toBe(0);
    checking.close();

    

  });

  test('cannot withdraw more than deposited', () => {
    // Implement Me
    checking.open();
    checking.deposit(50)
    // checking.withdraw(51);
    expect(() => checking.withdraw(51)).toThrow(ValueError);
    checking.close();

  });

  test('cannot withdraw negative amount', () => {
    // Implement Me
    checking.open();
    expect(() => checking.withdraw(-50)).toThrow(ValueError);
    checking.close();

  });

  test('cannot deposit negative amount', () => {
    // Implement Me
    checking.open();
    expect(() => checking.deposit(-50)).toThrow(ValueError);
    checking.close();

  });

  test('changing balance directly throws error', () => {
    // Implement Me
    checking.open();
    expect(() => checking.balance += 50).toThrow(TypeError);
  });
});
