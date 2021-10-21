module.exports = [{
  name: 'home',
  url: '/'
},
{
  name: 'about',
  url: '/about',
  subPages: [{
    name: 'about 1',
    url: '/about/about-1',
    subPages: [{
      name: 'about 1.1',
      url: '/about/about-1/child-1'
    }]
  }, {
    name: 'about 2',
    url: '/about/about-2',
  }, {
    name: 'about 3',
    url: '/about/about-3',
  }]
  }, {
    name: 'who',
    url: '/who'
  }, {
    name: 'what',
    url: '/what'
  }];
