import React from 'react';
import { BuilderBlocks } from '@builder.io/react';
import styles from './styles.module.css';

const SideBySide = (props) => {
  console.log('Rendering SideBySide component with props:', props);
  const { builderBlock } = props;

  return (
    <div className={styles.container} {...props.attributes}>
      {builderBlock.component.options.left && (
        <div className={styles.left}>
          <BuilderBlocks
            parentElementId={builderBlock.id}
            dataPath="component.options.left"
            blocks={builderBlock.component.options.left}
          />
        </div>
      )}
      {builderBlock.component.options.right && (
        <div className={styles.right}>
          <BuilderBlocks
            parentElementId={builderBlock.id}
            dataPath="component.options.right"
            blocks={builderBlock.component.options.right}
          />
        </div>
      )}
    </div>
  );
};

export default SideBySide;
