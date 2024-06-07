const institutionData = [
  {
    name: "Greenfield University",
    address: "123 University Ave, Greenfield",
    contactEmail: "info@greenfield.edu",
    phoneNumber: "123-456-7890",
    authorizedPerson: {
      name: "Dr. Emily Smith",
      role: "Dean"
    },
    totalSubmissions: 15,
    pendingReviews: 2,
    nextReviewDate: new Date("2024-07-15"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-04-01") },
      { title: "Q2 Review", date: new Date("2024-05-01") }
    ],
    notifications: ["Your next review is scheduled for July 15, 2024."]
  },
  {
    name: "Blue Ridge College",
    address: "456 College Rd, Blue Ridge",
    contactEmail: "contact@blueridge.edu",
    phoneNumber: "987-654-3210",
    authorizedPerson: {
      name: "Prof. John Doe",
      role: "Principal"
    },
    totalSubmissions: 20,
    pendingReviews: 3,
    nextReviewDate: new Date("2024-08-20"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-03-15") },
      { title: "Q2 Review", date: new Date("2024-06-15") }
    ],
    notifications: ["Your next review is scheduled for August 20, 2024."]
  },
  {
    name: "Mountain State University",
    address: "789 Campus Dr, Mountain City",
    contactEmail: "admin@mountainstate.edu",
    phoneNumber: "321-654-0987",
    authorizedPerson: {
      name: "Dr. Sarah Lee",
      role: "President"
    },
    totalSubmissions: 12,
    pendingReviews: 1,
    nextReviewDate: new Date("2024-09-10"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-02-01") },
      { title: "Q2 Review", date: new Date("2024-05-01") }
    ],
    notifications: ["Your next review is scheduled for September 10, 2024."]
  },
  {
    name: "River Valley Institute",
    address: "101 Institute Ln, River Valley",
    contactEmail: "info@rivervalley.edu",
    phoneNumber: "654-321-8765",
    authorizedPerson: {
      name: "Prof. William Turner",
      role: "Director"
    },
    totalSubmissions: 18,
    pendingReviews: 4,
    nextReviewDate: new Date("2024-10-05"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-03-10") },
      { title: "Q2 Review", date: new Date("2024-06-10") }
    ],
    notifications: ["Your next review is scheduled for October 5, 2024."]
  },
  {
    name: "Sunnydale University",
    address: "202 University St, Sunnydale",
    contactEmail: "contact@sunnydale.edu",
    phoneNumber: "987-123-4567",
    authorizedPerson: {
      name: "Dr. Alice Johnson",
      role: "Chancellor"
    },
    totalSubmissions: 25,
    pendingReviews: 5,
    nextReviewDate: new Date("2024-11-15"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-01-20") },
      { title: "Q2 Review", date: new Date("2024-04-20") }
    ],
    notifications: ["Your next review is scheduled for November 15, 2024."]
  },
  {
    name: "Hilltop College",
    address: "303 College Blvd, Hilltop",
    contactEmail: "admin@hilltop.edu",
    phoneNumber: "123-987-6543",
    authorizedPerson: {
      name: "Prof. Michael Brown",
      role: "Principal"
    },
    totalSubmissions: 10,
    pendingReviews: 2,
    nextReviewDate: new Date("2024-12-01"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-02-15") },
      { title: "Q2 Review", date: new Date("2024-05-15") }
    ],
    notifications: ["Your next review is scheduled for December 1, 2024."]
  },
  {
    name: "Seaside Institute",
    address: "404 Seaside Rd, Seaside",
    contactEmail: "info@seaside.edu",
    phoneNumber: "876-543-2109",
    authorizedPerson: {
      name: "Dr. Laura Adams",
      role: "Dean"
    },
    totalSubmissions: 22,
    pendingReviews: 3,
    nextReviewDate: new Date("2024-07-25"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-03-05") },
      { title: "Q2 Review", date: new Date("2024-06-05") }
    ],
    notifications: ["Your next review is scheduled for July 25, 2024."]
  },
  {
    name: "Lakeside University",
    address: "505 University Pkwy, Lakeside",
    contactEmail: "contact@lakeside.edu",
    phoneNumber: "210-987-6543",
    authorizedPerson: {
      name: "Prof. Robert Wilson",
      role: "President"
    },
    totalSubmissions: 30,
    pendingReviews: 6,
    nextReviewDate: new Date("2024-08-30"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-04-10") },
      { title: "Q2 Review", date: new Date("2024-07-10") }
    ],
    notifications: ["Your next review is scheduled for August 30, 2024."]
  },
  {
    name: "Forest Hill College",
    address: "606 College Ln, Forest Hill",
    contactEmail: "admin@foresthill.edu",
    phoneNumber: "543-210-9876",
    authorizedPerson: {
      name: "Dr. Kevin Davis",
      role: "Director"
    },
    totalSubmissions: 17,
    pendingReviews: 2,
    nextReviewDate: new Date("2024-09-20"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-02-20") },
      { title: "Q2 Review", date: new Date("2024-05-20") }
    ],
    notifications: ["Your next review is scheduled for September 20, 2024."]
  },
  {
    name: "Valley View University",
    address: "707 University Rd, Valley View",
    contactEmail: "info@valleyview.edu",
    phoneNumber: "654-321-0987",
    authorizedPerson: {
      name: "Prof. Rachel Green",
      role: "Chancellor"
    },
    totalSubmissions: 27,
    pendingReviews: 4,
    nextReviewDate: new Date("2024-10-15"),
    recentSubmissions: [
      { title: "Q1 Review", date: new Date("2024-01-30") },
      { title: "Q2 Review", date: new Date("2024-04-30") }
    ],
    notifications: ["Your next review is scheduled for October 15, 2024."]
  }
];

export default institutionData;
