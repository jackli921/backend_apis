## How to start this project:
To run the development server without bundling with webpack:
1. run `npm install` to install the dependencies
2. in one terminal, run `npm run dev`

To run the github actions and associated tests locally in a docker container 
1. in stall act (github.com/nektos/act)
2. run `act` in the terminal

## Folder structure:
(If spacing is incorrectly displayed, view the content directly from a text editor or IDE)

src/
├── controllers/        # HTTP handlers
│   └── controller.ts
├── routes/             # express.Router definitions
│   └── route.ts
├── services/           # business logic, talking to DB or other APIs
│   └── service.ts
├── models/             # types + ORM/DB schemas
│   └── index.ts
├── middlewares/         # custom Express middleware (auth, errors, logs…)
│   ├── errorHandler.ts
│   └── requestLogger.ts
├── utils/              # helpers (e.g. logger wrapper, config loader)
│   └── logger.ts
├── app.ts              # assemble app: middleware, routes (exports Express instance)
└── server.ts           # import app.ts & call app.listen()