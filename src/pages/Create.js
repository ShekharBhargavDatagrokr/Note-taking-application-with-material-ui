import React, {useState} from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop:20,
    marginBottom:20,
    display: 'block'
  }
})

export default function Create() {
  const history = useHistory()
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailError, setDetailError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) =>{
    e.preventDefault()
    setTitleError(false)
    setDetailError(false)

    if(title == ''){
      setTitleError(true)
    }
    if(detail == ''){
      setDetailError(true)
    }
    if (title && detail){
      fetch(' http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({title, detail, category})
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>
      <Typography  
      variant='h4' 
      color='secondary' 
      align ='center' 
      >
      Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <TextField
        onChange={(e)=>setTitle(e.target.value)}
        className={classes.field}
        label='Note title'
        variant='outlined'
        color='primary'
        fullWidth
        required 
        error={titleError}
        />

        <TextField
        className={classes.field}
        onChange={(e)=>setDetail(e.target.value)}
        label='Details'
        variant='outlined'
        color='primary'
        fullWidth
        multiline
        minRows={4}
        required 
        error={detailError}
        />

        <FormControl className={classes.field}>
        <FormLabel>Select Category of Note</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money"/>
            <FormControlLabel value="todos" control={<Radio />} label="Todos"/>
            <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
            <FormControlLabel value="work" control={<Radio/>} label="Work"/>
          </RadioGroup>
        </FormControl>

        <br /><br />

        <Button 
        type='submit' 
        align='center'
        variant='contained' 
        color ='secondary'
        endIcon={<ArrowCircleUpIcon />}
        >Submit</Button>
        </form>
    </Container>
  )
}
