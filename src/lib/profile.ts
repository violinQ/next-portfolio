// This file is used to store personal information, including achievements, basic information, qualifications, skills, etc.
// This file will be referenced by src/components/home/hero.tsx and src/components/home/about.tsx
import {
  Calendar,
  GraduationCap,
  Home,
  MailIcon,
  PhoneCall,
  User2,
} from 'lucide-react';
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri';

// Corresponding to the badge in the hero area, the badge on the page will be displayed based on the data here.
// Only 3 badges are currently displayed in hero. If there are more badges that need to be displayed, you need to add data here and manually add the corresponding display in hero.
export const achievement = [
  {
    label: 'Years Of Experience',
    icon: RiBriefcase4Fill,
    endCount: 2,
  },
  {
    label: 'Finished Projects',
    icon: RiTodoFill,
    endCount: 10,
    suffix: '+',
  },
  {
    label: 'Happy Clients',
    icon: RiTeamFill,
    endCount: 10,
    suffix: '+',
  },
];

export const information = [
  {
    label: 'name',
    value: 'Tianlin Chen',
    icon: User2,
  },
  {
    label: 'phone',
    value: '+86 135 3689 4366',
    icon: PhoneCall,
  },
  {
    label: 'email',
    value: 'tianlinchen1810@gmail.com',
    icon: MailIcon,
  },
  {
    label: 'birthday',
    value: 'Born on 18 October 2002',
    icon: Calendar,
  },
  {
    label: 'graduation',
    value: "Bachelor's degree in Computer Science",
    icon: GraduationCap,
  },
  {
    label: 'address',
    value: 'Guangdong, China',
    icon: Home,
  },
];

export const qualifications = {
  education: [
    {
      university: 'Guangdong Vocational College of Science and Technology',
      qualification: "Bachelor's degree in Computer Science",
      duration: '2021 - 2024',
    },
  ],
  experience: [
    {
      company: 'Zhuhai Kingsoft Digital Network Technology Co., Ltd.',
      role: 'Front-end Developer',
      duration: '2023 - 2024',
    },
  ],
};

export const skills = {
  skills: [
    'HTML, CSS, JavaScript',
    'Front-end Development',
    'Back-end Development',
    'Java, Python',
  ],
  tools: [
    {
      name: 'WebStorm',
      imgPath: '/about/webstorm.svg',
    },
    {
      name: 'VS Code',
      imgPath: '/about/vscode.svg',
    },
    {
      name: 'Git',
      imgPath: '/about/git.svg',
    },
    {
      name: 'Linux',
      imgPath: '/about/linux.svg',
    },
  ],
};
