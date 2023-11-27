import {SortingParameters} from '../../const';
import {useEffect, useState} from 'react';
import {OfferPreviewType} from '../../types/offers-preview';
import {selectCityName, useAppSelector} from '../../store/hooks';

type Props = {
  sortedOffers: OfferPreviewType[];
  setSortedOffers: (sortedOffers: OfferPreviewType[]) => void;
  getDefaultOrderSortedOffers: () => OfferPreviewType[];
}

function SortingForm({sortedOffers, setSortedOffers, getDefaultOrderSortedOffers}: Props) {
  const selectedCity = useAppSelector(selectCityName);
  const [sortingParameter, setSortingParameter] = useState<SortingParameters>(SortingParameters.Default);

  useEffect(() => {
    setSortingParameter(SortingParameters.Default);
  }, [selectedCity]);

  const sortByParameter = (parameter: SortingParameters) => {
    setSortingParameter(parameter);
    switch (parameter) {
      case SortingParameters.PriceHighToLow:
        sortedOffers = [...sortedOffers].sort((a, b) => b.price - a.price);
        break;
      case SortingParameters.PriceLowToHigh:
        sortedOffers = [...sortedOffers].sort((a, b) => a.price - b.price);
        break;
      case SortingParameters.Top:
        sortedOffers = [...sortedOffers].sort((a, b) => a.rating - b.rating);
        break;
      default:
        sortedOffers = getDefaultOrderSortedOffers();
    }
    setSortedOffers(sortedOffers);
  };
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
        {sortingParameter}
        <svg className="places__sorting-arrow" width={7} height={4}><use xlinkHref="#icon-arrow-select" /></svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        {Object.values(SortingParameters).map((item) => (
          <li
            className={`places__option ${sortingParameter === item && 'places__option--active'}`}
            tabIndex={0}
            key={item}
            onClick={
              () => {
                sortByParameter(item as SortingParameters);
                handleClick();
              }
            }
          >
            {item}
          </li>))}
      </ul>
    </form>
  );
}

export default SortingForm;
