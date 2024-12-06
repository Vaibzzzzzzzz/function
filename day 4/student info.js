// Define a class to manage student information
class Student {
  constructor(name, dateOfBirth, contactInfo, academicDetails, adminDetails) {
    // Personal Information
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.contactInfo = contactInfo;

    // Academic Information
    this.academicDetails = academicDetails; // { major, courses, grades, attendance }

    // Administrative Information
    this.adminDetails = adminDetails; // { studentID, scholarshipStatus, feePaid }
  }

  // Method to display the student details
  displayDetails() {
    console.log("Student Details:");
    console.log("Name:", this.Name);
    console.log("Date of Birth:", this.dateOfBirth);
    console.log("Contact Info:", this.contactInfo);
    console.log("Academic Details:", this.academicDetails);
    console.log("Administrative Details:", this.adminDetails);
  }

  // Method to update academic details
  updateAcademicDetails(newCourses, newGrades, newAttendance) {
    this.academicDetails.courses = newCourses;
    this.academicDetails.grades = newGrades;
    this.academicDetails.attendance = newAttendance;
  }

  // Method to update administrative details (e.g., fee status)
  updateAdminDetails(newStudentID, newScholarshipStatus, newFeePaidStatus) {
    this.adminDetails.studentID = newStudentID;
    this.adminDetails.scholarshipStatus = newScholarshipStatus;
    this.adminDetails.feePaid = newFeePaidStatus;
  }

  // Method to delete all student information after graduation
  graduate() {
    console.log(`Graduating student: ${this.name}`);
    this.name = null;
    this.dateOfBirth = null;
    this.contactInfo = null;
    this.academicDetails =null;
    this.adminDetails =null;
    console.log("All student information has been deleted.");
  }
}

// Example usage

// Creating a new student object
const student1 = new Student(
  "vaibhavi",
  "2000-01-15",
  { phone: "123-456-7890", email: "johndoe@example.com" },
  { major: "Computer Science", courses: ["CS101", "CS102"], grades: ["A", "B"], attendance: [95, 88] },
  { studentID: "S12345", scholarshipStatus: "Yes", feePaid: "No" }
);

// Displaying student details
student1.displayDetails();

// Updating academic details
student1.updateAcademicDetails(
  ["CS101", "CS102", "CS201"], 
  ["A", "B", "A"], 
  [95, 88, 92]
);

// Updating administrative details
student1.updateAdminDetails("S12345", "Yes", "Yes");

// Displaying updated student details
student1.displayDetails();

// Graduation - deleting student information
student1.graduate();

// Trying to display information after graduation (should show null)
student1.displayDetails();