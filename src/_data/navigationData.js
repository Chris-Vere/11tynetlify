const allPages = [{
  key: 'root',
  title: 'placeholder',
  pages: [{
    key: 'who',
    title: 'Who We Are',
    pages: [{
      key: 'philosophy',
      title: 'Our Philosophy',
      url: '/who-we-are/our-philosophy/',
    },
    {
      key: 'citizenship',
      title: 'Our Citizenship',
      url: '/who-we-are/our-citizenship/',
    },
    {
      key: 'team',
      title: 'Our Team',
      url: '/who-we-are/our-team/'
    }],
  }, {
    key: 'what',
    title: 'What We Do',
    pages: [{
      key: 'private-equity',
      title: 'Private Equity Services',
      url: '/what-we-do/private-equity-services/',
      isSectionHeading: true,
      pages: [{
        key: 'retained-acquisition',
        title: 'Retained Acquisition Services',
        url: '/what-we-do/private-equity-services/retained-acquisition/'
      }, {
        key: 'restructuring',
        title: 'Restructuring Services',
        url: '/what-we-do/private-equity-services/restructuring/'
      }, {
        key: 'interim-cxo-leadership',
        title: 'Interim CXO Leadership',
        url: '/what-we-do/private-equity-services/interim-cxo-leadership/'
      }],
    }, {
        key: 'corporate-services',
        title: 'Corporate Services',
        url: '/what-we-do/corporate-services/',
        isSectionHeading: true,
        pages: [{
          key: 'retained-acquisition',
          title: 'Retained Acquisition Services',
          url: '/what-we-do/corporate-services/retained-acquisition/'
        }, {
          key: 'financing-advisory',
          title: 'Financing Advisory',
          url: '/what-we-do/corporate-services/financing-advisory/'
        }, {
          key: 'strategic-advisory',
          title: 'Strategic Advisory',
          url: '/what-we-do/corporate-services/strategic-advisory/'
        }, {
          key: 'restructuring-advisory',
          title: 'Restructuring Advisory',
          url: '/what-we-do/corporate-services/restructuring-advisory/'
        }, {
          key: 'interim-cxo-leadership',
          title: 'Interim CXO Leadership',
          url: '/what-we-do/corporate-services/interim-cxo-leadership/'
        }],
      }, {
        key: 'executive-services',
        title: 'Executive Services',
        url: '/what-we-do/executive-services/',
        isSectionHeading: true,
        pages: [{
          key: 'retained-acquisition',
          title: 'Retained Acquisition',
          url: '/what-we-do/executive-services/retained-acquisition/'
        }],
      }],
    }, {
      key: 'resource-center',
      title: 'Resource Center',
      isAfterLogo: true,
      pages: [{
        key: 'events',
        title: 'Events',
        url: '/resource-center/events/',
      },
      {
        key: 'news',
        title: 'News and Publications',
        url: '/resource-center/news',
      },
      {
        key: 'thought-leadership',
        title: 'Thought Leadership',
        url: '/resource-center/thought-leadership'
      }],
    }, {
      key: 'contact',
      title: 'Contact',
      url: '/contact/',
      isAfterLogo: true,
    }
  ],
}];

function resolvePath(keys, pagesCollection) {
  const [filtered] = pagesCollection.filter(page => page.key === keys[0]);

  return keys.length > 1
    ? resolvePath(keys.slice(1), filtered.pages)
    : filtered;
}

module.exports = {
  getNav: function (navStructure) {
    const keys = navStructure.split('.');
    const resolved = resolvePath(keys, allPages);
    return resolved;
  },
  
  logNav: function (navData) {
    console.log('navData', navData);
  }
}
