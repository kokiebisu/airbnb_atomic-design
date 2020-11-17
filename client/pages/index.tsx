import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* contents */
import { categories, anywhere } from '../content';

/* context */
import { useToggleState } from '../context/toggle';

/* styles */
import index from '../styles/index.module.scss';
import layout from '../styles/layout.module.scss';
import space from '../styles/space.module.scss';
import color from '../styles/color.module.scss';
import shape from '../styles/shape.module.scss';
import font from '../styles/font.module.scss';

/* data */
import { nearby } from '../data/stays';

/* layout */
import { Layout } from '../layout/layout.component';

/* components */
import { Animation } from '../components/animation/animation.component';
import { Modal } from '../components/organisms/modal/modal.component';
import { Header } from '../components/organisms/header/header.component';
import { Section } from '../components/organisms/section/section.component';
import { Footer } from '../components/organisms/footer/footer.component';
import { MenuBar } from '../components/organisms/menubar/menubar.component';
import { Banner } from '../components/organisms/banner/banner.component';

/* hooks */
import { useHandleScroll } from '../hooks/useHandleScroll';
import { useHandleDocumentResize } from '../hooks/useHandleDocumentResize';
import { useTimeout } from '../hooks/useTimeout';

/**
 * Renders /
 */
const CovidNotice = () => {
  return (
    <aside
      className={[
        font['size--14'],
        color['bg--white__1'],
        layout['text-center'],
        space['p-v--20'],
        space['p-h--24'],
        layout['z--9999'],
      ].join(' ')}>
      <a href=''>
        <u>Get the latest on our COVID-19 response</u>
      </a>
    </aside>
  );
};

const LandingPage: () => string | JSX.Element = () => {
  const loading = useTimeout(3000);
  const toggleState = useToggleState();
  const scrollPosition = useHandleScroll();
  const pageHeight = useHandleDocumentResize();

  return (
    <div
      style={{ overflowX: 'hidden' }}
      className={[layout['relative'], shape['min-h--fullv']].join(' ')}>
      <div>
        <CovidNotice />
        <Banner type='landing' />
        {loading ? (
          <>
            <Layout type='section' sectionType='landing' spread>
              <Section type='nearby' items={nearby} />
            </Layout>
            <Layout
              type='section'
              sectionType='landing'
              title='Live anywhere'
              spread>
              <Section type='category' items={anywhere} />
            </Layout>
            <div className={space['m-v--32']}></div>
            <Layout
              dark
              spread
              sectionType='landing'
              type='section'
              title='Meet Online Experiences'
              subtitle='Interactive activities you can do together, led by expert hosts.'>
              <Section type='online' sectionType='landing' dark />
            </Layout>
            <Layout
              sectionType='landing'
              spread
              type='section'
              title='Join millions of hosts on Airbnb'>
              <Section
                type='category'
                sectionType='landing'
                items={categories}
              />
            </Layout>
            <Layout
              sectionType='landing'
              spread
              type='section'
              title='Destinations for future trips'>
              <Section type='destinations' sectionType='landing' />
            </Layout>
          </>
        ) : (
          <div
            className={[
              space['m-t--22'],
              layout['flex'],
              layout['items-center'],
              layout['justify-center'],
            ].join(' ')}>
            <Animation type='loading' />
          </div>
        )}
        <Footer spread />
        <Modal
          extendsTo={[
            layout['fb--0'],
            layout['z--9999'],
            layout['block'],
            index['modal__privacy'],
            index['m__privacy'],
          ].join(' ')}
          type='privacy'
          criteria={toggleState.privacy}
        />
        <AnimatePresence>
          {scrollPosition > 56 && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: 'fixed',
                top: 0,
                zIndex: 99999,
                width: '100%',
              }}>
              <Header spread type='white' />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {scrollPosition < pageHeight && (
            <motion.div
              animate={{ y: 0 }}
              exit={{ y: 60 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className={index['none__menubar']}>
              <div
                className={[layout['fixed'], shape['w--full']].join(' ')}
                style={{ zIndex: 30, bottom: 0 }}>
                <MenuBar extendsTo={[color['b-t--white__2']].join(' ')} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {toggleState.auth && (
          <div
            style={{
              position: 'fixed',
              zIndex: 9999,
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}>
            <Modal
              extendsTo={[index['modal__auth'], shape['h--100v'], index].join(
                ' '
              )}
              type='auth'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
