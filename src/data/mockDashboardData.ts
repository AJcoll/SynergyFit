export interface DashboardData {
  userName: string;
  stats: {
    calories: { value: string; label: string };
    protein: { value: string; label: string };
    workout: { value: string; label: string };
  };
  recentActivity: {
    id: string;
    text: string;
    timestamp: string;
  }[];
}

export const mockDashboardData: DashboardData = {
  userName: 'Allan',
  stats: {
    calories: { value: '2100', label: 'Calories' },
    protein: { value: '150g', label: 'Protein' },
    workout: { value: '45m', label: 'Workout' },
  },
  recentActivity: [
    {
      id: '1',
      text: 'Logged Chicken Salad',
      timestamp: '12:30 PM',
    },
    {
      id: '2',
      text: "Completed 'Push Day'",
      timestamp: '8:15 AM',
    },
    {
      id: '3',
      text: 'Logged Protein Shake',
      timestamp: '7:00 AM',
    },
  ],
}; 