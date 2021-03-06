import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import PostPreviewList from './components/PostPreviewList';
import Footer from './components/Footer';
import Post from './components/Post';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  state = {
    posts: [],
    id: ''
  };

  componentDidMount() {
    // TODO: Create API to pull in DATA
    this.setState({
      posts: tempData
    });
  }

  handleSelectId = id => {
    this.setState({
      id
    });
  };

  render() {
    const { posts, id } = this.state;

    return (
      <div>
        <ScrollToTop />
        <Welcome />
        <Switch>
          {/* TODO: Fix to allow user to navigate via URL */}
          <Route exact path="/post/:id">
            <Post post={posts.find(post => post.id === id)} />
          </Route>
          <Route path="/">
            <PostPreviewList posts={posts} onClick={this.handleSelectId} />
          </Route>
        </Switch>
        <Footer />
      </div>
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
