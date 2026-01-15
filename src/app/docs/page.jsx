'use client';

import Navbar from '../components/nav';
import Hero from '../components/hero';
import MediaBlock from '../components/mediaBlock';
import Card from '../components/card';
import CardRow from '../components/cardRow';
import CardGrid from '../components/cardGrid';
import VideoBlock from '../components/videoBlock';
import TextModal from '../components/textModal';
import VideoModal from '../components/videoModal';
import FAQ from '../components/faq';
import Footer from '../components/footer';

const navbarData = {
  brandTitle: 'Sommet',
  navItems: [
    {label: 'Home', href: '/'},
    {label: 'Components', href: '/components-library'},
    {label: 'Docs', href: '/docs'},
  ],
  login: {label: 'Log in', href: '/login', theme: 'btn-primary', size: 'btn--s'},
  sticky: true,
};

const footerData = {
  brandTitle: 'Sommet',
  description: 'Building robots, tools, and ideas for a smarter world.',
  linkColumns: [
    { heading: 'Product', links: [
      {label: 'Components', href: '/components-library'},
      {label: 'Status', href: '/status'},
    ]},
    { heading: 'Company', links: [
      {label: 'About', href: '/about'},
      {label: 'Blog', href: '/blog'},
    ]},
    { heading: 'Support', links: [
      {label: 'Help Center', href: '/help'},
      {label: 'Contact', href: '/contact'},
    ]},
  ],
  socials: [
    {icon: '🐦', label: 'Twitter', href: 'https://twitter.com'},
    {icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com'},
  ],
  copyright: `© ${new Date().getFullYear()} Sommet.`,
  legalLinks: [{label: 'Terms', href: '/terms'}],
};

export default function Docs() {
  return (
    <main>
      <Navbar {...navbarData} />

      <header className="py-12">
        <div className="container">
          <div className="eyebrow">Documentation</div>
          <h1 className="heading--xl mb-2">Template Docs</h1>
          <div className="body mb-6">
            Everything in the components library, explained. Copy/paste props, see small demos, and jump to the full{' '}
            <a href="/components-library">/components-library</a> page for live previews.
          </div>

          <nav className="box bg-off-white">
            <div className="subheading--s mb-2">On this page</div>
            <ul className="body">
              <li><a href="#utilities">Utilities (typography, colors, buttons, layout)</a></li>
              <li><a href="#hero">Hero</a></li>
              <li><a href="#navbar">Navbar</a></li>
              <li><a href="#mediablock">MediaBlock</a></li>
              <li><a href="#videoblock">VideoBlock</a></li>
              <li><a href="#waypoint">Waypoint</a></li>
              <li><a href="#modals">Modals (TextModal, VideoModal)</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#card">Card</a></li>
              <li><a href="#cardrow">CardRow (slider)</a></li>
              <li><a href="#cardgrid">CardGrid</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* UTILITIES */}
      <section id="utilities" className="py-12">
        <div className="container">
          <h2 className="heading mb-4">Utilities</h2>

          <div className="box bg-off-white mb-6">
            <div className="subheading mb-2">Typography classes</div>
            <div className="body">
              <code>.heading--xl</code>, <code>.heading--l</code>, <code>.heading</code>, <code>.heading--s</code><br/>
              <code>.subheading--l</code>, <code>.subheading</code>, <code>.subheading--s</code><br/>
              <code>.eyebrow</code><br/>
              <code>.body--xl</code>, <code>.body--l</code>, <code>.body</code>, <code>.body--s</code>, <code>.body--xs</code>
            </div>
          </div>

          <div className="box bg-off-white mb-6">
            <div className="subheading mb-2">Color utilities</div>
            <div className="body">
              <strong>Backgrounds:</strong>{' '}
              <code>.bg-primary</code>, <code>.bg-secondary</code>, <code>.bg-dark</code>, <code>.bg-light</code>, <code>.bg-accent</code>, <code>.bg-white</code>, <code>.bg-off-white</code><br/>
              <strong>Text:</strong>{' '}
              <code>.text-primary</code>, <code>.text-secondary</code>, <code>.text-dark</code>, <code>.text-light</code>, <code>.text-accent</code>, <code>.text-white</code>, <code>.text-off-white</code>
            </div>
          </div>

          <div className="box bg-off-white mb-6">
            <div className="subheading mb-2">Buttons</div>
            <div className="body">
              Use <code>.button</code> + size + theme. Sizes: <code>.btn--s</code>, <code>.btn</code>, <code>.btn--l</code>.<br/>
              Themes: <code>.btn-primary</code>, <code>.btn-secondary</code>, <code>.btn-primary--outline</code>, <code>.btn-secondary--outline</code>.
            </div>
          </div>

          <div className="box bg-off-white">
            <div className="subheading mb-2">Layout</div>
            <div className="body">
              <code>.container</code> centers content with max-width.<br/>
              <code>.row</code> + <code>.col</code> builds grids.<br/>
              <code>.box</code> is a padded surface for component content.<br/>
              Responsive mixins available in SCSS: <code>@include mobile {`{ ... }`}</code> and <code>@include desktop {`{ ... }`}</code>.
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section id="hero" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">Hero</h2>
          <div className="body mb-4">Full-bleed hero with image or video background.</div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>bgType</td><td>'image' | 'video'</td><td>'image'</td><td>Select background type.</td></tr>
                <tr><td>imageUrl</td><td>string</td><td>-</td><td>Required for <code>bgType="image"</code>.</td></tr>
                <tr><td>imageAlt</td><td>string</td><td>-</td><td>Alt text for image background.</td></tr>
                <tr><td>videoSrc</td><td>string</td><td>-</td><td>Local MP4 recommended; autoplay/muted/loop/playsInline handled in component.</td></tr>
                <tr><td>videoPoster</td><td>string</td><td>-</td><td>Poster image for video.</td></tr>
                <tr><td>overlay</td><td>boolean</td><td>false</td><td>Adds a dark overlay for contrast.</td></tr>
                <tr><td>overlayOpacity</td><td>number (0–1)</td><td>0.35</td><td>Overlay strength.</td></tr>
                <tr><td>overline</td><td>string</td><td>-</td><td>Small text above heading.</td></tr>
                <tr><td>heading</td><td>string</td><td>-</td><td>Main heading text.</td></tr>
                <tr><td>body</td><td>string</td><td>-</td><td>Supporting copy.</td></tr>
                <tr><td>button</td><td>{`{ label, link, theme, size }`}</td><td>-</td><td>Primary CTA.</td></tr>
                <tr><td>align</td><td>'left' | 'center' | 'right'</td><td>'left'</td><td>Text/content alignment.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <div className="subheading--s mb-2">Minimal Demo</div>
            <Hero
              bgType="image"
              imageUrl="https://picsum.photos/1920/720"
              imageAlt="Demo"
              overlay
              overlayOpacity={0.35}
              overline="Docs"
              heading="All components, one template"
              body="Swap tokens, ship fast."
              button={{label:'Components', link:'/components-library', theme:'btn-primary', size:'btn'}}
              align="left"
            />
          </div>
        </div>
      </section>

      {/* NAVBAR */}
      <section id="navbar" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">Navbar</h2>
          <div className="body mb-4">Top navigation with brand, links, and optional login CTA.</div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>brandTitle</td><td>string</td><td>-</td><td>Brand text.</td></tr>
                <tr><td>navItems</td><td>{`Array<{label, href}>`}</td><td>[]</td><td>Primary links.</td></tr>
                <tr><td>login</td><td>{`{label, href, theme, size}`}</td><td>undefined</td><td>Optional right-side CTA.</td></tr>
                <tr><td>sticky</td><td>boolean</td><td>false</td><td>Stick to top on scroll.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <div className="subheading--s mb-2">Minimal Demo</div>
            <Navbar {...navbarData} />
          </div>
        </div>
      </section>

      {/* MEDIABLOCK */}
      <section id="mediablock" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">MediaBlock</h2>
          <div className="body mb-4">Split layout with image/video on one side and text/buttons on the other.</div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>imageUrl</td><td>string</td><td>-</td><td>Media image URL.</td></tr>
                <tr><td>imageAlt</td><td>string</td><td>-</td><td>Alt text (if implemented in your component).</td></tr>
                <tr><td>eyebrow</td><td>string</td><td>-</td><td>Small label above heading.</td></tr>
                <tr><td>heading</td><td>string</td><td>-</td><td>Section heading.</td></tr>
                <tr><td>body</td><td>string</td><td>-</td><td>Copy text.</td></tr>
                <tr><td>isReversed</td><td>boolean</td><td>false</td><td>Swap media/text sides.</td></tr>
                <tr><td>buttons</td><td>{`Array<{label, link, theme, size?}>`}</td><td>[]</td><td>CTA buttons.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <div className="subheading--s mb-2">Minimal Demo</div>
            <MediaBlock
              imageUrl="https://picsum.photos/seed/m/800/600"
              eyebrow="Block"
              heading="Media left, text right"
              body="Toggle isReversed for the other side."
              isReversed={false}
              buttons={[{label:'Components', link:'/components-library', theme:'btn-primary'}]}
            />
          </div>
        </div>
      </section>

      {/* VIDEOBLOCK */}
      <section id="videoblock" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">VideoBlock</h2>
          <div className="body mb-4">Lightweight YouTube embed with optional custom thumbnail.</div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>youTubeUrl</td><td>string</td><td>-</td><td>Full YouTube URL.</td></tr>
                <tr><td>thumbnailUrl</td><td>string</td><td>auto</td><td>Optional explicit thumbnail.</td></tr>
                <tr><td>playIconUrl</td><td>string</td><td>built-in</td><td>Optional custom play icon.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <div className="subheading--s mb-2">Minimal Demo</div>
            <VideoBlock youTubeUrl="https://www.youtube.com/watch?v=nVNIoQUcFI4" />
          </div>
        </div>
      </section>

      {/* WAYPOINT */}
      <section id="waypoint" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">Waypoint</h2>
          <div className="body mb-4">
            IntersectionObserver wrapper. Adds/removes classes and triggers callbacks as its child enters/leaves the viewport.
            Useful for color swaps, counters, lazy mounting, sticky CTAs, progress dots, etc.
          </div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>threshold</td><td>number (0–1)</td><td>0.5</td><td>Percent of target visible to trigger.</td></tr>
                <tr><td>activeClass</td><td>string</td><td>''</td><td>Class added when intersecting.</td></tr>
                <tr><td>inactiveClass</td><td>string</td><td>''</td><td>Class added when not intersecting.</td></tr>
                <tr><td>onEnter</td><td>() =&gt; void</td><td>-</td><td>Callback when entering.</td></tr>
                <tr><td>onExit</td><td>() =&gt; void</td><td>-</td><td>Callback when leaving.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <div className="subheading--s mb-2">Pattern</div>
            <pre className="body" style={{whiteSpace:'pre-wrap'}}>
{`<Waypoint
  threshold={0.75}
  activeClass="bg-white"
  inactiveClass="bg-off-white"
  onEnter={() => console.log('entered')}
  onExit={() => console.log('left')}
>
  <div className="box bg-off-white">
    {/* content to color-swap / animate */}
  </div>
</Waypoint>`}
            </pre>
          </div>
        </div>
      </section>

      {/* MODALS */}
      <section id="modals" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">Modals</h2>
          <div className="body mb-4">TextModal and VideoModal share the same trigger/close API.</div>

          <div className="box bg-off-white mb-6">
            <div className="subheading mb-2">TextModal Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>triggerLabel</td><td>string</td><td>'Open'</td><td>Button text.</td></tr>
                <tr><td>triggerTheme</td><td>string</td><td>'btn-primary'</td><td>Button theme class.</td></tr>
                <tr><td>triggerSize</td><td>string</td><td>'btn'</td><td>Button size class.</td></tr>
                <tr><td>title</td><td>string</td><td>-</td><td>Modal title.</td></tr>
                <tr><td>body</td><td>string</td><td>-</td><td>Modal content text.</td></tr>
                <tr><td>closeLabel</td><td>string</td><td>'Close'</td><td>Close button text.</td></tr>
                <tr><td>closeTheme</td><td>string</td><td>'btn-primary'</td><td>Close button theme.</td></tr>
                <tr><td>closeSize</td><td>string</td><td>'btn--s'</td><td>Close button size.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col">
              <div className="box">
                <div className="subheading--s mb-2">TextModal Demo</div>
                <TextModal
                  triggerLabel="Open Text Modal"
                  triggerTheme="btn-primary"
                  triggerSize="btn"
                  title="Terms & Notes"
                  body="This modal’s text and button styles are powered by props."
                  closeLabel="Close"
                  closeTheme="btn-primary"
                  closeSize="btn--s"
                />
              </div>
            </div>

            <div className="col">
              <div className="box">
                <div className="subheading--s mb-2">VideoModal Demo</div>
                <VideoModal
                  triggerLabel="Open Video Modal"
                  triggerTheme="btn-secondary--outline"
                  triggerSize="btn"
                  title="Product Overview"
                  video={{ youTubeUrl: 'https://www.youtube.com/watch?v=nVNIoQUcFI4', thumbnailUrl: '' }}
                  closeLabel="Close"
                  closeTheme="btn-secondary--outline"
                  closeSize="btn--s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">FAQ</h2>
          <div className="body mb-4">Accordion with single-open or multi-open modes.</div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>allowMultiple</td><td>boolean</td><td>false</td><td>Allow multiple items open simultaneously.</td></tr>
                <tr><td>defaultOpen</td><td>number[]</td><td>[]</td><td>Indices to open initially.</td></tr>
                <tr><td>items</td><td>{`Array<{question, answer}>`}</td><td>[]</td><td>FAQ content.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <FAQ
              allowMultiple={false}
              defaultOpen={[0]}
              items={[
                {question:'Can I use it commercially?', answer:'Yes—client work and personal projects are fine.'},
                {question:'Where are the examples?', answer:'See the components library at /components-library.'},
              ]}
            />
          </div>
        </div>
      </section>

      {/* CARD */}
      <section id="card" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">Card</h2>
          <div className="body mb-4">Single content card with image, text, and CTA.</div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>imageUrl</td><td>string</td><td>-</td><td>Card image.</td></tr>
                <tr><td>eyebrow</td><td>string</td><td>-</td><td>Small label.</td></tr>
                <tr><td>heading</td><td>string</td><td>-</td><td>Card title.</td></tr>
                <tr><td>body</td><td>string</td><td>-</td><td>Description.</td></tr>
                <tr><td>button</td><td>{`{ label, href, theme, size }`}</td><td>-</td><td>CTA.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <Card
              imageUrl="https://picsum.photos/seed/card/800/450"
              eyebrow="Guide"
              heading="Design tokens"
              body="Spacing, radius, z-index, and motion."
              button={{label:'Read', href:'/blog/tokens', theme:'btn-secondary', size:'btn--s'}}
            />
          </div>
        </div>
      </section>

      {/* CARD ROW */}
      <section id="cardrow" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">CardRow (slider)</h2>
          <div className="body mb-4">Horizontal slider. Display 3-up, slide by N, with optional dots.</div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>items</td><td>{`Array<CardProps>`}</td><td>[]</td><td>Cards to render.</td></tr>
                <tr><td>perPage</td><td>number</td><td>3</td><td>Cards visible at once.</td></tr>
                <tr><td>slideBy</td><td>number</td><td>3</td><td>Cards to move per slide.</td></tr>
                <tr><td>showDots</td><td>boolean</td><td>false</td><td>Enable pagination dots.</td></tr>
                <tr><td>buttonThemeOverride</td><td>string</td><td>undefined</td><td>Force a single button theme for all cards.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <CardRow
              items={[
                { imageUrl:'https://picsum.photos/seed/a/800/450', eyebrow:'Guide', heading:'Styling', body:'Swap tokens.', button:{label:'Open', href:'#', theme:'btn-primary', size:'btn--s'} },
                { imageUrl:'https://picsum.photos/seed/b/800/450', eyebrow:'Case', heading:'Perf wins', body:'Optimize LCP.', button:{label:'Read', href:'#', theme:'btn-secondary', size:'btn--s'} },
                { imageUrl:'https://picsum.photos/seed/c/800/450', eyebrow:'Blog', heading:'Tokens', body:'Motion & spacing.', button:{label:'Post', href:'#', theme:'btn-secondary--outline', size:'btn--s'} },
              ]}
              perPage={3}
              slideBy={3}
              showDots
              buttonThemeOverride="btn-secondary"
            />
          </div>
        </div>
      </section>

      {/* CARD GRID */}
      <section id="cardgrid" className="py-12">
        <div className="container">
          <h2 className="heading mb-2">CardGrid</h2>
          <div className="body mb-4">Responsive grid with initial/step/max and an optional Load More.</div>

          <div className="box bg-off-white mb-4">
            <div className="subheading--s">Props</div>
            <table className="body" style={{width:'100%'}}>
              <thead><tr><th align="left">Prop</th><th align="left">Type</th><th align="left">Default</th><th align="left">Notes</th></tr></thead>
              <tbody>
                <tr><td>items</td><td>{`Array<CardProps>`}</td><td>[]</td><td>Cards to render.</td></tr>
                <tr><td>initial</td><td>number</td><td>6</td><td>Cards shown initially.</td></tr>
                <tr><td>step</td><td>number</td><td>3</td><td>Cards added per click.</td></tr>
                <tr><td>max</td><td>number</td><td>Infinity</td><td>Hard cap on items shown.</td></tr>
                <tr><td>showLoadMore</td><td>boolean</td><td>true</td><td>Toggle the Load More button.</td></tr>
                <tr><td>align</td><td>'left' | 'center'</td><td>'left'</td><td>Grid alignment.</td></tr>
                <tr><td>buttonThemeOverride</td><td>string</td><td>undefined</td><td>Force a single button theme for all cards.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <CardGrid
              items={[
                { imageUrl:'https://picsum.photos/seed/1/800/450', eyebrow:'Release', heading:'v1.0', body:'Polished defaults.', button:{label:'Read', href:'#', theme:'btn-primary', size:'btn--s'} },
                { imageUrl:'https://picsum.photos/seed/2/800/450', eyebrow:'Guide', heading:'Theming', body:'Swap colors/typography.', button:{label:'Open', href:'#', theme:'btn-secondary', size:'btn--s'} },
                { imageUrl:'https://picsum.photos/seed/3/800/450', eyebrow:'Case', heading:'Perf', body:'LCP & fonts.', button:{label:'View', href:'#', theme:'btn-primary--outline', size:'btn--s'} },
              ]}
              initial={3}
              step={3}
              max={9}
              showLoadMore={false}
              align="center"
              buttonThemeOverride="btn-primary--outline"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container text-center">
          <a className="button btn btn-primary" href="/components-library">Open the Components Library</a>
        </div>
      </section>

      <Footer {...footerData} />
    </main>
  );
}
