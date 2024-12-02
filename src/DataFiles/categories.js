const categories = [
    {
      label: 'MAP',
      sidebarItems: [
        { id: 1, name: 'Top Ranked Colleges' },
        { id: 2, name: 'Popular Courses' },
        { id: 3, name: 'Exams' },
        { id: 4, name: 'Colleges By Location' },
        { id: 5, name: 'Compare Colleges' },
        { id: 6, name: 'College Reviews' },
        { id: 7, name: 'CAT Percentile Predictor' },
        { id: 8, name: 'College Predictors' },
        { id: 9, name: 'Ask Current MBA Students' },
        { id: 10, name: 'Resources' },
        { id: 11, name: 'Popular Specialization' },
      ],
      contents: {
        1: [
          [
            { name: 'Top MBA Colleges in India', link: '#' },
            { name: 'Top MBA Colleges in Bangalore', link: '#' },
            { name: 'Top MBA Colleges in Pune', link: '#' },
            { name: 'Top MBA Colleges in Ranchi', link: '#' },
            { name: 'Top MBA Colleges in Delhi', link: '#' },
          ],
          [
            { name: 'Top MBA Colleges in Chennai', link: '#' },
            { name: 'Top MBA Colleges in Hyderabad', link: '#' },
            { name: 'Top MBA Colleges in Hyderabad', link: '#' },
            { name: 'Top MBA Colleges in Hyderabad', link: '#' },
            { name: 'Top MBA Colleges in Hyderabad', link: '#' },
            { name: 'Top MBA Colleges in Hyderabad', link: '#' },
            { name: 'Top MBA Colleges in Hyderabad', link: '#' },
          ],
        ],
        2: [
          [
            { name: 'BTech in Computer Science', link: '#' },
            { name: 'BTech in Mechanical Engineering', link: '#' },
          ],
          [
            { name: 'MBA in Marketing', link: '#' },
            { name: 'MBA in Finance', link: '#' },
          ],
        ],
        3: [
          [
            { name: 'CAT Exam', link: '#' },
            { name: 'GATE Exam', link: '#' },
            { name: 'GMAT Exam', link: '#' },
          ],
          [
            { name: 'XAT Exam', link: '#' },
            { name: 'MAT Exam', link: '#' },
          ],
        ],
        4: [
          [
            { name: 'Colleges in Bangalore', link: '#' },
            { name: 'Colleges in Pune', link: '#' },
            { name: 'Colleges in Delhi', link: '#' },
          ],
          [
            { name: 'Colleges in Chennai', link: '#' },
            { name: 'Colleges in Hyderabad', link: '#' },
          ],
        ],
        5: [
          [
            { name: 'IIM Bangalore vs IIM Ahmedabad', link: '#' },
            { name: 'IIT Delhi vs IIT Bombay', link: '#' },
          ],
          [
            { name: 'BITS Pilani vs VIT', link: '#' },
          ],
        ],
        6: [
          [
            { name: 'IIM Ahmedabad Reviews', link: '#' },
            { name: 'IIT Bombay Reviews', link: '#' },
          ],
          [
            { name: 'IIM Lucknow Reviews', link: '#' },
            { name: 'IIT Madras Reviews', link: '#' },
          ],
        ],
        7: [
          [
            { name: 'CAT Percentile 90+', link: '#' },
            { name: 'CAT Percentile 99+', link: '#' },
          ],
        ],
        8: [
          [
            { name: 'MBA College Predictor', link: '#' },
            { name: 'Engineering College Predictor', link: '#' },
          ],
        ],
        9: [
          [
            { name: 'Talk to MBA Students at IIM', link: '#' },
            { name: 'Talk to MBA Students at XLRI', link: '#' },
          ],
        ],
        10: [
          [
            { name: 'Free Study Materials', link: '#' },
            { name: 'Mock Test Resources', link: '#' },
          ],
          [
            { name: 'Interview Preparation Guides', link: '#' },
          ],
        ],
        11: [
          [
            { name: 'MBA in Operations', link: '#' },
            { name: 'MBA in HR', link: '#' },
          ],
          [
            { name: 'MBA in Business Analytics', link: '#' },
          ],
        ],
      },
    },
    
    {
      label: 'ENGINEERING',
      sidebarItems: [
        { id: 1, name: 'Top Ranked Colleges' },
        { id: 2, name: 'Popular Courses' },
        { id: 3, name: 'Exams' },
        { id: 4, name: 'Colleges By Location' },
        { id: 5, name: 'Compare Colleges' },
      ],
      contents: {
        1: [
          [
            { name: 'Top Engineering Colleges in India', link: '#' },
            { name: 'Top Engineering Colleges in Delhi', link: '#' },
          ],
          [
            { name: 'Top Engineering Colleges in Mumbai', link: '#' },
            { name: 'Top Engineering Colleges in Bangalore', link: '#' },
          ],
        ],
        2: [
          [
            { name: 'BTech in Computer Science', link: '#' },
            { name: 'BTech in Mechanical Engineering', link: '#' },
          ],
          [
            { name: 'BTech in Civil Engineering', link: '#' },
            { name: 'BTech in Electrical Engineering', link: '#' },
          ],
        ],
        3: [
          [
            { name: 'GATE Exam', link: '#' },
            { name: 'JEE Main', link: '#' },
          ],
          [
            { name: 'JEE Advanced', link: '#' },
            { name: 'BITSAT', link: '#' },
          ],
        ],
        4: [
          [
            { name: 'Colleges in Delhi', link: '#' },
            { name: 'Colleges in Mumbai', link: '#' },
          ],
          [
            { name: 'Colleges in Bangalore', link: '#' },
            { name: 'Colleges in Pune', link: '#' },
          ],
        ],
        5: [
          [
            { name: 'College A vs College B', link: '#' },
            { name: 'College C vs College D', link: '#' },
          ],
          [
            { name: 'College E vs College F', link: '#' },
            { name: 'College G vs College H', link: '#' },
          ],
        ],
      },
    },
    {
      label: 'MEDICAL',
      sidebarItems: [
        { id: 1, name: 'Top Ranked Colleges' },
        { id: 2, name: 'Popular Courses' },
        { id: 3, name: 'Exams' },
        { id: 4, name: 'Colleges By Location' },
        { id: 5, name: 'Compare Colleges' },
      ],
      contents: {
        1: [
          [
            { name: 'Top Medical Colleges in India', link: '#' },
            { name: 'Top Medical Colleges in Delhi', link: '#' },
          ],
          [
            { name: 'Top Medical Colleges in Mumbai', link: '#' },
            { name: 'Top Medical Colleges in Bangalore', link: '#' },
          ],
        ],
        2: [
          [
            { name: 'MBBS', link: '#' },
            { name: 'BDS', link: '#' },
          ],
          [
            { name: 'BAMS', link: '#' },
            { name: 'BHMS', link: '#' },
          ],
        ],
        3: [
          [
            { name: 'NEET Exam', link: '#' },
            { name: 'AIIMS Exam', link: '#' },
          ],
          [
            { name: 'JIPMER Exam', link: '#' },
            { name: 'PGIMER Exam', link: '#' },
          ],
        ],
        4: [
          [
            { name: 'Colleges in Delhi', link: '#' },
            { name: 'Colleges in Mumbai', link: '#' },
          ],
          [
            { name: 'Colleges in Bangalore', link: '#' },
            { name: 'Colleges in Chennai', link: '#' },
          ],
        ],
        5: [
          [
            { name: 'College A vs College B', link: '#' },
            { name: 'College C vs College D', link: '#' },
          ],
          [
            { name: 'College E vs College F', link: '#' },
            { name: 'College G vs College H', link: '#' },
          ],
        ],
      },
    },
    {
      label: 'DESIGN',
      sidebarItems: [
        { id: 1, name: 'Top Ranked Colleges' },
        { id: 2, name: 'Popular Courses' },
        { id: 3, name: 'Exams' },
        { id: 4, name: 'Colleges By Location' },
        { id: 5, name: 'Compare Colleges' },
      ],
      contents: {
        1: [
          [
            { name: 'Top Design Colleges in India', link: '#' },
            { name: 'Top Design Colleges in Delhi', link: '#' },
          ],
          [
            { name: 'Top Design Colleges in Mumbai', link: '#' },
            { name: 'Top Design Colleges in Bangalore', link: '#' },
          ],
        ],
        2: [
          [
            { name: 'B.Des', link: '#' },
            { name: 'M.Des', link: '#' },
          ],
          [
            { name: 'Fashion Design', link: '#' },
            { name: 'Interior Design', link: '#' },
          ],
        ],
        3: [
          [
            { name: 'NID Entrance Exam', link: '#' },
            { name: 'CEED Exam', link: '#' },
          ],
          [
            { name: 'NIFT Exam', link: '#' },
            { name: 'UPES DAT', link: '#' },
          ],
        ],
        4: [
          [
            { name: 'Colleges in Delhi', link: '#' },
            { name: 'Colleges in Mumbai', link: '#' },
          ],
          [
            { name: 'Colleges in Bangalore', link: '#' },
            { name: 'Colleges in Pune', link: '#' },
          ],
        ],
        5: [
          [
            { name: 'College A vs College B', link: '#' },
            { name: 'College C vs College D', link: '#' },
          ],
          [
            { name: 'College E vs College F', link: '#' },
            { name: 'College G vs College H', link: '#' },
          ],
        ],
      },
    },
    {
      label: 'MEDIA',
      sidebarItems: [
        { id: 1, name: 'Top Ranked Colleges' },
        { id: 2, name: 'Popular Courses' },
        { id: 3, name: 'Exams' },
        { id: 4, name: 'Colleges By Location' },
        { id: 5, name: 'Compare Colleges' },
      ],
      contents: {
        1: [
          [
            { name: 'Top Media Colleges in India', link: '#' },
            { name: 'Top Media Colleges in Delhi', link: '#' },
   { name: 'Top Media Colleges in Mumbai', link: '#' },
            { name: 'Top Media Colleges in Bangalore', link: '#' },
          ],
          [
            { name: 'Top Media Colleges in Chennai', link: '#' },
            { name: 'Top Media Colleges in Pune', link: '#' },
          ],
        ],
        2: [
          [
            { name: 'BA in Journalism', link: '#' },
            { name: 'BSc in Film Production', link: '#' },
          ],
          [
            { name: 'MA in Mass Communication', link: '#' },
            { name: 'Diploma in Photography', link: '#' },
          ],
        ],
        3: [
          [
            { name: 'JMC Entrance Exam', link: '#' },
            { name: 'FTII Entrance Exam', link: '#' },
          ],
          [
            { name: 'XIC Entrance Exam', link: '#' },
            { name: 'Symbiosis Entrance Exam', link: '#' },
          ],
        ],
        4: [
          [
            { name: 'Colleges in Delhi', link: '#' },
            { name: 'Colleges in Mumbai', link: '#' },
          ],
          [
            { name: 'Colleges in Bangalore', link: '#' },
            { name: 'Colleges in Kolkata', link: '#' },
          ],
        ],
        5: [
          [
            { name: 'College A vs College B', link: '#' },
            { name: 'College C vs College D', link: '#' },
          ],
          [
            { name: 'College E vs College F', link: '#' },
            { name: 'College G vs College H', link: '#' },
          ],
        ],
      },
    },
    {
      label: 'TOURISM',
      sidebarItems: [
        { id: 1, name: 'Top Ranked Colleges' },
        { id: 2, name: 'Popular Courses' },
        { id: 3, name: 'Exams' },
        { id: 4, name: 'Colleges By Location' },
        { id: 5, name: 'Compare Colleges' },
      ],
      contents: {
        1: [
          [
            { name: 'Top Tourism Colleges in India', link: '#' },
            { name: 'Top Tourism Colleges in Delhi', link: '#' },
          ],
          [
            { name: 'Top Tourism Colleges in Mumbai', link: '#' },
            { name: 'Top Tourism Colleges in Bangalore', link: '#' },
          ],
        ],
        2: [
          [
            { name: 'BTTM', link: '#' },
            { name: 'BHM', link: '#' },
          ],
          [
            { name: 'MBA in Tourism', link: '#' },
            { name: 'Diploma in Travel and Tourism', link: '#' },
          ],
        ],
        3: [
          [
            { name: 'NCHMCT JEE', link: '#' },
            { name: 'IHM Entrance Exam', link: '#' },
          ],
          [
            { name: 'Travel and Tourism Entrance Exam', link: '#' },
            { name: 'BHMCT Entrance Exam', link: '#' },
          ],
        ],
        4: [
          [
            { name: 'Colleges in Delhi', link: '#' },
            { name: 'Colleges in Mumbai', link: '#' },
          ],
          [
            { name: 'Colleges in Bangalore', link: '#' },
            { name: 'Colleges in Goa', link: '#' },
          ],
        ],
        5: [
          [
            { name: 'College A vs College B', link: '#' },
            { name: 'College C vs College D', link: '#' },
          ],
          [
            { name: 'College E vs College F', link: '#' },
            { name: 'College G vs College H', link: '#' },
          ],
        ],
      },
    },
    {
      label: 'HOSPITALITY',
      sidebarItems: [
        { id: 1, name: 'Top Ranked Colleges' },
        { id: 2, name: 'Popular Courses' },
        { id: 3, name: 'Exams' },
        { id: 4, name: 'Colleges By Location' },
        { id: 5, name: 'Compare Colleges' },
      ],
      contents: {
        1: [
          [
            { name: 'Top Hospitality Colleges in India', link: '#' },
            { name: 'Top Hospitality Colleges in Delhi', link: '#' },
          ],
          [
            { name: 'Top Hospitality Colleges in Mumbai', link: '#' },
            { name: 'Top Hospitality Colleges in Bangalore', link: '#' },
          ],
        ],
        2: [
          [
            { name: 'BHM', link: '#' },
            { name: 'B.Sc in Hospitality and Hotel Administration', link: '#' },
          ],
          [
            { name: 'MBA in Hospitality', link: '#' },
            { name: 'Diploma in Hotel Management', link: '#' },
          ],
        ],
        3: [
          [
            { name: 'NCHMCT JEE', link: '#' },
            { name: 'IHM Entrance Exam', link: '#' },
          ],
          [
            { name: 'Hotel Management Entrance Exam', link: '#' },
            { name: 'BHMCT Entrance Exam', link: '#' },
          ],
        ],
        4: [
          [
            { name: 'Colleges in Delhi', link: '#' },
            { name: 'Colleges in Mumbai', link: '#' },
          ],
          [
            { name: 'Colleges in Bangalore', link: '#' },
            { name: 'Colleges in Pune', link: '#' },
          ],
        ],
        5: [
          [
            { name: 'College A vs College B', link: '#' },
            { name: 'College C vs College D', link: '#' },
          ],
          [
            { name: 'College E vs College F', link: '#' },
            { name: 'College G vs College H', link: '#' },
          ],
        ],
      },
    },
    {
      label: 'COUNSELING',
      sidebarItems: [
        { id: 1, name: 'Top Ranked Colleges' },
        { id: 2, name: 'Popular Courses' },
        { id: 3, name: 'Exams' },
        { id: 4, name: 'Colleges By Location' },
        { id: 5, name: 'Compare Colleges' },
      ],
      contents: {
        1: [
          [
            { name: 'Top Counseling Colleges in India', link: '#' },
            { name: 'Top Counseling Colleges in Delhi', link: '#' },
          ],
          [
            { name: 'Top Counseling Colleges in Mumbai', link: '#' },
            { name: 'Top Counseling Colleges in Bangalore', link: '#' },
          ],
        ],
        2: [
          [
            { name: 'B.A. in Psychology', link: '#' },
            { name: 'M.A. in Counseling Psychology', link: '#' },
          ],
          [
            { name: 'Diploma in Counseling', link: '#' },
            { name: 'Certificate in Counseling Skills', link: '#' },
          ],
        ],
        3: [
          [
            { name: 'Entrance Exam for Psychology', link: '#' },
            { name: 'NET Exam for Psychology', link: '#' },
          ],
          [
            { name: 'State Level Counseling Exams', link: '#' },
            { name: 'University Level Counseling Exams', link: '#' },
          ],
        ],
        4: [
          [
            { name: 'Colleges in Delhi', link: '#' },
            { name: 'Colleges in Mumbai', link: '#' },
          ],
          [
            { name: 'Colleges in Bangalore', link: '#' },
            { name: 'Colleges in Chennai', link: '#' },
          ],
        ],
        5: [
          [
            { name: 'College A vs College B', link: '#' },
            { name: 'College C vs College D', link: '#' },
          ],
          [
            { name: 'College E vs College F', link: '#' },
            { name: 'College G vs College H', link: '#' },
          ],
        ],
      },
    },
  ];

  export default categories;