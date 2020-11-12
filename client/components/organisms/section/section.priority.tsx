import { Layout } from '../../../layout/layout.component';
import React from 'react';
import { PrioritySectionProps } from './props';
import { Card } from '../../../components/atoms/card/card.component';
import space from '../../../styles/space.module.scss';

export const PrioritySection: React.FC<PrioritySectionProps> = () => {
  const priorities = ['protection', 'guidance', 'requirements'];
  return (
    <Layout type='section' sectionType='homes' title='Safety is our priority'>
      <div className={[space['m-t--16']].join(' ')}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: 12,
          }}
          className={[].join(' ')}>
          {priorities.map((priority, index) => {
            return (
              <div key={index}>
                <Card type='priority' priority={priority} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
