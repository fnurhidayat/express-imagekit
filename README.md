# Express ImageKit Integration

This repository contains implementation of express and imagekit integration.

## Dependencies

- `express`
- `morgan`
- `imagekit`

## How to get imagekit credential?

See https://imagekit.io/dashboard/developer.

## Environment Variable

See `.env.example` file

## Endpoints

To see it in action, you need to hit this endpoint:

```
POST /api/v1/profile/avatar
```

Use `multipart/form-data` as `Content-Type`, and create new field called `image` on the form-data.

## License

MIT
