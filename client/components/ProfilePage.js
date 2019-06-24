import React from 'react'
import {getStats} from '../store/user-stats'
import {connect} from 'react-redux'
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

const ProfilePage = props => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    age: 0,
    gender: '',
    race: '',
    collegeTier: '',
    incomeLevel: ''
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
    props.setStats(values)
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
            <MenuItem value="20">"20 - 29"</MenuItem>
            <MenuItem value="30">"30 - 39"</MenuItem>
            <MenuItem value="40">"40 - 49"</MenuItem>
            <MenuItem value="50">"50 - 59"</MenuItem>
            <MenuItem value="60">"60 - 69"</MenuItem>
            <MenuItem value="70">"70 - 79"</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="race-required">Race</InputLabel>
          <Select
            value={values.race}
            onChange={handleChange}
            name="race"
            inputProps={{id: 'race-required'}}
            className={classes.selectEmpty}
          >
            <MenuItem value="African-American">Black/African-American</MenuItem>
            <MenuItem value="White">White/Caucasian</MenuItem>
            <MenuItem value="Asian-American">
              Pacific Islander/Asian-American
            </MenuItem>
            <MenuItem value="Asian-American">Native American</MenuItem>
            <MenuItem value="Hispanic/Latino">Hispanic/Latino</MenuItem>
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
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={`${classes.formControl} content`}>
          <InputLabel htmlFor="collegeTier-required">
            Type of College
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
            <MenuItem value="elite college">Elite Private College</MenuItem>
            <MenuItem value="state university">"state university"</MenuItem>
            <MenuItem value="community college">"community college"</MenuItem>
            <MenuItem value="online college">"online college"</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl required className={`${classes.formControl} content`}>
          <InputLabel htmlFor="incomeLevel-required">
            Parents' Income
          </InputLabel>
          <Select
            value={values.incomeLevel}
            onChange={handleChange}
            name="incomeLevel"
            inputProps={{
              id: 'incomeLevel-required'
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="lower">Lower</MenuItem>
            <MenuItem value="middle">Middle Class</MenuItem>
            <MenuItem value="upper">Upper Class</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}

const mapDispatchToProps = dispatch => ({
  setStats: stats => dispatch(getStats(stats))
})

export default connect(null, mapDispatchToProps)(ProfilePage)
