/**
 * Two-Minute Demo Script: School Counselor Support Platform
 * Focus: SOS Alerts & Administrative Automation
 *
 * This script is timed to fit exactly within a 2-minute presentation
 * with specific time allocations for each section.
 */

const TwoMinuteDemoScript = {
  // 0:00-0:15 (15 seconds)
  introduction: {
    timeAllocation: "0:00-0:15 (15 seconds)",
    script: `
      "Today I'm demonstrating our School Counselor Support Platform that addresses a critical problem:
      counselors spend up to 40% of their time on administrative tasks instead of supporting vulnerable students.
      
      Our platform streamlines workflows, automates paperwork, and provides real-time alerts to ensure
      counselors can focus on what matters most - helping students in crisis."
    `,
  },

  // 0:15-0:30 (15 seconds)
  dashboardOverview: {
    timeAllocation: "0:15-0:30 (15 seconds)",
    script: `
      [Point to dashboard]
      "The dashboard gives counselors an immediate overview of priorities:
      - 42 students requiring attention
      - 8 pending documentation items
      - 5 appointments today
      - 7 unread messages
      
      This ensures no student in crisis is overlooked."
    `,
  },

  // 0:30-1:00 (30 seconds)
  sosAlertWorkflow: {
    timeAllocation: "0:30-1:00 (30 seconds)",
    script: `
      [Point to SOS Alerts section]
      "Here we see two active SOS alerts:
      - Emma Wilson having a panic attack in Room 203
      - Olivia Davis mentioning suicidal thoughts in Room 105
      
      When I click 'Acknowledge' on Emma's alert, the teacher is instantly notified that help is coming.
      
      [Click Acknowledge]
      
      I can quickly message the teacher for more information while en route.
      
      [Click Message Teacher]
      
      Once the situation is handled, I mark it resolved, which updates our records automatically."
      
      [Click Mark as Resolved]
    `,
  },

  // 1:00-1:20 (20 seconds)
  automationAgents: {
    timeAllocation: "1:00-1:20 (20 seconds)",
    script: `
      [Navigate to Automation Agents]
      "Our automation agents eliminate administrative burden:
      
      - Course Selection Data is automatically imported from MyEdBC
      - Student Notes are summarized with AI
      - Paper Notes are digitized and categorized
      
      [Click Run on Student Notes Summarization]
      
      This automation reduces paperwork by 80%, giving counselors 14 additional hours per month
      for direct student support."
    `,
  },

  // 1:20-1:40 (20 seconds)
  externalSystems: {
    timeAllocation: "1:20-1:40 (20 seconds)",
    script: `
      [Navigate to External Systems]
      "The platform seamlessly integrates with external systems:
      
      - Fraser Health EHR
      - MyEdBC
      - BC Children's Hospital
      
      [Click Sync Now on MyEdBC]
      
      This integration ensures counselors have complete, up-to-date information without
      manual data entry or reconciliation."
    `,
  },

  // 1:40-2:00 (20 seconds)
  conclusion: {
    timeAllocation: "1:40-2:00 (20 seconds)",
    script: `
      "In summary, our platform:
      
      1. Provides immediate alerts for students in crisis
      2. Automates administrative tasks, reducing paperwork by 80%
      3. Integrates with external systems for coordinated care
      
      By streamlining these workflows, we enable counselors to spend more time directly
      supporting vulnerable students, leading to better mental health outcomes and academic success."
    `,
  },
}

export default TwoMinuteDemoScript
