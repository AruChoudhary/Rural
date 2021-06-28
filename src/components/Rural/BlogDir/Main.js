import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;
  //console.log(props);

const str = '<div style="text-align: justify;"># Terracotta Artisans of Panchmura\n#### June 2021 by [404 Found!](/)\n\n###The scourge of the coronavirus had all but halted the march of an ancient art form practiced exclusively in a small village in West Bengal. The kumbhakars or potters in the Panchmura village of Bishnupur in Bankura district are less than a hundred families today. These men and women have carried on their robust shoulders the 1,000-year heritage of making terracotta products — mainly horse figurines or tiles made of baked earth. But the virus has played havoc with the livelihood in this village. The crackling sound of slow-roasted or fired clay is silent today as products have become hard to sell. Covid cases in the village have meant that the artists have had to find other jobs to pay for medical expenses, with several craftsmen being forced to abandon their art.\n<img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/28/Pictures/_79ae4d7c-6235-11e8-b5ac-da6b7874835f.jpg" width="640" height="400" />\n\n#Problems with government help\n###Local Governmental bodies have focused more on healthcare services, being unable to direct significant resources to support the economic needs of the craftsmen. They are encouraging the villagers to go online and set up an online market for their products. Villagers, however, are flummoxed at the very prospect of going online. Poor Internet penetration, problems of packaging and transportation are just some examples of issues the artisans face.\n![Picture 1](https://i.ibb.co/xX7sY2W/Picture2.png)\n\n#Role of \'A New Hope\'\n###This is where \'A New Hope\' comes in. We have partnered with village heads and the honorable district collector to provide online marketing solutions to the local people of Panchmura. With our extensive online reach to consumers all over India, \'A New Hope\' has been able to provide a solid platform to the artisans to sell their craft. We have been helping the artisans overcome the initial shock of going online and adapt to the digital marketing landscape. While the pandemic is not going anywhere soon, working together can help in mitigating the pain. Head over to our store if Panchmura’s beautiful terracotta figurines interest you. You will not only be decorating your home but also be helping in keeping a 1000 year tradition alive.</div>'

  return (

    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
        <Markdown options={{ wrapper: 'article' }}>
          {str}
        </Markdown>
    </Grid>
  );
}



Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};