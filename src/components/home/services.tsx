import { Blocks, GanttChartSquare, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

const services = [
  {
    title: 'Web Design',
    description: 'I can help you design a modern and user-friendly website.',
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
  },
  {
    title: 'Web Development',
    description:
      'I can help you build a website from scratch or improve your existing website.',
    icon: <Blocks size={72} strokeWidth={0.8} />,
  },
  {
    title: 'App Development',
    description: 'I can help you build a mobile app for your business.',
    icon: <Gem size={72} strokeWidth={0.8} />,
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container">
        <h2 className="section-title mx-auto mb-12 text-center xl:mb-24">
          My Services
        </h2>
        {/*  grid items */}
        <div className="grid justify-center gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24">
          {services.map(({ title, description, icon }) => (
            <Card
              key={title}
              className="relative flex h-[300px] w-full max-w-[424px] flex-col items-center justify-center pb-10 pt-16"
            >
              <CardHeader className="absolute -top-[60px] text-primary">
                <div className="flex h-[80px] w-[140px] items-center justify-center bg-background">
                  {icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{title}</CardTitle>
                <CardDescription className="text-lg">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
