import clsx from 'clsx';
import * as React from 'react';
import {
    SiWordpress,
    SiPrisma,
    SiReact,
    SiReactquery,
    SiTailwindcss,
    SiTypescript, SiHtml5, SiCss3, SiGit, SiPhp,
} from 'react-icons/si';

import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-8 w-8 md:h-10 md:w-10',
              'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'html5',
    icon: SiHtml5,
    tooltip: (
      <>
        <CustomLink href='https://html5.org'>HTML5</CustomLink> marked my entry into web
          development, laying the foundation for dynamic, interactive content. From semantic
          elements to multimedia integration, it's the bedrock of my programming journey.
      </>
    ),
  },
  {
    id: 'css3',
    icon: SiCss3,
    tooltip: (
      <>
          CSS, my digital aesthetic tool, transforms HTML into captivating experiences.
          From selectors defining styles to responsive design, it shapes my web creations
          into visually engaging and dynamic interfaces.
      </>
    ),
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <>
        <CustomLink href='https://www.typescriptlang.org/'>
          TypeScript
        </CustomLink>
        ,a JavaScript superset, enhances code clarity with static typing. Embracing it elevated my development journey, offering early error detection and fostering the creation of robust, scalable applications.
      </>
    ),
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: (
      <>
        <CustomLink href='https://tailwindcss.com/'>Tailwind CSS</CustomLink> is
        awesome, I have never achieved this much reusability. Make sure you get
        the{' '}
        <CustomLink href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>
          extension
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'wordpress',
    icon: SiWordpress,
    tooltip: (
      <>
        <CustomLink href='https://wordpress.org'>WordPress</CustomLink>,
          my dynamic content hub, simplifies web creation. Its intuitive
          interface and vast plugin ecosystem streamline site management, empowering me
          to craft powerful, customized online experiences effortlessly.
      </>
    ),
  },
  {
    id: 'git',
    icon: SiGit,
    tooltip: (
      <>
        <CustomLink href='https://git-scm.com'>Git</CustomLink>: Mastering version control, simplifying collaboration.
          Efficient, error-free development with seamless branching and merging.
      </>
    ),
  },
    {
        id: 'php',
        icon: SiPhp,
        tooltip: (
            <>
                <CustomLink href='https://php.net'>PHP</CustomLink>: My evolving toolkit. While I navigate
                its versatility, PHP amplifies my web capabilities. Continuous learning fuels my journey toward
                mastering this powerful server-side scripting language.
            </>
        ),
    },
];
