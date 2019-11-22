import React from "react";
import Layout from "../../components/layout";

const SinglePostTemplate = props => {
	const {
		      pageContext: { id, postId, title, content, excerpt, categories, tags, date }
	      } = props;

	const maxLength = 240 // maximum number of characters to extract

	// getting the excerpt to a variable
	let excerptText = excerpt

	// if excerpt does not exist
	if (!excerptText) {
		// getting the first 240 characters off content
		excerptText = content.substr(0, maxLength)

		// so that a word is not chopped off halfway
		excerptText = content
			.substr(0, Math.min(excerptText.length, excerptText.lastIndexOf(" ")))
			.concat("...")
	}

	return (
		<Layout classNames="blog">
			<article
				data-id={id}
				id={`post-${postId}`}
				className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
			>
				<header className="entry-header">
					<h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />
				</header>

				<div
					className="entry-content"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
				{/* .entry-content */}

				<footer className="entry-footer" />
			</article>
			{/* #post-${ID} */}
		</Layout>
	);
};

export default SinglePostTemplate;
