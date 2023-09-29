Welcome to the Summer Practice at OG-CS Software Company!

You need to design an application for university and high-school students who are interested in gaining valuable experience through a summer practice opportunity. This application is intended for students to apply to our OG-CS Academy. Students should be able to insert basic information (name, phone number, etc), and upload documents like CVs. It consists of a backend part for storing data and CRUD operations and a frontend part with a simple user interface.

**Backend**

To ensure a smooth user experience, the application needs to be built using Java and Spring Boot. The database should be powered by PostgreSQL, which is conveniently packaged as a Docker image for easy setup and usage. The application should provide essential CRUD (Create, Read, Update, Delete) operations for managing student information. Users should be able to view and search for individual or all students, update their details, delete existing entries, and add new students to the system.

For convenient API documentation, Swagger should be integrated into the application. Swagger allows you to explore and understand the available endpoints and their usage, making it easier for developers and testers to interact with the API.

**Frontend**

As for the frontend, we provide flexibility by allowing you to choose between Angular, React, or Vue. You can select the technology that best suits your needs and preferences.

The welcome page of the application should offer two options. One for entering into the application for authorized personnel that will have access to all the data, and the other for opening the application page for university and high-school students.

The application page features a user-friendly interface that enables students to choose their practice status. Applicants should be able to indicate whether they are university students or high-school students. After making a selection, they will proceed to the application form where they can enter their personal information.

University students are required to provide their first name, last name, date of birth (which will automatically calculate their age), university name, course of studies, phone number, email address, residence, and familiar technologies. Additionally, university students have the option to upload their CVs for a comprehensive application.

High-school students need to provide their first name, last name, date of birth (which will calculate their age), school name, course of studies, phone number, email address, residence, and familiar technologies. High-school students have the ability to upload four different documents, which are integral to their application.

Throughout the development process, you need to adhere to the best practices for Java application development, ensuring clean and maintainable code. The project documentation needs to be comprehensive, providing clear instructions and explanations to facilitate a smooth experience for future developers and maintainers.

This application is going to simplify the process of applying for a summer practice at OG-CS Software Company. If you have any questions or encounter any issues, please reach out to our support team for assistance.

**Tips**

To configure the application, it is recommended to use the 'application.yml' file instead of 'application.properties'. This YAML-based configuration file allows for a more readable and organized approach to managing application properties. Frontend and backend should have one root folder, and should act as modules.

As a build tool, please use Gradle instead of Maven.

