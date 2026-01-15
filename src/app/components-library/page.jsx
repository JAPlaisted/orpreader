'use client';

import '../../../styles/pages/components.scss';
import MediaBlock from '../components/mediaBlock';
import VideoBlock from '../components/videoBlock';
import Waypoint from '../components/waypoint';
import TextModal from '../components/textModal';
import VideoModal from '../components/videoModal';
import Hero from '../components/hero';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import FAQ from '../components/faq';
import Card from '../components/card';
import CardRow from '../components/cardRow';
import CardGrid from '../components/cardGrid';

const mediaBlockData = {
    imageUrl: 'https://picsum.photos/1200',
    eyebrow: 'Media Block',
    heading: 'This is a media block',
    body: 'I have an image on the left and text on the right. I also have one button.',
    isReversed: false,
    buttons: [
      {
        label: 'Lorem ipsum',
        link: '/',
        theme: 'btn-primary',
      },
    ],
};

const mediaBlockData2 = {
    imageUrl: 'https://picsum.photos/600',
    eyebrow: 'Media Block',
    heading: 'This is a reversed media block',
    body: 'I have the image on the right and text on the left using "isReversed: true". I also have two buttons.',
    isReversed: true,
    buttons: [
      {
        label: 'Lorem ipsum',
        link: '/',
        theme: 'btn-primary',
      },
      {
        label: 'Lorem ipsum',
        link: '/',
        theme: 'btn-secondary--outline',
      },
    ],
};

export const videoBlockData = {
  youTubeUrl: 'https://www.youtube.com/watch?v=nVNIoQUcFI4',
  thumbnailUrl: '',
  playIconUrl: '', 
};

export const videoBlockData2 = {
  youTubeUrl: 'https://www.youtube.com/watch?v=nVNIoQUcFI4',
  thumbnailUrl: 'https://picsum.photos/1200',
  playIconUrl: '',
};

const waypointData = {
    imageUrl: 'https://picsum.photos/600',
    eyebrow: 'Waypoint',
    heading: 'This is a media block used in a waypoint',
    body: 'The background of this component changes color when it comes into view on the screen. This can be used to trigger css or js upon scrolling.',
    isReversed: false,
    buttons: [
      {
        label: 'Lorem ipsum',
        link: '/',
        theme: 'btn-primary',
      },
    ],
};

const textModalData = {
  triggerLabel: 'Open Text Modal',
  triggerTheme: 'btn-primary',      
  triggerSize: 'btn',             
  title: 'Terms & Notes',
  body: 'This modal’s text and button styles are powered by props coming from the components library. Same pattern as your other blocks.',
  closeLabel: 'Close',
  closeTheme: 'btn-primary',      
  closeSize: 'btn',
};

const modalVideoData = {
  triggerLabel: 'Open Video Modal',
  triggerTheme: 'btn-secondary--outline',   
  triggerSize: 'btn',
  title: 'Product Overview',
  video: {
    ...videoBlockData,           
  },
  closeLabel: 'Close',
  closeTheme: 'btn-secondary--outline',
  closeSize: 'btn--s',
};

const heroImageData = {
  bgType: 'image',
  imageUrl: 'https://picsum.photos/1920/1080',
  imageAlt: 'Sample background',
  overlay: true,
  overlayOpacity: 0.35,
  overline: 'Overline',
  heading: 'Build Faster with Your Template',
  body: 'A reusable Next.js starter with components, utilities, and a polished DX.',
  button: { label: 'Get Started', link: '/', theme: 'btn-primary', size: 'btn--l' },
  align: 'left', 
};

const heroVideoData = {
  bgType: 'video',
  videoSrc: '/video/hero.mp4',    
  videoPoster: '/img/hero-poster.webp',
  overlay: true,
  overlayOpacity: 0.4,
  overline: 'Now Playing',
  heading: 'Crisp, Full-Bleed Video',
  body: 'Local MP4 with autoplay, muted, loop, and playsInline for mobile.',
  button: { label: 'Learn More', link: '/', theme: 'btn-secondary', size: 'btn' },
  align: 'center',
};

const navbarData = {
  brandTitle: 'Sommet',
  navItems: [
    {label: 'Home', href: '/'},
    {label: 'Components', href: '/components-library'},
    {label: 'Docs', href: '/docs'},
  ],
  login: {label: 'Log in', href: '/components-library', theme: 'btn-primary', size: 'btn--s'},
  sticky: true,
};

