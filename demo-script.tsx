/**
 * School Counselor Platform Demo Script
 * Focus: Handling SOS Alerts and Supporting Vulnerable Students
 *
 * This script outlines a step-by-step demonstration of how the platform
 * helps counselors respond to urgent student needs while reducing administrative burden.
 */

const DemoScript = {
  introduction: `
    Hello everyone, today I'm going to demonstrate our School Counselor Support Platform,
    which addresses a critical problem: counselors in the Lower Mainland spend up to 40% of their time
    on administrative tasks instead of directly supporting vulnerable students.
    
    Our platform streamlines workflows, automates paperwork, and provides real-time alerts
    to ensure counselors can focus on what matters most - helping students in crisis.
  `,

  loginProcess: `
    1. Start at the login screen
    2. Enter credentials (pre-filled for demo purposes)
    3. Click "Sign in" button
    4. Note the secure, HIPAA & FERPA compliant login process
    5. Highlight the toast notification confirming successful login
  `,

  dashboardOverview: `
    1. Point out the clean, intuitive dashboard design
    2. Highlight the key metrics at the top:
       - 42 students requiring urgent attention
       - 8 pending documentation items
       - 5 appointments scheduled for today
       - 7 unread messages (3 from healthcare providers)
    3. Mention how these metrics give counselors an immediate overview of priorities
  `,

  sosAlertWorkflow: `
    1. Draw attention to the SOS Alerts section
    2. Point out the two active alerts:
       - Emma Wilson having a panic attack in Room 203
       - Olivia Davis mentioning suicidal thoughts in Room 105
    
    3. For Emma's case:
       - Click "Acknowledge" to show you're responding
       - Explain how this updates the teacher in real-time
       - Click "Message Teacher" to demonstrate quick communication
       - Click "Mark as Resolved" once the situation is handled
    
    4. Highlight how the platform prioritizes these urgent cases
       and ensures no student in crisis is overlooked
  `,

  studentProfileAccess: `
    1. Click on Emma Wilson's profile from the At-Risk Students section
    2. Show the comprehensive student profile with:
       - Risk assessment score (72/100)
       - Current support plan
       - Recent activity
       - Quick action buttons (Schedule, Documents, Call Home, Message)
    
    3. Point out the Risk Factors & Protective Factors section
    4. Navigate through the tabs (Mental Health, Academic, Behavioral, Family, Social)
    5. Emphasize how this 360-degree view helps counselors make informed decisions
  `,

  externalSystemsIntegration: `
    1. Return to the dashboard
    2. Show the External Systems Integration panel
    3. Demonstrate how the platform connects with:
       - Fraser Health EHR
       - Surrey Memorial Hospital
       - BC Children's Hospital
       - MyEdBC
    
    4. Click "Sync Now" on one of the systems to show real-time data synchronization
    5. Explain how this eliminates manual data entry and reconciliation
  `,

  automationAgents: `
    1. Scroll to the Automation Task Agents section
    2. Highlight the different types of automation:
       - Course Selection Data Import from MyEdBC
       - Student Notes Summarization
       - Attendance Report Generation
       - Paper Notes Digitization
       - Parent Email Analysis
    
    2. Click "Run Now" on the Student Notes Summarization task
    3. Show the progress bar and completion notification
    4. Explain how these agents save counselors hours of administrative work
  `,

  studentConversations: `
    1. Show the Student Conversations panel
    2. Demonstrate how conversations are grouped by student
    3. Click on one of Emma's conversation threads
    4. Explain how this organization ensures counselors have complete context
       when discussing a student with teachers, parents, or healthcare providers
  `,

  conclusion: `
    As you've seen, our platform addresses the key challenges faced by school counselors:
    
    1. It provides immediate alerts for students in crisis
    2. It automates administrative tasks, reducing paperwork by up to 80%
    3. It integrates with external healthcare systems to ensure coordinated care
    4. It organizes all communications by student to provide complete context
    
    By streamlining these workflows, we enable counselors to spend more time directly
    supporting vulnerable students, leading to better mental health outcomes and
    academic success.
    
    Thank you for watching this demonstration. I'm happy to answer any questions.
  `,
}

export default DemoScript
