import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { PostsList } from './features/posts/postsList'
import { AddPostForm } from './features/posts/AddPostsForm'
import { Navbar } from './app/Navbar'
import { SinglePostPage } from './features/posts/SinglePostsPage'
import { EditPostForm } from './features/posts/EditPostForm'
import {UsersList} from './features/users/UsersList'
import {UserPage} from './features/users/UserPage'
import {NotificationsList} from './features/notifications/notificationList'


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm/>
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/notifications" component={NotificationsList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
