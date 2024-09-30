import Link from 'next/link';

import { projects } from '@/lib/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/project-card';

const categories = [
  'all projects',
  ...new Set(projects.map((project) => project.category)),
];

export default function Projects({
  searchParams,
}: Readonly<{
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  // get category from search params, default to 'all projects'
  const category = (searchParams.category || 'all projects') as string;

  const filteredProjects = projects.filter((project) => {
    // if category is 'all projects', return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs className="mb-24 flex flex-col xl:mb-48" defaultValue={category}>
          <TabsList className="mx-auto mb-12 h-full w-full lg:max-w-[640px] [&>*]:flex-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                className="w-[162px] capitalize md:mx-auto"
                value={category}
                asChild
              >
                <Link href={`/projects?category=${category}`}>{category}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
          {/* tabs content */}
          <div className="xl:mt-8">
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
