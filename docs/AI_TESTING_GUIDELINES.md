## 🧪 AI Testing Guidelines

**Document Version:** 1.0.0  
**Purpose:** Standard instructions for generating high-quality, maintainable tests  
**Tags:** #ai-guidelines #testing #unit-tests #tdd #qa

---

## 🎯 **Testing Philosophy**

### Core Testing Principles

1. **Test Behavior, Not Implementation** - Focus on what the code does, not how
2. **Isolation** - Tests should be independent and isolated
3. **Repeatability** - Tests should produce the same results every time
4. **Readability** - Tests are documentation; make them clear
5. **Maintainability** - Write tests that are easy to update
6. **Coverage** - Prioritize critical paths over arbitrary coverage percentages

---

## 📋 **Test Structure Standards**

### The AAA Pattern (Arrange-Act-Assert)

```javascript
describe('Feature or Component being tested', () => {
  it('should do something specific', () => {
    // ARRANGE: Setup test data and conditions
    const input = { name: 'test', value: 42 };
    const expected = 'expected result';
    
    // ACT: Execute the code being tested
    const result = functionUnderTest(input);
    
    // ASSERT: Verify the results
    expect(result).toBe(expected);
  });
});
```
### Naming Conventions

Test descriptions should follow this pattern:  
"should [expected behavior] when [specific condition]"

**Examples:**  
✅ "should return user data when valid ID is provided"  
✅ "should throw error when email format is invalid"  
✅ "should calculate total price with tax included"  
✅ "should handle empty array gracefully"

❌ "test function"  
❌ "check if works"  
❌ "user test"

---

## 🏗️ **Types of Tests to Generate**

### 1. **Unit Tests**

**Focus:** Individual functions, methods, or classes  
**Characteristics:**

- Fast execution
- Isolated (mock dependencies)
- Test one thing at a time
- Cover edge cases and main flows

### 2. **Integration Tests**

**Focus:** Interactions between components  
**Characteristics:**

- Test real interactions
- May use test databases
- Verify API contracts
- Test external service integration

### 3. **Edge Cases to Always Consider**

- Empty inputs
- Null/undefined values
- Boundary values
- Invalid data types
- Large inputs
- Concurrent operations
- Error conditions
- Timeouts
- Rate limiting

---

## 🔧 **Framework-Specific Guidelines**

### Jest (JavaScript/TypeScript)

```javascript
describe('Calculator', () => {
  beforeEach(() => {
    // Setup before each test
  });
  
  afterEach(() => {
    // Cleanup after each test
  });
  
  describe('add()', () => {
    it('should add two positive numbers correctly', () => {
      // Test implementation
    });
    
    it('should handle negative numbers', () => {
      // Test implementation
    });
  });
});
```

### Jest + NestJS (Current Stack)

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should return user when valid ID is provided', async () => {
    const mockUser = { id: 1, email: 'test@example.com' };
    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(mockUser);

    const result = await service.findById(1);

    expect(result).toEqual(mockUser);
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
});
```

### JUnit + Spring Boot (Future - Version 2.0)

```java
class CalculatorTest {
    private Calculator calculator;
    
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    void shouldAddTwoNumbers() {
        // Test implementation
        assertEquals(5, calculator.add(2, 3));
    }
    
    @Test
    void shouldThrowExceptionWhenDividingByZero() {
        assertThrows(ArithmeticException.class, 
            () -> calculator.divide(10, 0));
    }
}
```
---

## 🎭 **Mocking Guidelines**

### When to Mock

✅ Mock external services  
✅ Mock database connections  
✅ Mock file system operations  
✅ Mock time-dependent functions  
✅ Mock network requests

❌ Don't mock simple utilities  
❌ Don't mock value objects  
❌ Don't over-mock (makes tests fragile)

### Mock Example

```javascript
// Mock an external API call
jest.mock('./api', () => ({
  fetchUserData: jest.fn()
}));
test('should fetch and process user data', async () => {
  // Arrange
  const mockUserData = { id: 1, name: 'John' };
  fetchUserData.mockResolvedValue(mockUserData);
  
  // Act
  const result = await userService.getUser(1);
  
  // Assert
  expect(result).toEqual(mockUserData);
  expect(fetchUserData).toHaveBeenCalledWith(1);
});
```
---

## 📊 **Coverage Guidelines**

### What to Cover

✅ Happy paths (main functionality)  
✅ Error paths (exceptions, invalid inputs)  
✅ Edge cases (boundaries, limits)  
✅ Business logic branches  
✅ Complex calculations

🟡 **Nice to have:**

- Utility functions
- Helper methods
- Configuration validation

❌ **Don't waste time on:**

- Generated code
- Simple getters/setters
- Third-party library wrappers (test the integration instead)

---

## 🔍 **Test Quality Checklist**

Before considering tests complete, verify:

- Tests are **independent** (can run in any order)
- Tests are **deterministic** (same result every time)
- Test names clearly describe **behavior**
- Each test verifies **one concept**
- Mocks are used **appropriately**
- **Edge cases** are covered
- **Error scenarios** are tested
- Tests are **fast** (unit tests should be <100ms)
- No **test pollution** (clean up after tests)
- Tests are **readable** and **maintainable**

---

## 🚫 **Common Testing Anti-patterns**

### What NOT to do

❌ Testing multiple things in one test  
❌ Using magic numbers without explanation  
❌ Sleeping in tests (use mocks for time)  
❌ Testing private methods directly  
❌ Conditional logic in tests  
❌ Hard-to-understand test setup  
❌ Ignoring failed tests  
❌ Testing implementation details  
❌ Shared mutable state between tests

---

## 📝 **Test Documentation**

### Include in Test Files

```javascript
/*
 * Test Suite: User Authentication Service
 * 
 * This test suite covers:
 * - User registration flows
 * - Login attempts
 * - Password reset functionality
 * - Session management
 * 
 * Dependencies:
 * - Mocked email service
 * - Test database
 * - Redis mock for sessions
 */
