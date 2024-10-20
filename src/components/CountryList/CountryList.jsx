import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(country => {
        return (
          <GridItem key={country.id}>
            <Link state={location} to={`/country/${country.id}`}>
              <img src={country.flag} alt={country.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
