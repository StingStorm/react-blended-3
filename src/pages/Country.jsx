import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const goBack = useRef(location.state || '/');

  useEffect(() => {
    const fetchCountryHandled = async () => {
      try {
        setLoading(true);
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryHandled();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current} />
        {error && <Heading title={error} bottom />}
        {loading && <Loader />}
        <Heading title="SearchCountry" bottom />
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};

export default Country;
