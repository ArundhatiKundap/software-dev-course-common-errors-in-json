/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================


// invalid invalidBookingJSON key should be in double quotes.and no need to declare with const
{
"invalidBookingJSON" :         
                                       //single quote should not be there.Equal to sign should not be there instead : should be there
{                                                          
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15" ,       // comma should be there after checkInDate. after each property comma should be there.
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",        // name key should be in double quotes.Key always should be in double quotes
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,                       // there can be null value not undefined. undefined is not allowed in json.
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]        // In array after amanities there should not be comma
  }
}
                                                         // ending should not have semicolin or end string quote
 }

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors? 
---> I have used https://jsonlint.com/ for validate the json

2️⃣ How did you confirm that your corrected JSON file was valid?
----> In tool when i have copy json file it shows valid json.

3️⃣ Which errors were the most difficult to spot? Why?
----> missing syntax is hard to find out

4️⃣ What strategies can help you avoid these kinds of errors in the future?

   (e.g., syntax highlighting, linters, writing JSON by example)

 -----> validate json by using json validator tool
*/
