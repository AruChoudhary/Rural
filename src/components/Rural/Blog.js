import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './BlogDir/Header';
import MainFeaturedPost from './BlogDir/MainFeaturedPost';
import FeaturedPost from './BlogDir/FeaturedPost';
import Main from './BlogDir/Main';
import Sidebar from './BlogDir/Sidebar';
import Footer from './BlogDir/Footer';
import post1 from './BlogDir/blog-post.1.md';
import post2 from './BlogDir/blog-post.2.md';
import post3 from './BlogDir/blog-post.3.md';

/*fetch(post1)
  .then(response => response.text())
  .then(text => {
    // Logs a string of Markdown content.
    // Now you could use e.g. <rexxars/react-markdown> to render it.
    console.log(text);
  });*/

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Title Story" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Placeholder Footer" />
    </React.Fragment>
  );
}