#!/usr/bin/env node

// Load environment variables
// console.log("Starting server...");
require("dotenv").config();
// console.log("Environment variables loaded");

// Import dependencies
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const debug = require("debug")("hn-project:server");
const { CronJob } = require("cron");
// console.log("Core dependencies loaded");

// Comment out potentially problematic imports
// const CronJobs = require("./app/common/jobs");
// const sequelizeServer = require("./config/dbConfig");
// console.log("Optional dependencies skipped");

// Try to load routes
let indexRouter;
try {
  indexRouter = require("./routes/index.js");
//   console.log("Routes loaded successfully");
} catch (error) {
  console.error("ERROR: Failed to load routes:", error);
  // Create a dummy router to prevent crash
  indexRouter = express.Router();
  indexRouter.get('/', (req, res) => res.send('Server is running'));
}

// Global variables
let app, server, io;
const port = normalizePort(process.env.PORT || "3000");
console.log(`Port normalized to: ${port}`);
global.socketUsers = new Map();
global.socketMaps = new Map();

// Main function to start the application
function main() {
  console.log("=== Starting main application flow ===");
  
  try {
    // Initialize the Express app
    initializeApp();
    
    // Create and configure HTTP server
    setupServer();
    
    // Set up Socket.IO
    setupSocketIO();
    
    // COMMENTING OUT POTENTIALLY PROBLEMATIC SECTIONS
    // console.log("Skipping cron job setup (commented out)");
    setupCronJobs();
    
    // console.log("Skipping database sync (commented out)");
    syncDatabase();
    
    // console.log("=== Server startup complete ===");
  } catch (error) {
    console.error("FATAL ERROR in main function:", error);
    process.exit(1);
  }
}

// Initialize Express application and middleware
function initializeApp() {
//   console.log("Initializing Express app...");
  
  app = express();
  
  // Configure middleware
//   console.log("Setting up middleware...");
  app.use(cors());
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));
//   console.log("Middleware setup complete");
  
  // Routes
//   console.log("Setting up routes...");
  app.use("/", indexRouter);
//   console.log("Routes setup complete");
  
  // Error handling
//   console.log("Setting up error handlers...");
  setupErrorHandlers();
//   console.log("Error handlers setup complete");
  
  // Set port
  app.set("port", port);
//   console.log(`Express app initialized on port ${port}`);
}

// Set up error handlers for Express
function setupErrorHandlers() {
  // 404 handler
  app.use((req, res, next) => {
    console.log(`404 Not Found: ${req.originalUrl}`);
    next(createError(404));
  });
  
  // Error handler
  app.use((err, req, res, next) => {
    console.error(`Error handler caught: ${err.message}`);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500).json({ success: false, message: err.message });
  });
  
  // Process error handlers
  process.on("uncaughtException", (err) => {
    console.error("UNCAUGHT EXCEPTION:", err);
    // Don't exit immediately to keep server running
    // console.error("Uncaught exception stack:", err.stack);
  });
  
  process.on("unhandledRejection", (reason, promise) => {
    // console.error("UNHANDLED REJECTION at:", promise);
    // console.error("Reason:", reason);
    // Don't exit to keep server running
  });
  
//   console.log("Error handlers registered");
}

// Set up HTTP server
function setupServer() {
//   console.log("Setting up HTTP server...");
  server = http.createServer(app);
  
  server.listen(port);
//   console.log(`Server listening on port ${port}`);
  
  server.on("error", onError);
  server.on("listening", onListening);
  
  // Keep server running
//   console.log("Adding keep-alive interval");
  setInterval(() => {
    // console.log(`Server still running on port ${port}`);
  }, 60000); // Log every minute to confirm server is still alive
}

// Set up Socket.IO
function setupSocketIO() {
//   console.log("Setting up Socket.IO...");
  try {
    io = socketIo(server, {
      cors: { origin: "*" }
    });
    
    // Add socket to global variable
    global.socketIo = io;
    
    io.on("connection", (socket) => {
    //   console.log("Socket: New Mind IT User connected");
      
      socket.on("mapUser", ({ sid, user_id }) => {
        console.log(`Socket: Mapping user ${user_id} to ${sid}`);
        global.socketUsers.set(user_id, sid);
        global.socketMaps.set(sid, user_id);
      });
      
      socket.on("disconnect", (reason) => {
        const userId = global.socketMaps.get(socket.id);
        if (userId) {
          console.log(`Socket: Removing user ${userId}`);
          global.socketUsers.delete(userId);
        } else {
          console.log(`Socket: User not found for socket ${socket.id}`);
        }
        global.socketMaps.delete(socket.id);
        console.log(`Socket: Mind IT User disconnected | ${reason}`);
      });
    });
    
    // console.log("Socket.IO setup complete");
  } catch (error) {
    console.error("ERROR setting up Socket.IO:", error);
    // Continue anyway to keep server running
  }
}

// Set up cron jobs - COMMENTED OUT TO PREVENT ISSUES
function setupCronJobs() {
//   console.log("Setting up cron jobs...");
  try {
    // Commented out due to potential issues
    // const job = new CronJob(
    //   "0 0 0 * * *", // Midnight daily
    //   new CronJobs().sendNotificationOnMissingOutTimeLogging,
    //   null,
    //   true
    // );
    // console.log("Cron jobs setup skipped");
  } catch (error) {
    console.error("ERROR setting up cron jobs:", error);
  }
}

// Sync database - COMMENTED OUT TO PREVENT ISSUES
async function syncDatabase() {
//   console.log("Syncing database...");
  try {
    // Commented out due to potential issues
    // await sequelizeServer.sync({ alter: true });
    // console.log("Database sync skipped");
  } catch (error) {
    console.error("ERROR syncing database:", error);
  }
}

// Normalize port value
function normalizePort(val) {
//   console.log(`Normalizing port value: ${val}`);
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    console.log(`Using named pipe: ${val}`);
    return val; // Named pipe
  }
  if (port >= 0) {
    console.log(`Using port number: ${port}`);
    return port; // Port number
  }
  console.log(`Invalid port: ${val}, returning false`);
  return false;
}

// Event listener for HTTP server "error" event
function onError(error) {
  console.error(`Server error: ${error.message}`);
  if (error.syscall !== "listen") throw error;
  
  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;
  
  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      console.error(`Unhandled server error: ${error.message}`);
      throw error;
  }
}

// Event listener for HTTP server "listening" event
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
//   console.log(`Server listening on ${bind}`);
  debug(`Listening on ${bind}`);
}

// Prevent the Node.js process from exiting
process.stdin.resume();

// Start the application
// console.log("Calling main function...");
main();
// console.log("Main function called, server should be running");