import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Thanos",
  lastName: "Dimitriades",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Athens", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Greek"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, exploring new technologies, and sharing my opinions in the world of tech.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fantazul",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/fantazul",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:fantazul@proton.me",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Thanos, a software engineer passionate about performant software and clean intuitive user experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>I'm a software engineer who's passionate about delivering clean code and performant software. I have a successful proven track record of both individual and team contributions in organized settings, consistently taking ownership of core features.</p>
        <p>I thrive in collaborating with cross-functional teams, including designers, product managers, and other software engineers, to achieve product and customer-centric goals. I do this by writing clean, well-tested, and maintainable code.</p>
        <p>I enjoy tackling challenges and taking responsibility and ownership of implementing, and I wish to reach a point where I'll be participating and design system components. I keep my eyes open for inefficiencies and recommend improvements and alternative approaches. I'm a firm believer of using the "right tool for the job" rather than choosing the right job for the tool.</p>
        <p>Having turned my hobby into a profession, I constantly explore new technologies and methodologies to become a little better every day.</p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DOPE Studio",
        timeframe: "2023 - 2024",
        role: "Full-Stack Engineer",
        achievements: [
          <>
            Developed features for “Mercury Loyalty and CRM System” as member of the .NET team
          </>,
          <>
            Implemented a dynamic survey generator, that enabled immediate consumer feedback and
            improving engagement rates
          </>,
        ],
        images: [],
      },
      {
        company: "Squaredev",
        timeframe: "2022 - 2023",
        role: "Junior Software Engineer",
        achievements: [
          <>
            Implemented features in multiple greenfield products, including an eCommerce platform, and a personal savings and investing tracker 
          </>,
          <>
            Constributed to our open source UI library <Link href="https://github.com/squaredev-io/matte">Matte</Link>, which is based on Material UI
          </>,
          <>
            Achieved over 75% test coverage in end-to-end and unit testing, ensuring product functionality and reliability
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React",
        description: <>Building next gen apps with React + Next.js + TypeScript</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: ".NET Core",
        description: <>Creating scalable, reliable, and maintainable backend systems with C# + .NET Core + Azure</>
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Technical blog containing personal findings and opinions.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery = {
//   label: "Gallery",
//   title: "My photo gallery",
//   description: `A photo collection by ${person.name}`,
//   // Images from https://pexels.com
//   images: [
//     {
//       src: "/images/gallery/img-01.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-02.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-03.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-04.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-05.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-06.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-07.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-08.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-09.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-10.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-11.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-12.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-13.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-14.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//   ],
// };

export { person, social, newsletter, home, about, blog, work };
