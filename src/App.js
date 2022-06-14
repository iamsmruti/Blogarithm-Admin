import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { createTheme, ThemeProvider} from '@mui/material'

import Home from './pages/Home';
import Layout from './components/Layout';
import { deepPurple, red } from '@mui/material/colors';
import Login from './pages/Login';

import Authors from './components/Authors'
import CreateNewPost from './pages/CreateNewPost';
import MyPosts from './pages/MyPosts';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import ViewAll from './pages/ViewAll';
import Profile from './pages/Profile';
import CreateNewUser from './pages/CreateNewUser';

const theme = createTheme({
  palette:{
    primary: deepPurple, 
    secondary: red
},
typography: {
  fontFamily: 'Quicksand',
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700
}
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
              <Route exact path='/login' element={<Login />} />
              <Route element={<Authors />}>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/view-all' element={<ViewAll />} />
                <Route exact path='/create-post' element={<CreateNewPost />} />
                <Route exact path='/create-user' element={<CreateNewUser />} />
                <Route exact path='/my-posts' element={<MyPosts />} />
                <Route exact path='/users' element={<Users />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/user/:id' element={<UserDetails />} />
              </Route>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
