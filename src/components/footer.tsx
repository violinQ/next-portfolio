import Socials from './socials';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          {/* socials */}
          <Socials className="mx-auto mb-4 flex gap-x-6 xl:mx-0" />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Chen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
