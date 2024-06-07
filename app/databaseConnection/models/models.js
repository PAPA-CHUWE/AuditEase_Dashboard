import { connectToDB } from "../dbConn";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true,
        enum: ['institution', 'admin', 'superuser', 'reviewer']
    },
    institutionDetails: {
        institutionName: String,
        address: String,
        contactEmail: String,
        authorizedPersonName: String,
        authorizedPersonRole: String
    },
    adminDetails: {
        adminName: String,
        adminEmail: String,
        adminPhoneNumber: String,
        adminRole: String
    },
    superUserDetails: {
        superUserName: String,
        superUserEmail: String,
        superUserPhoneNumber: String,
        superUserRole: String
    },
    reviewerDetails: {
        qualifications: String,
        specialization: String
    },
    nextReviewDate: {
        type: Date,
        required: true ,
        default: function() {
            // Calculate the next review date as 14 days after submission
            const submissionDate = this.submissionDate || Date.now(); // Use current date if submission date is not specified
            const nextReviewDate = new Date(submissionDate);
            nextReviewDate.setDate(nextReviewDate.getDate() + 14); // Add 14 days
            return nextReviewDate;
        }
    }
},{
    timestamps: true
});


const InstitutionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contactEmail: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    authorizedPerson: {
        name: { type: String, required: true },
        role: { type: String, required: true }
    },
    totalSubmissions: { type: Number, required: true },
    pendingReviews: { type: Number, required: true },
    recentSubmissions: [{
        title: { type: String, required: true },
        date: { type: Date, required: true }
    }],
    notifications: { type: [String], required: true },
    nextReviewDate: {
        type: Date,
        required: true ,
        default: function() {
            // Calculate the next review date as 14 days after submission
            const submissionDate = this.submissionDate || Date.now(); // Use current date if submission date is not specified
            const nextReviewDate = new Date(submissionDate);
            nextReviewDate.setDate(nextReviewDate.getDate() + 14); // Add 14 days
            return nextReviewDate;
        }
    }
}, {
    timestamps: true
});



// Check if models already exist before defining
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Institution = mongoose.models.Institution || mongoose.model("Institution", InstitutionSchema);


// Mock data arrays
const names = ["John", "Jane", "Alice", "Bob", "Charlie", "David"];
const surnames = ["Doe", "Smith", "Johnson", "Brown", "Williams", "Jones"];
const emailDomains = ["example.com", "test.com", "sample.com"];
const jobTitles = ["Manager", "Developer", "Designer", "Analyst", "Consultant"];
const specializations = ["Software", "Hardware", "Network", "Security", "Database"];

// Function to get random item from an array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

connectToDB();

// Function to generate and insert users
const generateAndInsertUsers = async () => {
    const users = [];

    for (let i = 0; i < 50; i++) {
        const userRole = getRandomItem(['institution', 'admin', 'superuser', 'reviewer']);
        const name = getRandomItem(names);
        const surname = getRandomItem(surnames);
        const email = `${name.toLowerCase()}.${surname.toLowerCase()}@${getRandomItem(emailDomains)}`;
        const phoneNumber = `+1234567890${i}`;

        const user = {
            name: name,
            surname: surname,
            email: email,
            phoneNumber: phoneNumber,
            userRole: userRole,
            nextReviewDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
        };

        // Populate role-specific details
        if (userRole === 'institution') {
            user.institutionDetails = {
                institutionName: getRandomItem(["Institution A", "Institution B", "Institution C"]),
                address: `${i + 1} Main St, City, Country`,
                contactEmail: `${name.toLowerCase()}.${surname.toLowerCase()}@${getRandomItem(emailDomains)}`,
                authorizedPersonName: `${getRandomItem(names)} ${getRandomItem(surnames)}`,
                authorizedPersonRole: getRandomItem(jobTitles)
            };
        } else if (userRole === 'admin') {
            user.adminDetails = {
                adminName: `${getRandomItem(names)} ${getRandomItem(surnames)}`,
                adminEmail: `${getRandomItem(names).toLowerCase()}.${getRandomItem(surnames).toLowerCase()}@${getRandomItem(emailDomains)}`,
                adminPhoneNumber: `+1234567890${i + 50}`,
                adminRole: getRandomItem(jobTitles)
            };
        } else if (userRole === 'superuser') {
            user.superUserDetails = {
                superUserName: `${getRandomItem(names)} ${getRandomItem(surnames)}`,
                superUserEmail: `${getRandomItem(names).toLowerCase()}.${getRandomItem(surnames).toLowerCase()}@${getRandomItem(emailDomains)}`,
                superUserPhoneNumber: `+1234567890${i + 100}`,
                superUserRole: getRandomItem(jobTitles)
            };
        } else if (userRole === 'reviewer') {
            user.reviewerDetails = {
                qualifications: getRandomItem(jobTitles),
                specialization: getRandomItem(specializations)
            };
        }

        users.push(user);
    }

    try {
        await User.insertMany(users);
        console.log('50 users inserted successfully');
    } catch (err) {
        console.error('Error inserting users', err);
    } finally {
        mongoose.disconnect();
    }
};

generateAndInsertUsers();