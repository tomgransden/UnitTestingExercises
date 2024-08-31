# Exercise 2 - Test Driven Development

## Setup

- Checkout the repo and switch to the `exercise-2-test-driven-development` branch
- Run `npm i` to install all the dependencies
- Run `npm run dev` to see the project

## Exercise description

Test driven development is an approach to coding that focusses on writing good quality code by writing the tests before you write the code. This can feel strange at first as you are testing something that doesn't yet work - however the end result is better quality as it has been covered in tests and all cases have a passing test.

As a reminder, there are 3 main stages of Test Driven Development:

- RED - write a unit test that fails
- GREEN - write the minimum code needed to make the test pass
- REFACTOR - make the code good quality (safe in the fact that the test will fail if you break anything)

Follow the TDD process in the test file (`src/components/user-welcome/__tests__/user-welcome.test.tsx`) to gradually build up a component called UserWelcome (`src/components/user-welcome/user-welcome.tsx). The component needs to take 2 props - `firstName`and`lastName` and both of these props can be optional (undefined).

The component only needs to return a `p` tag with some text according to the following acceptance criteria:

- If neither first name or last name exist, show "Hello!"
- If first name exists but last name doesn't, show "Hello <firstName>"
- If last name exists but first name doesn't, show "Hello!"
- If first name and last name exist, show "Hello <firstName> <lastName>"

To run the tests, you can run `npm run test`.

To check your changes visually in the browser, you can run `npm run dev` - the end result you are looking for will be the following:

![image info](./public/result.png)

You do NOT need to make any changes to any files other than `user-welcome.test.tsx` and `user-welcome.tsx`
