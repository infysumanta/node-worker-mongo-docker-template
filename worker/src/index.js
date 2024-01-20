const cron = require("node-cron");
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

console.log({ MONGO_URI });

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const WorkerSchema = new mongoose.Schema(
  {
    jobID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Worker = mongoose.model("Worker", WorkerSchema);

const task = cron.schedule("* * * * * *", async () => {
  try {
    const date = new Date().getTime();
    const jobID = date.toString();
    console.log("JOB Executed", jobID);
    const worker = new Worker({ jobID });
    await worker.save();
    console.log("JOB Executed", jobID);
  } catch (error) {
    console.log(error.message);
  }
});

connectDB().then(() => {
  task.start();
});
