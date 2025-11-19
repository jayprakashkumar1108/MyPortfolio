import React from 'react';

export default function Achievements() {
  const achievementsData = [
    {
      platform: "LeetCode",
      icon: "🏆",
      stats: [
        { label: "Problems Solved", value: "600+" },
        { label: "Contest Rating", value: "1600+" },
        { label: "Global Rank", value: "Top 1031" }
      ],
      description: "Consistently solving problems and participating in weekly contests",
      badge: "Knight"
    },
    {
      platform: "GeeksforGeeks",
      icon: "💻",
      stats: [
        { label: "Problems Solved", value: "450+" },
        { label: "Coding Score", value: "1800+" },
        { label: "College Rank", value: "Top 5" }
      ],
      description: "Maintaining strong problem-solving streak and campus ranking",
      badge: "Pro"
    },
    {
      platform: "HackerRank",
      icon: "⭐",
      stats: [
        { label: "Problem Solving", value: "5 Star" },
        { label: "Java", value: "5 Star" },
        { label: "SQL", value: "5 Star" }
      ],
      description: "Gold badges in multiple programming domains and skills",
      badge: "Gold"
    },
    {
      platform: "Coding Milestones",
      icon: "🚀",
      stats: [
        { label: "Total Problems", value: "1000+" },
        { label: "Contests", value: "50+" },
        { label: "Streak", value: "200+ Days" }
      ],
      description: "Consistent coding practice across multiple platforms",
      badge: "Elite"
    }
  ];

  const contestAchievements = [
    {
      contest: "LeetCode Weekly Contest 396",
      achievement: "Rank 1031 Globally",
      date: "2024",
      icon: "📈"
    },
    {
      contest: "GeeksforGeeks Weekly",
      achievement: "College Top 5 Rank",
      date: "2023-2024",
      icon: "🎯"
    },
    {
      contest: "HackerRank Challenges",
      achievement: "Multiple Gold Badges",
      date: "2023-2024",
      icon: "🥇"
    }
  ];

  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Coding Achievements</h2>
          <p className="section-subtitle">My journey in competitive programming and problem solving</p>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-header">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-title">
                  <h3>{achievement.platform}</h3>
                  <span className="achievement-badge">{achievement.badge}</span>
                </div>
              </div>
              
              <div className="achievement-stats">
                {achievement.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="contest-achievements">
          <h3 className="contest-title">Notable Contest Performances</h3>
          <div className="contest-grid">
            {contestAchievements.map((contest, index) => (
              <div key={index} className="contest-card">
                <div className="contest-icon">{contest.icon}</div>
                <div className="contest-content">
                  <h4>{contest.contest}</h4>
                  <p className="contest-achievement">{contest.achievement}</p>
                  <span className="contest-date">{contest.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}