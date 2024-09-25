import Image from 'next/image';
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const information = [
  {
    label: 'name',
    value: 'Tianlin Chen',
    icon: <User2 size={20} />,
  },
  {
    label: 'phone',
    value: '+86 135 3689 4366',
    icon: <PhoneCall size={20} />,
  },
  {
    label: 'email',
    value: 'tianlinchen1810@gmail.com',
    icon: <MailIcon size={20} />,
  },
  {
    label: 'birthday',
    value: 'Born on 18 October 2002',
    icon: <Calendar size={20} />,
  },
  {
    label: 'graduation',
    value: "Bachelor's degree in Computer Science",
    icon: <GraduationCap size={20} />,
  },
  {
    label: 'address',
    value: 'Guangdong, China',
    icon: <HomeIcon size={20} />,
  },
];

const qualifications = {
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

const skills = {
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

const About = () => {
  return (
    <section className="py-12 xl:h-[860px] xl:py-24">
      <div className="container">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden flex-1 xl:flex">
            <div className="relative h-[505px] w-[505px] bg-[url(/about/shape-light.svg)] bg-no-repeat dark:bg-[url(/about/shape-dark.svg)]">
              {/* svg for clip-path */}
              <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="shape">
                    <path d="M414.573 43.0779C455.283 71.8338 484.948 116.39 497.571 164.106C509.879 212.137 505.461 263.329 494.731 317.365C483.686 371.401 466.013 427.965 427.827 462.093C389.642 496.537 330.312 508.545 274.454 504.121C218.595 499.697 165.893 478.525 125.814 445.029C85.4189 411.217 57.6476 364.765 33.9788 312.309C10.31 259.853 -9.25622 201.077 4.62947 151.466C18.1996 101.538 64.906 60.7738 114.768 34.8619C164.946 9.26592 217.964 -1.16205 270.351 0.101944C322.738 1.36594 374.178 14.3219 414.573 43.0779Z" />
                  </clipPath>
                </defs>
              </svg>
              <Image
                style={{ clipPath: 'url(#shape)' }}
                src="/about/developer.png"
                alt="About Image"
                sizes="auto"
                priority
                fill
              />
            </div>
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs
              className="flex flex-col items-center xl:items-stretch"
              defaultValue="personal"
            >
              <TabsList className="w-full max-w-[520px] [&>*]:flex-1">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-10 text-lg xl:mt-6">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4">
                      Unmatched Service Quality for Over 2 Years
                    </h3>
                    <p className="subtitle mx-auto max-w-xl xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience.
                    </p>
                    {/* information */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {information.map(({ label, value, icon }) => (
                        <div
                          key={label}
                          className="mx-auto flex items-center gap-x-4 xl:mx-0"
                        >
                          <div className="text-primary">{icon}</div>
                          <div>{value}</div>
                        </div>
                      ))}
                    </div>
                    {/* hobbies */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Hobbies</div>
                      <div className="border-b border-border" />
                      <div>Music, Traveling, Photography, Reading</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="mb-8 text-center xl:text-left">
                      My Awesome journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-2">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize">experience</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {qualifications.experience.map(
                            ({ company, role, duration }, index) => (
                              <div key={index} className="group flex gap-x-8">
                                <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                  <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]" />
                                </div>
                                <div>
                                  <div className="mb-2 text-xl font-semibold leading-none">
                                    {company}
                                  </div>
                                  <div className="mb-4 text-lg leading-none text-muted-foreground">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {duration}
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize">education</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {qualifications.education.map(
                            (
                              { university, qualification, duration },
                              index,
                            ) => (
                              <div key={index} className="group flex gap-x-8">
                                <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                  <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]" />
                                </div>
                                <div>
                                  <div className="mb-2 text-xl font-semibold leading-none">
                                    {university}
                                  </div>
                                  <div className="mb-4 text-lg leading-none text-muted-foreground">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {duration}
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border" />
                      {/* skill list */}
                      <div>
                        {skills.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="mx-auto w-2/4 text-center xl:mx-0 xl:text-left"
                          >
                            <div className="font-medium">{skill}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">
                        Tools
                      </h4>
                      <div className="mb-4 border-b border-border" />
                      {/* tool list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {skills.tools.map(({ name, imgPath }) => (
                          <div key={name}>
                            <Image
                              src={imgPath}
                              height={48}
                              width={48}
                              alt={name}
                              priority
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
