import { Paper } from '@material-ui/core';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import useStyles from './Detail.styles';

function Detail() {
  const classes = useStyles();
  const post_detail = useSelector((state) => state.post_detail);

  return (
    <main className={classes.postDetail}>
      <div className={classes.postDetail_spacer} />
      {post_detail && (
        <Paper className={classes.postDetail_content}>
          <h1 className={classes.postDetail_content_title}>
            {post_detail.data.title}
          </h1>
          {post_detail.data.post_hint === 'hosted:video' && (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video autoPlay>
              <source
                src={post_detail.data.media.reddit_video.fallback_url}
                type="video/mp4"
              />
            </video>
          )}
          {post_detail.data.post_hint === 'image' && (
            <img
              className={classes.postDetail_content_image}
              alt={post_detail.data.title}
              src={post_detail.data.url}
            />
          )}
          {!post_detail.data.post_hint === 'hosted:video' &&
            !post_detail.data.post_hint === 'image' && (
              <Fragment>
                <img
                  className={classes.postDetail_content_image}
                  alt={post_detail.data.title}
                  src={post_detail.data.thumbnail}
                />
                <a href={post_detail.data.url}>{post_detail.data.url}</a>
              </Fragment>
            )}
          {post_detail.data.selftext && (
            <Fragment>
              <p>{post_detail.data.selftext}</p>
            </Fragment>
          )}
        </Paper>
      )}
    </main>
  );
}

export default Detail;
