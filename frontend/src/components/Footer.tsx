const currentYear = new Date().getFullYear();

const navLinks = [
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Terms', href: '#' }
];

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    svgPath:
      'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    name: 'Instagram',
    href: '#',
    svgPath:
      'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
  },
  {
    name: 'Twitter',
    href: '#',
    svgPath:
      'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
  },
  {
    name: 'GitHub',
    href: '#',
    svgPath:
      'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.418-.012 2.747 0 .269.179.58.688.482C19.14 20.194 22 16.442 22 12.017 22 6.484 17.523 2 12 2z',
  },
  {
    name: 'Dribbble',
    href: '#',
    svgPath:
      'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.907 4.507c.672 1.016 1.102 2.183 1.163 3.446-.159-.039-1.751-.393-3.386-.166-.091-.229-.177-.454-.273-.68-.107-.244-.213-.487-.331-.723 1.737-.682 2.873-1.61 2.827-1.877zM12 3.802c1.244 0 2.428.298 3.472.824-.03.03-1.387 1.383-3.211 2.079-.74-1.364-1.599-2.674-2.57-3.87A8.202 8.202 0 0112 3.802zM8.551 4.782c.943 1.185 1.773 2.443 2.496 3.75-3.146.84-6.5.906-7.05.89A8.23 8.23 0 018.55 4.782zM3.802 12c0-.205.01-.407.024-.607.36.01 4.01.07 7.999-.949.14.272.272.549.399.83.114.258.229.52.334.783-3.683 1.04-6.6 3.696-7.819 7.015A8.187 8.187 0 013.802 12zm2.31 5.423c1.152-3.006 3.61-5.282 6.597-6.232.537 1.36.979 2.774 1.315 4.239-2.897.789-5.79 1.232-8.707 1.228.23-.413.476-.82.755-1.235zm3.783 3.051c.473-1.43.992-2.839 1.623-4.196 1.238-.319 2.515-.507 3.815-.553.247 1.821.28 3.675.145 5.565A8.186 8.186 0 0112 20.198a8.22 8.22 0 01-2.105-.282zm7.114-1.285c.112-1.617.04-3.2-.156-4.747 1.335-.13 2.664.059 3.959.552a8.189 8.189 0 01-3.803 4.195z',
  },
];

const Footer = () => (
  <footer className="bg-white border-t">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <div className="flexitems-center">
        <nav className="flex justify-center space-x-4 -mx-5 -my-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base leading-6 text-gray-600 hover:text-gray-900"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex justify-center mt-4 space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-600 mx-2 hover:opacity-75"
            aria-label={link.name}
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d={link.svgPath} />
            </svg>
          </a>
        ))}
      </div>
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <p className="mt-8 text-base leading-6 text-center text-gray-600">
            &copy; {currentYear} Bookern. All rights reserved.
          </p>
        </div>
    </div>
  </footer>
);

export default Footer;
