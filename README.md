#### RESIDENCE MANAGEMENT SYSTEM

This documentation provides setup instructions, technical choices, and usage instructions for the Residence Management System Dashboard. The project leverages modern web development technologies to create a dynamic and user-friendly interface for managing university residence data.

### Table of contents

1. [Setup Instructions](#setup-instructions)
2. [Technical Choices](#technical-choices)
3. [Usage Instructions](#usage-instructions)

## Setup instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- SASS

### Installation

1. Clone the repository using `git clone https://github.com/winnyineza/residence-managemenet.git
2. Navigate to the project directory using `cd residence-managemenet`
3. Install dependencies using `npm install`
4. Compile SASS to CSS: sass scss/main.scss css/style.css
5. .Open the project: Open index.html in a web browser.

#### Technical choices

- HTML 5: For structuring content
- CSS 3 and SASS: For styling and layout
- JavaScript: For dynamic functionality
- Node.js and npm: For package management and server setup
- jQuery: For simplified DOM manipulation and Ajax requests.
- Font Awesome: For scalable vector icons
- Tailwind: Utilized for quick and responsive styling.
  -chart.js: For rendering interactive charts.

### Rationale Behind the choices

- HTML 5 is the standard markup language for structuring content on the web.
- CSS 3 and SASS are used for styling and layout to ensure a responsive and visually appealing
- JavaScript is used for dynamic functionality to enhance user experience.
- Node.js and npm are used for package management and server setup to ensure efficient development and deployment.
- jQuery is used for simplified DOM manipulation and Ajax requests to reduce development time.
- Font Awesome is used for scalable vector icons to ensure high-quality and consistent visual elements.
- Tailwind is used to streamline development with pre-built responsive components to reduce development time and improve consistency

### Dashboard Functionalities

# Navigation

- Sidebar Navigation: A fixed sidebar on the left side of the screen provides links to different sections of the dashboard, including:
  Dashboard
  -Room Management
  -Maintenance Requests
  -Notices
  -Settings
  -Profile

  # Main Content

  -Overall Residence Statistics: Displays key metrics including:
  -Occupancy Rate
  -Total Rooms
  -Total Students
  -Total Complaints
  -Residence Notices

  - Room Management: A table listing rooms, their occupants, status, and amenities.

- Charts Section: Contains three charts displaying:
  -Occupancy Rates
  -Complaint Trends
  -Maintenance Requests

  # Interactive Elements

  Theme Switcher

  - Allows users to switch between light and dark themes.

  Charts

  - Occupancy Rates Chart: A line chart displaying occupancy rates over the first half of the year.
  - Complaint Trends Chart: A bar chart showing the number of complaints over the first half of the year.
  - Maintenance Requests Chart: A pie chart displaying the types of maintenance requests received over the first half
