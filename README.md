# Calm Reach - Front End Repository

Welcome to the front end repository of Calm Reach, a Mental Health Support App! This repository contains the code for the front end implementation of Calm Reach, built using JavaScript, Sass, React, and other technologies.

## Project Description

Calm Reach is a web application designed to provide support for individuals struggling with mental health. It connects users with volunteers who are available to have conversations and provide assistance free of charge. The front end of Calm Reach offers an intuitive user interface, allowing seekers to interact with volunteers through live messaging.

## Getting Started

To get started with the front end development of Calm Reach, follow the instructions below.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository to your local machine using the following command:
   git clone https://github.com/NehaDhaka/CalmReach-Front

2. Navigate to the project directory:
   cd calmreach-front

3. Install the required dependencies:
   npm install

### Configuration

Before running the app, you need to set up the environment variables.

1. Locate the `.env.sample` file in the project root.
2. Create a new `.env` file based on the sample file and replace the placeholder values with your own configuration.

### Running the App

To run the front end app, execute the following command:
npm start
This command starts the development server and opens the app in your default browser.

### Back End Repository

The back end repository of Calm Reach can be found at: https://github.com/NehaDhaka/CalmReach-Back

## Lessons Learned

During the development of this project, several valuable lessons were learned:

1. **User-Centric Approach**: It is crucial to prioritize the needs and experiences of the users throughout the design and development process.

2. **Security and Privacy**: Handling sensitive user data requires robust security measures. Implementing encryption, authentication mechanisms, and privacy controls helped ensure the safety and confidentiality of user information.

3. **Real-Time Communication**: Integrating Socket.io for real-time chat functionality presented unique challenges, such as handling concurrent connections and maintaining message reliability. Proper error handling and scalability considerations were vital in providing a smooth user experience.

4. **Matching Algorithm**: Designing an effective matching algorithm involved a careful balance between user preferences, volunteer availability, and expertise. Fine-tuning the algorithm based on user feedback helped improve the accuracy of the matches.

## Next Steps

While the current version of the web application has achieved significant milestones, there are several exciting next steps for future development:

1. **Video and Voice Chat**: Enhance the application by adding video and voice chat capabilities, enabling more immersive and personalized communication between users and volunteers.

2. **Expanded Volunteer Network**: Continue to grow the volunteer network by reaching out to mental health professionals, organizations, and passionate individuals who can contribute their time and expertise to support the users.

3. **Machine Learning Integration**: Explore the integration of machine learning techniques to provide personalized recommendations and insights to users based on their mental health needs and progress.

4. **Mobile Application**: Develop a companion mobile application to increase accessibility and reach a wider user base.

## Acknowledgements

I would like to express my heartfelt gratitude to the educators at BrainStation for their guidance, support, and expertise throughout this project. Their knowledge and mentorship played a significant role in shaping this application and my overall growth as a developer. Thank you for the invaluable learning experience and for equipping me with the skills necessary to create meaningful solutions.

Happy coding!
