import {Link} from 'react-router-dom';
import Page from '../../components/page';

function NotFoundPage() {
  return (
    <Page className="page" title="6 cities: page not found">
      <main className="page__main" style={{minHeight: '100vh'}}>
        <div className="container">
          <h1>404</h1>
          <p>Page not found &#9785;. <br/> Places to stay were also not found.</p>
          <Link to='/' className='form__submit button'>Go back to the homepage</Link>
        </div>
      </main>
    </Page>
  );
}
export default NotFoundPage;

