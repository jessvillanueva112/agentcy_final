# Agentcy

A comprehensive digital platform designed to help school counselors manage student support, track interventions, assess risks, and streamline documentation.

![School Counseling Platform Dashboard](https://placeholder.svg?height=400&width=800&query=School+Counseling+Platform+Dashboard)

## Features

- **Dashboard Overview**: Quick access to high-priority students, upcoming tasks, and recent activities
- **Student Management**: Comprehensive student profiles with risk assessments and support history
- **Documentation System**: Create, manage, and track student support plans and assessments
- **Communication Hub**: Secure messaging with students, parents, teachers, and external agencies
- **Analytics**: Data visualization for caseload management and intervention effectiveness
- **External Integrations**: Connections to school information systems and healthcare providers (using mock data)
- **AI-Powered Assistance**: Documentation help and risk assessment support
- **SOS Alert System**: Emergency response workflow for critical situations

## Tech Stack

- **Frontend**: Next.js 14 with App Router, React, TypeScript
- **UI Components**: Tailwind CSS, shadcn/ui
- **Database**: MongoDB
- **Authentication**: (To be implemented)
- **Charts**: Recharts
- **Deployment**: Vercel

## Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- MongoDB database (local or Atlas)

### Setup

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/jessvillanueva112/agentcy_final.git
   cd counselor-platform-5
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   MONGODB_URI=your_mongodb_connection_string
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Environment Variables

- `MONGODB_URI`: MongoDB connection string (required)
- `MYEDBC_API_URL`: MyEdBC API URL (optional - mock data is used if not provided)
- `MYEDBC_API_KEY`: MyEdBC API key (optional - mock data is used if not provided)

## Usage

### Login

The platform currently uses mock authentication. Use any email and password to log in.

### Navigation

- **Dashboard**: Overview of high-priority students and tasks
- **Students**: Browse and search student profiles
- **Documentation**: Create and manage support plans and assessments
- **Communication**: Secure messaging with stakeholders
- **Analytics**: Data visualization for caseload management

## Project Structure

\`\`\`
/app                     # Next.js App Router pages
  /dashboard             # Dashboard views
  /students              # Student management
  /documentation         # Documentation system
  /communication         # Communication hub
  /analytics             # Analytics and reporting
  /assessment            # Risk assessment tools
  /support-plan          # Support plan creation
  /(auth)                # Authentication layouts
/components              # Reusable React components
  /ui                    # UI components (shadcn/ui)
/lib                     # Utility functions and helpers
/public                  # Static assets
\`\`\`

## Deployment

This project is configured for deployment on Vercel:

1. Create a new project on [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Add the required environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
4. Deploy the project

## Future Enhancements

- Authentication system
- Mobile companion app
- Student self-referral portal
- Integration with SIS systems
- Risk assessment algorithm
- Secure messaging
- Automation task agents
- SOS alert workflow

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- School counselors who provided domain expertise
- Educational institutions that participated in user research
- Open source libraries and frameworks used in this project
