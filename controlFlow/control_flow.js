let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


function checkAuthorization(role) {
    if (!role) {
        console.log("Invalid input. Role cannot be empty.");
        return;
    }

    role = role.toLowerCase();

    if (role === "employee") {
        console.log("Authorized: You have full access to Dietary Services.");

    } else if (role === "enrolled member") {
        console.log("Authorized: You have access to Dietary Services and one-on-one interaction with a dietician.");

    } else if (role === "subscriber") {
        console.log("Authorized: You have partial access to Dietary Services.");

    } else if (role === "non-subscriber") {
        console.log("Access Denied: Please enroll or subscribe to avail Dietary Services.");

    } else {
        console.log("Invalid role entered. Please try again.");
    }
}

// Example calls
checkAuthorization("Employee");
checkAuthorization("Enrolled Member");
checkAuthorization("Subscriber");
checkAuthorization("Non-Subscriber");
