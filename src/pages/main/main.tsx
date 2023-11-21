import Page from '../../components/page';
import {Locations} from '../../const';
import LocationsList from './locationsLlist';
import Cities from './cities';
import {selectCity, useAppSelector} from '../../store/hooks';


function Main() {
  const selectedCityName = useAppSelector(selectCity);
  return (
    <Page className="page page--gray page--main" title="6 cities">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={Locations} selectedCityName={selectedCityName}></LocationsList>
          </section>
        </div>
        <Cities />
      </main>
    </Page>
  );
}

export default Main;
