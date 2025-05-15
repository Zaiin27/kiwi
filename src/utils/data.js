
import { cleint, dogicon, miles, combined } from '../assets/icons/icons';

   export const navLinks = [
       { id: 1, title: "Home", href: "/" },
       { id: 2, title: "Services", href: "/services" },
       { id: 3, title: "How Its Work", href: "/how-it-works" },
       { id: 4, title: "Browse Jobs", href: "/browse-jobs" },
       { id: 5, title: "Tokens", href: "/tokens" },
       { id: 6, title: "Faqs", href: "/faqs" },
   ];

   export const cardData = [
       {
           title: "Dog Walk",
           description: "We understand that your dog is more than just a pet—they're family."
       },
       {
           title: "Baby Sitting",
           description: "We know how important it is to find someone you trust to care for your children."
       },
       {
           title: "House Sitting",
           description: "We treat your home like our own. Whether you're traveling for a weekend..."
       }
   ];

   export const faqData = [
       {
           question: "How does parental approval work?",
           answer: "Teens must invite their parent during sign-up. Parents can approve or deny job applications through their dashboard."
       },
       {
           question: "How are payments handled securely?",
           answer: "Payments are processed through a secure platform ensuring safety for all transactions."
       },
       {
           question: "Can I trust the people on KiwiRoo?",
           answer: "Yes, all users are verified to ensure a trustworthy community."
       },
       {
           question: "What types of jobs can teens apply for?",
           answer: "Teens can apply for various jobs like lawn mowing, babysitting, and tutoring."
       }
   ];

   export const successStories = [
       {
           id: 1,
           title: "Success Stories",
           content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. Maecenas eu lorem quisque dolor massa molestie vulputate in sit amet.",
           author: "Rickey James",
           position: "Chief of Staff"
       },
       {
           id: 2,
           title: "Success Stories",
           content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Additional text to match length: lorem ipsum dolor sit amet.",
           author: "Jane Doe",
           position: "Project Manager"
       }
   ];

   export const statsData = [
    {
      icon: cleint,
      value: '100+',
      description: 'Clients Served',
      bgColor: '#1693A4',
    },
    {
      icon: dogicon,
      value: '700+',
      description: 'Served Animals',
      bgColor: '#DD5454',
    },
    {
      icon: miles,
      value: '1000+',
      description: 'Miles Walked',
      bgColor: '#8176FF',
    },
    {
      icon: combined,
      value: '10+',
      description: 'Combined...',
      bgColor: '#783CAC',
    },
  ];


   const blogData = {
    sectionTitle: "How It Works?",
    sectionDescription:
      "Getting started is easy! Just create your profile, explore local job listings that match your interests, and apply with a click. Whether you're looking to earn extra cash or gain real-world experience, KiwiRoo helps you connect with safe, trusted opportunities near you.",
    featuredArticle: {
      title: "Web design trends 2023: Stay ahead of the curve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      author: "Brian Clark",
      date: "Jan 16, 2024",
    },
    articles: [
      {
        title: "Typography in web design: enhancing UI/UX",
        author: "Brian Clark",
        date: "Jan 24, 2024",
      },
      {
        title: "Responsive design: Cross-device experience",
        author: "Brian Clark",
        date: "Jan 22, 2024",
      },
      {
        title: "Web design best practices: Optimizing speed",
        author: "Brian Clark",
        date: "Jan 20, 2024",
      },
    ],
  };
  
  export default blogData;