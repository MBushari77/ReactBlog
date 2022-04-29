import useFetch from "../logic/useFetch";
import BlogsList from "./BlogsList";


const Home = () => {

	const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs');

	return (
		<>
			<BlogsList blogs={ blogs} pending={ pending } error={ error } />
		</>
	)
};

export default Home;
