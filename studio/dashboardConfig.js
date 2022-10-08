export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6341abc1fc86575cf416d780',
                  title: 'Sanity Studio',
                  name: 'mindblowing-software-studio',
                  apiId: '3c90a39f-2098-453f-ae6b-147df69e545a'
                },
                {
                  buildHookId: '6341abc1ccdf945e7c341b14',
                  title: 'Blog Website',
                  name: 'mindblowing-software',
                  apiId: 'cd101eb8-dd6c-43d7-9ad9-1692146d92ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slickjurgen/mindblowing-software',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mindblowing-software.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
