// Part 1: Develop a module
// A module is simply a separate JavaScript file that contains reusable code.

// Part 2: Domain-specific chatbot
// A domain-specific chatbot answers questions related to one particular topic.

// Examples:

// College chatbot
// Hospital chatbot
// Banking chatbot
// Library chatbot
// Restaurant chatbot

// Part 3: Command Line Application
// Instead of using a webpage, the chatbot should work in the terminal.

function getReply(question) {
    // If the user enters Fees or FEES or fees all become fees
    question = question.toLowerCase();

    if(question == "admission") {
        return "Admission starts in June.";
    }
    else if(question == "fees") {
        return "Fees are Rs. 45,000 per year.";
    }
    else if(question == "courses") {
        return "We offer B.Sc IT, BCA and B.Com.";
    }
    else if(question == "timing") {
        return "College timing is 8 AM to 2 PM.";
    }
    else {
         return "Sorry! I don't understand your question.";
    }
}

// This makes the function available to other files.
module.exports = getReply;