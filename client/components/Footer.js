import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import {Card, CardContent, CardActions, Collapse} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {red} from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const Footer = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  function handleExpandClick() {
    setExpanded(!expanded)
  }
  return (
    <Card>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Typography variant="subtitle1">Methodology & Data</Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            The Atlantic, Does It Matter Where You Go to College ?
            "https://www.theatlantic.com/ideas/archive/2018/12/does-it-matter-where-you-go-college/577816/
          </Typography>
          <Typography paragraph>
            Emsi, 'How Your School Affects Where You Live' https:
            //www.economicmodeling.com/how-your-school-affects-where-you-live/
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export default Footer
