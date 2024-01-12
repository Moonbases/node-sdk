# Moonbase SDK Documentation

The Moonbase SDK is a powerful tool for interacting with the Moonbase API. This documentation will guide you through the process of setting up and using the SDK in your project.

# Moonbase Request Access

Requeset access for Moonbase API: https://discord.gg/HhR6qRDFmJ 

## Installation

You can install the Moonbase SDK package using npm or yarn:

```bash
npm install moonbase-sdk
# or
yarn add moonbase-sdk
```

## Getting Started

To get started with the Moonbase SDK, you need to create an instance of the `MoonbaseClient` class.

```javascript
import MoonbaseClient from 'moonbase-sdk';

const moonbase = new MoonbaseClient('https://your-api-url.com', {
  public_api_key: 'your-public-api-key',
  private_api_key: 'your-private-api-key' // optional
});
```

## Account Operations

### Creating a New User

```javascript
const newUser = {
  email: 'user@example.com',
  username: 'newUser',
  password: 'password123',
};

moonbase.account.userNew(newUser)
  .then((response) => {
    console.log('User created:', response);
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  });
```

### User Authentication

```javascript
const userCredentials = {
  username: 'existingUser',
  password: 'password456',
};

moonbase.account.user(userCredentials)
  .then((response) => {
    console.log('User authenticated:', response);
  })
  .catch((error) => {
    console.error('Authentication failed:', error);
  });
```

### More Account Operations

You can explore other account-related operations such as user PIN management, password reset, and license activation using the provided methods in the `moonbase.account` object.

## Admin Operations

### Creating a New Product

```javascript
const newProduct = {
  name: 'New Product',
  version: '1.0.0',
  price: 99.99,
};

moonbase.admin.createProduct(newProduct)
  .then((response) => {
    console.log('Product created:', response);
  })
  .catch((error) => {
    console.error('Error creating product:', error);
  });
```

### Managing Licenses

You can perform various license-related operations like creating, deleting, and getting license information using the methods in the `moonbase.admin` object.

### More Admin Operations

Explore other admin operations such as managing users, blacklists, and file links using the provided methods in the `moonbase.admin` object.

## TypeScript Types

The Moonbase SDK provides TypeScript type definitions to ensure type safety in your code. You can refer to the provided types when working with the SDK to benefit from code completion and type checking.

### Example TypeScript Usage

```typescript
import { UserNew } from 'moonbase-sdk';

const newUser: UserNew = {
  email: 'user@example.com',
  username: 'newUser',
  password: 'password123',
};
```

Happy coding with Moonbase!