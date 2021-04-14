import * as React from 'react';

class SocialMediaFeed extends React.Component<any, any> {
  componentDidMount() {
    let script = document.createElement('script');
    script.setAttribute('src', 'https://www.powr.io/powr.js?platform=react');
    script.src = 'https://www.powr.io/powr.js?platform=react';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  render() {
    return <div className="powr-instagram-feed" id="2c6cfa4f_1617477419"></div>;
  }
}

export default SocialMediaFeed;