export const footerData = {
  brandTitle: 'Sommet',
  description: 'Building robots, tools, and ideas for a smarter world.',
  linkColumns: [
    {
      heading: 'Product',
      links: [
        {label: 'Features', href: '/features'},
        {label: 'Pricing', href: '/pricing'},
        {label: 'Docs', href: '/docs'},
      ],
    },
    {
      heading: 'Company',
      links: [
        {label: 'About', href: '/about'},
        {label: 'Careers', href: '/careers'},
        {label: 'Blog', href: '/blog'},
      ],
    },
    {
      heading: 'Support',
      links: [
        {label: 'Help Center', href: '/help'},
        {label: 'Contact', href: '/contact'},
        {label: 'Status', href: '/status'},
      ],
    },
  ],
  socials: [
    {icon: '🐦', label: 'Twitter', href: 'https://twitter.com'},
    {icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com'},
    {icon: '📸', label: 'Instagram', href: 'https://instagram.com'},
  ],
  copyright: `© ${new Date().getFullYear()} Sommet. All rights reserved.`,
  legalLinks: [
    {label: 'Privacy Policy', href: '/privacy'},
    {label: 'Terms of Service', href: '/terms'},
  ],
};

export const faqData = {
  allowMultiple: false,
  defaultOpen: [0],
  items: [
    {
      question: 'Can I use this template commercially?',
      answer:
        'Yes. You can use it for client work and your own projects. A credit is appreciated but not required.',
    },
    {
      question: 'How do I change colors and typography?',
      answer:
        'Update your global SCSS tokens (colors, spacing, typography classes) and the components will inherit them.',
    },
    {
      question: 'Does the video hero support autoplay on mobile?',
      answer:
        'Yes—use an internal MP4, keep it muted with playsInline. Provide a poster for smooth loading.',
    },
    {
      question: 'How do I add more nav items?',
      answer:
        'Pass an array of {label, href} to the Navbar via the components library data. The component renders whatever you provide.',
    },
    {
      question: 'Can multiple FAQ items be open at once?',
      answer:
        'Yep. Set allowMultiple to true (as shown here). With allowMultiple=false, it behaves like a single-open accordion.',
    },
  ],
};

const cardItems = [
  {
    imageUrl: 'https://picsum.photos/seed/a/800/450',
    eyebrow: 'Release',
    heading: 'Version 1.0 is live',
    body: 'Our first stable release with components, utilities, and a polished DX.',
    button: { label: 'Read more', href: '/', theme: 'btn-primary', size: 'btn--s' },
  },
  {
    imageUrl: 'https://picsum.photos/seed/b/800/450',
    eyebrow: 'Guide',
    heading: 'Styling & Theming',
    body: 'How to swap color tokens and typography without touching components.',
    button: { label: 'Open guide', href: '/', theme: 'btn-secondary', size: 'btn--s' },
  },
  {
    imageUrl: 'https://picsum.photos/seed/c/800/450',
    eyebrow: 'Case Study',
    heading: 'Perf wins with Next',
    body: 'LCP, font strategy, and image optimization—what actually moved the needle.',
    button: { label: 'View case study', href: '/', theme: 'btn-primary--outline', size: 'btn--s' },
  },
  {
    imageUrl: 'https://picsum.photos/seed/d/800/450',
    eyebrow: 'Tutorial',
    heading: 'Forms & Validation',
    body: 'Build accessible forms with helpful errors and no external libs.',
    button: { label: 'Start tutorial', href: '/', theme: 'btn-primary', size: 'btn--s' },
  },
  {
    imageUrl: 'https://picsum.photos/seed/e/800/450',
    eyebrow: 'Announcement',
    heading: 'Dark mode shipped',
    body: 'Theme toggle with CSS vars, persisted to localStorage.',
    button: { label: 'Try it', href: '/', theme: 'btn-secondary', size: 'btn--s' },
  },
  {
    imageUrl: 'https://picsum.photos/seed/f/800/450',
    eyebrow: 'Blog',
    heading: 'Design tokens',
    body: 'How to think about scale: spacing, radius, z-index, and motion.',
    button: { label: 'Read post', href: '/', theme: 'btn-secondary--outline', size: 'btn--s' },
  },
  {
    imageUrl: 'https://picsum.photos/seed/a/800/450',
    eyebrow: 'Release',
    heading: 'Version 1.0 is live',
    body: 'Our first stable release with components, utilities, and a polished DX.',
    button: { label: 'Read more', href: '/', theme: 'btn-primary', size: 'btn--s' },
  },
  {
    imageUrl: 'https://picsum.photos/seed/b/800/450',
    eyebrow: 'Guide',
    heading: 'Styling & Theming',
    body: 'How to swap color tokens and typography without touching components.',
    button: { label: 'Open guide', href: '/', theme: 'btn-secondary', size: 'btn--s' },
  },
  {
    imageUrl: 'https://picsum.photos/seed/c/800/450',
    eyebrow: 'Case Study',
    heading: 'Perf wins with Next',
    body: 'LCP, font strategy, and image optimization—what actually moved the needle.',
    button: { label: 'View case study', href: '/', theme: 'btn-primary--outline', size: 'btn--s' },
  },
];

const cardRowData = {
  items: cardItems,  
  perPage: 3,
  slideBy: 3,
  showDots: true,
  buttonThemeOverride: 'btn-secondary',
};

const cardGridData = {
  items: cardItems,
  initial: 6,        
  step: 3,         
  max: 12,            
  showLoadMore: true,
  align: 'center',   
  buttonThemeOverride: 'btn-primary--outline',
};

export default function ComponentsLibrary() {
  
  const handleMediaEnter = () => {
    console.log('first media block entered viewport');
  };
  const handleMediaExit = () => {
    console.log('first media block exited viewport');
  };

  return (
    <main className="p-0 sm:p-8">
      <div className="container components-library">
        <h1 className="heading--xl mb-6">Components Library</h1>

        <hr className="mb-6" />
        <h3 className="eyebrow mb-4 text-primary">Elements</h3>
        <h2 className="heading--l mb-6">Typography</h2>
        <section id="typography" className="mb-6">

            <div className="heading--s mb-4">.heading--s</div>

            <div className="heading mb-4">.heading</div>

            <div className="heading--l mb-4">.heading--l</div>

            <div className="heading--xl mb-4">.heading--xl</div>

            <div className="subheading--s mb-4">.subheading--s</div>

            <div className="subheading mb-4">.subheading</div>

            <div className="subheading--l mb-4">.subheading--l</div>

            <div className="eyebrow mb-4">.eyebrow</div>

            <div className="body--xs mb-2">.body--xs</div>
            <div className="body--xs mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <div className="body--s mb-2">.body--s</div>
            <div className="body--s mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <div className="body mb-2">.body</div>
            <div className="body mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <div className="body--l mb-2">.body--l</div>
            <div className="body--l mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <div className="body--xl mb-2">.body--xl</div>
            <div className="body--xl mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. Quae laboriosam sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

            <a className="mb-2" href='/'>links</a>
            <div className="body mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi odio assumenda laboriosam dolorum explicabo perferendis minima suscipit atque. <a href='/'>Quae laboriosam</a> sit quis deserunt dolore ex vel cum. Saepe placeat numquam dolorum adipisci? Quas quos tempore ipsum et quod porro nesciunt eius cumque delectus? Quam.</div>

        </section>

        <hr className="mb-6" />
        <h2 className="heading--l mb-4">Color Palette</h2>
        <section id="color-palette" className="mb-6 color-palette">
          <div className="row">
            <div className="col">
              <div className="box bg-primary text-white">
                <div className="heading--s">.bg-primary</div>
                <div className="body">.text-white</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-white text-primary">
                <div className="heading--s">.bg-white</div>
                <div className="body">.text-primary</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-secondary text-accent">
                <div className="heading--s">.bg-secondary</div>
                <div className="body">.text-accent</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-accent text-secondary">
                <div className="heading--s">.bg-accent</div>
                <div className="body">.text-secondary</div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="box bg-dark text-light">
                <div className="heading--s">.bg-dark</div>
                <div className="body">.text-light</div>
              </div>
            </div>
            <div className="col">
              <div className="box bg-light text-dark">
                <div className="heading--s">.bg-light</div>
                <div className="body">.text-dark</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Responsive Mixins</h2>
        <section id="responsive-mixins" className="mb-12">
            <div className="responsive-box">
                <div className="body">
                    Resize your browser to see this box change color.
                </div>
                <div className="body--s mt-2">
                    <strong>{"@include mobile {"}</strong> background-color: $white; border-color: $tropicalIndigo;<strong>{"}"}</strong><br />
                    <strong>{"@include desktop {"}</strong> background-color: $honeydew; border-color: $oxfordBlue;<strong>{"}"}</strong><br />
                    <strong>{"@include desktop-l {"}</strong> background-color: $offWhite; border-color: $coquelicot;<strong>{"}"}</strong><br />
                </div>
            </div>
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Buttons</h2>
        <section id="buttons" className="mb-12">
            <div className="row">
                <div className="col">
                    <div className="body--s mb-2">.btn-primary</div>
                    <button className="button btn--s btn-primary m-1">Small</button>{' '}
                    <button className="button btn btn-primary m-1">Default</button>{' '}
                    <button className="button btn--l btn-primary m-1">Large</button>
                </div>
                <div className="col">
                    <div className="body--s mb-2">.btn-secondary</div>
                    <button className="button btn--s btn-secondary m-1">Small</button>{' '}
                    <button className="button btn btn-secondary m-1">Default</button>{' '}
                    <button className="button btn--l btn-secondary m-1">Large</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="body--s mb-2">.btn-primary--outline</div>
                    <button className="button btn--s btn-primary--outline m-1">Small</button>{' '}
                    <button className="button btn btn-primary--outline m-1">Default</button>{' '}
                    <button className="button btn--l btn-primary--outline m-1">Large</button>
                </div>
                <div className="col">
                    <div className="body--s mb-2">.btn-secondary--outline</div>
                    <button className="button btn--s btn-secondary--outline m-1">Small</button>{' '}
                    <button className="button btn btn-secondary--outline m-1">Default</button>{' '}
                    <button className="button btn--l btn-secondary--outline m-1">Large</button>
                </div>
            </div>
        </section>

        <hr className="mb-6" />
        <h2 className="heading--l mb-6">Layout</h2>
        <section id="layout" className="mb-6 components-layout">
            <div className="box">
                <div className="eyebrow">Layout Sample</div>
                <div className="heading">Using Layout Classes</div>
                <div className="body mt-2">This content is wrapped in a <code>.box</code> and the below content uses the <code>.row</code> and <code>.col</code> classes as well as <code>.box</code> as the inner most container.</div>
                <div className="body--s mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur officia exercitationem nisi ea voluptates, ut praesentium magni reiciendis qui! Maiores eligendi error quos porro dolore veritatis quo, quod officia?</div>
                <div className="body--s mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur officia exercitationem nisi ea voluptates, ut praesentium magni reiciendis qui! Maiores eligendi error quos porro dolore veritatis quo, quod officia? Doloribus tenetur officia exercitationem nisi ea voluptates, ut praesentium magni reiciendis qui! Maiores eligendi error quos porro dolore veritatis quo, quod officia?</div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="box">
                        <div className="subheading--s mb-2">Left Column</div>
                        <div className="body mb-2">This is a 50% column on desktop, 100% on mobile.</div>
                        <button className="button btn--s btn-primary">Small</button>
                    </div>
                </div>

                <div className="col">
                    <div className="box">
                        <div className="subheading--s mb-2">Right Column</div>
                        <div className="body mb-2">You can nest any components inside these columns.</div>
                        <button className="button btn--s btn-primary--outline">Small</button>
                    </div>
                </div>
            </div>
        </section>

        <hr className="mb-6" />
        <h3 className="eyebrow mb-4 text-primary">Components</h3>
        <h2 className="heading mb-4">Media Block</h2>
        <section id="media-block" className="mb-12">
          <div className="box">
            <MediaBlock {...mediaBlockData} />
          </div>
          <div className="box">
            <MediaBlock {...mediaBlockData2} />
          </div>
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Video Block</h2>
        <section id="video-block" className="mb-12">
          <div className="body mb-4">This is a video block. It plays a YouTube video in an iframe. It uses the thumbnail provided by youtube.</div>
          <VideoBlock {...videoBlockData} />
          <div className="body mt-8 mb-4 ">This is a video block. It plays a YouTube video in an iframe. It uses a custom thumbnail.</div>
          <VideoBlock {...videoBlockData2} />
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Waypoint</h2>
        <section id="waypoint" className="mb-12">
         <Waypoint
            onEnter={handleMediaEnter}
            onExit={handleMediaExit}
            threshold={0.9}
            activeClass="bg-white transition-colors duration-600"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <MediaBlock {...waypointData} />
          </Waypoint>
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Modals</h2>
        <section id="modals" className="mb-12">

          <div className="row">
            <div className="col">
                <div className="box">
                    <div className="subheading mb-2">Text Modal</div>
                    <div className="body mb-4">This button opens a popup text modal</div>
                    <TextModal {...textModalData} />
                </div>
            </div>

            <div className="col">
                <div className="box">
                    <div className="subheading mb-2">Video Modal</div>
                    <div className="body mb-4">This button opens a popup video modal</div>
                    <VideoModal {...modalVideoData} />
                </div>
            </div>
          </div>

        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Image Hero</h2>
        <section id="image-hero" className="mb-12">
          <Hero {...heroImageData} />
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Video Hero</h2>
        <section id="video-hero" className="mb-12">
          <Hero {...heroVideoData} />
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Nav</h2>
        <section id="nav">
          <Navbar {...navbarData} />
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Footer</h2>
        <section id="footer">
          <Footer {...footerData} />
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">FAQ</h2>
        <section id="faq" className="mb-12">
          <FAQ {...faqData} />
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Card</h2>
        <section id="card" className="mb-12">
          <Card {...cardItems[0]} />
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Card Row (Slider)</h2>
        <section id="card-row" className="mb-12">
          <CardRow {...cardRowData} />
        </section>

        <hr className="mb-6" />
        <h2 className="heading mb-4">Card Grid</h2>
        <section id="card-grid" className="mb-12">
          <CardGrid {...cardGridData} />
        </section>

        
      </div>
    </main>
  );
}
