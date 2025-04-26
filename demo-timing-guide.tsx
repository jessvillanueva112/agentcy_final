/**
 * Demo Timing Guide
 * Visual cue sheet for timing your 2-minute demo
 */

const DemoTimingGuide = {
  practiceRecommendations: [
    "Practice with a timer visible to stay on track",
    "Record yourself to identify sections where you're running long",
    "Have visual cues ready for each section transition",
    "Prepare shortened versions of each section in case you need to catch up",
    "Focus on smooth transitions between sections",
  ],

  visualCueSheet: `
    ┌─────────────────────────────────────────┐
    │ TWO-MINUTE DEMO TIMING GUIDE            │
    ├─────────────┬───────────────────────────┤
    │ 0:00-0:15   │ Introduction              │
    ├─────────────┼───────────────────────────┤
    │ 0:15-0:30   │ Dashboard Overview        │
    ├─────────────┼───────────────────────────┤
    │ 0:30-1:00   │ SOS Alert Workflow        │
    ├─────────────┼───────────────────────────┤
    │ 1:00-1:20   │ Automation Agents         │
    ├─────────────┼───────────────────────────┤
    │ 1:20-1:40   │ External Systems          │
    ├─────────────┼───────────────────────────┤
    │ 1:40-2:00   │ Conclusion                │
    └─────────────┴───────────────────────────┘
  `,

  contingencyPlan: {
    runningLong: [
      "Skip detailed explanations of automation agents",
      "Reduce external systems to just mentioning MyEdBC integration",
      "Shorten conclusion to key impact statement only",
    ],
    runningShort: [
      "Elaborate on specific student risk factors visible in the dashboard",
      "Demonstrate a second SOS alert response",
      "Show additional automation features",
    ],
  },

  keyMetricsToEmphasize: [
    "40% of counselor time spent on administrative tasks",
    "80% reduction in paperwork",
    "14 additional hours per month for direct student support",
    "25% faster crisis interventions",
  ],
}

export default DemoTimingGuide
