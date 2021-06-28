import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './BlogDir/MainFeaturedPost';
import FeaturedPost from './BlogDir/FeaturedPost';
import Main from './BlogDir/Main';
import Sidebar from './BlogDir/Sidebar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'SUPPORT THE MAKERS',
  description:
    "When You Support Handmade, You Are Not Just Supporting a Person, Small Business, Family, Our Economy; YOU Are Purchasing a Small Part of an ARTIST'S HEART.",
  image: 'https://images.pexels.com/photos/3182439/pexels-photo-3182439.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Meenakari',
    date: 'June 28',
    description:
      'Rajasthan is also known for the exquisite craft of Meenakari, an ancient form of metal ornamentation. Coloured minerals in an array of dazzling shades are fused to metal carved in intricate designs. Originally a technique devised by the Iranians, Indian craftsmen acquired the skill from the Mongols who spread the craft to the Indian subcontinent.',
    image: 'https://images.unsplash.com/photo-1586334465687-b948bc3368be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhamFzdGhhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    
  },
  {
    title: 'Warli',
    date: 'Nov 11',
    description:
      'One art form that has gained visibility over the years is Warli. There is evidence that the Warli tribe, which resides in the coastal belt straddling Maharashtra and Gujarat, began practising this art around 3000 BCE. Warli is protected under Geographical Indication, a measure used to assign a technique to a particular region.',
    image: 'https://images.unsplash.com/photo-1621870536986-151d03e2e99a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FybGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    
  },
];


const sidebar = {
  title: 'About',
  description:
    'An effort to connect consumers directly to the source of the products they consume and their producers. Get to know the stories behind the scene.',
  archives: [
    { title: 'March 2021', url: '#' },
    { title: 'February 2021', url: '#' },
    { title: 'January 2021', url: '#' },
    { title: 'November 2020', url: '#' },
    { title: 'October 2020', url: '#' },
    { title: 'September 2020', url: '#' },
    { title: 'August 2020', url: '#' },
    { title: 'July 2020', url: '#' },
    { title: 'June 2021', url: '#' },
    { title: 'May 2021', url: '#' },
    { title: 'April 2021', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
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
            {featuredPosts.map((post, index) => (
              <FeaturedPost key={index} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Most Viewed Post"  />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}