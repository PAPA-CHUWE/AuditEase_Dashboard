import { connectToDB } from "../dbConn";
import { User } from "../models/models";

export const fetchUsers = async (q) => {
  try {
    console.log("Connecting to DB...");
    await connectToDB();  // Await the database connection
    console.log("Connected to DB, fetching users...");
    
    let users;
    if (q) {
      const regex = new RegExp(q, "i");  // Case-insensitive regex
      console.log("Regex pattern:", regex);  // Log the regex pattern
      users = await User.find({ username: { $regex: regex } });  // Use the regex filter
    } else {
      users = await User.find();  // Fetch all users if no query provided
    }
    
    console.log("Users fetched:", users);  // Log the fetched users
    return users;
  } catch (error) {
    console.error("Error in fetchUsers:", error);
    throw new Error("Failed to fetch users: " + error.message);
  }
};
