import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './components/Layout';
const theme = createTheme({
  palette: {
    primary:{
      main:'#f3e5f5'
    },
    secondary:{
      main: '#800080'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
