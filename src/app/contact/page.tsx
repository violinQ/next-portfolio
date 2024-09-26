import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react';
import ContactForm from './contact-form';

export default function Contact() {
  return (
    <section>
      <div className="container">
        {/* text & illustration */}
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="mb-8 max-w-md">Let&apos;s Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, quasi?
            </p>
          </div>
          {/* illustration */}
          <div className="hidden w-full bg-[url(/contact/illustration-light.svg)] bg-contain bg-top bg-no-repeat dark:bg-[url(/contact/illustration-dark.svg)] xl:flex" />
        </div>
        {/* info text & form */}
        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          {/* info text */}
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-14 xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon className="text-primary" size={18} />
              <div>tianlinchen1810@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon className="text-primary" size={18} />
              <div>Guangdong China</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall className="text-primary" size={18} />
              <div>+86 13536894366</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
