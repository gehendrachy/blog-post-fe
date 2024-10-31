import React, { useEffect, useState } from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { fetchPost } from "../utils/axiosHelper";
import CommentComponent from "../components/CommentComponent";

const PostPage = () => {
	// Sample data for the article
	const [post, setPost] = useState({
		title: "",
		content: ``,
		author: "",
		date: "",
		image: "/blog1.jpg", // Placeholder image
	});

	const location = useLocation();

	console.log(2000,location);

	const queryParams = new URLSearchParams(location.search);
	const pid = queryParams.get("id");

	const getPost = async (postid) => {
		const response = await fetchPost(postid);
		if (response.status == "error") {
			setPost({});
		} else {
			setPost(response.data);
		}
	};

	useEffect(() => {
		getPost(pid);
	}, []);

	return (
		<>
			<Header />
			<Container className="mt-5">
				{/* Article Image with height restriction */}
				<Row>
					<Col>
						<Image
							src={post.image}
							alt="Article"
							fluid
							className="mb-4 rounded"
							style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
						/>
					</Col>
				</Row>

				{/* Title, Content, and Author Section */}
				<Row>
					<Col md={{ span: 8, offset: 2 }}>
						<h1 className="mb-3">{post.title}</h1>
						<hr />
						<p>{post.content}</p>
						<div className="author-info mt-4">
							<p>
								<strong>Written by:</strong> {post.author?.username}
							</p>
							<p>
								<small>{post.date}</small>
							</p>
						</div>
						<div className="mb-3">
							<strong for="exampleFormControlInput1" className="form-label">Comments</strong>

						</div>
						<CommentComponent/>
					</Col>
				</Row>
			</Container>

			<Footer />
		</>
	);
};

export default PostPage;
