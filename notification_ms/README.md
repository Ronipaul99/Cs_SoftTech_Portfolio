# Notification Microservice

## Available Routes

- GET `/` - returns the array of notifications.
- POST `/:id/mark-as-read` - update notification with id as seen.
- DELETE `/:id` - deletes the notification with id.

## Running

- Install dependencies with `yarn install`.
- Start the server with `yarn dev`.

## Testing

Tests are written with ava testing library.
To run tests run - `yarn test`.