```
---

## 🎯 **BDD Style Testing**

When appropriate, use BDD-style descriptions:

```gherkin
Feature: User Login
  As a registered user
  I want to log into the system
  So that I can access my dashboard
  
Scenario: Successful login with valid credentials
  Given I am on the login page
  When I enter valid username and password
  And I click the login button
  Then I should be redirected to my dashboard
  And I should see a welcome message
  
Scenario: Failed login with invalid password
  Given I am on the login page
  When I enter valid username and invalid password
  And I click the login button
  Then I should see an error message
  And I should remain on the login page
```
---

## 🔄 **Test-Driven Development (TDD) Flow**

When asked to implement features using TDD:

1. 🔴 **RED** - Write a failing test
2. ✅ **GREEN** - Write minimal code to pass the test
3. 🔵 **REFACTOR** - Clean up code while keeping tests green
4. 🔁 **REPEAT** - Continue with next requirement


---

## 📚 **Example Test Templates**

### API Endpoint Test

```javascript
describe('GET /api/users/:id', () => {
  it('should return 200 and user data for valid ID', async () => {
    // Test implementation
  });
  
  it('should return 404 when user not found', async () => {
    // Test implementation
  });
  
  it('should return 400 for invalid ID format', async () => {
    // Test implementation
  });
  
  it('should return 401 when not authenticated', async () => {
    // Test implementation
  });
});
```
### Service/Utility Test

```javascript
describe('EmailValidator', () => {
  it('should return true for valid email formats', () => {
    const validEmails = [
      'user@example.com',
      'user.name@domain.co.uk',
      'user+label@gmail.com'
    ];
    
    validEmails.forEach(email => {
      expect(EmailValidator.isValid(email)).toBe(true);
    });
  });
  
  it('should return false for invalid email formats', () => {
    const invalidEmails = [
      'not-an-email',
      'missing@domain',
      '@no-local-part.com',
      'spaces in@email.com'
    ];
    
    invalidEmails.forEach(email => {
      expect(EmailValidator.isValid(email)).toBe(false);
    });
  });
});
```
---

## 🎓 **Learning and Improvement in Tests**

When identifying test issues or suggesting improvements:

### Explain the "Why"

❌ **Bad**: "This test is wrong."  
✅ **Good**: "This test is checking implementation details instead of behavior. If we refactor the internal logic, this test will break even if the functionality remains correct. Let's focus on testing the output instead."

### Provide References

- Link to testing best practices
- Reference framework documentation
- Suggest books like "Clean Code" or "Working Effectively with Legacy Code"


### Show the Progression

**From:**
```javascript
it('should work', () => {
  expect(calculator.internalState).toBe(42); // Testing private state
});
```

**To:**
```javascript
it('should return correct sum', () => {
  expect(calculator.add(2, 2)).toBe(4); // Testing behavior
});
```

---

## ❌ **What to Avoid in Test Generation**

- ❌ Generating tests that depend on each other
- ❌ Using magic numbers without explanation
- ❌ Testing trivial code (getters/setters)
- ❌ Ignoring edge cases
- ❌ Complex test setup that obscures what's being tested
- ❌ Testing through UI when unit tests would suffice
- ❌ Flaky tests (tests that sometimes pass, sometimes fail)

---

## ✅ **What to Always Include in Tests**

- ✅ Clear test descriptions
- ✅ Proper setup and teardown
- ✅ Both positive and negative scenarios
- ✅ Edge cases
- ✅ Comments explaining non-obvious assertions
- ✅ Isolation from other tests

---

**Last Updated:** 2024  
**Maintainer:** Development Team  
**Review Cycle:** Monthly

---