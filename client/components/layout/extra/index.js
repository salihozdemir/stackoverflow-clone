import React, { useContext } from 'react'
import AdSense from 'react-adsense'

import { TagContext } from '../../../store/tag'

import Tag from '../../tag'
import { Spinner } from '../../icons'

import styles from './extra.module.css'

const Extra = ({ marginTop = 24 }) => {
  const { tagState } = useContext(TagContext)

  return (
    <div className={styles.container}>
      <div
        className={styles.tagContainer}
        style={{ marginTop: `${marginTop}px` }}
      >
        <h2>Popular Tags</h2>
        {!tagState && (
          <div className="loading">
            <Spinner />
          </div>
        )}
        <div className={styles.popularTags}>
          {tagState?.map((tag) => (
            <Tag key={tag._id} count={tag.count}>
              {tag._id}
            </Tag>
          ))}
        </div>
        <br />
        <AdSense.Google
          client="pub-6334314630314298"
          slot="9982692432"
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
          layoutKey="-gw-1+2a-9x+5c"
        />
      </div>
    </div>
  )
}

export default Extra
