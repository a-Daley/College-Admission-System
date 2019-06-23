import React from 'react'
import {
  Card,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  makeStyles,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const ProfilePage = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    age: 0,
    gender: '',
    collegeTier: ''
  })

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0)

  //   React.useEffect(() => {
  //     setLabelWidth(inputLabel.current.offsetWidth);
  //   }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(values)
  }

  return (
    <Card>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="age-required">Age</InputLabel>
          <Select
            value={values.age}
            onChange={handleChange}
            name="age"
            inputProps={{id: 'age-required'}}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="gender-required">Gender</InputLabel>
          <Select
            value={values.gender}
            onChange={handleChange}
            name="gender"
            inputProps={{
              id: 'gender-required'
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={`${classes.formControl} content`}>
          <InputLabel htmlFor="collegeTier-required">
            College Ranking
          </InputLabel>
          <Select
            value={values.collegeTier}
            onChange={handleChange}
            name="collegeTier"
            inputProps={{
              id: 'collegeTier-required'
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={5}>Top 5</MenuItem>
            <MenuItem value={10}>Top 50</MenuItem>
            <MenuItem value={100}>Top 100</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}

export default ProfilePage
