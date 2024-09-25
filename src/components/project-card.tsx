import Image from 'next/image';
import Link from 'next/link';
import { Link2Icon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import { Project } from '@/lib/projects';
import { Card, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-secondary/40 xl:bg-[url(/work/project-bg-light.png)] xl:bg-[110%] xl:bg-no-repeat xl:dark:bg-[url(/work/project-bg-dark.png)]">
          <Image
            className="absolute bottom-0 h-[250px] w-[247px] shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* buttons */}
          <div className="flex gap-x-4">
            <Link
              className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-lg bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
              href={project.link}
            >
              <Link2Icon />
            </Link>
            <Link
              className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-lg bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
              href={project.sourcecode}
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
          {project.category}
        </Badge>
        <h4 className="mb-1">{project.name}</h4>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
