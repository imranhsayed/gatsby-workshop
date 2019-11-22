
const blogTemplate = require.resolve('../src/templates/posts/blog-template');

const GET_POSTS = `
  query GET_POSTS {
    wpgraphql {
      posts{
          nodes {
              uri
                  id
			    postId
			    title
			    excerpt
			    content
          }
      }
  }
  }
`;


/**
 * Array to store allPosts. We make paginated requests
 * to WordPress to get allPosts, and once we have all posts,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPosts = [];

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql }) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions;

  const fetchPosts = async () => {
    /**
     * Fetch posts using the GET_POSTS query and the variables passed in.
     */
    return await graphql(GET_POSTS).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        wpgraphql: {
          posts: {
            nodes,
          },
        },
      } = data;

      /**
       * Define the path for the paginated blog page.
       * This is the url the page will live at
       * @type {string}
       */
      const blogPagePath = '/';

      /**
       * The IDs of the posts which were got from GraphQL.
       */
      const nodeIds = nodes.map(node => node.postId);

      /**
       * Add config for the blogPage to the blogPage array
       * for creating later
       *
       * @type {{path: string, component: string, context: {nodes: *, pageNumber: number, hasNextPage: *}}}
       */
      blogPage = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          nodes,
        },
      };

      /**
       * Map over the posts for later creation
       */
      nodes &&
        nodes.map(post => {
          allPosts.push(post)
        })

      /**
       * Once we're done, return all the posts
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allPosts
    })
  }

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual post pages
   * and paginated blogroll archive pages.
   */
  await fetchPosts().then(allPosts => {

    /**
     * Map over the `blogPages` array to create the
     * paginated blogroll pages
     */
        createPage(blogPage)
  })
}
