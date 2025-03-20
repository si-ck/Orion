
export interface Course {
  id: string;
  title: string;
  description: string;
  label: string;
  image: string;
  videos?: Video[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  duration: string;
}

export const courseData: Course[] = [
  {
    id: "data-science",
    title: "Data Science",
    description: "Master the fundamentals of data science and analytics with our comprehensive course bundle.",
    label: "Most Popular",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    videos: [
      {
        id: "ds-intro",
        title: "Introduction to Data Science",
        description: "Learn the basic concepts and principles of data science.",
        url: "https://www.youtube.com/embed/ua-CiDNNj30",
        duration: "12:45"
      },
      {
        id: "ds-python",
        title: "Python for Data Analysis",
        description: "Master Python libraries like Pandas and NumPy for data analysis.",
        url: "https://www.youtube.com/embed/r-uOLxNrNk8",
        duration: "15:20"
      },
      {
        id: "ds-visualization",
        title: "Data Visualization Techniques",
        description: "Create compelling visualizations with Matplotlib and Seaborn.",
        url: "https://www.youtube.com/embed/GPVsHOlRBBI",
        duration: "18:10"
      },
      {
        id: "ds-ml",
        title: "Machine Learning Fundamentals",
        description: "Introduction to machine learning algorithms and applications.",
        url: "https://www.youtube.com/embed/Gv9_4yMHFhI",
        duration: "22:35"
      }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Learn modern web development with React, Node.js, and more.",
    label: "Trending",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "blockchain",
    title: "Blockchain Technology",
    description: "Explore the fundamentals of blockchain and cryptocurrency development.",
    label: "New",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Deep dive into machine learning algorithms and neural networks.",
    label: "Advanced",
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=2070&auto=format&fit=crop"
  }
];
