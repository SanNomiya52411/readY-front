import { Link } from "react-router-dom";
import Header from '../modules/header.jsx'
import Button from '@mui/material/Button';
import Result from '../modules/result.jsx'

function SearchResult() {
	return (
		<div className="SearchResult">
			<Header searchBox placeholder="書籍検索">
			<Button color="inherit" size="large" to="/mypage" component={Link}>マイページへ</Button>
			</Header>
            <Result />
		</div>
	)
}

export default SearchResult