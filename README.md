# Proxenix Real-Time Chat App

This repository contains the Minimum Viable Product (MVP) for a real-time chat application developed as part of the Proxenix Internship program. The primary goal of this initial sprint was to establish core real-time messaging functionality using Socket.IO, HTML, and CSS, demonstrating foundational web development skills.

-----

## Project Overview

This Real-Time Chat App provides basic functionality for users to send and receive messages in real time. It was developed within a very tight timeframe, focusing on core features to ensure a working prototype.

### Key Features (MVP)

  * **Real-Time Messaging:** Users can send messages that are instantly broadcast and displayed to all other connected users.
  * **Basic User Interface:** A simple, functional chat interface built with HTML and styled with fundamental CSS.

### Technologies Used

  * **HTML5:** For structuring the chat application.
  * **CSS3:** For basic styling and layout.
  * **Node.js:** Server-side runtime environment.
  * **Express.js:** Minimalist web framework for Node.js (used for serving static files).
  * **Socket.IO:** For real-time, bidirectional, event-based communication between client and server.

-----

## Setup and Running the Application

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * Node.js (LTS version recommended)
  * npm (comes with Node.js)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/[YourGitHubUsername]/proxenix-chat-app.git
    cd proxenix-chat-app
    ```

    (Replace `[YourGitHubUsername]` with your actual GitHub username)

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Server

1.  **Start the Node.js server:**

    ```bash
    node server.js
    ```

    You should see output indicating the server is running, typically on `http://localhost:3000`.

2.  **Access the application:**
    Open your web browser and navigate to `http://localhost:3000`. Open multiple tabs or browsers to test real-time messaging.

-----

## Future Enhancements (Planned)

This MVP provides a solid foundation. Future iterations of this project could include:

  * **Enhanced User Interface:** More detailed and aesthetically pleasing design using advanced CSS (Flexbox, Grid, Transitions) and potentially CSS frameworks.
  * **Mobile Responsiveness:** Full optimization for various screen sizes using Media Queries.
  * **User Management:** Implementing user authentication (login/registration).
  * **Group Chat Functionality:** Ability to create and join different chat rooms.
  * **Emoji Reactions:** Adding interactive emoji reactions to messages.
  * **Notifications:** Desktop or in-app notifications for new messages.
  * **Searchable Message History:** Storing and retrieving past messages, with search capabilities.
  * **End-to-End Encryption:** Implementing secure communication protocols.
  * **Database Integration:** Persisting messages and user data using a database (e.g., MongoDB).

-----

## Contribution

This project was a collaborative effort by the Proxenix Internship team. Special thanks to:

  * **Mohammed** - Project Lead, Socket.IO Integration, Frontend Refinement & Restructuring, Discussion Facilitation, Repository Creation & Management.
  * **Aqsa** - Frontend Logic

-----
