/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ResponsiveImage } from '@nextbnb/packages/helper/img'

export const BannerTemplate = () => {
  return (
    <div css={{ position: 'relative', paddingTop: '40%', width: '100%' }}>
      <div css={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}>
        <div css={{ display: 'flex', height: '100%' }}>
          <div
            css={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div
              css={{
                marginBottom: 16
              }}
            >
              <h2 css={{ fontSize: 50 }}>Online Experiences</h2>
            </div>
            <div>
              <h4 css={{ fontSize: 18 }}>
                Find unique activities led by one-of-a-kind hosts—all without
                leaving home.
              </h4>
            </div>
          </div>
          <div
            css={{
              flex: 8
            }}
          >
            <ResponsiveImage
              largeImg="https://a0.muscache.com/im/pictures/a22b70e5-31e1-4f22-bc27-52e5fc8492a4.jpg"
              mediumImg="https://a0.muscache.com/im/pictures/a22b70e5-31e1-4f22-bc27-52e5fc8492a4.jpg"
              smallImg="https://a0.muscache.com/im/pictures/a22b70e5-31e1-4f22-bc27-52e5fc8492a4.jpg"
              styling={{ objectPosition: '85% 50%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
