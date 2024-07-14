# NexusChat

Nexus is a communication platform built on Next.js and powered by Prisma ORM. It offers a seamless user experience similar to Discord, allowing users to engage in text-based, real-time audio/video conversations.

## Features

- Real-time text-based communication
- Audio and video calls
- User authentication via Clerk
- Securely hosted on PlanetScale

## Technologies Used

- Next.js
- Prisma ORM
- Clerk for user authentication
- PlanetScale for DB secure hosting

## Getting Started

To get started with Nexus, follow these steps:

1. Clone the repository: `git clone https://github.com/rishikesh-suvarna/NexusChat.git`
2. Install dependencies: `npm install`
3. Set up the database connection in the `.env` file.
4. Run the application: `npm run dev`

## Environment Variables Setup

To configure the environment variables for Nexus, you can use the `.env.example` file located in the root folder of the application. Follow these steps:

1. Copy the `.env.example` file and rename it to `.env`.
2. Open the `.env` file and update the values of the environment variables according to your setup.

Here is an example of the `.env` file:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

Once you have updated the `.env` file, you can proceed with the remaining steps mentioned in the README.

## Contributing

Contributions are welcome! If you'd like to contribute to Nexus, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
