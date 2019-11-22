import React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/layout"

const BlogTemplate = ({ pageContext: { nodes } }) => {
	return (
		<Layout classNames="home blog hfeed">
			<h1>Blog</h1>
			<div id="blog">
				{
					nodes && nodes.map(post => {

						const { id, postId, title, content, excerpt, uri } = post;

						const maxLength = 240; // maximum number of characters to extract

						// getting the excerpt to a variable
						let excerptText = excerpt;

						// if excerpt does not exist
						if (!excerptText) {
							// getting the first 240 characters off content
							excerptText = content.substr(0, maxLength);

							// so that a word is not chopped off halfway
							excerptText = content
								.substr(0, Math.min(excerptText.length, excerptText.lastIndexOf(" ")))
								.concat("...")
						}

						return (
							<article
								className="post type-post status-publish format-standard hentry entry"
								data-id={id}
								id={`post-preview-${postId}`}
								key={postId}
							>
								<header className="entry-header">
									<Link to={`/blog/${uri}`} style={{ textDecoration: 'none' }}>
										<h2 dangerouslySetInnerHTML={{ __html: title }} />
									</Link>
								</header>
								<div
									className="entry-content"
									dangerouslySetInnerHTML={{
										__html: excerptText,
									}}
								/>
							</article>
						)
					})}
			</div>
		</Layout>
	)
};

export default BlogTemplate;
