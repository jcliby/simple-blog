import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import Welcome from './components/Welcome';
import PostPreviewList from './components/PostPreviewList';
import Footer from './components/Footer';
import Post from './components/Post';

class App extends Component {
  state = {
    selectedId: ''
  };

  handlePostClick = id => {
    this.setState({ selectedId: id });
  };

  render() {
    const { selectedId } = this.state;

    return (
      <Router>
        <div>
          <Welcome />
          <Switch>
            <Route path="/post/:id">
              <Post post={tempData[selectedId]} />
            </Route>
            <Route path="/">
              <PostPreviewList
                posts={tempData}
                onClick={this.handlePostClick}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

const tempData = [
  {
    id: '1',
    title: 'Post Title',
    date: 1585506458489,
    content:
      '<p>Lorem ipsum dolor sit amet, alterum explicari ius an, paulo clita cum cu. Tation prodesset has ei. Ut mea errem civibus pericula, et deserunt scriptorem efficiantur sed. Bonorum lucilius definiebas eu mei. Eum accumsan repudiandae cu. Eam cu amet tollit.</p><p>Nostrum constituto in pro, et eos ridens iudicabit contentiones. Ei nulla debet epicurei has, his no alii senserit, mei ad diam velit offendit. Probo movet ceteros usu te. Populo feugiat sadipscing eu sea, id nec numquam aliquam officiis. An ipsum docendi moderatius vim.</p><p>Mucius dignissim at vis. Ei vim esse petentium, usu ei luptatum quaestio signiferumque. Ad aeque melius sea, usu solet eripuit appetere in. Ut vis graece apeirian, vix ex ludus moderatius, noluisse praesent no eos.</p><p>An erant graeci percipitur sit, est eu antiopam forensibus comprehensam. Sumo oratio nusquam at his, ad quot vivendo dignissim eam. At agam diceret suscipit vix, et vis commodo albucius disputando. Usu ei ludus maiestatis instructior, quidam nostro utroque vis ut. Cum docendi percipit cu. Quo wisi senserit tincidunt ne.</p>'
  },
  {
    id: '2',
    title: 'Post Title',
    date: 1585506458489,
    content:
      '<p>Lorem ipsum dolor sit amet, alterum explicari ius an, paulo clita cum cu. Tation prodesset has ei. Ut mea errem civibus pericula, et deserunt scriptorem efficiantur sed. Bonorum lucilius definiebas eu mei. Eum accumsan repudiandae cu. Eam cu amet tollit.</p><p>Nostrum constituto in pro, et eos ridens iudicabit contentiones. Ei nulla debet epicurei has, his no alii senserit, mei ad diam velit offendit. Probo movet ceteros usu te. Populo feugiat sadipscing eu sea, id nec numquam aliquam officiis. An ipsum docendi moderatius vim.</p><p>Mucius dignissim at vis. Ei vim esse petentium, usu ei luptatum quaestio signiferumque. Ad aeque melius sea, usu solet eripuit appetere in. Ut vis graece apeirian, vix ex ludus moderatius, noluisse praesent no eos.</p><p>An erant graeci percipitur sit, est eu antiopam forensibus comprehensam. Sumo oratio nusquam at his, ad quot vivendo dignissim eam. At agam diceret suscipit vix, et vis commodo albucius disputando. Usu ei ludus maiestatis instructior, quidam nostro utroque vis ut. Cum docendi percipit cu. Quo wisi senserit tincidunt ne.</p>'
  },
  {
    id: '3',
    title: 'Post Title',
    date: 1585506458489,
    content:
      '<p>Lorem ipsum dolor sit amet, alterum explicari ius an, paulo clita cum cu. Tation prodesset has ei. Ut mea errem civibus pericula, et deserunt scriptorem efficiantur sed. Bonorum lucilius definiebas eu mei. Eum accumsan repudiandae cu. Eam cu amet tollit.</p><p>Nostrum constituto in pro, et eos ridens iudicabit contentiones. Ei nulla debet epicurei has, his no alii senserit, mei ad diam velit offendit. Probo movet ceteros usu te. Populo feugiat sadipscing eu sea, id nec numquam aliquam officiis. An ipsum docendi moderatius vim.</p><p>Mucius dignissim at vis. Ei vim esse petentium, usu ei luptatum quaestio signiferumque. Ad aeque melius sea, usu solet eripuit appetere in. Ut vis graece apeirian, vix ex ludus moderatius, noluisse praesent no eos.</p><p>An erant graeci percipitur sit, est eu antiopam forensibus comprehensam. Sumo oratio nusquam at his, ad quot vivendo dignissim eam. At agam diceret suscipit vix, et vis commodo albucius disputando. Usu ei ludus maiestatis instructior, quidam nostro utroque vis ut. Cum docendi percipit cu. Quo wisi senserit tincidunt ne.</p>'
  }
];
