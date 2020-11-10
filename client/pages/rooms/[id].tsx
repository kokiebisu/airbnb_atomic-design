import * as React from 'react';

import { Header } from '../../components/organisms/header/header.component';
import { Footer } from '../../components/organisms/footer/footer.component';

import layout from '../../styles/layout.module.scss';
import details from '../../styles/details.module.scss';
import staysDetail from '../../styles/staysDetail.module.scss';
import color from '../../styles/color.module.scss';
import shape from '../../styles/shape.module.scss';
import space from '../../styles/space.module.scss';
import { Section } from '../../components/organisms/section/section.component';
import { Card } from '../../components/atoms/card/card.component';
import { Modal } from 'components/organisms/modal/modal.component';
import { useToggleState } from 'context/toggle';

const id: () => string | JSX.Element = () => {
  const toggleState = useToggleState();
  return (
    <>
      <div>
        <div style={{ position: 'relative', zIndex: 9000 }}>
          <Header extendsTo={[details['w__wrapper']].join(' ')} type='white' />
        </div>
        <div className={[].join(' ')}>
          <Section
            extendsTo={[staysDetail['flex__panel']].join(' ')}
            type='panel'
          />
        </div>
        <div
          className={[layout['container'], staysDetail['m__content']].join(
            ' '
          )}>
          <div className={[details['flex__details']].join(' ')}>
            <div className={[details['w__details--left']].join(' ')}>
              <Section
                layoutType='room'
                extendsTo={[staysDetail['b__characteristics']].join(' ')}
                type='characteristics'
                characteristics={[
                  'house',
                  'sparkle',
                  'door',
                  'calendar',
                  'guidelines',
                ]}
              />
              <Section
                type='description'
                extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
              />
              <Section
                extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
                type='arrangements'
                title='Sleeping arrangements'
              />
              <Section
                extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
                type='amenities'
                title='Amenities'
              />
            </div>
            <div
              style={{ paddingTop: 20, paddingBottom: 56 }}
              className={[details['w__details--right']].join(' ')}>
              <Card
                type='checkin'
                extendsTo={[
                  layout['flex'],
                  layout['justify-end'],
                  layout['sticky'],
                  layout['t--78'],
                ].join(' ')}
              />
            </div>
          </div>
          <Section
            extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
            type='reviews'
          />
          <Section
            extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
            type='host'
          />
          <Section
            extendsTo={[color['b-t--white__2'], space['p-v--32']].join(' ')}
            type='know'
          />
        </div>
        <Section
          extendsTo={[
            color['b-t--white__2'],
            space['p-v--32'],
            color['bg--white__1'],
          ].join(' ')}
          type='other'
        />
        <Footer />
        <div
          className={[
            staysDetail['display__availability'],
            shape['w--full'],
          ].join(' ')}
          style={{ position: 'fixed', bottom: 0, zIndex: 9999 }}>
          <Modal type='availability' />
        </div>
      </div>
      {toggleState.auth && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            zIndex: 9999,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <Modal
            extendsTo={[
              layout['flex'],
              layout['justify-center'],
              layout['items-center'],
              shape['h--100v'],
            ].join(' ')}
            type='auth'
          />
        </div>
      )}
    </>
  );
};

export default id;
