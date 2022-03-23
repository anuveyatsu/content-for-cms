export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'anuveyatsu/content-for-cms',
      branch: 'main',
      base_url: 'https://netlify-cms-oauth-swart.vercel.app',
      site_url: 'https://netlify-cms-demo-ebon.vercel.app'
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        label_singular: 'Page',
        description: 'Static pages, e.g., About page.',
        files: [
          {
            label: 'About',
            name: 'about',
            file: 'content/pages/about.md',
            fields: [
              {label: 'Title', name: 'title', widget: 'string'},
              {label: 'Publish Date', name: 'date', widget: 'datetime'},
              {label: 'Featured Image', name: 'thumbnail', widget: 'image'},
              {label: 'Body', name: 'body', widget: 'markdown'}
            ]
          },
        ],
      },
      {
        name: 'blog',
        label: 'Blog',
        description: 'Blog posts.',
        folder: 'content/blog',
        create: true,
        fields: [
          {label: 'Title', name: 'title', widget: 'string'},
          {label: 'Publish Date', name: 'date', widget: 'datetime'},
          {label: 'Featured Image', name: 'thumbnail', widget: 'image'},
          {label: 'Body', name: 'body', widget: 'markdown'}
        ]
      },
    ],
  };