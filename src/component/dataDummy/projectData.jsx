import ProjectImage1 from '../../assets/dumImages/wayslink.png';
import ProjectImage2 from '../../assets/dumImages/wow.png';

const projects = [
  {
    title: 'WaysLink',
    description:
      'Ways-Link is a social media reference landing page',
    image: ProjectImage1,
    tech: ['React', 'Material UI', 'express', 'MySQL'],
    isGithubPrivate: true,
    githubUrl: 'https://github.com/Richardo33/Dumb-link.git',
    demoUrl: '',
  },
  {
    title: 'Window of World',
    description:
      'WoW is an application that allows users to read books online for free. Users can also add books to their personal list without any subscription required.',
    image: ProjectImage2,
    tech: ['React', 'Material UI'],
    isGithubPrivate: false,
    githubUrl: 'https://github.com/Richardo33/window-world',
    demoUrl: '',
  },
];

export default projects;
